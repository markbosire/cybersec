import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
let rows = [
    { name: 'User1', flag: '🇺🇸', rank: 'Beginner', streak: 5, xp: 100 },
    { name: 'User2', flag: '🇬🇧', rank: 'Amateur', streak: 10, xp: 200 },
    { name: 'User3', flag: '🇩🇪', rank: 'Professional', streak: 15, xp: 300 },
    { name: 'User4', flag: '🇫🇷', rank: 'Expert', streak: 20, xp: 400 },
  ];
  rows = rows.sort((a, b) => b.xp - a.xp);

const XpBar = () => {

    const [score,setScore]=useState(0)
    const [open, setOpen] = React.useState(false);
    const [dailyXp, setdailyXp] = React.useState(15);
    const [userDailyXp,setUserDailyXp] =React.useState(0);
    const [openLeaderBoard, setOpenLeaderBoard] = React.useState(false);

    const handleClickOpenLeaderBoard = () => {
      setOpenLeaderBoard(true);
    };
  
    const handleCloseLeaderBoard = () => {
      setOpenLeaderBoard(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <React.Fragment>
        <Dialog
        className='leaderBoard'
        open={openLeaderBoard}
        onClose={handleCloseLeaderBoard}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Leaderboard"}</DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Cybersecurity Rank</TableCell>
                  <TableCell>Streak</TableCell>
                  <TableCell>XP</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.flag} {row.name}</TableCell>
                    <TableCell>{row.rank}</TableCell>
                    <TableCell>{row.streak}</TableCell>
                    <TableCell>{row.xp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
        <Dialog
        className='quest'
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Daily Quest"}</DialogTitle>
        <DialogContent>
         <p style={{margin:"10px 0",marginTop:"0"}}>Your quest for today is to reach {dailyXp}xp.</p>
        
          {userDailyXp >= dailyXp ? (
            <div>
              <i className="fa fa-check-circle" style={{color: 'green'}}></i> Quest Achieved!
            </div>
          ) : (
            <div>
              <i className="fa fa-times-circle" style={{color: 'red'}}></i> Quest Not Achieved.
            </div>
          )}
        </DialogContent>
      </Dialog>
         <div className='XpBar'>
         <section>
             <div className='btnDiv'>
                 <div className='button' onClick={handleClickOpen}>Daily Quest</div>
                 <div className='button' onClick={handleClickOpenLeaderBoard}>leaderboard</div>
             </div>
             <div className='score'>{score} xp</div>
         </section>
     </div>
    </React.Fragment>
 
  )
}

export default XpBar