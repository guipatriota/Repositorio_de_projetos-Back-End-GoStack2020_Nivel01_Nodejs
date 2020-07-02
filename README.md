# GoStack2020_Nivel01_Nodejs
## Archives created in class - Level 01 - Back-end with Node.js

Back-end server for Node with JS studies - Rocketseat`s Bootcamp 2020 - GoStack<br />

## Usage:
1. Run `npm install` or `yarn install`.<br />
2. Run `yarn dev`.<br />


## To test:
With [Insomnia](https://insomnia.rest/download/) software configure as follow:<br />
- GET - http://localhost.33333/projects<br />
- POST - http://localhost.33333/projects - JSON whith XML:<br />
{<br />
	"title": "Name for project 1",<br />
	"owner": "Test name"<br />
}<br />
- PUT - http://localhost.33333/projects/"Paste project ID as seen in GET query" - JSON with XML:<br />
{<br />
	"title": "Name for project 1 - new",<br />
	"owner": "New name for tests"<br />
}<br />
- DEL - http://localhost.33333/projects/"Paste project ID as seen in GET query"<br />
