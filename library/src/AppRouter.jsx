import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import BookStore from './Pages/BookStore.jsx';
import About from './Pages/About.jsx';
import Login from './Pages/Login.jsx';
import AdminDashboard from './Pages/Admin Dashboard/AdminDashboard.jsx';
import SignUp from './Pages/SignUp.jsx';
import NewBookOrder from './Pages/Admin Dashboard/NewBookOrder.jsx';
import AdminTransactions from './Pages/Admin Dashboard/AdminTransactions.jsx';
import AdminProfile from './Pages/Admin Dashboard/AdminProfile.jsx';
import AdminBook from './Pages/Admin Dashboard/AdminBook.jsx';
import BookSearch from './Pages/User Dashboard/BookSearch.jsx';
import UserHistory from './Pages/User Dashboard/UserHistory.jsx';
import UserHome from './Pages/User Dashboard/UserHome.jsx';
import { AuthContext } from './contexts/AuthContext.jsx'; // Import AuthContext

function AppRouter() {
    const { user } = useContext(AuthContext); // Use context to get user data

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BookStore" element={<BookStore />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/ADashboard" element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/Login" />} />
            <Route path="/Newbookorder" element={user?.role === 'admin' ? <NewBookOrder /> : <Navigate to="/Login" />} />
            <Route path="/AdminTrans" element={user?.role === 'admin' ? <AdminTransactions /> : <Navigate to="/Login" />} />
            <Route path="/Adminprofile" element={user?.role === 'admin' ? <AdminProfile /> : <Navigate to="/Login" />} />
            <Route path="/Adminbook" element={user?.role === 'admin' ? <AdminBook /> : <Navigate to="/Login" />} />
            <Route path="/Store" element={user?.role === 'user' ? <BookSearch /> : <Navigate to="/Login" />} />
            <Route path="/Userhistory" element={user?.role === 'user' ? <UserHistory /> : <Navigate to="/Login" />} />
            <Route path="/Userhome" element={user?.role === 'user' ? <UserHome /> : <Navigate to="/Login" />} />
        </Routes>
    );
}

export default AppRouter;
