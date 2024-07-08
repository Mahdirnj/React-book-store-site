// src/AdminBook.jsx
import React, { useState, useEffect } from 'react';
import AdminDashHeader from "./AdminDashHeader.jsx";
import { Helmet } from "react-helmet";
import axios from 'axios';

function AdminBook() {
    const [bestSellingCategories, setBestSellingCategories] = useState([]);
    const [bestAuthors, setBestAuthors] = useState([]);
    const [lowestStockBooks, setLowestStockBooks] = useState([]);
    const [mostExpensiveBooks, setMostExpensiveBooks] = useState([]);

    useEffect(() => {
        // Fetch best-selling categories
        axios.get('http://localhost:3000/best-seller-categories')
            .then(response => setBestSellingCategories(response.data))
            .catch(error => console.error('Failed to load best-selling categories', error));

        // Fetch best authors by total sales
        axios.get('http://localhost:3000/best-authors')
            .then(response => setBestAuthors(response.data))
            .catch(error => console.error('Failed to load best authors', error));

        // Fetch books with the lowest stock
        axios.get('http://localhost:3000/lowest-stock')
            .then(response => setLowestStockBooks(response.data))
            .catch(error => console.error('Failed to load lowest stock books', error));

        // Fetch top 5 most expensive books
        axios.get('http://localhost:3000/most-expensive-books')
            .then(response => setMostExpensiveBooks(response.data))
            .catch(error => console.error('Failed to load most expensive books', error));
    }, []);

    return (
        <div className="bg-gray-600">
            <Helmet>
                <title>Book Status</title>
            </Helmet>
            <h1 className="text-5xl font-extrabold dark:text-white ml-14 text-center">
                Review books <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400"> but not read them boss </small>
            </h1>
            <AdminDashHeader />

            <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Best Seller Categories</h2>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-8">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Category</th>
                        <th scope="col" className="px-6 py-3">Sold</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bestSellingCategories.map(category => (
                        <tr key={category.Category} className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                            <td className="px-6 py-4">{category.Category}</td>
                            <td className="px-6 py-4">{category.Sold}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <h2 className="text-3xl font-bold text-white mb-4">Best Authors</h2>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-8">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Author</th>
                        <th scope="col" className="px-6 py-3">Sold</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bestAuthors.map(author => (
                        <tr key={author.Author} className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                            <td className="px-6 py-4">{author.Author}</td>
                            <td className="px-6 py-4">{author.Sold}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <h2 className="text-3xl font-bold text-white mb-4">Lowest Stock in Inventory</h2>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-8">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">ISBN</th>
                        <th scope="col" className="px-6 py-3">Title</th>
                        <th scope="col" className="px-6 py-3">Stock</th>
                    </tr>
                    </thead>
                    <tbody>
                    {lowestStockBooks.map(book => (
                        <tr key={book.ISBN} className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                            <td className="px-6 py-4">{book.ISBN}</td>
                            <td className="px-6 py-4">{book.Title}</td>
                            <td className="px-6 py-4">{book.Stock}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <h2 className="text-3xl font-bold text-white mb-4">Top 5 Most Expensive Books</h2>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-8">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Title</th>
                        <th scope="col" className="px-6 py-3">Author</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mostExpensiveBooks.map(book => (
                        <tr key={book.Title} className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                            <td className="px-6 py-4">{book.Title}</td>
                            <td className="px-6 py-4">{book.Author}</td>
                            <td className="px-6 py-4">${book.Price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminBook;
