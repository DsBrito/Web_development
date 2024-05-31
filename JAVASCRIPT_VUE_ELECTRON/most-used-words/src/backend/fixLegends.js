module.exports = rows => {
  return new Promise((res, rej) => {
    try {
      const data = rows
        .filter(filterValidLines)
        .map(removePunctuation)
        .map(removeTags)
        .reduce(mergeRows)
        .split(" ")
        .map(word => word.toLowerCase())
        .map(word => word.replace('"', ""))
      res(data)
    } catch (e) {
      rej(e)
    }
  })
}

function filterValidLines(row) {
  // se vazio, numero ou intervalo de tempo
  const notNumber = !parseInt(row.trim())
  const notEmpty = !!row.trim()
  const notInterval = !row.includes("-->")
  return notNumber && notEmpty && notInterval
}

function removePunctuation(row) {
  return row.replace(/[,?!:;.-]/g, "")
}

function removeTags(row) {
  return row.replace(/(<[^>]+)>/g, "").trim()
}

function mergeRows(fullText, rowText) {
  return `${fullText} ${rowText}`
}
