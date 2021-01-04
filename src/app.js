const express = require("express");
const cors = require("cors");

const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (req, res) => {

  return repositories.length < 1 
  ? res.status(400).json({error: 'There are no repositories'}) 
  : res.json(repositories);

});

app.post("/repositories", (req, res) => {

  const { title, url, techs } = req.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };
 
  repositories.push(repository);

  return res.json(repository);

});

app.put("/repositories/:id", (req, res) => {

  const { id } = req.params;
  const { title, url, techs } = req.body;

  const repositoryIndex = repositories.findIndex(
    repository => repository.id === id
  );

  if(repositoryIndex === -1){
    return res.status(400).json({error: 'Repository not found'});
  }

  const repositoryUpdate = {
    id,
    title,
    url,
    techs,
    likes: repositories[repositoryIndex].likes
  }

  repositories[repositoryIndex] = repositoryUpdate;

  return res.json(repositoryUpdate);

});

app.delete("/repositories/:id", (req, res) => {
  
  const { id } = req.params;  

  const repositoryIndex = repositories.findIndex(
    repository => repository.id === id
  );

  if(repositoryIndex < 0 ){
    return res.status(400).json({error: 'Repository not found'});
  } 

  repositories.splice(repositoryIndex, 1); 

  return res.status(204).send();
  
});

app.post("/repositories/:id/like", (req, res) => {
  
  const { id } = req.params;  

  const repositoryIndex = repositories.findIndex(
    repository => repository.id === id
  );

  if(repositoryIndex < 0){  
    return res.status(400).json({error: 'Repository not found'});
  }

  const repositoryUpdate = {
    id,
    title: repositories[repositoryIndex].title,
    url: repositories[repositoryIndex].url,
    techs: repositories[repositoryIndex].techs,
    likes: repositories[repositoryIndex].likes + 1
  }

  repositories[repositoryIndex] = repositoryUpdate;

  return res.status(200).json(repositoryUpdate);

});

module.exports = app;