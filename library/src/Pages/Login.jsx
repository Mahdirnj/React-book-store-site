import {Helmet} from "react-helmet";
import LoginComp from "../Components/LoginComp.jsx";
import Header from "../Components/Header.jsx";

function Login() {
    return (
        <div className="bg-ima">
            <Header/>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="w-auto transform bg-gray-200">
                <LoginComp/>
            </div>
        </div>
    )
}

export default Login