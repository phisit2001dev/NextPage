import React from 'react';
import { Button, Grid, Paper, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Register() {
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Grid container justifyContent="center" style={{ minHeight: '100vh',paddingTop:'10px' }}>
        <Grid item xs={6}>
          <Paper elevation={20} style={{ padding: "10px", width: "100%", textAlign: "center" }}>
            <h2>Register Now</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <TextField label="Email" id="email" {...register('email')} />
              {errors.email && <p>{errors.email.message}</p>}
              <TextField label="Username" id="username" {...register('username')} />
              {errors.username && <p>{errors.username.message}</p>}
              <TextField id="outlined-basic" label="Password" variant="outlined" type='password' {...register('password')} />
              {errors.password && <p>{errors.password.message}</p>}
              <Button variant='contained' type='submit'>Register</Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Register;
