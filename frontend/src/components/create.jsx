// MatchForm.js

import React, { useState } from 'react';

const teams = ["CSK", "GT", "DC", "KKR", "LSG", "MI", "PBKS", "RR", "RCB", "SRH"];

function MatchForm() {
  const [formData, setFormData] = useState({
    team1: '',
    team2: '',
    matchDate: '2024-05-10',
    time: '19:30',
    venue: '',
    tossWinner: '',
    tossDate: '2024-05-10',
    tossTime: '17:00',
    matchWinner: '',
    matchwinnerDate: '2024-05-10',
    matchwinnerTime: '19:10',
    matchNumber: '',
    team1Run: '1',
    team1Wicket: '1',
    team1Over: '20',
    team2Run: '1',
    team2Wicket: '1',
    team2Over: '20',
    actualmatchWinner: '',
    actualtossWinner: '',
    highlight: 'null'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const oldDate = formData.matchDate;
    // const oldTime = formData.time;

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11

    const CorrectDate = formData.matchDate;
    const CorrectTime = formData.time;
    
    // Parse CorrectDate into a Date object
    const dateObj = new Date(CorrectDate);
    
    // Extract year, month, and day from CorrectDate
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const day = dateObj.getDate();
    
    // Parse CorrectTime into hours and minutes
    const [hoursStr, minsStr] = CorrectTime.split(':');
    const hoursInt = parseInt(hoursStr, 10);
    const minsInt = parseInt(minsStr, 10);

    const newHoursInt = hoursInt - 1;
    const newMinsInt = minsInt -  30;
    
    // Set the time part to the date object
    dateObj.setHours(newHoursInt);
    dateObj.setMinutes(newMinsInt);
    
    // Format the deadline
    const deadline = dateObj.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    
    // Now deadline contains both date and time combined correctly
    console.log(" create deadline : ", deadline); // Example output: "May 4, 2024, 19:30"

    formData.matchDate = deadline;

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    const matchNumber = formData.matchNumber.toString().padStart(2, '0');
    const uniqueId = `IPL24_${matchNumber}`;
    console.log(formData)

    try {
      console.log({ ...formData, uniqueId })
      const response = await fetch('https://tipsinsight.onrender.com/create/IPL', {
      // const response = await fetch('http://localhost:3000/create/IPL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, uniqueId })
      });

      if (!response.ok) {
        throw new Error('Failed to create match.');
      }

      alert('Match created successfully.');
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }  
  };  

  return (
    <div>
      {/* <h1>Create a New Match</h1> */}
      <form onSubmit={handleSubmit}>
        <div className='flex m-auto justify-center items-center my-10'>
          <label htmlFor="matchNumber">Match Number(unique):</label>
          <input type="number" id="matchNumber" name="matchNumber" value={formData.matchNumber} onChange={handleChange} min="1" required /><br /><br />
        </div>
        <div className='flex flex-row justify-center my-7'>
        <div>
      <label htmlFor="team1">Team 1:</label>
        <select id="team1" name="team1" value={formData.team1} onChange={handleChange} required>
          <option value="">Select Team</option>
          {teams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
            ))}
        </select><br /><br />
            <label htmlFor="team1Run">Team1 Run:</label>
            <input type="number" id="team1Run" name="team1Run" value={formData.team1Run} onChange={handleChange} min="1" required /><br /><br />
    
            <label htmlFor="team1Wicket">Team1 Wicket:</label>
            <input type="number" id="team1Wicket" name="team1Wicket" value={formData.team1Wicket} onChange={handleChange} min="1" required /><br /><br />
    
            <label htmlFor="team1Over">Team1 Over:</label>
            <input type="text" id="team1Over" name="team1Over" value={formData.team1Over} onChange={handleChange} min="1" required /><br /><br />

            </div>
            <div>
        <label htmlFor="team2">Team 2:</label>
        <select id="team2" name="team2" value={formData.team2} onChange={handleChange} required>
          <option value="">Select Team</option>
          {teams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
          ))}
        </select><br /><br />

            <label htmlFor="team2Run">Team2 Run:</label>
            <input type="number" id="team2Run" name="team2Run" value={formData.team2Run} onChange={handleChange} min="1" required /><br /><br />
    
            <label htmlFor="team2Wicket">Team2 Wickets:</label>
            <input type="number" id="team2Wicket" name="team2Wicket" value={formData.team2Wicket} onChange={handleChange} min="1" required /><br /><br />
    
            <label htmlFor="team2Over">Team2 Over:</label>
            <input type="text" id="team2Over" name="team2Over" value={formData.team2Over} onChange={handleChange} min="1" required /><br /><br />
       
            </div>
            </div>

            <div className='flex flex-row justify-around items-center divide-x-4 my-5'>

