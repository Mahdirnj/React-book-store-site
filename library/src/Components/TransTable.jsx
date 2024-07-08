import { useEffect, useState } from 'react';
import axios from 'axios';

function TransTable() {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        // Fetch recent purchases
        axios.get('http://localhost:3000/recent-purchases')
            .then(response => setPurchases(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Name</th>
                    <th scope="col" className="px-6 py-3">Book Title</th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Date Purchased</th>
                    <th scope="col" className="px-6 py-3">Paid</th>
                    <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Books Bought</th>
                </tr>
                </thead>
                <tbody>
                {purchases.map((purchase, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            {purchase.UserName}
                        </td>
                        <td className="px-6 py-4">{purchase.BookTitle}</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            {new Date(purchase.OrderDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">${purchase.TotalPrice}</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{purchase.Quantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransTable;
