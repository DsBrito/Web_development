const fs = require("fs")

module.exports = paths => {
  return new Promise((res, rej) => {
    try {
      const rows = paths
        .map(path => fs.readFileSync(path).toString("utf-8"))
        .reduce((fullText, fileText) => `${fullText}\r\n${fileText}`)
        .split("\r\n")
      res(rows)
    } catch (e) {
      rej(e)
    }
  })
}
