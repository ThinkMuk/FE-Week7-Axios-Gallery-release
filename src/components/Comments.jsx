import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} placeholder='댓글 작성...' onChange={(e) => setText(e.target.value)} />
        <button type='submit'>게시</button>
      </form>
      {comments.map((comment, idx) => (
        <p key={idx}>
          익명: {comment.commentBody}
          <button onClick={() => handleDelete(comment.id)}>삭제</button>
        </p>
      ))}
    </div>
  );
}
