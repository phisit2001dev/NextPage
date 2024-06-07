import React from 'react'
import { Button, Grid,Paper,TextField} from '@mui/material'
function Register() {
  return (
    <div>
      <Grid>
      <Paper elevation={20}style={{padding:"10px", height:"800px",width:"1250px",margin:"20px auto" ,textAlign:"center"}}>
        <h2>Register Now</h2>
        <form>
        <TextField label="Username" id="Username" name="" required/>
        <Button variant='contained' type='submit'>Register</Button>
        </form>
      </Paper>
    </Grid>
    </div>
  )
}

export default Register