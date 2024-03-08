### Node.js

-   Description`: Node.js is the server-side (non-browser) javascript execution environment

<br /><br />

  <div style="display: inline_block" align="center">
  <img width="75%" src="https://github.com/DsBrito/Web_development/assets/80075307/11a6eae0-5090-4e7d-984f-3760159a6f67">
  <br /><br />

<div style="display: inline_block" align="left">

-   Application: application written with javascript;

-   Interpretation: interpretation done by V8 (done in c language) + LIBUV (responsible for doing the asynchronous IO part);

<h3 align="left">Node Modules</h3>

-   Check node version:

    -   `node -v`

-   Install lodash:

    -   `npm i lodash`

-   install nodemon:
    -   `sudo npm i -g nodemon`

The nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

<h3 align="left">HTTP request</h3>

HTTP Messages - HTTP | MDN
HTTP requests are messages sent by the client to initiate an action on the server
<br /><br />

  <div style="display: inline_block" align="center">
  <img width="68%" src="../IMAGES/node/http-request.png">
  <br /><br />

<br /><br />

  <div style="display: inline_block" align="center">
  <img width="60%" src="../IMAGES/node/localhost.png">
  <br /><br />

<h3 align="left">Package JSON</h3>
<div style="display: inline_block" align="left">

-   Need use a command for create and define a package.json:
    -   `npm init`

  <div style="display: inline_block" align="center">
  <img width="90%" src="../IMAGES/node/createJSON.png">
  <br /><br />
  <div style="display: inline_block" align="left">

-   Or use this command for reply yes to all questions and create a clean package.json:

    -   `npm init -y`

-   For install dependences (ex: axios)
    -   `npm i --save axios`
    <div style="display: inline_block" align="center">
     <img width="90%" src="../IMAGES/node/dependenciesJSON.png">
     <br /><br />
     <div style="display: inline_block" align="left">

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
