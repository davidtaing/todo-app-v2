import React from 'react';

import { setLoginPending } from '../../actions/userActions';

const Login = ({dispatch}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(setLoginPending("adavidtaing@gmail.com", "strongpassword"));
    }

    return (
        <div>
            <form className="login" onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" />
                <br />
                <button type="submit" id="submit">Submit</button>
                <br />
            </form>
        </div>
    );
}

export default Login;