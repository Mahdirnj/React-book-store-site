import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter.jsx';
import './assets/index.css';
import { HashRouter } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import { AuthProvider } from './contexts/AuthContext.jsx'; // Import AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <AuthProvider>
            <React.StrictMode>
                <AppRouter />
                <Footer />
            </React.StrictMode>
        </AuthProvider>
    </HashRouter>
);
