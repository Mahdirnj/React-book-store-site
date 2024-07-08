import { useNavigate } from "react-router-dom";

function UserDashHeader() {
    const navigate = useNavigate();

    // Navigation handlers
    const handleHomeClick = () => {
        navigate('/Userhome');
    };

    const handleStoreClick = () => {
        navigate('/Store');
    };

    const handleHistoryClick = () => {
        navigate('/Userhistory');
    };



    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex md:order-2">

                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <button onClick={handleHomeClick} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={handleStoreClick} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Store
                                </button>
                            </li>
                            <li>
                                <button onClick={handleHistoryClick} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    History
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default UserDashHeader;
