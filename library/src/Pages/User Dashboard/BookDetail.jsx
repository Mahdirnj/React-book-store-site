import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function BookDetail({ book, onClose }) {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(book.Price);
    const modalRef = useRef();

    const handleQuantityChange = (e) => {
        const qty = Number(e.target.value);
        setQuantity(qty);
        setTotalPrice(qty * book.Price);
    };

    const handleBuyClick = () => {
        const order = {
            BookISBN: book.ISBN,
            OrderState: 1,
            Quantity: quantity,
            UserID: 2,
            TotalPrice: totalPrice
        };

        axios.post('http://localhost:3000/orders', order)
            .then(response => {
                alert('Purchase successful!');
                onClose();
            })
            .catch(error => {
                console.error('Purchase failed', error);
                alert('Purchase failed!');
            });
    };

    // Close the modal when clicking outside of it
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
            <div ref={modalRef} className="relative bg-white p-8 mb-2 rounded-lg shadow-lg w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
                    {/*<button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">&times;</button>*/}
                <img src={book.BookURL} alt={book.Title} className="mb-4 mt-2 w-full h-64 object-cover rounded-lg" />
                <h2 className="text-2xl font-bold mb-2">{book.Title}</h2>
                <p className="text-lg text-gray-700 mb-2">Author: {book.Author}</p>
                <p className="text-lg text-gray-700 mb-2">Publisher: {book.Publisher}</p>
                <p className="text-lg text-gray-700 mb-4">Category: {book.Category}</p>
                <p className="text-lg font-semibold text-gray-900 mb-4">${book.Price}</p>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                        className="mt-1 block w-full p-2 border rounded-md"
                    />
                </div>
                <p className="text-lg font-semibold text-gray-900 mb-4">Total: ${totalPrice}</p>
                <button
                    onClick={handleBuyClick}
                    className="w-full bg-blue-500  text-white p-2 rounded-md font-semibold hover:bg-blue-700"
                >
                    Buy
                </button>
            </div>
        </div>
    );
}

export default BookDetail;
