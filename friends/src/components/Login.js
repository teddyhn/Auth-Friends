import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = evt => {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    };

    const login = evt => {
        evt.preventDefault();
        axiosWithAuth()
          .post('/login', credentials)
          .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friends');
          })
          .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Log In!!</h1>
            <form onSubmit={login}>
                Username:
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={evt => handleChange(evt)} />
                Password:
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={evt => handleChange(evt)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login