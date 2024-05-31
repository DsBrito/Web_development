import React from 'react';
import ReactDOM from 'react-dom';

import First from './components/first';
import TwoElements from './components/twoElements';
import Extends from './components/extends';

//const element = <h1>Hello, world!</h1>;

//Utilizando a função reactDOM.render passando o nó do elemento e o local onde ele será renderizado
//ReactDOM.render(<First></First>, document.getElementById('root'));
ReactDOM.render(
<div>
  <First></First>
      <TwoElements.WithFragment name="Dsbrito (WithFragment)"/>
      <TwoElements.WithReactFragment name="Dsbrito (WithReactFragment)"/>
      <TwoElements.WithDiv name="Dsbrito (WithDiv)"/>
      <TwoElements.WithArray name="Dsbrito (WithArray)"/>
      <TwoElements.WithArrayKey name="Dsbrito (WithArrayKey)"/>

      <Extends type="Hello" name="Dsbrito"/>
  </div>, document.getElementById('root'));