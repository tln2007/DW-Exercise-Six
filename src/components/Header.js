import React from 'react';
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Header({ setLoggedIn, setUserInformation }) {
    function logout() {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUserInformation({});
                setIsLoggedIn(false);
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    return (
        <header>
            <nav>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/login">
                    <p>Login</p>
                </Link>
                <Link to="/create">
                    <p>Create User</p>
                </Link>
                <p onClick={() => logout()}>Log Out</p>
            </nav>
        </header>
    );
}

export default Header;