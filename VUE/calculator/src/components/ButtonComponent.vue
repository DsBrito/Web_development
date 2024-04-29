<template>
  <button class="button" @click="$emit('onClick', label)" :class="{ double, triple, operation }">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {},
    operation: { type: Boolean },
    double: { type: Boolean },
    triple: { type: Boolean },
  },
}
</script>

<style>
:root {
  --bg-button-color: #f0f0f0;
  --border-button-color: #888;
}

.button {
  font-size: 1.4em;
  background-color: var(--bg-button-color);
  border-right: var(--border-button-color);
  border-bottom: var(--border-button-color);
  outline: none;
}

.button:active {
  background-color: #ccc;
}

.button.double {
  grid-column: span 2;
}

.button.triple {
  grid-column: span 3;
}

.button.operation {
  background-color: #fa8231;
  color: #fff;
}
.button.operation:active {
  background-color: #fa8231;
  color: #fff;
}
</style>
