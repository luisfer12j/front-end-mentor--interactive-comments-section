import React from 'react';

const Comment = ({commentInfo}) => {
    console.log(commentInfo)
    return (
        <div className='comment-container'>
            <div className='comment-info-container'>
                <div className='comment-img-container'>
                    <img src={commentInfo.user.image.png} alt="" />
                </div>
                <p className='comment-info-username'>{commentInfo.user.username}</p>
                <p className='ligth'>{commentInfo.createdAt}</p>
            </div>
            <div className='comment-text-container'>
                <p>{commentInfo.content}</p>
            </div>
            <div className='comment-options-container'>
                <div className='comment-options-counter ligth'>
                    <button><img src="./src/assets/images/icon-plus.svg" alt="" /></button>
                    <span>{commentInfo.score}</span>
                    <button><img src="./src/assets/images/icon-minus.svg" alt="" /></button>
                </div>
                <div className='comment-options-reply'>
                    <button><img src="./src/assets/images/icon-reply.svg" alt="" /> Reply</button>
                </div>
            </div>
        </div>
    );
};

export default Comment;