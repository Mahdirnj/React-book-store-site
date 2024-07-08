// src/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import AdminDashHeader from "./AdminDashHeader.jsx";
import DashboardAside from "../../Components/DashboardAside.jsx";
import { Helmet } from "react-helmet";
import axios from 'axios';

function AdminDashboard() {
    const [topSoldBooks, setTopSoldBooks] = useState([]);

    useEffect(() => {
        // Fetch the top 5 most sold books from the server
        axios.get('http://localhost:3000/top-sold-books')
            .then(response => {
                setTopSoldBooks(response.data);
            })
            .catch(error => {
                console.error('Failed to load the top sold books', error);
            });
    }, []);

    return (
        <div className="bg-gray-700 h-max">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Hey boss <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">welcome back</span>
                </h1>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Check what is <span className="italic">GOING ON</span> in Top 5 best seller books.
                </p>
                <br /><br />
                <div className="w-8/12 ml-64 border-4 rounded-2xl ">
                    <section className="h-full">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                        Book Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Author
                                    </th>
                                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Sale Number
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {topSoldBooks.length > 0 ? (
                                    topSoldBooks.map(book => (
                                        <tr key={book.ISBN} className="border-b border-gray-200 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                {book.Title}
                                            </th>
                                            <td className="px-6 py-4">
                                                {book.Author}
                                            </td>
                                            <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                                {book.Category}
                                            </td>
                                            <td className="px-6 py-4">
                                                {book.SaleNumber}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center p-4">Loading...</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
            <AdminDashHeader />
        </div>
    );
}

export default AdminDashboard;
