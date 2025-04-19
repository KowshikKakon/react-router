import React from 'react';
import { Link } from 'react-router';

const User3 = ({ user }) => {
    
    const {id, body,title} = user;
    console.log("myu:", user);
    const user3Style = {
        
        border: '2px solid blue',
        borderRadious: '20px',
        padding: '10px',
        margin:'10px'
        

    }
    return (
        <div style={user3Style}>
            <h1>Body:{body}</h1>
            <h1>Title:{title}</h1>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User3;