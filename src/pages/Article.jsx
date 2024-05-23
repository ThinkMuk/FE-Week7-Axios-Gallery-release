import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Comments from '../components/Comments';
const Image = styled.img`
  width: 250px;
  height: 250px;
`;

export default function Article() {
  const [comments, setComments] = useState([]);
  const { articleId } = useParams();
  const { state } = useLocation();
  return (
    <div>
      <h4>{state.name}</h4>
      <div>댓글 :{comments.length}</div>
      <p>{state.txt}</p>
      <Image src={state.img} />
      <Comments articleId={articleId} comments={comments} setComments={setComments} />
    </div>
  );
}
