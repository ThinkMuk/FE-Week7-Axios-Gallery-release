import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const WrapComments = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  .emptyComments {
    display: flex;
    color: gray;
  }
`;
const CommentInput = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  input {
    width: 80%;
    height: 20px;
  }
  button {
    width: 15%;
  }
`;
const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1px;
  .user {
    font-size: 15px;
    font-weight: bold;
    margin-right: 2px;
  }
  .comment {
    font-size: 15px;
  }
  button {
    padding: 0 2px;
  }
`;
export default function Comments({ articleId, comments, setComments }) {
  const [text, setText] = useState('');
  //댓글 불러오기
  useEffect(() => {
    axios
      .get(`http://3.36.127.43:8080/${articleId}/comments`)
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));
    console.log('data fetched');
  }, []);
  //댓글 달기
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://3.36.127.43:8080/${articleId}/comments`,
        { commentBody: text },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((res) => {
        setComments((prevComments) => [...prevComments, res.data]);
        setText('');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //댓글 지우기
  const handleDelete = (id) => {
    axios
      .delete(`http://3.36.127.43:8080/${articleId}/comments/${id}`)
      .then((res) => {
        setComments(comments.filter((comment) => comment.id !== id));
        console.log('comment deleted');
      })
      .catch((error) => console.log(error));
  };
  return (
    <WrapComments>
      <CommentInput onSubmit={handleSubmit}>
        <input type='text' value={text} placeholder='댓글 작성...' onChange={(e) => setText(e.target.value)} />
        <button type='submit'>게시</button>
      </CommentInput>
      {comments.length === 0 ? (
        <div className='emptyComments'>댓글창이 비어있어요!</div>
      ) : (
        comments.map((comment, idx) => (
          <Comment key={idx}>
            <div>
              <span className='user'>익명 </span>
              <span className='comment'>{comment.commentBody}</span>
            </div>
            <button onClick={() => handleDelete(comment.id)}>삭제</button>
          </Comment>
        ))
      )}
    </WrapComments>
  );
}
