import React from 'react';
import './UserInputs.css';
const UserInputs = ({username, date, message, handleUsernameChange, handleDateChange, handleMessageChange, handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className='name-input-container'>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={username} onChange={(e) => {handleUsernameChange(e)}} required/>
            </div>
            <div className='date-input-container'>
                <label htmlFor="date" >Date:</label>
                <input type="date" name="date" value={date} onChange={(e) => {handleDateChange(e)}} required/>
            </div>
            <div className='message-input-container'>
                <label htmlFor="message">Messege:</label>
                <textarea type="text" name="message" value={message} onChange={(e) => {handleMessageChange(e)}} required/>
            </div>
            <button type="submit">Send</button>
        </form>
    );
};

export default UserInputs;