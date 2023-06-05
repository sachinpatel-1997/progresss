import './App.css';

import React, { useState, useEffect } from 'react';

const App = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    const calculateRemainingTime = () => {
      const startDateTime = new Date(startDate);
      const endDateTime = new Date(endDate);
      const currentTime = new Date();

      if (currentTime >= startDateTime && currentTime <= endDateTime) {
        const timeDifference = endDateTime - currentTime;
        const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));

        setRemainingTime(
          `${remainingHours}h`
        );
      } else {
        setRemainingTime('Countdown expired');
      }
    };

    const interval = setInterval(calculateRemainingTime, 1000);

    return () => clearInterval(interval);
  }, [startDate, endDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedStartDate = e.target.elements.startDate.value;
    const submittedEndDate = e.target.elements.endDate.value;
    setStartDate(submittedStartDate);
    setEndDate(submittedEndDate);
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <form onSubmit={handleSubmit}>
        <label>Start Date & Time:</label>
        <input type="datetime-local" name="startDate" required />
        <br />
        <label>End Date & Time:</label>
        <input type="datetime-local" name="endDate" required />
        <br />
        <button type="submit">Start Countdown</button>
      </form>
      {/* {remainingTime && <p>{remainingTime}</p>} */}
      {startDate && endDate && (
       
               <div class="progress-circle p12">
         <span>{remainingTime} hours</span>
         <div class="left-half-clipper">
           <div class="first50-bar"></div>
           <div class="value-bar"></div>
         </div>
       </div>
             )}
    </div>
  );
};

export default App;


