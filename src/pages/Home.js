// Home.js
import React,{useState} from 'react';
import HomeContent from '../components/HomeContent';
import Navbar from '../components/Navbar';
import '../App.css';
import hacker from '../assets/images/hacker.png'
import lvlup from '../assets/images/lvlup.png'
import up from '../assets/images/up.png'
import wrld from '../assets/images/wrld.png'
import InfoCard from '../components/InfoCard';

function Home() {
  let user=localStorage.getItem("user")?localStorage.getItem("user"):""

    const [loginToken,setLoginToken] =useState(user);
  return (
    <React.Fragment>
    {!loginToken?<div className='Home-div'>
    <Navbar loginToken={loginToken} />
    <div className="Home">
       
      <h2>Become a Cybersecurity Specialist Through Challenges</h2>
   
      <p>Improve your cybersecurity skills by training with continuous challenges and practice.</p>
      <div className='button'>Get Started</div>
      <div className='InfoCardContainer'>
        <InfoCard text={"Solve security problems in he browser immediately with our built in system. We use containers to run commands on he spot."} logo={wrld} image={hacker}/>
        <InfoCard text={"Earn ranks by unlocking missions from beginner to experts. Do daily and weekly challenges to rank higher in the leaderboard."} logo={up} image={lvlup}/>
      </div>
    </div>
    </div>:<HomeContent loginToken={loginToken}/>}
    </React.Fragment>
  );
}

export default Home;
