import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client';

export const Login = () => {
    const [message, setMessage] = useState('');
    const emailRef = useRef();
    const pwdRef = useRef();
    const doLogin = async () => {
        const userInfo = {
            'email': emailRef.current.value,
            'password': pwdRef.current.value
        }
        try {
            const response = await apiClient.post(process.env.REACT_APP_LOGIN, userInfo);
            setMessage(response.data.message);
        } 
        catch (err) {
            setMessage('Login Failed!');
            console.log('Login Error : ', err);
        }
    }
    return (
        <Container>
            <p>{message}</p>
            <TextField inputRef={emailRef} id="filled-basic" label="Email" variant="outlined" />
            <TextField inputRef={pwdRef} id="filled-basic" type='password' label="Password" variant="outlined" />
            <Button onClick={doLogin} variant="contained">Login</Button>
        </Container>
    )
}
