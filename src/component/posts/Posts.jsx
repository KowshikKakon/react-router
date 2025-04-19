import React from 'react';
import { useLoaderData } from 'react-router';
import Posts2 from '../posts2/Posts2';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>This is my posts:{posts.length}</h2>
            <div>
                {
                    
            posts.map(post=> <Posts2 key={post.id} post2={post}></Posts2>)

}

            </div>
        </div>
    );
};

export default Posts;