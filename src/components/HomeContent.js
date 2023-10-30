import React, { useState } from 'react'
import Navbar from './Navbar'
import XpBar from './XpBar'
import LevelCard from './LevelCard'

const HomeContent = (loginToken) => {
    const cyberSecurity = [
        {
          title: "Cybersecurity Basics",
          questions: [
            "What command can you use to test the reachability of a remote host and check if it's online, which is often used by attackers to identify live targets before launching an attack?",
            "What command provides detailed information about network connections, routing tables, interface statistics, masquerade connections, and other network-related information, making it useful for identifying suspicious network activity?",
            "What is the name of the popular open-source tool used for network discovery and security auditing, which can be employed by both network administrators and hackers to scan and map network services and vulnerabilities?",
            "Which command is used in Linux-based systems to configure the firewall rules and is crucial for securing the network by allowing or blocking specific traffic based on predefined security policies?",
            "What is the name of the widely used network protocol analyzer that allows security professionals to capture and inspect network data packets, making it an essential tool for identifying and analyzing network intrusions and vulnerabilities?"
          ],
          answers: [
            "ping",
            "netstat",
            "nmap",
            "iptables",
            "wireshark"
          ],
          link: "https://www.youtube.com/embed/inWWhr5tnEA?si=91V8ZHE8frESa9gB"
        },
        {
          title: "Cryptography",
          questions: [
            "What is encryption?",
            "What is the purpose of a 'public key' in cryptography?",
            "Name a widely-used encryption algorithm.",
            "Explain the term 'decryption.'",
            "What is a 'symmetric key'?"
          ],
          answers: [
            "Securing data",
            "Asymmetric cryptography",
            "AES",
            "Reversing encryption",
            "Shared secret key"
          ],
          link: "https://www.youtube.com/embed/inWWhr5tnEA?si=91V8ZHE8frESa9gB"
        },
        {
          title: "Network Security",
          questions: [
            "What is a 'DMZ' in network security?",
            "What does 'VPN' stand for?",
            "Define 'packet filtering' in the context of security.",
            "What is a 'honeypot' used for?",
            "Explain 'port scanning.'"
          ],
          answers: [
            "Demilitarized Zone",
            "Virtual Private Network",
            "Filtering network traffic",
            "Deceptive security measure",
            "Probing network ports"
          ],
          link: "https://www.youtube.com/embed/inWWhr5tnEA?si=91V8ZHE8frESa9gB"
        },
        {
          title: "Access Control",
          questions: [
            "What is 'authentication' in cybersecurity?",
            "Define 'authorization.'",
            "What are 'access control lists' (ACLs) used for?",
            "Explain 'least privilege' principle.",
            "What is 'biometric authentication'?"
          ],
          answers: [
            "Verifying identity",
            "Permission granting",
            "Restricting access",
            "Granting minimal permissions",
            "Using physical traits"
          ],
          link: "https://www.youtube.com/embed/inWWhr5tnEA?si=91V8ZHE8frESa9gB"
        },
        {
          title: "Social Engineering",
          questions: [
            "What is 'phishing'?",
            "Define 'spear-phishing.'",
            "What is 'pretexting' in social engineering?",
            "Explain 'tailgating.'",
            "What is 'baiting'?"
          ],
          answers: [
            "Deceptive email",
            "Targeted deceptive email",
            "Creating a false scenario",
            "Unauthorized entry",
            "Luring with malicious content"
          ],
          link: "https://www.youtube.com/embed/inWWhr5tnEA?si=91V8ZHE8frESa9gB"
        },
        {
          title: "Incident Response",
          questions: [
            "What is an 'incident response plan'?",
            "Define 'detection' in incident response.",
            "What is 'containment'?",
            "Explain 'forensic analysis' in cybersecurity.",
            "What is the 'chain of custody'?"
          ],
          answers: [
            "Prepared response strategy",
            "Identifying security incidents",
            "Isolating the incident",
            "Digital evidence investigation",
            "Documenting evidence handling"
          ],
          link: "https://www.youtube.com/embed/inWWhr5tnEA?si=91V8ZHE8frESa9gB"
        },
        {
          title: "Security Protocols",
          questions: [
            "What is 'SSH' used for?",
            "Define 'SSL/TLS.'",
            "What is 'WPA2' in Wi-Fi security?",
            "Explain 'IPsec.'",
            "What is '2FA'?"
          ],
          answers: [
            "Secure remote login",
            "Transport Layer Security",
            "Wireless network encryption",
            "Internet Protocol security",
            "Two-factor authentication"
          ],
          link: "https://www.youtube.com/embed/inWWhr5tnEA?si=91V8ZHE8frESa9gB"
        },
        {
          title: "Firewalls and IDS/IPS",
          questions: [
            "What is a 'stateful firewall'?",
            "Define 'Intrusion Detection System (IDS).'",
            "What is 'IPS'?",
            "Explain 'deep packet inspection.'",
            "What is 'anomaly-based detection'?"
          ],
          answers: [
            "Examining packet state",
            "Detecting network threats",
            "Intrusion Prevention System",
            "Analyzing packet content",
            "Identifying unusual behavior"
          ],
          link: "https://www.youtube.com/embed/inWWhr5tnEA?si=91V8ZHE8frESa9gB"
        }
      ];
      
      // You can access the questions and answers using cybersecurityQuestions array.
      
const [level,setLevel]= useState(0) ;
const [progress,setProgress]= useState(0) ;

function levels() {
   
    let levelCards = [];
    for (let index = 0; index < cyberSecurity.length; index++) {
        levelCards.push(<LevelCard level={level} index={index} levelTitle={cyberSecurity[index].title} levelProgress={progress} questions={cyberSecurity[index]}/>);
    }
    return levelCards;
}

  return (<React.Fragment>
     <Navbar loginToken={loginToken}/>
     <div className='HomeContent'>
       
       <XpBar/>
       {levels()}
  </div>
  </React.Fragment>
 
  )
}

export default HomeContent