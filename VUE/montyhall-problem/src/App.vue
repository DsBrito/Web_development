<template>
  <div id="app">
    <h1>MontyHall Problem</h1>
    <GiftComponent></GiftComponent>
    <h1>by Dsbrito</h1>
    <div class="form">
      <div v-if="!started">
        <label for="portsAmount">How many doors? </label>
        <input type="text" id="portsAmount" size="3" v-model.number="portsAmount" />
      </div>
      <div v-if="!started">
        <label for="selectedPort">Which door has the gift? </label>
        <input type="text" id="selectedPort" size="3" v-model.number="selectedPort" />
      </div>
      <button v-if="!started" @click="started = true">Start</button>
      <button
        v-if="started"
        @click="
          started = false
          resetClickCount()
        "
      >
        Resert
      </button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in portsAmount" :key="i" @click="openDoor(i)">
        <DoorComponent :hasGift="i === selectedPort" :number="i" />
      </div>
    </div>
    <p v-if="started && clickCount <= portsAmount - 1">Attempts: {{ portsAmount - clickCount - 1 }}</p>
  </div>
</template>

<script>
import GiftComponent from "./components/GiftComponent.vue"
import DoorComponent from "./components/DoorComponent.vue"

export default {
  name: "App",
  components: {
    GiftComponent,
    DoorComponent,
  },
  data: function () {
    return {
      started: false,
      portsAmount: 3,
      selectedPort: null,
      clickCount: 0,
    }
  },
  methods: {
    openDoor(portNumber) {
      if (this.clickCount < this.portsAmount - 1 && portNumber !== this.selectedPort) {
        this.clickCount++
      }
      if (portNumber === this.selectedPort) {
        this.clickCount = this.portsAmount - 1
      }
    },
    resetClickCount() {
      this.clickCount = 0
    },
  },
}
</script>
<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  color: #fff;
  background: linear-gradient(to right, rgb(127, 21, 153), rgb(21, 87, 153));
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.form,
.form input,
.form button {
  margin-bottom: 10px;
  font-size: 2rem;
}

.doors {
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
