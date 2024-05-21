<template>
  <div class="gift">
    <div class="gift-tie-1"></div>
    <div class="gift-tie-2"></div>
    <div class="gift-tie-3"></div>
    <div class="gift-tie-4"></div>

    <div class="gift-top"></div>
    <div class="gift-body"></div>
  </div>
</template>

<script>
export default {
  name: "GiftComponent",
}
</script>

<style>
.gift {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}

.gift-top {
  width: 100px;
  height: 25px;
  background-color: #7aa944;
}

.gift-body {
  width: 90px;
  height: 60px;
  background-color: #5c7e32;
}

.gift-tie-1 {
  position: absolute;
  width: 15px;
  height: 85px;
  background-color: red;
}

.gift-tie-2 {
  position: absolute;
  top: 40px;
  width: 90px;
  height: 15px;
  background-color: red;
}

/* .gift-tie-3 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;

} */

.gift-tie-3 {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;
}

.gift-tie-4 {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background-color: yellowgreen;
  border-radius: 50%;
}
</style>
