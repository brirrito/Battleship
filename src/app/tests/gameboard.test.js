import Gameboard from '/home/brirrito/the_odin_project/Battleship/src/app/factories/gameboard.js';
import Player from '/home/brirrito/the_odin_project/Battleship/src/app/factories/player.js';
import Ship  from '/home/brirrito/the_odin_project/Battleship/src/app/factories/ships.js';

describe('Gameboard', () => {
  describe('board', () => {
    const gameboard = Gameboard();

    test('empty board', () => {
      const actual = gameboard.getBoard().every((square) => square === null);
      const expected = false;
      expect(actual).toBe(expected);
    });
    test('board row', () => {
      const actual = gameboard.getBoard().length;
      const expected = 10;
      expect(actual).toBe(expected);
    });
    test('board column', () => {
      const actual = gameboard.getBoard()[0].length;
      const expected = 10;
      expect(actual).toBe(expected);
    });
  });

  describe('place horizontal ship', () => {
    const gameboard = Gameboard();
    const ship = Ship('cruiser');
    gameboard.placeShip(ship, 3, 2);

    test('placedship at start coord w/ index: 0', () => {
      const actual = gameboard.getBoard()[3][2];
      expect(actual).toEqual({ ship, index: 0 });
    });
    test('placed ship at coord w/ index: 1', () => {
      const actual = gameboard.getBoard()[3][3];
      expect(actual).toEqual({ ship, index: 1});
    });
    test('placed sip at final coordinates with index 2', () => {
      const actual = gameboard.getBoard()[3][4];
      expect(actual).toEqual({ ship, index: 2 });
    });
  });

  describe('place vertical ship', () => {
    const gameboard = Gameboard();
    const ship = Ship('submarine');
    ship.changeDirection();
    gameboard.placeShip(ship, 3, 2);

    test('placed ship at start coordinate with index 0', () => {
      const actual = gameboard.getBoard()[3][2];
      expect(actual).toEqual({ ship, index: 0});
    });
    test('placed ship at coordinate with index 1', () => {
      const actual = gameboard.getBoard()[4][2];
      expect(actual).toEqual({ ship, index: 1 });
    });
    test('placed ship at final coordinates with index 2', () => {
      const actual = gameboard.getBoard()[5][2];
      expect(actual).toEqual({ ship, index: 2 });
    });
  });

  describe('disallow ship from being placed OOB', () => {
    const gameboard = Gameboard();
    const carrier = Ship('carrier');

    test('out of bounds ship placement horizontal', () => {
      gameboard.placeShip(carrier, 7, 7);
      const actual = gameboard.getBoard()[7][7];
      expect(actual).toEqual(null);
    });
    test('out of bounds vertical ship', () => {
      carrier.changeDirection();
      gameboard.placeShip(carrier, 7, 7);
      const actual = gameboard.getBoard()[7][7];
      expect(actual).toEqual(null);
    });
  });

describe('disallow ship from overlaying another', () => {
  const gameboard = Gameboard();
  const carrier = Ship('carrier');
  const battleship = Ship('battleship');

  test('overlaying ships', () => {
    gameboard.placeShip(carrier, 2, 0);
    gameboard.placeShip(battleship, 2, 0);
    const actual = gameboard.getBoard()[2][0];
    expect(actual).toEqual({ ship: carrier, index: 0 });
  });
  test('overlaying ships at one square', () => {
    battleship.changeDirection();
    gameboard.placeShip(battleship, 0 ,2);
    const actual = gameboard.getBoard()[0][2];
    expect(actual).toEqual(null);
  });
});

describe('All ships placed', () => {
  const gameboard = Gameboard();
  const carrier = Ship('carrier');
  const battleship = Ship('battleship');
  const cruiser = Ship('cruiser');
  const submarine = Ship('submarine');
  const destroyer = Ship('destroyer');

  test('no ships placed', () => {
    const actual = gameboard.areAllShipsPlaced();
    expect(actual).toBe(false);
  });
  test('some ships placed', () => {
    gameboard.placeShip(carrier, 0, 0);
    gameboard.placeShip(battleship, 1, 0);
    const actual = gameboard.areAllShipsPlaced();
    expect(actual).toBe(false);
  });
  test('all ships placed', () => {
    gameboard.placeShip(cruiser, 2, 0);
    gameboard.placeShip(submarine, 3, 0);
    gameboard.placeShip(destroyer, 4, 0);
    const actual = gameboard.areAllShipsPlaced();
    expect(actual).toBe(true);
  });
});

describe('auto-place the fleet', () => {
  const gameboard = Gameboard();
  const player = Player();
  const fleet = player.getFleet();
  gameboard.autoPlaceFleet(fleet);

  test('all ships placed', () => {
    const actual = gameboard.areAllShipsPlaced();
    expect(actual).toBe(true);
  });
  test('number of cells matches all ships placed', () => {
    const actual = gameboard.getBoard().flat().filter((cell) => cell !== null).length;
    expect(actual).toBe(17);
  });
});

describe('receive attack', () => {
  const gameboard = Gameboard();
  const carrier = Ship('carrier');
  const battleship = Ship('battleship');
  gameboard.placeShip(carrier, 2, 0);
  battleship.changeDirection();
  gameboard.placeShip(battleship, 3, 2);
  gameboard.receiveAttack(0, 0);

  test('attack a carrer at index 0', () => {
    gameboard.receiveAttack(2, 0);
    const actual = carrier.getHits();
    expect(actual).toEqual(['hit', null, null, null, null]);
  });
  test('attack a carrier at index 3', () => {
    gameboard.receiveAttack(2, 3);
    const actual = carrier.getHits();
    expect(actual).toEqual(['hit', null, null, 'hit', null]);
  });
  test('miss', () => {
    const actual = gameboard.getBoard()[0][0];
    expect(actual).toEqual('miss');
  });
  test('hit at cell (2, 3)', () => {
    const actual = gameboard.getBoard()[2][3];
    expect(actual).toEqual('hit');
  });
});

describe('all ships sunk', () => {
  const gameboard = Gameboard();
  const submarine = Ship('submarine');
  const destroyer = Ship('destroyer');
  gameboard.placeShip(submarine, 2, 0);
  destroyer.changeDirection();
  gameboard.placeShip(destroyer, 3, 2);

  test('no ship is sunk', () => {
    const actual = gameboard.areAllShipsSunk();
    expect(actual).toEqual(false);
  });
  test('one ship sunk', () => {
    gameboard.receiveAttack(2, 0);
    gameboard.receiveAttack(2, 1);
    gameboard.receiveAttack(2, 2);
    const actual = gameboard.areAllShipsSunk();
    expect(actual).toEqual(false);
  });
  test('all ships sunk', () => {
    gameboard.receiveAttack(3, 2);
    gameboard.receiveAttack(4, 2);
    const actual = gameboard.areAllShipsSunk();
    expect(actual).toEqual(true);
  });
});

describe('reset board', () => {
  const gameboard = Gameboard();
  const player = Player();
  const fleet = player.getFleet();
  gameboard.autoPlaceFleet(fleet);
  gameboard.reset();
  test('empties the board', () => {
    const actual = gameboard.getBoard().flat().every((cell) => cell === null);
    expect(actual).toEqual(true);
  });
});
});

