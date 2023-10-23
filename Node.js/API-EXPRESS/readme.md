# API EXPRESS

### 1° Step - Donwload Postman

Postman is a popular API (Application Programming Interface) development and testing tool. It allows developers to create, test, and document APIs in a user-friendly interface. Postman provides features for making various types of HTTP requests, setting up and managing environments, managing authentication, and automating testing with test scripts. It also supports the creation and execution of collections of API requests.

<p align="center">
  Download -> 
  <a href="https://www.postman.com/downloads/?utm_source=postman-home"
     >here </a
  <br /><br /> 
<div style="display: inline_block" align="center">
<img align="center" width="70%" src="./images/postman.png">

---    
<div style="display: inline_block" align="left">

### 2° Step - Use commands
To start the API, need to use some commands in the directory where it will be created

-   Create the Package JSON
    -   `npm init -y`
  
<br /><br /> 
<div style="display: inline_block" align="center">
    <img align="center" width="50%" src="./images/packageJSON.png"> 
<div style="display: inline_block" align="left">
<br /><br />

-   Install Express
    -   `npm i --save express@4 -E`
  <br /><br />

- install nodemon:
  - `sudo npm i -g nodemon`
  
  The nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
  <br /><br />
  <br /><br />

-  Edit the package.json file with the script nodemon (need install nodemon before edit the file)
    -   `npm i --save nodemon` or `npm i --save-dev nodemon@1.14.11 -E`
   
<br /><br />
<div style="display: inline_block" align="center">
    <img align="center" width="65%" src="./images/nodemon.png"> 
<div style="display: inline_block" align="left">
<br /><br />

---

### 3° Step - Test requisition

-   For run the server need write in the terminal `npm start`

<br /><br />
<div style="display: inline_block" align="center">
    <img align="center" width="65%" src="./images/npmStart.png"> 
<div style="display: inline_block" align="left">
<br /><br />


- For test the requisiton need start Postiman and write the url port:  `http://localhost:8082/product`
<br /><br />
<div style="display: inline_block" align="center">
    <img align="center" width="80%" src="./images/postmanReq.png"> 
<div style="display: inline_block" align="left">
<br /><br />








































































<h3 align="left">Help about Terminal</h3>
 </a>
 <p align="center">
  Linux/Mac ->
  <a href="https://blog.cod3r.com.br/terminal-no-macos-e-linux/"
     >here <-</a
  <br /><br />
 </a>
 <p align="center">
  Windows -> 
  <a href="https://blog.cod3r.com.br/terminal-no-windows/"
     >here <-</a
  <br /><br />

 
 <h3 align="left">Browser Tools</h3>
 </a>
 <p align="center">
  Repl ->
  <a href="https://replit.com//"
     >here <-</a
  <br /><br />
 </a>
 <p align="center">
  Jsfiddle -> 
  <a href="https://jsfiddle.net/"
     >here <-</a
  <br /><br />   
    
    
    
---    
<div style="display: inline_block" align="left">

### 1) JavaScript
  Description: JavaScript is a programming language used by developers to make interactive Internet pages.
<h3 align="left">Setting</h3>
 </a>
    Setting up a JavaScript Study Environment with Visual Studio Code and NodeJS
    <a href="https://blog.cod3r.com.br/configuracao-do-ambiente/"
       >here <-</a
    <br /><br />

<h3 align="left">VsCode Extension</h3>
    <div style="display: inline_block" align="center">
    <img align="center" width="30%" src="https://user-images.githubusercontent.com/80075307/224575584-0838e575-9e1f-4744-9b97-afe79be816ed.png">
      
<h3 align="left">Run</h3>
    <div style="display: inline_block" align="left">
    Need press Ctrl + Alt + N for run a  .js program with node or Ctrl + Alt + M for stop .js program
    <div style="display: inline_block" align="center">
    <img align="center" width="23.5%" src="https://user-images.githubusercontent.com/80075307/224572016-e8110675-c669-4c92-b9a0-256f3bf13802.png">
    <img align="center" width="40%" src="https://user-images.githubusercontent.com/80075307/224572118-bb6df855-f6d0-4f8e-9e18-94530ea8d843.png">

<h3 align="left">Extra links</h3>
    <div style="display: inline_block" align="left">
    Some links with guide/exercises about javascript
    </a>
    <p align="center">
    Web docs Guilde -> 
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide"
       >here <-</a
    <br /><br />  
     </a>
     <p align="center">
      Exercises -> 
      <a href="https://edabit.com/challenges"
         >here <-</a
      <br /><br />  
     </a>
     <p align="center">
      The 10 Best Coding Challenge Websites -> 
      <a href="https://medium.com/coderbyte/the-10-best-coding-challenge-websites-for-2018-12b57645b654"
         >here <-</a
      <br /><br />    

---
### 1) Node.js
  - Description`: Node.js is the server-side (non-browser) javascript execution environment
  
  <br /><br /> 
  <div style="display: inline_block" align="center">
  <img width="75%" src="https://github.com/DsBrito/Web_development/assets/80075307/11a6eae0-5090-4e7d-984f-3760159a6f67">
  <br /><br /> 
  
<div style="display: inline_block" align="left"> 

- Application: application written with javascript;

- Interpretation: interpretation done by V8 (done in c language) + LIBUV (responsible for doing the asynchronous IO part);


<h3 align="left">Node Modules</h3>

- Check node version:      
  - `node -v`

- Install lodash:
  - `npm i lodash`
      
- install nodemon:
  - `sudo npm i -g nodemon`
  
The nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.



<h3 align="left">HTTP request</h3>

HTTP Messages - HTTP | MDN
HTTP requests are messages sent by the client to initiate an action on the server
  <br /><br /> 
  <div style="display: inline_block" align="center">
  <img width="68%" src="images/node/http-request.png">
  <br /><br /> 

  <br /><br /> 
  <div style="display: inline_block" align="center">
  <img width="60%" src="images/node/localhost.png">
  <br /><br /> 


<h3 align="left">Package JSON</h3>
<div style="display: inline_block" align="left">

  - Need use a command for create and define a package.json:      
    - `npm init`

  <div style="display: inline_block" align="center">
  <img width="90%" src="images/node/createJSON.png">
  <br /><br /> 
  <div style="display: inline_block" align="left">

- Or use this command for reply yes to all questions and create a clean package.json:
  - `npm init -y` 

- For install dependences (ex: axios)
  - `npm i --save axios`
- 
  <div style="display: inline_block" align="center">
  <img width="90%" src="images/node/dependenciesJSON.png">
  <br /><br /> 
  <div style="display: inline_block" align="left">



  <br /><br /> 

  <br /><br /> 

  <br /><br /> 

  <br /><br /> 

  <br /><br /> 

<h3 align="left">Extra links</h3>
    <div style="display: inline_block" align="left">
    Some links about node
    </a>
      <p align="center">
      Nodemon -> 
      <a href="https://www.npmjs.com/package/nodemon"
      >here <-</a
    <br /><br />  
    </a>
      <p align="center">
      HTTP request -> 
      <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods"
      >here <-</a
    <br /><br />  
    </a>
      <p align="center">
      npm scripts -> 
      <a href="https://docs.npmjs.com/cli/v10/using-npm/scripts"
      >here <-</a
    <br /><br />  
