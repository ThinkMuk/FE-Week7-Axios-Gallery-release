import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Comments from '../components/Comments';
const WrapArticle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const WrapArticleInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  width: 500px;
  justify-content: space-between;
  .commentLength {
    display: flex;
    align-items: center;
    font-size: 13px;
  }
`;
const ArticleInfo = styled.div`
  h4 {
    font-size: 20px;
  }
  p {
    font-size: 15px;
  }
`;
const Image = styled.img`
  width: 500px;
  height: 500px;
`;
export default function Article() {
  const [comments, setComments] = useState([]);
  const { articleId } = useParams();
  const { state } = useLocation();
  return (
    <WrapArticle>
      <WrapArticleInfo>
        <ArticleInfo>
          <h4>{state.name}</h4>
          <p>{state.txt}</p>
        </ArticleInfo>
        <div className='commentLength'>댓글: {comments.length}</div>
      </WrapArticleInfo>
      <Image src={state.img} />
      <Comments articleId={articleId} comments={comments} setComments={setComments} />
    </WrapArticle>
  );
}
