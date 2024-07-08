// src/UserHome.jsx
import React, { useState } from 'react';
import UserDashHeader from "./UserDashHeader.jsx";
import { Helmet } from "react-helmet";
import axios from 'axios';

function UserHome() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        city: '',
        zip: '',
        state: '',
        phoneNumber: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put('http://localhost:3000/update-user', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                alert('User information updated successfully');
            })
            .catch((error) => {
                console.error('There was an error updating the user!', error);
            });
    };

    return (
        <div className="bg-gray-700">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <UserDashHeader />
            <h1 className="text-5xl font-extrabold dark:text-white pt-3 pb-3 text-center">
                Here is your comfy home <br/>
                <span className="dark:text-violet-400">Maybe edit yourself</span>
            </h1>

            <form onSubmit={handleSubmit} className="align-middle ml-96 pt-8 pl-40 text-center" autoComplete="off">
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="block mb-2 p-2 rounded-3xl text-center"
                    autoComplete="off"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="block mb-2 p-2 rounded-3xl text-center"
                    autoComplete="off"
                    required
                />
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="block mb-2 p-2 rounded-3xl text-center"
                    autoComplete="off"
                    required
                />
                <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="Zip Code"
                    className="block mb-2 p-2 rounded-3xl text-center"
                    autoComplete="off"
                    required
                />
                <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="block mb-2 p-2 rounded-3xl text-center"
                    autoComplete="off"
                    required
                />
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="block mb-2 p-2 rounded-3xl text-center"
                    autoComplete="off"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="block mb-2 p-2 rounded-3xl text-center"
                    autoComplete="off"
                    required
                />
                <button type="submit" className="rounded-3xl block ml-12 p-2 bg-blue-500 text-white">Update Info</button>
                <br/>
            </form>
        </div>
    );
}

export default UserHome;
