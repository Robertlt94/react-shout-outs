import React from 'react';
import './MainContainer.css';
import ShoutOutContainer from '../ShoutOutContainer/ShoutOutContainer';
import UserInputs from '../UserInputs/UserInputs';

const MainContainer = ({props}) => {

    return (
        <div className='main-container'>
            <ShoutOutContainer props={props} />
            <UserInputs handleSubmit={props.handleSubmit} handleUsernameChange={props.handleUsernameChange} handleDateChange={props.handleDateChange} handleMessageChange={props.handleMessageChange} username={props.username} date={props.date} message={props.message} />
        </div>
    );
};

export default MainContainer;