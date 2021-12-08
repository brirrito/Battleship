import Player from '/home/brirrito/the_odin_project/Battleship/src/app/factories/player.js';
import Gameboard from '/home/brirrito/the_odin_project/Battleship/src/app/factories/gameboard.js';

const player = Player('human');
const enemy = Player('computer');
const playerBoard = Gameboard();
const enemyBoard = Gameboard();

describe('Player type', () => {
  test('human type', () => {
    const actual = player.getType();
    expect(actual).toBe('human');
  });
  test('computer type', () => {
    const actual = enemy.getType();
    expect(actual).toBe('computer');
  });
});

describe('Player attack', () => {
  test('attack enemy board', () => {
    player.attack(2, 3, enemyBoard);
    const actual = enemyBoard.getBoard()[2][3];
    expect(actual).toBe('miss');
  });
});

describe('Auto attack', () => {
  test('auto attack enemy board', () => {
    enemy.autoAttack(playerBoard);
    const actual = playerBoard.getBoard().flat().every((cell) => cell === null);
    expect(actual).toBe(false);
  });
});

describe('reset the fleet', () => {
  test('reset the fleet', () => {
    const fleet1 = player.getFleet();
    const fleet2 = player.getFleet();

    const actual = fleet1 === fleet2;
    expect(actual).toBe(true);
  });
  test('player fleets after reset arent equal', () => {
    const fleet1 = player.getFleet();
    player.resetFleet();
    const fleet2 = player.getFleet();

    const actual = fleet1 === fleet2; 
    expect(actual).toBe(false);
  });
});