<div>
        <label htmlFor="matchDate">Match Date:</label>
        <input type="date" id="matchDate" name="matchDate" value={formData.matchDate} onChange={handleChange} required /><br /><br />
        </div>
  <div>
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required /><br /><br />
        </div>
        <div>
                 <label htmlFor="venue">Venue:</label>
        <input type="text" id="venue" name="venue" value={formData.venue} onChange={handleChange} required /><br /><br />
        </div> 
        </div>

<div className='flex flex-row justify-center'>
<div className='mr-10'>
        <label htmlFor="actualtossWinner">Actual Toss Winner:</label>
          <select id="actualtossWinner" name="actualtossWinner" value={formData.actualtossWinner} onChange={handleChange} required>
            <option value="">Select Team</option>
            <option value={formData.team1}>Team 1({formData.team1})</option>
            <option value={formData.team2}>Team 2({formData.team2})</option>
          </select><br /><br />

        <label htmlFor="tossWinner">Predicted Toss Winner:</label>
        <select id="tossWinner" name="tossWinner" value={formData.tossWinner} onChange={handleChange} required>
          <option value="">Select Team</option>
          <option value={formData.team1}>Team 1({formData.team1})</option>
          <option value={formData.team2}>Team 2({formData.team2})</option>
        </select><br /><br />

        <label htmlFor="tossDate">Toss Updated Date:</label>
        <input type="date" id="tossDate" name="tossDate" value={formData.tossDate} onChange={handleChange} required /><br /><br />

        <label htmlFor="tossTime">Toss Updated Time:</label>
        <input type="time" id="tossTime" name="tossTime" value={formData.tossTime} onChange={handleChange} required /><br /><br />

        </div>
        <div>

        <label htmlFor="actualmatchWinner">Actual Match Winner:</label>
        <select id="actualmatchWinner" name="actualmatchWinner" value={formData.actualmatchWinner} onChange={handleChange} required>
          <option value="">Select Team</option>
          <option value={formData.team1}>Team 1({formData.team1})</option>
          <option value={formData.team2}>Team 2({formData.team2})</option>
        </select><br /><br />

        <label htmlFor="matchWinner">Predicted Match Winner:</label>
        <select id="matchWinner" name="matchWinner" value={formData.matchWinner} onChange={handleChange} required>
          <option value="">Select Team</option>
          <option value={formData.team1}>Team 1({formData.team1})</option>
          <option value={formData.team2}>Team 2({formData.team2})</option>
        </select><br /><br />

        <label htmlFor="matchwinnerDate">matchwinner Updated Date:</label>
        <input type="date" id="matchwinnerDate" name="matchwinnerDate" value={formData.matchwinnerDate} onChange={handleChange} required /><br /><br />

        <label htmlFor="matchwinnerTime">matchwinner Updated Time:</label>
        <input type="time" id="matchwinnerTime" name="matchwinnerTime" value={formData.matchwinnerTime} onChange={handleChange} required /><br /><br />

        </div>
        </div>

        <div className='flex m-auto justify-center items-center'>
        <label htmlFor="highlight">highlight:</label>
        <input type="text" id="highlight" name="highlight" value={formData.highlight} onChange={handleChange} min="1" required /><br /><br />
        </div>

        {/* <label htmlFor="tossWinner">Toss Winner:</label>
        <select id="tossWinner" name="tossWinner" value={formData.tossWinner} onChange={handleChange}>
          <option value="">Select Team</option>
          {teams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
          ))}  
        </select><br /><br />  

        <label htmlFor="matchWinner">Match Winner:</label>
        <select id="matchWinner" name="matchWinner" value={formData.matchWinner} onChange={handleChange}>
          <option value="">Select Team</option>
          {teams.map((team, index) => (
            <option key={index} value={team}>{team}</option>
          ))}    
        </select><br /><br /> */}





<div className='flex m-auto justify-center '></div>
        <button className= "border-xl" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MatchForm;
