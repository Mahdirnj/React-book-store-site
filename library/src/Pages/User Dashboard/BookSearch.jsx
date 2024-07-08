// src/BookSearch.jsx
import React, { useState, useEffect } from 'react';
import UserDashHeader from "./UserDashHeader.jsx";
import StoreCatDropDown from "./StoreCatDropDown.jsx";
import BookDetail from './BookDetail.jsx';
import axios from 'axios';
import { Helmet } from "react-helmet";

function BookSearch() {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All Books');

    useEffect(() => {
        // Fetch books based on the selected category
        const fetchBooks = async () => {
            try {
                const url = selectedCategory === 'All Books'
                    ? 'http://localhost:3000/books'
                    : `http://localhost:3000/books?category=${selectedCategory}`;
                const response = await axios.get(url);
                setBooks(response.data);
            } catch (error) {
                console.error('Failed to load books', error);
            }
        };

        fetchBooks();
    }, [selectedCategory]);

    const handleBookClick = (book) => {
        setSelectedBook(book);
    };

    const handleCloseDetail = () => {
        setSelectedBook(null);
    };

    return (
        <div className="bg-white">
            <Helmet>
                <title>Store</title>
            </Helmet>
            <UserDashHeader />
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Books</h2>
                    <StoreCatDropDown setSelectedCategory={setSelectedCategory} />
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {books.map((book) => (
                        <div key={book.ISBN} onClick={() => handleBookClick(book)} className="group cursor-pointer">
                            <div className="w-full h-[16rem] overflow-hidden rounded-lg bg-gray-200">
                                <img
                                    src={book.BookURL}
                                    alt={book.Title}
                                    className="object-cover object-center w-full h-full group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{book.Title}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">${book.Price}</p>
                        </div>
                    ))}
                </div>
            </div>

            {selectedBook && <BookDetail book={selectedBook} onClose={handleCloseDetail} />}
        </div>
    );
}

export default BookSearch;
