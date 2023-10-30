const TeamMember = ({member}) => (
    <div className="team-member">
      <img src={member.image} alt="Team member" className="team-member-image" />
      <span className="team-member-name">{member.name}</span>
      <span className="team-member-job-title">{member.jobTitle}</span>
      <span className="team-member-description">{member.description}</span>
    </div>
  );
  export default TeamMember;