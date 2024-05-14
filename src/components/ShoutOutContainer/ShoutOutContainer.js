import React from 'react';
import './ShoutOutContainer.css';
import ShoutOut from '../ShoutOut/ShoutOut';

const ShoutOutContainer = ({ props }) => {

    return (
        <div className='shout-out-container'>
            <h1>Latest News:</h1>
            <ShoutOut announcements={props.announcements.reverse()} />
        </div>
    );
};

export default ShoutOutContainer;