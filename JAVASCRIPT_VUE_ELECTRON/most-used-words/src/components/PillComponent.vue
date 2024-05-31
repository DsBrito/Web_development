<template>
  <div class="pill" :style="{ 'background-color': amountColor }">
    <span class="word">{{ word }}</span>
    <span class="amount" :style="{ 'background-color': amountColor }">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  props: ["word", "amount"],
  computed: {
    amountColor() {
      if (this.amount > 900) {
        return "red"
      } else if (this.amount > 300) {
        return "orange"
      } else if (this.amount > 200) {
        return "green"
      } else if (this.amount > 100) {
        return "yellowgreen"
      } else if (this.amount > 50) {
        return "blue"
      } else if (this.amount > 25) {
        return "purple"
      } else {
        return "black"
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.pill {
  margin: 10px;
  height: 55px;
  width: fit-content;
  color: #ffffff;
  border-radius: 35px;
  display: flex;
  font-weight: bold;
  font-size: 1.2rem;
  align-items: center;
}

.pill .word {
  font-weight: bold;
  margin-left: 15px;
}

.pill .amount {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  margin: 10px;
  padding: 5px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
