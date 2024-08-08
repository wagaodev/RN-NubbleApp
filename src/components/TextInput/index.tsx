import React, {useRef} from 'react';
import * as S from './styles';
import {TextInput as RNTextInput} from 'react-native';
import {Props} from './types';

export const TextInput = ({
  label,
  errorMessage,
  RightComponent,
  ...rest
}: Props) => {
  const inputRef = useRef<RNTextInput>(null);
  const focusInput = () => inputRef?.current?.focus();

  return (
    <S.Press onPress={focusInput}>
      <S.Container>
        <S.Label>{label}</S.Label>
        <S.ContainerTextInputArea errorMessage={errorMessage}>
          <S.Input ref={inputRef} {...rest} />
          {RightComponent && <S.IconButton>{RightComponent}</S.IconButton>}
        </S.ContainerTextInputArea>
        <S.ErrorMessageLabel>{errorMessage}</S.ErrorMessageLabel>
      </S.Container>
    </S.Press>
  );
};
