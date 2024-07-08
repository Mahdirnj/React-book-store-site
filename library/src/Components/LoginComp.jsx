import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';
import { AuthContext } from '../contexts/AuthContext'; // Adjust path as per your file structure

function LoginComp() {
    const { setUser } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({ show: false, Boldtxt: '', Infotxt: '', AlertType: '' });
    const navigate = useNavigate();

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    function handleSignUp() {
        navigate('/Signup');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', { username, password })
            .then((response) => {
                const userData = response.data;
                console.log('Login successful, user data:', userData);

                setUser(userData); // Set user data in context
                setAlert({ show: true, Boldtxt: 'Success!', Infotxt: 'Login successful.', AlertType: 'success' });

                setTimeout(() => {
                    if (userData.role === 'admin') {
                        console.log('Redirecting to admin dashboard');
                        navigate('/ADashboard');
                    } else {
                        console.log('Redirecting to user home');
                        navigate('/Userhome');
                    }
                }, 2000);
            })
            .catch((error) => {
                console.error('Login error:', error.response?.data?.error || 'An error occurred');
                setAlert({
                    show: true,
                    Boldtxt: 'Error!',
                    Infotxt: error.response?.data?.error || 'An error occurred during login.',
                    AlertType: 'error'
                });
            });
    };

    return (
        <div>
            <section className="bg-gray-50 dark:bg-yellow-200">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-stone-700">We gather the world's best books</h1>
                        <br />
                        <h2 className="mb-5 text-stone-400 font-bold font-serif">
                            We invest in your time <span className="mx-2 text-blue-500 font-bold font-mono">That matters</span>
                        </h2>
                        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
                            long-term value and drive economic growth.
                        </p>
                    </div>
                    <div>
                        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-orange-200">
                            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-700">
                                Sign in to reShop
                            </h2>
                            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    {alert.show && <Alert Boldtxt={alert.Boldtxt} Infotxt={alert.Infotxt} AlertType={alert.AlertType}/>}
                                    <div className="relative z-0">
                                        <input autoComplete="off" onChange={handleUsernameChange} type="email"
                                               name="email" id="email-login"
                                               className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-stone-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" "/>
                                        <label htmlFor="email"
                                               className="absolute text-sm text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your
                                            Email</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative z-0">
                                        <input autoComplete="off" onChange={handlePasswordChange} type="password"
                                               name="password"
                                               className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" "/>
                                        <label htmlFor="floating_standard"
                                               className="absolute text-sm text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                                    </div>
                                </div>

                                <button type="submit"
                                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Login
                                </button>
                                <div className="text-sm font-medium text-gray-900 dark:text-stone-700">
                                    Not registered? <a onClick={handleSignUp}
                                                       className="text-blue-600 hover:underline dark:text-blue-500">Create
                                    account</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoginComp;
