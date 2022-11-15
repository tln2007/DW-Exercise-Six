import React from "react";

function LoginForm() {
    return (
        <form>
            <label for="userName">User Name</label>
            <input type="text" name="userName" />

            <button type="submit">Submit</button>
        </form>
    );
}

export default LoginForm;