import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      Not Found
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
}
