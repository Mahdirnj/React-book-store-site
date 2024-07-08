import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBook() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All categories');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const selectCategory = (newCategory) => {
        setCategory(newCategory);
        setDropdownOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement search functionality here
        console.log(`Searching for "${search}" in category "${category}"`);
    };

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/books')
            .then(response => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Failed to load books');
                setLoading(false);
            });
    }, []);

    return (
        <div className="bg-orange-200 pt-3">

            {/* Book list */}
            <div className="max-w-lg mx-auto mt-8 pb-5">
                {loading && <p>Loading books...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading && !error && (
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {books.map(book => (
                            <div key={book.ISBN} className="bg-white p-4 rounded-lg shadow-md">
                                <img src={book.BookURL} alt={book.Title} className="mb-2 h-40 w-full object-cover rounded-lg" />
                                <h2 className="text-xl font-bold mb-2">{book.Title}</h2>
                                <p className="text-gray-600 mb-2">{book.Author}</p>
                                <p className="text-blue-700  font-semibold">${book.Price}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBook;
