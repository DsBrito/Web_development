//Flappy bird game

function newElement(tagName, className) {
  const elem = document.createElement(tagName);
  elem.className = className;
  return elem;
}

//This class will create the barriers
function Barrier(reverse = false) {
  this.element = newElement('div', 'barrier');

  const  barrier_border = newElement('div', 'barrier_border');
  const  barrier_body = newElement('div', 'barrier_body');
  this.element.appendChild(reverse ? barrier_body :  barrier_border);
  this.element.appendChild(reverse ?  barrier_border :  barrier_body);

  this.setHeight =  barrier_height => barrier_body.style.height = `${barrier_height}px`;
  this.setWidth =  barrier_width => barrier_body.style.width = `${barrier_width}px`;

}



function twoBarriers(height, opening, x) {
  this.element = newElement('div', 'two-barrier');

  this.top = new Barrier(true);
  this.bottom = new Barrier(false);

  this.element.appendChild(this.top.element);
  this.element.appendChild(this.bottom.element);

  this.randomOpening = () => {
    const topHeight = Math.random() * (height - opening);
    const bottomHeight = height - opening - topHeight;
    this.top.setHeight(topHeight);
    this.bottom.setHeight(bottomHeight);
  }

  this.getX = () => parseInt(this.element.style.left.split('px')[0]);
  this.setX = x => this.element.style.left = `${x}px`;
  this.getWidth = () => this.element.clientWidth;

  this.randomOpening();
  this.setX(x);
}

function Barriers(height, width, opening, space, notifyPoint) {
  this.pairs = [
    new twoBarriers(height, opening, width),
    new twoBarriers(height, opening, width + space),
    new twoBarriers(height, opening, width + space * 2),
    new twoBarriers(height, opening, width + space * 3),
    new twoBarriers(height, opening, width + space * 4),
    new twoBarriers(height, opening, width + space * 5),
    new twoBarriers(height, opening, width + space * 6),
    new twoBarriers(height, opening, width + space * 7),
  ];

  const displacement = 3;

  this.animate = () => {
    this.pairs.forEach(pair => {
      pair.setX(pair.getX() - displacement);

      if (pair.getX() < -pair.getWidth()) {
        pair.setX(pair.getX() + space * this.pairs.length);
        pair.randomOpening();
      }

      const middle = width / 2;
      const crossMiddle = pair.getX() + displacement >= middle && pair.getX() < middle;
      if (crossMiddle) notifyPoint();
    });
  }
}


function Bird(gameHeight) {
  let flying = false;

  this.element = newElement('img', 'bird');
  this.element.src = 'imgs/flappy.png';

  this.getY = () => parseInt(this.element.style.bottom.split('px')[0]);
  this.setY = y => this.element.style.bottom = `${y}px`;
  console.log(this.element.style.bottom);

  window.onkeydown = e => flying = true;
  window.onkeyup = e => flying = false;

  this.animate = () => {
    const newY = this.getY() + (flying ? 8 : -5);
    const maxHeight = gameHeight - this.element.clientHeight;
    if (newY <= 0) {
      this.setY(0);
    } else if (newY >= maxHeight) {
      this.setY(maxHeight);
    } else {
      this.setY(newY);
    }
  }

  this.setY(gameHeight/2);

}

function Progress() {
  this.element = newElement('span', 'progress');
  this.updatePoints = points => {
    this.element.innerHTML = points;
  }
  this.updatePoints(0);
}

function sobreposition(elementA, elementB) {
  const a = elementA.getBoundingClientRect();
  const b = elementB.getBoundingClientRect();
  const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;
  const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top;
  return horizontal && vertical;
}

function collision(bird, barriers) {
  let collision = false;
  barriers.pairs.forEach(pair => {
    if (!collision) {
      const top = pair.top.element;
      const bottom = pair.bottom.element;
      collision = sobreposition(bird.element, top) || sobreposition(bird.element, bottom);
    }
  });
  return collision;

}

function FlappyBirdGame() {
  let points = 0;

  const gameArea = document.querySelector('[flappy]');
  const height = gameArea.clientHeight;
  const width = gameArea.clientWidth;

  const progress = new Progress();
  const barriers = new Barriers(height, width, 200, 400, () => progress.updatePoints(++points));
  const bird = new Bird(height);

  gameArea.appendChild(progress.element);
  gameArea.appendChild(bird.element);
  barriers.pairs.forEach(pair => gameArea.appendChild(pair.element));

  this.start = () => {
    const timer = setInterval(() => {
      barriers.animate();
      bird.animate();

      if (collision(bird, barriers)) {
        clearInterval(timer);
      }
    }, 20);
  }
}

// const flappyBird = new Bird(700);
// const flappyBarriers = new Barriers(700, 1200, 200, 400);

// const flappyArea = document.querySelector('[flappy]');

// flappyArea.appendChild(flappyBird.element);
// flappyArea.appendChild( new Progress().element);
// flappyBarriers.pairs.forEach(pair => flappyArea.appendChild(pair.element));

// setInterval(() => {
//   flappyBarriers.animate();
//   flappyBird.animate();
// }, 20);


new FlappyBirdGame().start()
