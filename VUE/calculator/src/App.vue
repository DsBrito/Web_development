<template>
  <div id="app">
    <h1>Calculator</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from "./main/CalculatorMain.vue"

export default {
  components: { Calculator },
}
</script>

<style>
/* @font-face {
  font-family: "RobotoMono";
  src: url(".fonts/RobotoMono-Thin.ttf");
} */

* {
  font-family: "RobotoMono", monospace;
}
body {
  background-color: #f8f8f8;
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;

  justify-content: center;
  align-items: center;
  text-align: center;

  color: #fff;
  background: linear-gradient(45deg, #7197e9, #4faa8f);
}
</style>
