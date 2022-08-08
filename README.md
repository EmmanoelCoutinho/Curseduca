# Curseduca

## Pré-requisitos
Para como meçar e importante salientar que o projeto necessita de alguns pré-requisto
caso não os possua vou deixar a lista dos essênciais com seus respectivos links para adesão
- NodeJs -> https://nodejs.org/en/
- Docker e Docker-compose -> https://www.docker.com/
- Yarn -> https://yarnpkg.com/

## Primeiros passos
- O primeiro passou e logo dentro da pasta pricipal, onde está presente o arquivo `docker-compose.yaml`.
Com o docker-compose devidamente instalado em sua maquina execute o comando
`docker-compose up` 
Este comando subirá um container com a imagem do servidor `MY_SQL` com todas a configurações necessarias para o projeto.

- Agora vamos seguir para a pasta backend, dentro dela execute o comando
`yarn`, Irá executar o download de todas as dependências necessarias para executar o projeto.</br>
Após o termino vamos utilizar o comando `npx prisma migrate dev`, ele criará a instancias necessarias dentro do banco de dados
é de extrema importancia que o container já esteja no ar na hora de executar este comando.

- Agora é só executar o comando `yarn start` para iniciar o servidor</br >
Obs: Caso dejese manter o servidor em observação utilize o comando `yarn start:dev`

## Frontend
- Com o banco de dados e o backend funcionando vamos para o frontend

- Dentro da pasta do frontend execute o comando `yarn` para fazer a instalação das dependências e em seguida</br>
o comando `yarn start` para iniciar o frontend. 
