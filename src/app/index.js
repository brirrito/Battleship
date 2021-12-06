import Game from '.src/app/factories/game.js';
import { elements } from 'src/app/view/base.js';
import '/home/brirrito/the_odin_project/Battleship/src/style.css';


let gameType = 'singlePlayer';
let game = Game(gameType);

game.renderGrids();
game.renderFleet();

elements.autoPlaceBtn.addEventListener('click', (e) => {
  console.log('autoplaced player fleet');
  game.autoPlace();
});

elements.startBtn.addEventListener('click', (e) => {
  console.log('game start');
  game.startGame();
});

elements.playAgainBtn.addEventListener('click', (e) => {
  console.log(`Let's play again!`);
  game.playAgain();
});
