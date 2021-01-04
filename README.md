<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png" style="width: 100%;"/>

<h3 align="center">
  Challenge 02: Node.js Concepts
</h3>

<h3 align="center">
  <img alt="NodeJS" 
    src="https://arrayoutofindex.files.wordpress.com/2017/06/node.png" width="180px"/>
</h3>

<p align="center">

  <img alt="language version" src="https://img.shields.io/badge/Node-v_14.15.3-339933?logo=node.js">

  <img alt="language version" src="https://img.shields.io/badge/Yarn-v_1.22.4-2C8EBB?logo=Yarn">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/d-rocha/gostack-node-challenge02">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/d-rocha/gostack-node-challenge02">
  
  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/d-rocha/gostack-node-challenge02">
  
</p>

<hr/>

<h4 align="center">Links:</h4>

<p align="center">

  <a href="#-about-challenge">
    <img src="https://img.shields.io/badge/About_Challenge-3c973c"/>
  </a>&nbsp;&nbsp;
  <a href="#-functionalities">
    <img src="https://img.shields.io/badge/Functionalities-3c973c"/>
  </a>&nbsp;&nbsp;
  <a href="-techs">
    <img src="https://img.shields.io/badge/Techs-3c973c"/>
  </a>&nbsp;&nbsp;
  <a href="#-tools">
    <img src="https://img.shields.io/badge/Tools-3c973c"/>
  </a>&nbsp;&nbsp;
  <a href="#-run-this-project">
    <img src="https://img.shields.io/badge/Run_this_project-3c973c"/>
  </a>&nbsp;&nbsp;
  <a href="#author-davi-rocha">
    <img src="https://img.shields.io/badge/Author-3c973c"/>
  </a>

</p>

## 🚀 About the challenge

In this challenge, you must create a application to practice what you have learned in Node.js!

Thils will be an application to storage repositories of your portfolio, that will allow you to list, update, and delete repositories, and besides that, the repositories can also receive likes.

### Application Routes

Now that you already have the template cloned, and ready to continue, you must open the file app.js, and complete the places where there's no have code, with the code to achieve the goals of each route.

- **`POST /repositories`**: The route must receive `title`, `URL`, and `techs` inside of the request body. The URL must be the link to the Github of that repository. When registering a new project, it must be stored inside an object in the following format: `{id:" uuid ", title: 'Desafio Node.js', URL: 'http: //github.com / ...' , techs: ["Node.js", "..."], likes: 0} `; Make sure the ID is a UUID, and always start likes as 0.

- **`GET /repositories`**: The route that lists all repositories;

- **`PUT /repositories/:id`**: The route should only change the `title`, `URL` and `techs` of the repository that has the` id` equal to the `id` present in the route parameters;

- **`DELETE /repositories/:id`**: The route must delete a repository with the `id` present in the route parameters;

- **`POST /repositories/:id/like`**: The route must increase the number of likes from the specific repository chosen through the `id` param present in the route parameters, at each call of this route, the number of likes must be increased by 1;

### Tests Specification

In each test, you have a brief description of what your application must do in order for the test suits pass.

If you have questions about what the tests are, and how to interpret them, take a look at **[our FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq- challenges).**

For this challenge we have the following tests:

- **`should be able to create a new repository`**: In order for this test to pass, your application must allow a repository to be created, and return a JSON with the created project.

- **`should be able to list the repositories`**: In order for this test to pass, your application must return an array with all the repositories that have been created so far.

- **`should be able to update repository`**: In order for this test to pass, your application must allow only the `url`,` title` and `techs` fields to be changed.

- **`should not be able to update a repository that does not exist`**: In order for this test to pass, you must validate in your update route whether the repository id sent by the URL exists or not. If not, return an error with status `400`.

- **`should not be able to update repository likes manually`**: In order for this test to pass, you must not allow your update route to directly change the likes of that repository, maintaining the same number of likes that the repository already had before the update. That's because the only place that should update this information is the route responsible for increasing the number of likes.

- **`should be able to delete the repository`**: In order for this test to pass, you must allow your delete route to delete a project, and when deleted, it must return an empty response, with status `204`.

- **`should not be able to delete a repository that does not exist`**: In order for this test to pass, you must validate in your delete route whether the repository id sent by the URL exists or not. If not, return an error with status `400`.

- **`should be able to give a like to the repository`**: In order for this test to pass, your application must allow a repository with the given id to receive likes. The value of likes must be increased by 1 for each request, and as the result, return a JSON containing the repository with the number of likes updated.

- **`should not be able to like a repository that does not exist`**: In order for this test to pass, you must validate in your like route whether the repository id sent by the URL exists or not. If not, return an error with status `400`.

## ⚙️ Techs:

* __NodeJS__;
* Express;
* Nodemon;
* Yarn;
* Jest;

## ⛏ Tools:

* [Insomnia](https://insomnia.rest/download/);
* [Notion](https://www.notion.so/?utm_source=google&utm_campaign=brand_alpha&utm_content=row&utm_term=notion&gclid=CjwKCAjw1cX0BRBmEiwAy9tKHs5ggnFG4dmfW38kOuGDTQS1-YjRGg01PuIriv8ftUuAUzeoU7QFFxoCAkIQAvD_BwE);


## 🏁 Run this project:

To run on the first time,  
into your folder:

```bash
$ git clone https://github.com/d-rocha/gostack-node-challenge02
```

Into repo folder, to intall ```Node_Modules``` run:

```bash
yarn
```

And to start the server: 

```bash
yarn dev
```

> Recommend using [Insomnia](https://insomnia.rest/download/) to test routes

😃 Now run the project and...
**BE HAPPY**.

<h4>
  😍 Thanks for you interest! 
</h4>

<br/>

---

<h3 align="center">
Author: <a alt="Davi-Rocha" href="author-davi-rocha">Davi Rocha</a>
</h3>

<p align="center">

  <a alt="Frederico Reis" href="https://www.linkedin.com/in/davi-rocha-37b51469/">
    <img src="https://img.shields.io/badge/LinkedIn-Davi_Rocha-0077B5?logo=linkedin"/></a>
  <a alt="Frederico Reis" href="https://github.com/d-rocha">
  <img src="https://img.shields.io/badge/d_rocha-GitHub-000?logo=github"/></a>

</p>
