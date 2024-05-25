import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const WrapNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px;
  button {
    margin-top: 15px;
  }
`;
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <WrapNotFound>
      Not Found
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </WrapNotFound>
  );
}
