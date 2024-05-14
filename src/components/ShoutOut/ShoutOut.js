import React from 'react';
import './ShoutOut.css';

const ShoutOut = ({ announcements }) => {

    return (
        announcements.toReversed().map((news, index) => {
            return (
                <div className="announcements" key={index}>
                    <p>Posted: {news.time}</p>
                    <h1>{news.username}</h1>
                    <h3>{news.date}: {news.message}</h3>
                    <hr />
                </div>
            )
        })
    )
};

export default ShoutOut;