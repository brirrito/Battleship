import Gameboard from './gameboard';
import Player from './player';
import Drag from './drag';
import gameboardView from '../view/gameboardView';
import { elements } from '/home/brirrito/the_odin_project/Battleship/src/app/view/base.js';

const Game = (type) => {
  const p1 = Player('human');
  let p2;
  if (type === 'singleplayer') {
    p2 = Player('computer');
  } else {
    p2 = Player('human');
  }

  const p1Board = Gameboard();
  const p2Board = Gameboard();

  const drag = Drag(p1, p1Board);

  const resetGame = () => {
    p1.resetFleet();
    p2.resetFleet();
    p1Board.reset();
    p2Board.reset();
  };

  const addRotateEventListeners = () => {
    const ships = document.querySelectorAll('.ship');
    ships.forEach((ship) => {
      ship.addEventListener('dblclick', (e) => {
        const shipElement = e.target.parentElement;
        const ship = p1.getFleet()[shipElement.dataset.ship];
        ship.changeDirection();
        shipElement.classList.toggle('vertical');
      });
    });
  };

  const renderFleet = () => {
    gameboardView.renderFleet(p1.getFleet());
    drag.addDragAndDropEventListeners();
    addRotateEventListeners();
  };

  const addGridEventListeners = () => {
    if (p2.getType === 'human')
      elements.p1Grid.addEventListener('click', ctrlAttack);
    elements.p2Grid.addEventListener('click', ctrlAttack);
  };

  const ctrlAttack = (e) => {
    const cell = e.target;
    if (cell.classList.contains('grid-cell')) {
      const y = cell.dataset.y;
      const x = cell.dadtaset.x;

      const boardCell = p2Board.getBoard()[y][x];
      if (boardCell !== 'miss' && boardCell !== 'hit') {
        p1.attack(y, x, p2Board);
        p2.autoAttack(p1Board);

        renderGrids();
      }

      if (p1Board.areAllShipsSunk() || p2Board.areAllShipsSunk()) {
        let winner = '';
        if (p1Board.areAllShipsSunk()) {
          winner = 'Computer Wins!';
        } else if (p2Board.areAllShipsSunk()) {
          winner = 'You Win!';
        }
        elements.p2Grid.removeEventListener('click', ctrlAttack);
        gameboardView.renderWinner(winner);
      }
    }
  };

  const renderGrids = () => {
    gameboardView.renderGrid(elements.p1Grid, p1Board, p1.getType());
    gameboardView.renderGrid(elements.p2Grid, p2Board, p2.getType());
  };

  const autoPlace = () => {
    p1Board.reset();
    p1Board.autoPlaceFleet(p1.getFleet());
    renderGrids();
    gameboardView.autoPlace();
  };

  const startGame = () => {
    addGridEventListeners();
    if (p2.getType() === 'computer') p2Board.autoPlaceFleet(p2.getFleet());
    gameboardView.startGame();
  };

  const playAgain = () => {
    resetGame();
    renderGrids();
    gameboardView.playAgain();
    renderFleet();
  };

  return {
    renderGrids,
    renderFleet,
    autoPlace,
    startGame,
    playAgain,
  };
};

export default Game;