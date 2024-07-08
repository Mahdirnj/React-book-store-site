// server.js
const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const con = mysql2.createConnection({
    user: "root",
    host: "localhost",
    password: "Mahdi1380",
    database: "bookstore",
    dateStrings: true
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const sql = "SELECT * FROM users WHERE Email = ? AND Password = ?";
    con.query(sql, [username, password], (err, result) => {
        if (err) return res.status(500).json({ error: 'Internal server error' });
        if (result.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

        const user = result[0];
        delete user.Password;
        res.json(user);
    });
});

//  add a new book
app.post('/books', (req, res) => {
    const { title, isbn, author, publisher, category, qty, price, imageUrl, minQty } = req.body;

    const sql = `
        INSERT INTO book (ISBN, Title, Category, Stock, MinStock, Price, Publisher, BookURL, Author)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    con.query(sql, [isbn, title, category, qty, minQty, price, publisher, imageUrl, author], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json({ message: 'Book added successfully', bookId: result.insertId });
    });
});

//  filter books by category
app.get('/books', (req, res) => {
    const { category } = req.query;
    let sql = "SELECT ISBN, Title, Category, Price, Publisher, BookURL, Author FROM book";

    if (category && category !== 'All Books') {
        sql += " WHERE Category = ?";
    }

    con.query(sql, [category], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(results);
    });
});

// handle book purchases
app.post('/orders', (req, res) => {
    const { BookISBN, OrderState, Quantity, UserID, TotalPrice } = req.body;

    // Check stock before placing order
    const checkStockSql = "SELECT Stock FROM book WHERE ISBN = ?";
    con.query(checkStockSql, [BookISBN], (err, results) => {
        if (err) return res.status(500).json({ error: 'Internal server error' });

        if (results.length === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }

        const stock = results[0].Stock;
        if (stock < Quantity) {
            return res.status(400).json({ error: 'Not enough books to meet your purchase' });
        }

        // Place the order
        const placeOrderSql = `
            INSERT INTO orders (BookISBN, OrderState, Quantity, UserID, TotalPrice)
            VALUES (?, ?, ?, ?, ?)
        `;
        con.query(placeOrderSql, [BookISBN, OrderState, Quantity, UserID, TotalPrice], (err, result) => {
            if (err) return res.status(500).json({ error: 'Internal server error' });

            // Update the stock
            const updateStockSql = "UPDATE book SET Stock = Stock - ? WHERE ISBN = ?";
            con.query(updateStockSql, [Quantity, BookISBN], (err) => {
                if (err) return res.status(500).json({ error: 'Internal server error' });

                res.json({ message: 'Order placed successfully', orderId: result.insertId });
            });
        });
    });
});

//  order history
app.get('/order-history', (req, res) => {
    const sql = `
        SELECT b.Title AS BookName, o.Quantity, o.TotalPrice, o.OrderDate
        FROM orders o
        JOIN book b ON o.BookISBN = b.ISBN
    `;

    con.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(results);
    });
});

//  update user information
app.put('/update-user', (req, res) => {
    const { firstName, lastName, city, zip, state, phoneNumber, password } = req.body;

    const sql = `
        UPDATE users
        SET FirstName = ?, LastName = ?, City = ?, Zip = ?, State = ?, PhoneNumber = ?, Password = ?
        WHERE Email = ?;
    `;


    const userEmail = 'nickiz@gmail.com';

    con.query(sql, [firstName, lastName, city, zip, state, phoneNumber, password, userEmail], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json({ message: 'User information updated successfully' });
    });
});

// New endpoint to fetch the top 5 most sold books
app.get('/top-sold-books', (req, res) => {
    const sql = `
        SELECT b.ISBN, b.Title, b.Author, b.Category, SUM(o.Quantity) AS SaleNumber
        FROM orders o
        JOIN book b ON o.BookISBN = b.ISBN
        GROUP BY b.ISBN, b.Title, b.Author, b.Category
        ORDER BY SaleNumber DESC
        LIMIT 5;
    `;

    con.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(results);
    });
});

app.get('/best-seller-categories', (req, res) => {
    const sql = `
        SELECT b.Category, SUM(o.Quantity) AS Sold
        FROM orders o
        JOIN book b ON o.BookISBN = b.ISBN
        GROUP BY b.Category
        ORDER BY Sold DESC
        LIMIT 5;
    `;

    con.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(results);
    });
});

// Endpoint to fetch best authors by total sales
app.get('/best-authors', (req, res) => {
    const sql = `
        SELECT b.Author, SUM(o.Quantity) AS Sold
        FROM orders o
        JOIN book b ON o.BookISBN = b.ISBN
        GROUP BY b.Author
        ORDER BY Sold DESC
        LIMIT 5;
    `;

    con.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(results);
    });
});

// Endpoint to fetch books with the lowest stock
app.get('/lowest-stock', (req, res) => {
    const sql = `
        SELECT ISBN, Title, Stock
        FROM book
        ORDER BY Stock ASC
        LIMIT 5;
    `;

    con.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(results);
    });
});

// Endpoint to fetch the top 5 most expensive books
app.get('/most-expensive-books', (req, res) => {
    const sql = `
        SELECT Title, Author, Price
        FROM book
        ORDER BY Price DESC
        LIMIT 5;
    `;

    con.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(results);
    });
});

app.get('/recent-purchases', (req, res) => {
    const sql = `
        SELECT 
            u.FirstName AS UserName, 
            b.Title AS BookTitle, 
            o.OrderDate, 
            o.TotalPrice, 
            o.Quantity 
        FROM orders o
        JOIN book b ON o.BookISBN = b.ISBN
        JOIN users u ON o.UserID = u.uid
        ORDER BY o.OrderDate DESC
        LIMIT 10;
    `;
    con.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(results);
    });
});

app.post('/increase-stock', (req, res) => {
    const { isbn, qty } = req.body;

    const sql = "UPDATE book SET Stock = Stock + ? WHERE ISBN = ?";

    con.query(sql, [qty, isbn], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json({ message: 'Stock updated successfully' });
    });
});
