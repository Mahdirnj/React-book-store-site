// src/NewBookOrder.jsx
import React, { useState } from 'react';
import axios from 'axios';
import AdminDashHeader from "./AdminDashHeader";
import { Helmet } from "react-helmet";

function NewBookOrder() {
    const [formData, setFormData] = useState({
        title: '',
        isbn: '',
        author: '',
        publisher: '',
        category: 'Novel', // Default value
        qty: '',
        price: '',
        imageUrl: '',
        minQty: ''
    });

    const [increaseStockData, setIncreaseStockData] = useState({
        isbn: '',
        qty: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleStockChange = (e) => {
        setIncreaseStockData({ ...increaseStockData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/books', formData)
            .then(response => {
                console.log('Book added successfully:', response.data);
                setFormData({
                    title: '',
                    isbn: '',
                    author: '',
                    publisher: '',
                    category: 'Novel', // Reset to default
                    qty: '',
                    price: '',
                    imageUrl: '',
                    minQty: ''
                });
                alert('Book added successfully');
            })
            .catch(error => {
                console.error('Error adding book:', error.response?.data?.error || error.message);
                alert('Failed to add book. Please try again.');
            });
    };

    const handleIncreaseStock = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/increase-stock', increaseStockData)
            .then(response => {
                console.log('Stock increased successfully:', response.data);
                setIncreaseStockData({
                    isbn: '',
                    qty: ''
                });
                alert('Stock increased successfully');
            })
            .catch(error => {
                console.error('Error increasing stock:', error.response?.data?.error || error.message);
                alert('Failed to increase stock. Please try again.');
            });
    };

    return (
        <div className="bg-gray-600">
            <Helmet>
                <title>New Book Order</title>
            </Helmet>
            <h1 className="text-5xl font-extrabold dark:text-white ml-14 text-center">
                Smelling <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">new book mate</small>
            </h1>

            <section className="flex bg-gray-700 mt-10 rounded-3xl mx-64 pb-5 justify-between pt-12">
                <form onSubmit={handleSubmit} className="w-3/5 mr-5 pl-11 text-center">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        {/* Existing fields */}
                        <div>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book title</label>
                            <input type="text" id="title" value={formData.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Witness" required />
                        </div>
                        <div>
                            <label htmlFor="isbn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ISBN</label>
                            <input type="number" id="isbn" value={formData.isbn} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                            <input type="text" id="author" value={formData.author} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="James D. Watson" required />
                        </div>
                        <div>
                            <label htmlFor="publisher" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Publisher</label>
                            <input type="text" id="publisher" value={formData.publisher} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select id="category" value={formData.category} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                <option value="Novel">Novel</option>
                                <option value="Medical">Medical</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Romance">Romance</option>
                                <option value="Horror">Horror</option>
                                <option value="Adventure">Adventure</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="qty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qty (per order)</label>
                            <input type="number" id="qty" value={formData.qty} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number" id="price" value={formData.price} onChange={handleChange} className="bg-gray-50 text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Book image URL</label>
                        <input type="text" id="imageUrl" value={formData.imageUrl} onChange={handleChange} className="bg-gray-50 text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div>
                        <label htmlFor="minQty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Min Qty</label>
                        <input type="number" id="minQty" value={formData.minQty} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="mt-4 text-white bg-blue-700 ml-36 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Submit
                    </button>
                </form>

                <form onSubmit={handleIncreaseStock} className="w-2/5 bg-gray-800 p-6 rounded-lg mr-10 mb-48">
                    <h2 className="text-2xl font-bold text-white mb-4">Want to increase the book stock?</h2>
                    <div className="mb-4">
                        <label htmlFor="isbn" className="block mb-2 text-sm font-medium text-gray-200">ISBN</label>
                        <input type="number" id="isbn" value={increaseStockData.isbn} onChange={handleStockChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="qty" className="block mb-2 text-sm font-medium text-gray-200">Quantity</label>
                        <input type="number" id="qty" value={increaseStockData.qty} onChange={handleStockChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <button type="submit" className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Add
                    </button>
                </form>
            </section>
            <AdminDashHeader />
        </div>
    );
}

export default NewBookOrder;
