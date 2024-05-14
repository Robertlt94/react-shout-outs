import React, { useState, useEffect } from 'react';
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  const [announcements, setAnnouncement] = useState([])
  const [username, setUsername] = useState('');
  const [date, setDate] = useState("yyyy-MM-dd");
  const [time] = useState( Date() );
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const clearInputs = () => {
    setUsername("");
    setDate("YYYY-MM-DD");
    setMessage("");
    setError("");
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnnouncement([...announcements, {
      username: username,
      date: date,
      time: time,
      message: message,
    }]);
    alert("Success!")
    clearInputs();
  }

  return (
    <div className="App">
      <MainContainer props={{ announcements, username, date, message, handleUsernameChange, handleDateChange, handleMessageChange, handleSubmit }}/>
    </div>
  );
}

export default App;
