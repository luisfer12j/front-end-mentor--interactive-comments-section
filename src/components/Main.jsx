import React from 'react';
import Comment from './Comment';
import Data from '../data.json'
import { useState } from 'react';

const Main = () => {
    const [comments,setComments] = useState(Data.comments)
    // console.log((comments))
    return (
        <div className='big-container'>
            {comments.map((comment)=>(
                <Comment key={comment.id} commentInfo={comment}/>
            ))}
        </div>
    );
};

export default Main;