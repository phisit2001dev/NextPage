import { Button, Grid,Paper,TextField} from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Login() {
    const schema = yup.object().shape({
      username:yup.string().required('username fail!'),
      password:yup.string().required('password fail!'),
    });

    const {register,handleSubmit,formState:{errors}}=useForm({
      resolver:yupResolver(schema)
    });

    const onSubmit = data =>{
      console.log({data});
    }
  return (
    <div>
    <Grid container justifyContent="center" style={{ minHeight: '100vh',paddingTop:'10px' }}>
      <Paper elevation={10}style={{padding:"10px", height:"400px",width:"250px",margin:"20px auto" ,textAlign:"center"}}>
        <h2>Login Now</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <AccountCircleIcon/><TextField style={{marginBottom:"10px"}} id="outlined-basic" label="Username" variant="outlined"type='text'{...register('username')}/>
        {errors.username&&<p>{errors.username.message}</p>}
        <LockOpenIcon/><TextField style={{marginBottom:"10px"}} id="outlined-basic" label="Password" variant="outlined" type='password'{...register('password')} />
        {errors.password&&<p>{errors.password.message}</p>}
        <Button variant='contained' type='submit'>Login</Button>
        <p>are you have an account</p><Link to="register">Register</Link>
        </form>
      </Paper>
    </Grid>
    </div>
  )
}

export default Login