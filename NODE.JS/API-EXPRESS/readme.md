# API EXPRESS

### 1° Step - Donwload Postman

Postman is a popular API (Application Programming Interface) development and testing tool. It allows developers to create, test, and document APIs in a user-friendly interface. Postman provides features for making various types of HTTP requests, setting up and managing environments, managing authentication, and automating testing with test scripts. It also supports the creation and execution of collections of API requests.

<p align="center">
  Download -> 
  <a href="https://www.postman.com/downloads/?utm_source=postman-home"
     >here </a
  <br /><br /> 
<div style="display: inline_block" align="center">
<img align="center" width="70%" src="./IMAGES/postman.png">

---    
<div style="display: inline_block" align="left">

### 2° Step - Use commands
To start the API, need to use some commands in the directory where it will be created

-   Create the Package JSON
    -   `npm init -y`
  
<br /><br /> 
<div style="display: inline_block" align="center">
    <img align="center" width="50%" src="./IMAGES/packageJSON.png"> 
<div style="display: inline_block" align="left">
<br /><br />

-   Install Express
    -   `npm i --save express@4 -E`
  <br /><br />

-   Install body-paser
    -   `npm i --save body-parser@1 -E`
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
    <img align="center" width="65%" src="./IMAGES/nodemon.png"> 
<div style="display: inline_block" align="left">
<br /><br />

---

### 3° Step - Test requisition

- Create the server

<div style="display: inline_block" align="center">
    <img align="center" width="80%" src="./IMAGES/server.png"> 
<div style="display: inline_block" align="left">
<br /><br /

-   For run the server need write in the terminal `npm start`

<br /><br />
<div style="display: inline_block" align="center">
    <img align="center" width="65%" src="./IMAGES/npmStart.png"> 
<div style="display: inline_block" align="left">
<br /><br />


- For test the requisiton need start Postiman and write the url port:  `http://localhost:8082/product`
<br /><br />
<div style="display: inline_block" align="center">
    <img align="center" width="80%" src="./IMAGES/postmanReq.png"> 
<div style="display: inline_block" align="left">
<br /><br />
































































