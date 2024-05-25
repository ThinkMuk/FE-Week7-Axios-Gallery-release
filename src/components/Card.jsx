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
  justify-content: center;

  h4 {
    font-size: 15px;
  }
  p {
    font-size: 12px;
    color: gray;
  }
`;

function txtOverflow(txt) {
  txt = txt.substr(0, 14) + '...';
  return txt;
}
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
      <h4>{name.length < 15 ? name : txtOverflow(name)}</h4>
      <p>{txt.length < 15 ? txt : txtOverflow(txt)}</p>
    </Wrapper>
  );
}
