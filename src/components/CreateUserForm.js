import React from "react";

function CreateUserForm({ signUpUser }) {
    return (
        <form className="FormElement" onSubmit={(e) => signUpUser(e)}>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" />

            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateUserForm;