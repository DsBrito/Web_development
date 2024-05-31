const { ipcMain } = require("electron")
const fixData = require("./fixLegends")
const groupedWords = require("./groupWords")
const pathToRows = require("./pathToRows")

//para ouvir o evento do processo
ipcMain.on("process-subtitles", (event, paths) => {
  console.log(paths)
  pathToRows(paths)
    .then(fix => fixData(fix))
    .then(words => groupedWords(words))
    .then(groupedWords => {
      event.reply("process-subtitles", groupedWords)
    })
    .catch(err => console.log(err))
})
