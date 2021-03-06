import Ship from '/home/brirrito/the_odin_project/Battleship/src/app/factories/ships.js';

export const SHIP_TYPES = [
  'carrier',
  'battleship',
  'cruiser',
  'submarine',
  'destroyer',
];

export const SHIP_LENGTHS = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
};

const rand = (size = 10) => Math.floor(Math.random() * size);

export const randCoords = (size = 10) => [rand(size), rand(size)];

export const createFleet = (types) => {
  const fleet = {};
  types.forEach((type) => (fleet[type] = Ship(type)));
  return fleet;
};