const calculator = {
  _result: 0,
  get result() {
    return this._result
  },
  _add(a, b = 0) {
    const add = a + b
    this._result += add
    return this
  },
  _power(a, b) {
    const power = a ** b
    this._result += power
    return this
  },
  _reset() {
    this._result = 0
    return this
  },
  log() {
    console.log(this._result)
  },
}
