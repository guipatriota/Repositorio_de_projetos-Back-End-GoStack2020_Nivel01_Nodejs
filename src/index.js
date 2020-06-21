const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());

// app.get('/', (request, response) => {
//   // return response.send('Hellow World'); // Retorna respostas em text, pouco usado.
//   return response.json({ message:  'Hellow World ss'}); // Retorna respostas em JSON (o mais usual) e pode ser [] ou {}
// })

// app.get('/projects', (request, response) => {
//   const query = request.query;
//   const {title, owner} = request.query;
//   console.log(query);
//   console.log(title);
//   console.log(owner);

//   return response.json([
//     'Projeto 1',
//     'Projeto 2',
//   ]);
// });

// app.post('/projects', (request, response) => {
//   const body = request.body;
//   const {title, owner} = request.body;

//   console.log(body);
//   console.log(title, owner);
//   console.log(title);
//   console.log(owner);

//   return response.json([
//     'Projeto 1',
//     'Projeto 2',
//     'Projeto 3',
//   ]);
// });

// app.put('/projects/:id', (request, response) => {
//   const params = request.params;

//   console.log(params);

//   return response.json([
//     'Projeto 4',
//     'Projeto 2',
//     'Projeto 3',
//   ]);
// });

// app.delete('/projects/:id', (request, response) => {
//   const {id} = request.params;

//   console.log(id);

//   return response.json([
//     'Projeto 2',
//     'Projeto 3',
//   ]);
// });
/**************************************************************************** */
// Para fins de estudo, vamos armazenar os dados nesta variável
// (na memória da aplicação), porém ela se apagará sempre que o programa for
// reiniciado. Para termos a persistência dos dados, vamos estudar os
// mecanismos de persistência (Bancos de dados).
const projects = [];
/**************************************************************************** */

// MIDDLEWARE - Interrompe totalmente a requisição ao altera dados:
function logRequests(request, response, next) {
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  console.time(logLabel);
  next();
  console.timeEnd(logLabel);
  // return next(); // Chama próximo middleware - libera a requisição.
}

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID.' });
  }

  return next();
}

app.use(logRequests); // Podemos chamar o middleware assim ou dentro de uma
// requisição, por exemplo:
// app.get('/projects', logRequests, middleware2, (request, response) => {...

app.use('/projects/:id', validateProjectId); // desta forma usamos o middleware
// apenas na rota explicitada e também podemos declarar quantos middlewares
// quisermos em um único app.use()...

app.get('/projects', (request, response) => {
  const { title } = request.query;

  const results = title 
    ? projects.filter(project => project.title.includes(title)) 
    : projects;

  return response.json(results);
});

app.post('/projects', (request, response) => {
  const {title, owner} = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);
  
  return response.json(project);
});

app.put('/projects/:id', (request,response) => {
  const {id} = request.params;
  const {title, owner} = request.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex <0) {
    return response.status(400).json({ error: 'Project not found' })
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error : 'Project not found.'});
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send(); // Código 204 é para quando a resposta não tem conteúdo.
});


app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});
