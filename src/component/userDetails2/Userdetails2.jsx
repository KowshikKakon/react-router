import React, { use } from 'react';

const Userdetails2 = ({ userpromise }) => {
    const userPromise2 = use(userpromise)
    const { userId, title } = userPromise2;
    console.log("mypor:", userPromise2);
   
    return (
        <div>
            <p><small>Title={ title}</small></p>
        </div>
    );
};

export default Userdetails2;