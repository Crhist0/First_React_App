import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/card/Card';
import { StyledDiv } from './style';

export const Cards = () => {
  return (
    <>
      <StyledDiv >
        <Card title='Crhistian' body='Aluno GrowDev - turma 5'></Card>
        <Card title='Aluno 2' body='Aluno GrowDev - turma 5'></Card>
        <Card title='Aluno 3' body='Aluno GrowDev - turma 5'></Card>
        <Card title='Aluno 4' body='Aluno GrowDev - turma 5'></Card>
      </StyledDiv>
      <StyledDiv >
        <Link to={'/login'}>Login</Link>
      </StyledDiv>
    </>
  );
};
