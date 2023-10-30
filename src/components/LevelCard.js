import React, { useState } from 'react'
import CircularWithValueLabel from './CircularProgressWithLabel'
import { style } from '@mui/system'
import LevelContent from './LevelContent'

const LevelCard = ({level,index,levelTitle,levelProgress,questions}) => {
  
    const[height,setHeight]=useState(false)
    
  return (
    level>=index?<div className='levelContainer'><div className='LevelCard' onClick={()=>{
        setHeight(!height)
    }} style={{marginBottom:"0"}}>
        <section>
        <div className='levelHeader'>
            <p className='title'>Level {index}:{levelTitle}</p>
            <p className='note'>
                {levelProgress==100?"completed":`Complete level ${index} to unlock level ${index+1}`}
            </p>

        </div>
        <div className='levelfooter'>
            <CircularWithValueLabel prog={levelProgress}/>
        </div>
        </section>
    </div>
    <div className='levelContent' style={{display:height?"block":"none"}}>
        <section>
        <LevelContent questions={questions}/>
        </section>
    </div>
    
    </div>:<div className='LevelCard unlocked'>
        <div>
        <i class="fa fa-lock" aria-hidden="true"></i>
        <p>level {index} locked</p>
        </div>

    </div>
  )
}

export default LevelCard