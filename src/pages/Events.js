import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Events1 from '../assets/images/events1.png';
import Events2 from '../assets/images/events2.png';
import Filter from '../assets/images/filter.svg';
import EventsPic1 from '../assets/images/eventpic1.jpg';
import EventsPic2 from '../assets/images/eventpic2.jpg';
import EventsPic3 from '../assets/images/eventpic3.jpg';
import EventComponent from '../components/EventComponent';
import DateTimePicker from 'react-datetime-picker';

import Dialog from '@mui/material/Dialog'; // Import Dialog instead of Modal
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const Events = () => {
    
  const [loginToken, setLoginToken] = useState(true);
  const [indexTitle,setIndexTitle]=useState(0);
  const filterTitles = ["All", "Today", "Tomorrow", "Weekend", "Pick a date", "Free", "Paid"];
  const filterbuttons = filterTitles.map((title, index) => (
    <div
    style={{backgroundColor:indexTitle==index?"#fff":"#111927",color:indexTitle==index?"#111927":"#fff"}}
      key={index}
      onClick={() => {
        setIndexTitle(index)

        if (title === 'Pick a date') setOpen(true);
        else filterEvents(title);
      }}
    >
      {title}
    </div>
  ));

  const eventObjects = [
    {
      image: EventsPic1,
      title: "TEMS Africa ICT Expo and Conference",
      time: Date.now() + 140000000,
      location: "The Sarit Expo Center",
      price: "Free",
    },
    {
      image: EventsPic1,
      title: "TEMS Africa ICT Expo and Conference",
      time: Date.now() + 500000000,
      location: "The Sarit Expo Center",
      price: "Free",
    },
    {
      image: EventsPic1,
      title: "TEMS Africa ICT Expo and Conference",
      time: Date.now(),
      location: "The Sarit Expo Center",
      price: "Free",
    },
  ];



  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [filteredEvents, setFilteredEvents] = useState([...eventObjects]);
  const eventRender = filteredEvents.map((event, index) => (
    <EventComponent key={index} events={event} />
  ));
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setOpen(false);
    filterEvents('Pick a date', date);
  };

  const filterEvents = (filter, date = new Date()) => {
    setFilter(filter);
    let newEvents = [];

    switch (filter) {
      case 'Today':
        newEvents = eventObjects.filter(event => new Date(event.time).toDateString() === new Date().toDateString());
        break;
      case 'Tomorrow':
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        newEvents = eventObjects.filter(event => new Date(event.time).toDateString() === tomorrow.toDateString());
        break;
      case 'Weekend':
        newEvents = eventObjects.filter(event => {
          let eventDay = new Date(event.time).getDay();
          return eventDay === 6 || eventDay === 0; // 6 is Saturday, 0 is Sunday
        });
        break;
      case 'Pick a date':
        newEvents = eventObjects.filter(event => new Date(event.time).toDateString() === date.toDateString());
        break;
      case 'Free':
        newEvents = eventObjects.filter(event => event.price.toLowerCase() === 'free');
        break;
      case 'Paid':
        newEvents = eventObjects.filter(event => event.price.toLowerCase() !== 'free');
        break;
      default:
        newEvents = [...eventObjects];
    }

    setFilteredEvents(newEvents);
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={() => setOpen(false)}>
      
        <DateTimePicker onChange={handleDateChange} value={selectedDate} />
      </Dialog>
      <div className="Events">
        <Navbar loginToken={loginToken} />
        <div className="eventsHeader">
          <div className="title">
            <section>
              <img src={Events1} alt="" />
              <span>Upcoming Cyber Security Events</span>
              <img src={Events2} alt="" />
            </section>
          </div>
          <div className="filter">
            <section>
              <div className="filterButtons">{filterbuttons}</div>
              <div className="filterLabel">
                <div>
                  <img src={Filter} alt="" />
                </div>
                <span>Filter</span>
              </div>
            </section>
          </div>
        </div>
        <div className="eventsBody">
          <section>{eventRender}</section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Events;
