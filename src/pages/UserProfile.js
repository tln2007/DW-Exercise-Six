import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function UserProfilePage({ isLoading, isLoggedIn, userInformation, setIsLoggedIn, setUserInformation }) {
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoggedIn && !isLoading) return navigate('/login'); //if NOT logged in, nav to login
    }, [isLoading, isLoggedIn]) //dependencies

    return (
        <>
            <Header setIsLoggedIn={setIsLoggedIn} setUserInformation={setUserInformation} />
            <div className="PageWrapper">
                <h1>User Profile</h1>
                <p>{userInformation.displayName}</p>
                <p>{userInformation.email}</p>
            </div>
        </>
    );
}

export default UserProfilePage;