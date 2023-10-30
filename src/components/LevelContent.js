import React,{useState} from 'react'
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/system';
const ResponsiveIframe = styled('iframe')`
  width: 560px;
  height: 315px;

  @media (max-width: 600px) {
    width: auto;
    height: calc((9 / 16) * (100vw)); /* Maintain aspect ratio */
  }
`;

const CybersecurityQuestion = ({ question, answer,index }) => {
    console.log(answer)
    const [userAnswer, setUserAnswer] = useState('');
    const answerWords = answer.split(' ');

    const hint = answerWords
      .map((word) => word[0] + '*'.repeat(word.length - 1))
      .join(' ');
  
    const handleInputChange = (e) => {
      setUserAnswer(e.target.value);
    };
  
    const handleButtonClick = () => {
      if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        // Handle correct answer logic here (e.g., move to the next question)
        console.log('Correct answer!');
      } else {
        // Handle incorrect answer logic here (e.g., show a message)
        console.log('Incorrect answer. Try again.');
      }
    };
  
    return (
      <div className='contentComponent'>
        <section>
        <div className='contentIndicator'></div>
        <div className='contentCard'>
          <h1 className='title'>Question {index+1}</h1>
          <p className='paragraph'>{question}</p>
          <div className='questionContainer'>
            <input
              className='Question'
              type='text'
              value={userAnswer}
              onChange={handleInputChange}
              placeholder={hint}
            />
            <div className='button' onClick={handleButtonClick}>
              Submit
            </div>
          </div>
        </div>
        </section>
      </div>
    );
  };

const LevelContent = ({questions}) => {
    const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
    console.log(questions.answers[0])

        const questionComponents = questions.questions.map((item, index) => (
            <CybersecurityQuestion key={index} question={item} answer={questions.answers[index]} index={index} />
          ));
      
       
      
  return (<React.Fragment>
     <Dialog
     className='playerModal'
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <ResponsiveIframe 
            src={questions.link} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
      </Dialog>

    <div className='Content'>
        <div className='contentComponent'>
            <section>
            <div className='contentIndicator'></div>
            <div className='contentCard'>
                <h1 className='title'>
                    Tutorial
                </h1>
                <p className='paragraph'>
                    Watch this tutorial to proceed
                </p>
                <div className='button' onClick={handleClickOpen}>Watch Tutorial</div>
            </div>
            </section>
        </div>
        <div className='contentComponent'>
        <section>
            <div className='contentIndicator'></div>
            <div className='contentCard'>
                <h1 className='title'>
                    Connect
                </h1>
                <p className='paragraph'>
                To attack the target machine, you must be on the same network.
                Connect to the Starting Point VPN using one of the following options.
                </p>
                <div className='buttonContainer'>
                <div className='button'>Use Open Vpn with local Machine</div>
                <div className='button'>Use CyberSec Computers</div>

                </div>
               
            </div>
            </section>
        </div>
        <div className='contentComponent'>
            <section>
            <div className='contentIndicator'></div>
            <div className='contentCard'>
                <h1 className='title'>
                    Start Target Machine
                </h1>
                <p className='paragraph'>
                Start the target machine and the ip will show up here
                </p>
                <div className='button'>Start Target Machine</div>
            </div>
            </section>
        </div>
      {questionComponents}
    </div>
    </React.Fragment>
  )
}

export default LevelContent