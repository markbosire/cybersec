import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import TeamMember from '../components/Teammember';
import GadImage from '../assets/images/Gad.png'


const Team = () => {
    const [loginToken, setLoginToken] = useState(true);
    const teamMembers = [
        { name: 'Gad Owola', jobTitle: 'Founder', description: 'Wants the Youth to be more educated on Cyber Security to improve their lives', image: GadImage },
        { name: 'Gad Owola', jobTitle: 'Founder', description: 'Wants the Youth to be more educated on Cyber Security to improve their lives', image: GadImage },
        { name: 'Gad Owola', jobTitle: 'Founder', description: 'Wants the Youth to be more educated on Cyber Security to improve their lives', image: GadImage },
        { name: 'Gad Owola', jobTitle: 'Founder', description: 'Wants the Youth to be more educated on Cyber Security to improve their lives', image: GadImage },
        { name: 'Gad Owola', jobTitle: 'Founder', description: 'Wants the Youth to be more educated on Cyber Security to improve their lives', image: GadImage },
        { name: 'Gad Owola', jobTitle: 'Founder', description: 'Wants the Youth to be more educated on Cyber Security to improve their lives', image: GadImage },
        { name: 'Gad Owola', jobTitle: 'Founder', description: 'Wants the Youth to be more educated on Cyber Security to improve their lives', image: GadImage },
        { name: 'Gad Owola', jobTitle: 'Founder', description: 'Wants the Youth to be more educated on Cyber Security to improve their lives', image: GadImage },
        { name: 'Gad Owola', jobTitle: 'Founder', description: 'Wants the Youth to be more educated on Cyber Security to improve their lives', image: GadImage },
        { name: 'Gad Owola', jobTitle: 'Founder', description: 'Wants the Youth to be more educated on Cyber Security to improve their lives', image: GadImage },
        
      ];
    return(
  <div className="team">
    <Navbar loginToken={loginToken} />
    <section>
    <h1 style={{margin:"10px 0"}}>Team</h1>
    <div className="team-grid">
      {
      teamMembers.map((member, index) => (
        <TeamMember key={index} member={member}/>
      ))
      }
    </div>
    </section>
  </div>
)};

export default Team;
