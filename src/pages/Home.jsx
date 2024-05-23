import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const WrapArticles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  margin-bottom: 10px;
`;

export default function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get('http://3.36.127.43:8080/imageAll')
      .then((res) => setArticles(res.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <div>게시물 {articles.length}개</div>
      <WrapArticles>
        {articles &&
          articles.map((article) => (
            <Card
              img={article.imageURL}
              name={article.imageName}
              id={article.id}
              key={article.id}
              txt={article.imageText}
            />
          ))}
      </WrapArticles>
    </div>
  );
}
