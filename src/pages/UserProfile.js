import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function UserProfilePage({ isLoading, })


function UserProfilePage() {
    return (
        <div className='PageWrapper'>
            <h1>User Profile</h1>
            <p>
                <strong>Display Name: </strong>
                {userInformation.displayName}
            </p>
            <p>
                <strong>Email: </strong>
                {userInformation.email}
            </p>
        </div>
    );
}

export default UserProfilePage;