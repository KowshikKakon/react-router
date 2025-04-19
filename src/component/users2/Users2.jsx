import React, { use } from 'react';
import User3 from '../user3/User3';

const Users2 = ({ userPromise }) => {
    const users = use(userPromise);
    console.log("Suspense:", users);
    
    return (
        <div>
            <h1>This is users 2...</h1>
            {
               users.map(user=><User3 key={user.id} user={user}></User3>) 


         }
        </div>
    );
};

export default Users2;