import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const myData = useLoaderData();
    console.log("myData",myData);
   
    return (
        <div>
            <h1>This is Users page...</h1>
        </div>
    );
};

export default Users;