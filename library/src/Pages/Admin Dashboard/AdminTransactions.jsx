import TransTable from "../../Components/TransTable.jsx";
import AdminDashHeader from "./AdminDashHeader.jsx";
import {Helmet} from "react-helmet";

function AdminTransactions() {
    return(
        <div className="bg-gray-600">
            <Helmet>
                <title>Transactions </title>
            </Helmet>
            <div className="text-center pt-3">
                <h1 className="text-5xl font-extrabold dark:text-green-700"> Money<small
                    className="ms-2 font-semibold text-gray-500 dark:text-gray-800"> smelling history </small></h1>
            </div>
            <h1 className="w-6/12 ml-80 mt-6 text-center text-violet-300">Recent transactions :</h1>
            <div className="bg-gray-900 mt-4 rounded-3xl">
                <TransTable/>
            </div>
            <AdminDashHeader/>
        </div>

    )
}

export default AdminTransactions;