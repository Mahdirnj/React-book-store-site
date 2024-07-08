import UserDashHeader from "./UserDashHeader.jsx";
import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";

function UserHistory() {
    const [orderHistory, setOrderHistory] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/order-history`)
            .then(response => response.json())
            .then(data => setOrderHistory(data))
            .catch(error => console.error('Error fetching order history:', error));
    }, []);

    return (
        <div className="bg-gray-400">
            <Helmet>
                <title>History</title>
            </Helmet>
            <UserDashHeader />

            <h1 className="text-5xl font-extrabold dark:text-white pt-3 pb-3 text-center">Here you can see your latest purchases</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 rounded-s-lg">Book name</th>
                        <th scope="col" className="px-6 py-3">Quantity </th>
                        <th scope="col" className="px-6 py-3">Paid</th>
                        <th scope="col" className="px-6 py-3 rounded-e-lg">Date purchased</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orderHistory.map((order, index) => (
                        <tr className="bg-white dark:bg-gray-600 dark:text-white" key={index}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {order.BookName}
                            </th>
                            <td className="px-6 py-4">{order.Quantity}</td>
                            <td className="px-6 py-4">${order.TotalPrice.toFixed(2)}</td>
                            <td className="px-6 py-4">{new Date(order.OrderDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserHistory;
