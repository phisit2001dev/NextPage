import { Button, Grid,Paper,TextField} from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
function Login() {
  return (
    <div>
      <h1>Login</h1>
    <Grid>
      <Paper elevation={10}style={{padding:"10px", height:"400px",width:"250px",margin:"20px auto" ,textAlign:"center"}}>
        <h2>Login Now</h2>
        <form>
        <AccountCircleIcon/><TextField style={{marginBottom:"10px"}} id="outlined-basic" label="Username" name="username" variant="outlined" type='text'required/>
        <LockOpenIcon/><TextField style={{marginBottom:"10px"}} id="outlined-basic" label="Password" name="password" variant="outlined" type='password'required />
        <LockOpenIcon/><TextField style={{marginBottom:"10px"}} id="outlined-basic" label="Confrime-Password"  name="Confrime-Password" variant="outlined" type='password' required/>
        <Button variant='contained' type='submit'>Login</Button>
        </form>
      </Paper>
    </Grid>
    </div>
  )
}

export default Login