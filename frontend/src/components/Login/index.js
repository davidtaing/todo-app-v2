import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => {
    return (
        <div>
            <form className="login">
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