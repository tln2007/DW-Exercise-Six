import React, {useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import CreateUserForm from "../components/CreateUserForm";
import Header from "../components/Header";

function CreateUserPage({ isLoggedIn, setIsLoggedIn, setUserInformation }) {
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) navigate("/");
    }, [isLoggedIn]);

    const signUpUser = useCallback(
        (e) => {
            e.preventDefault();
            // Assign Email and Password to variable from form
            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;

            const auth = getAuth
        }
    )

    return (
    
    <div className='PageWrapper'>
        <h1>Create User</h1>
        <CreateUserForm />
    </div>
    );
}

export default CreateUserPage;