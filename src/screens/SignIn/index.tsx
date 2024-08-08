import React from 'react';
import * as S from './styles';
import {Icons} from '../../components';

export const SignIn = () => {
  return (
    <S.Container>
      <S.TitleHeader>👋🏼 Olá</S.TitleHeader>
      <S.DescriptionHeader>
        Digite seu e-mail e senha para entrar.
      </S.DescriptionHeader>
      <S.Form>
        <S.EmailInput label="Email" errorMessage="Ai zé da manga" />
        <S.PasswordInput
          label="Senha"
          errorMessage="Moshi moshi"
          RightComponent={<Icons name="eyeOn" color="gray2" />}
        />
        <S.ForgotPassword>
          <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
        </S.ForgotPassword>
      </S.Form>

      <S.ContainerButton>
        <S.ButtonSignIn title="Entrar" />
        <S.ButtonSignUp title="Criar uma conta" />
      </S.ContainerButton>
    </S.Container>
  );
};
