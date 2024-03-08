/**
 * The bind() method creates a new function, when invoked, has it set to the given value.
 * The bind() method allows an object to borrow a method from another object without
 *  making a copy of that method. This is recognized as a role grant in JavaScript.
 */

//variable style
const player_const = {
  word: "Hello Guys ツ",
  player_talk() {
    console.log("-  player word -> " + this.word);
  },
};

player_const.player_talk();

//save function player_talk in a variable
const save = player_const.player_talk;
save(); //undefined becauser cant acces the variable word

/*solution
 * the problem can resolved with the word "bind", it make the result seach the object
 */
const solution = player_const.player_talk.bind(player_const);
solution();

//object Style

function playerObject() {
  this.id = 0;

  // const self = this
  setInterval(
    function () {
      this.id++; //or self.id
      console.log("-  player id -> " + this.id);
    }.bind(this), //if use self need comment the .bind(this)
    1000
  );
}

new playerObject();

//with arrow-function
function playerObject() {
  this.id = 0;

  setInterval(() => {
    this.id++;
    console.log("-  player id -> " + this.id);
  }, 1000);
}

new playerObject();
