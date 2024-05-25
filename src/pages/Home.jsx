import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import likelionImage from '../assets/likelion.png';

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;
const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 15px;
`;
const ProfileText = styled.div`
  .profileTitle {
    color: rgb(255, 151, 40);
  }
  .profileDescription {
    font-size: 15px;
  }
`;
const CenterComponents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const WrapArticles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  max-width: 780px;
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
      <CenterComponents>
        <Profile>
          <ProfileImg src={likelionImage} />
          <ProfileText>
            <h3 className='profileTitle'>Likelion_12th_Frontend</h3>
            <p className='profileDescription'>멋쟁이 사자처럼 12기 화이팅!</p>
            <h5>게시물 {articles.length}개</h5>
          </ProfileText>
        </Profile>
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
      </CenterComponents>
    </div>
  );
}
