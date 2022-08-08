import { useState } from 'react';

import { userRegister } from '../../services/UserService';

import { Link } from 'react-router-dom';

import * as S from '../../styles/registation.styled';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userRegister(name, email, password);
  };

  return (
    <>
      <S.Container>
        <img src="./logo.png" alt="logo" />
        <S.Form onSubmit={handleSubmit}>
          <h3>Faça seu cadastro.</h3>
          <div>
            <label>Nome:</label>
            <S.Input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Informe seu nome"
            />
            <label>Email:</label>
            <S.Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Informe seu email"
            />
            <label>Senha:</label>
            <S.Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Informe sua senha"
            />
          </div>
          <div className="buttons">
            <S.Button type="submit">Cadastre-se</S.Button>
            <Link to="/">
              <S.Button className="register">voltar</S.Button>
            </Link>
          </div>
        </S.Form>
      </S.Container>
    </>
  );
}

export default RegisterPage;
