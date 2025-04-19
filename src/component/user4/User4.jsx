import React from 'react';
import { useLoaderData } from 'react-router';

const User4 = () => { const user=useLoaderData()
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
        </div>
    );
};

export default User4;