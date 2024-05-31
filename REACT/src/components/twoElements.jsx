import React from "react";
import { Fragment } from "react";


  function WithFragment(props) {
  return <Fragment><h1>Good Morning {props.name}!</h1>
                <h2>You want a coffer?</h2></Fragment>
}

  function WithReactFragment(props) {
  return <React.Fragment><h1>Good Morning {props.name}!</h1>
                <h2>You want a coffer?</h2></React.Fragment>
}

  function WithDiv(props) {
  return <div><h1>Good Morning {props.name}!</h1>
                <h2>You want a coffer?</h2></div>
}

  const WithArray = props =>  {
  return [<h1>Good Morning {props.name}!</h1>,
                <h2>You want a coffer?</h2>]
}

  function WithArrayKey(props) {
  return [<h1 key='1'>Good Morning {props.name}!</h1>,
                <h2 key ='2'>You want a coffer?</h2>]
}

//exportando as funções
export {WithFragment, WithReactFragment, WithDiv, WithArray, WithArrayKey}

//craindo um objeto para exportar as funções
export default  {
  WithFragment,
  WithReactFragment,
  WithDiv,
  WithArray,
  WithArrayKey
}