import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { setLoginPending } from '../../actions/userActions';

const Login = ({dispatch}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setLoginPending("adavidtaing@gmail.com", "strongpassword"));
    }

    return (
        <div>
            <form className="login" onSubmit={handleSubmit}>
                <TextField
                    placeholder="Email Address"
                    type="email"
                    required={true}
                    autoFocus={true}
                />
                <br />
                <TextField
                    placeholder="Password"
                    type="password"
                    required={true}
                />
                <br />
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Login;