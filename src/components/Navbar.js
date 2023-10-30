// Navbar.js
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../App.css'
function Navbar({loginToken}) {
 
  console.log(loginToken.loginToken)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
   

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
 

const handleClick2 = (event) => {
  setAnchorEl2(event.currentTarget);
};
const handleClose2 = () => {
  setAnchorEl2(null);
};
  return (<React.Fragment>
      <Menu
      className='menuDiv'
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem>{loginToken.loginToken}</MenuItem>
      
        <MenuItem onClick={()=>{
                    window.location.href = '/';
                }}>Home</MenuItem>
      <MenuItem onClick={()=>{
                    window.location.href = '/Events';
                }}>Events</MenuItem>
      <MenuItem onClick={()=>{
                    window.location.href = '/Team';
                }}>Team</MenuItem>
     <MenuItem onClick={()=>{
                   localStorage.removeItem("user")
                }}>logout</MenuItem>
    </Menu> 
    <Menu
      className='menuDiv'
      id="basic-menu2"
      anchorEl={anchorEl2}
      open={open2}
      onClose={handleClose2}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem >{loginToken.loginToken}</MenuItem>
     <MenuItem onClick={()=>{
                    localStorage.removeItem('user')
                }}>Logout</MenuItem>
    </Menu> 
    <nav className="Navbar">
      <h1>CyberSec</h1>
     {!loginToken? <div className='buttonContainer'>
      <div className='button' onClick={() => {
                window.location.href = '/Login';
              }}>Login</div>
      <div className='button' onClick={() => {
                window.location.href = '/Join';
              }}>Join</div>
      </div>:
      <React.Fragment>
         <div className='sm-menu'>
         <i class="fa fa-bars" aria-hidden="true" id="basic-button"
           aria-controls={open ? 'basic-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}></i>
       </div>
       <div className='bg-menu'>
      <div className='pagesContainer'>
      <div className='pagebutton' onClick={()=>{
                    window.location.href = '/';
                }}>Home</div>
      <div className='pagebutton' onClick={()=>{
                    window.location.href = '/Events';
                }}>Events</div>
      <div className='pagebutton' onClick={()=>{
                    window.location.href = '/Team';
                }}>Team</div>
      <div className='pagebutton' id='basic-menu2' onClick={handleClick2}>Profile</div>
      </div></div>
      </React.Fragment>}
    </nav>
    </React.Fragment>);
}

export default Navbar;
