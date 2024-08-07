import React from 'react';
import * as S from './styles';

interface Props {
  label: string;
}

export const TextInput = ({label}: Props) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.ContainerTextInputArea>
        <S.Input />
      </S.ContainerTextInputArea>
    </S.Container>
  );
};
