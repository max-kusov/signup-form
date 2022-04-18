import React from 'react'
import { TextField, Button, FormControlLabel, Checkbox } from '@mui/material';

import './LoginForm.scss'



function LoginForm() {
  return (
    <form className='form' action="">
      <TextField style={{ width: '100%' }} margin="normal" id="outlined-basic" label="Login" variant="outlined" />
      <TextField style={{ width: '100%' }} id="outlined-basic" label="Password" variant="outlined" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me forgot password" />
      <Button className='form__btn' variant="contained">Log in</Button>
      <span className='form__link'>or register now</span>
    </form>
  )
}

export default LoginForm