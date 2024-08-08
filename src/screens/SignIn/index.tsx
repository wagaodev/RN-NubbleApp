import React from 'react';
import * as S from './styles';

export const SignIn = () => {
  return (
    <S.Container>
      <S.TitleHeader>👋🏼 Olá</S.TitleHeader>
      <S.DescriptionHeader>
        Digite seu e-mail e senha para entrar.
      </S.DescriptionHeader>
      <S.Form>
        <S.EmailInput label="Email" />
        <S.PasswordInput label="Senha" />
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
