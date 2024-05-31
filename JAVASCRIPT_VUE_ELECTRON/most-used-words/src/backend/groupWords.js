module.exports = words => {
  return new Promise((res, rej) => {
    //recebe um array com várias palavras [A,A,D,B,C,S,W,A,W,B] => {A:3,B=2,C:1,S=1,W=2}
    try {
      const groupedWords = words.reduce((obj, word) => {
        if (obj[word]) {
          obj[word] = obj[word] + 1
        } else {
          obj[word] = 1
        }
        return obj
      }, {})

      const groupedWordsArray = Object.keys(groupedWords)
        .map(key => ({ word: key, amount: groupedWords[key] }))
        .sort((w1, w2) => w2.amount - w1.amount)
      res(groupedWordsArray)
    } catch (e) {
      rej(e)
    }
  })
}
