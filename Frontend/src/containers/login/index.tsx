import { useState } from 'react';

import * as S from '../../styles/registation.styled';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <S.Container>
        <img src="./logo.png" alt="logo" />
        <S.Form onSubmit={handleSubmit}>
          <h3>Faça Login.</h3>
          <div>
            <label>Email:</label>
            <S.Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Informe seu email"
            />
            <label>Senha:</label>
            <S.Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Informe sua senha"
            />
          </div>
          <div className="buttons">
            <S.Button className="register">Cadastrar</S.Button>
            <S.Button>Entrar</S.Button>
          </div>
        </S.Form>
      </S.Container>
    </>
  );
}

export default LoginPage;
