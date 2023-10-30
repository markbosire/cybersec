import React from 'react'
function formatDate(milliseconds) {
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
       
    };
    const date = new Date(milliseconds);
    return date.toLocaleDateString('en-US', options) + " • " + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}
const EventComponent = ({events}) => {
    console.log(events)
  return (
    <div className='EventComponent'>
        <section>
           
                <img src={events.image}/>
            
            <div className='eventInfo'>
                <span className='title'>{events.title}</span>
                <span className='time'>{formatDate(events.time)}</span>
                <span className='location'>{events.location}</span>
                <span className='location'>{events.price}</span>
            </div>
        </section>
    </div>
  )
}

export default EventComponent