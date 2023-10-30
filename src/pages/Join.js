import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Join = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [success,setSuccess] = useState(true)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
  

    if (password !== confirmPassword) {
        setOpen(true)
        setSuccess(false)
          setMessage("The password entered is not the same as the confirmed password")
      return;
    }
    localStorage.removeItem('users')
    const users=localStorage.getItem('users')?localStorage.getItem('users'):[];
    const user={
        username:username,
        password:password
    }
    console.log(user)
     users.push(user)

    console.log(users)
    localStorage.setItem('user', username);
    localStorage.setItem('users', JSON.stringify(users));
 
    setSuccess(true)
      setMessage('Sign up successful proceed to sign in!');
      setOpen(true);
    setTimeout(() => {
      window.location.href = '/';
    }, 1500);
  };

  return (
    <React.Fragment>
      <div className='Join'>
        <section>
          <span className='title'>CyberSec</span>

          <div className='window'>
            <section>
              <span>Join</span>
             
                <input type='text' placeholder='Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                
                />
                <input type='password' placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <input type='password' placeholder='Confirm Password' 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
                <div onClick={handleSubmit}></div>
           
            </section>
          </div>
          <span className='Footer'>
            Already have an account?{' '}
            <u
              onClick={() => {
                window.location.href = '/Login';
              }}
            >
              Login
            </u>
          </span>
        </section>
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <div>
    <Alert onClose={handleClose} severity={success?"success":"error"}>
      {message}
    </Alert>
  </div>
      </Snackbar>
    </React.Fragment>
  );
};

export default Join;
