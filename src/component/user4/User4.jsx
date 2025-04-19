import React from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router';
import { useParams } from "react-router"
const User4 = () => {
    const user = useLoaderData()
    const navigate = useNavigate();
    const {id, body,title} = user;
    console.log("myu:", user);
    const user3Style = {
        
        border: '2px solid blue',
        borderRadious: '20px',
        padding: '10px',
        margin:'10px'
        

    }
    // params  userId show kore...
    let params = useParams()
    console.log("params:", params);
    // uselocation extra info dey...
    let location = useLocation()
    console.log("uselocation;",location);
    return (
        <div style={user3Style}>
            <h1>Body:{body}</h1>
            <h1>Title:{title}</h1>
            {/* -1 dea mane ak dhap pichone jao */}
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    );
};

export default User4;