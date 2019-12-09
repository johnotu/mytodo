import React, { useState } from 'react';
import useInterval from './utils/UseInterval';

function Header() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const timeQuotes = [
    "The trouble is you think you have time",
    "Don't wait. The time will never be just right",
    "Your time is limited, so don't waste it living someone else's life",
    "God seems to have left the receiver off the hook and time is running out",
    "Lost time is never found again",
    "We have so much time and so little to do. Strike that, reverse it",
    "Always in motion is the future",
    "Time is, time was, but time shall be no more",
    "Nothing keeps. There is one law in the universe: NOW",
    "What a slut time is. She screws everybody",
    "All we have to decide is what to do with the time that is given us",
    "I wasted time, and now doth time waste me",
    "If thou takest time into thy affairs, it will allay and arrange all things",
    "Let every man be master of his time",
    "One must work with time and not against it",
    "Time treads down empires",
    "Time is a trust, and for every minute of it you will have to account"
  ];

  const getQuote = () =>
    timeQuotes[Math.floor(Math.random() * timeQuotes.length)];

  const [date, setDate] = useState(new Date());
  const [quote, setQuote] = useState(getQuote());

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  useInterval(() => setQuote(getQuote()), 10000);

  const getToday = () =>
    `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  const countDown = () => `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  

  return (
    <div>
      <h1 className="display-4">{getToday()}</h1>
      <h1 className="display-4">{countDown()}</h1>
      <div className="bg-light border border-secondary">
        <div className="bg-secondary" style={{ height: '24px', width: `${date.getHours()/24 * 100}%` }}></div>
      </div>
  <small>{quote}</small>

    </div>
  );
}

export default Header;