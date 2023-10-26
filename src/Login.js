import { Button, IconButton, Snackbar, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { SERVER_URL } from "./constant";
import Carlist from "./Carlist";


function Login(props) {
    console.log(props);
    const [user, setUser] = useState({
        username : '',
        password : ''
    })

    const [isAuthenticated, setAuth] = useState(false);

    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const login = () => {
        fetch(SERVER_URL + 'login', {
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(user)
        })
        .then(response => {
            const jwtToken = response.headers.get('Authorization');
            
            if(jwtToken !== null ) {
                sessionStorage.setItem("jwt",jwtToken);
                setAuth(true);
                console.log(jwtToken)
            }else {
                setOpen(true);
            }
        })
        .catch(err => console.error(err));
    }

    console.log(isAuthenticated)
    if(isAuthenticated) {
        
        return <Carlist data={isAuthenticated}></Carlist>
    }else {
        return(

            <div>
                <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)} message="Login failed: Check your username and password" />
                <Stack spacing={2} alignItems='center' mt={2}>
                    <TextField name="username" label="Username" onChange={handleChange}/>
                    <TextField name="password" label="Password" onChange={handleChange}/>
                    <Button variant="outlined" color="primary" onClick={login}>Login</Button>
                </Stack>
            </div>
        );
    }
}


export default Login;