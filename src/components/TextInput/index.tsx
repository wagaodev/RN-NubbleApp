import React, {useRef} from 'react';
import * as S from './styles';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  label: string;
}

export const TextInput = ({label, ...rest}: Props) => {
  const inputRef = useRef<RNTextInput>(null);
  const focusInput = () => inputRef?.current?.focus();

  return (
    <S.Press onPress={focusInput}>
      <S.Container>
        <S.Label>{label}</S.Label>
        <S.ContainerTextInputArea>
          <S.Input ref={inputRef} {...rest} />
        </S.ContainerTextInputArea>
      </S.Container>
    </S.Press>
  );
};
