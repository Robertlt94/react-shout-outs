import React from 'react';
import './UserInputs.css';
const UserInputs = ({username, date, message, handleUsernameChange, handleDateChange, handleMessageChange, handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username" className='username-label'>Username:</label>
            <input type="text" name="username" value={username} className='username-input' onChange={(e) => {handleUsernameChange(e)}} required/>
            <label htmlFor="date" className='date-label'>Date:</label>
            <input type="date" name="date" value={date} className='date-input' onChange={(e) => {handleDateChange(e)}} required/>
            </div>
            <div className='message-container'>
            <label htmlFor="message" className='message-label'>Messege:</label>
            <textarea type="text" name="message" value={message} className='message-input' onChange={(e) => {handleMessageChange(e)}} required/>
            </div>
            <button type="submit">Send</button>
        </form>
    );
};

export default UserInputs;