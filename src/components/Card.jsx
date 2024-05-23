import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Photo = styled.img`
  width: 170px;
  height: 170px;
`;

const Wrapper = styled.div`
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Card({ img, name, id, txt }) {
  const navigate = useNavigate();
  return (
    <Wrapper
      id={id}
      onClick={() =>
        navigate(`/article/${id}`, {
          state: {
            img,
            name,
            txt,
          },
        })
      }
    >
      <Photo src={img} />
      <h4>{name}</h4>
      <p>{txt}</p>
    </Wrapper>
  );
}
