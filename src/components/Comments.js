import React from 'react';
import styled from 'styled-components';
import { FaThumbsUp, FaThumbsDown, FaStar } from 'react-icons/fa';

const CommentsContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #333;
  border-radius: 8px;
`;

const CommentItem = styled.div`
  padding: 10px;
  margin: 10px 0;
  border-bottom: 1px solid #444;
`;


function Comments({ comments, onAddComment, onUpdateComment }) {
  return (
    <CommentsContainer>
      <h4>Comments</h4>
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <CommentItem key={index}>
            <strong>{comment.username}</strong> - {new Date(comment.date).toLocaleString()}
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} color={star <= comment.rating ? '#ffd700' : '#4a4a4a'} />
              ))}
            </div>
            {comment.comment && <p>{comment.comment}</p>}
            {comment.wouldReturn ? (
              <FaThumbsUp color="#00bcd4" title="Would Return" />
            ) : (
              <FaThumbsDown color="#ff4081" title="Would Not Return" />
            )}
          </CommentItem>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
      
    </CommentsContainer>
  );
}

export default Comments;
