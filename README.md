# GoStack2020_Nivel01_Nodejs
## Arquivos criados em aula - Nível 01 - Back-end com Node.js

Pasta de arquivos com servidor back-end para estudos de JS com Node - Bootcamp 2020 da Rocketseat - GoStack

## Para rodar:
yarn init
yarn dev

## Para testar:
Com o software [Insomnia](https://insomnia.rest/download/), criar os seguintes comando:
- GET - http://localhost.33333/projects
- POST - http://localhost.33333/projects - JSON com o seguinte XML:
{
	"title": "Nome do seu projeto de testes 1",
	"owner": "Seu nome para testes"
}
- PUT - http://localhost.33333/projects/"copiar aqui o ID de um projeto criado ver com o GET)" - JSON com o seguinte XML:
{
	"title": "Nome do seu projeto de testes corrigido",
	"owner": "Seu nome para testes / correção"
}
- DEL - http://localhost.33333/projects/"copiar aqui o ID de um projeto criado (ver com o GET)"