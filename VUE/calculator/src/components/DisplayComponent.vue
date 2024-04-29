<template>
  <div class="display">{{ value }}</div>
</template>

<script>
export default {
  props: ["value"],
}
</script>

<style>
.display {
  grid-column: span 4;
  background-color: #004;

  font-size: 2.2em;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
}
</style>
