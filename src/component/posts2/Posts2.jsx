import React from 'react';
import { Link } from 'react-router';

const Posts2 = ({ post }) => {
    const { id, title } = post;
    return (
        <div style={{border:'2px solid red'}}>
            <h3>{title}</h3>
            <Link to={ `/post2/${id}`}>
            
            <button>Show Details</button>
            
            </Link>
        </div>
    );
};

export default Posts2;