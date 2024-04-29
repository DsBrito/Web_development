<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button label="AC" triple @onClick="clearMemory" />
    <Button label="/" operation @onClick="setOperation" />
    <Button label="7" @onClick="addDigit" />
    <Button label="8" @onClick="addDigit" />
    <Button label="9" @onClick="addDigit" />
    <Button label="*" operation @onClick="setOperation" />
    <Button label="4" @onClick="addDigit" />
    <Button label="5" @onClick="addDigit" />
    <Button label="6" @onClick="addDigit" />
    <Button label="-" operation @onClick="setOperation" />
    <Button label="1" @onClick="addDigit" />
    <Button label="2" @onClick="addDigit" />
    <Button label="3" @onClick="addDigit" />
    <Button label="+" operation @onClick="setOperation" />
    <Button label="0" double @onClick="addDigit" />
    <Button label="." @onClick="addDigit" />
    <Button label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>
import Display from "../components/DisplayComponent.vue"
import Button from "../components/ButtonComponent.vue"

export default {
  data: function () {
    return {
      displayValue: "0",
      clearDispaly: false,
      operation: null,
      values: [0, 0],
      current: 0,
    }
  },
  components: { Button, Display },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data())
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation
        this.current = 1
        this.clearDispaly = true
      } else {
        const equals = operation === "="
        const currentOperation = this.operation

        try {
          this.values[0] = eval(`${this.values[0]} ${currentOperation} ${this.values[1]}`)
          if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
            this.clearMemory()
            return
          }
        } catch (e) {
          this.$emit("onError", e)
        }

        this.values[1] = 0
        this.displayValue = this.values[0]
        this.operation = equals ? null : operation
        this.current = equals ? 0 : 1
        this.clearDisplay = !equals
      }
    },
    addDigit(digit) {
      if (digit === "." && this.displayValue.includes(".")) {
        return
      }
      const clearDispaly = this.displayValue === "0" || this.clearDispaly
      const currentValue = clearDispaly ? "" : this.displayValue

      const displayValue = currentValue + digit

      this.displayValue = displayValue
      this.clearDispaly = false

      if (digit !== ".") {
        const i = this.current
        const newValue = parseFloat(displayValue)
        const values = [...this.values]
        values[i] = newValue
        this.values = values
        console.log(this.values)
      }
    },
    // setDigit() {
    //   const newValue = parseFloat(currentValue + digit);
    //   this.displayValue = newValue;
    //   this.clearDispaly = false;
    // },
  },
}
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
