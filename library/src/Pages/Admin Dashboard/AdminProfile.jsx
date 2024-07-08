// src/AdminProfile.jsx
import AdminDashHeader from "./AdminDashHeader.jsx";
import { Helmet } from "react-helmet";

function handleSubmit(e) {
    e.preventDefault();
}

function AdminProfile() {
    return (
        <div className="bg-gray-600">
            <Helmet>
                <title>Admin Profile</title>
            </Helmet>
            <h1 className="text-5xl font-extrabold text-center dark:text-red-500">
                Edit yourself<small className="ms-2 font-semibold text-gray-500 dark:text-gray-400"> before we do it</small>
            </h1>

            <section className="px-5 py-5 rounded-3xl mx-64 bg-gray-700 mt-4 justify-center pt-12">
                <form onSubmit={handleSubmit} autoComplete="off">
                    <input type="text" name="hidden-field" style={{ display: 'none' }} />

                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                First name
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                name="first_name_random"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Mahdi"
                                required
                                disabled
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Last name
                            </label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name_random"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Ranjkesh"
                                required
                                disabled
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city_random"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Berlin"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Phone number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone_random"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="123-45-678"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                State
                            </label>
                            <input
                                type="text"
                                id="state"
                                name="state_random"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="North Dakota"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="zip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Zip code
                            </label>
                            <input
                                type="number"
                                id="zip"
                                name="zip_random"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder=""
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address_random"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Somewhere"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password_random"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="•••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </section>
            <AdminDashHeader />
        </div>
    );
}

export default AdminProfile;
