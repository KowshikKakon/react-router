import React, { Suspense, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import Userdetails2 from '../userDetails2/Userdetails2';

const User3 = ({ user }) => {
    const [showInfo, setShowInfo] = useState(false);
    const [visitHome,setVisitHome]=useState(false)
    let navigate = useNavigate();
    const navBtn = () => {
        
        navigate(`/users/${id}`);

    }
    const { id, body, title } = user;
    const userpromise=fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>res.json())
    
    // console.log("myu:", user);
    const user3Style = {
        
        border: '2px solid blue',
        borderRadious: '20px',
        padding: '10px',
        margin:'10px'
        

    }
    if (visitHome) {
        // return korte hobe...
       return <Navigate to="/laptops" />
    }
    return (
        <div style={user3Style}>
            <h1>Body:{body}</h1>
            <h1>Title:{title}</h1>
            <Link to={`/users/${id}`}>Show Details</Link>
            {/* <button onClick={navBtn}>{ showInfo?'Hide':'Detail'}</button> */}
            <button onClick={()=>setShowInfo(!showInfo)}>{ showInfo?'Hide':'Detail'}</button>
        
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                   <Userdetails2 userpromise={userpromise}></Userdetails2> 

                </Suspense>

            }
            <button onClick={()=>setVisitHome(true)}>Visit Home</button>
        
        </div>
    );
};

export default User3;