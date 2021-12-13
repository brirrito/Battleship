/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/factories/drag.js":
/*!***********************************!*\
  !*** ./src/app/factories/drag.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/view/base.js */ "./src/app/view/base.js");
/* harmony import */ var _view_gameboardView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/gameboardView */ "./src/app/view/gameboardView.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var Drag = function Drag(p1, p1Board) {
  var draggedShip;
  var draggedShipIndex;

  var getDraggedShipIndex = function getDraggedShipIndex(e) {
    draggedShipIndex = Number(e.target.dataset.index);

    var dragStart = function dragStart(e) {
      draggedShip = e.target;
    };

    var dragDrop = function dragDrop(e) {
      var cell = e.target;
      var p1Ship = p1.getFleet()[draggedShip.dataset.ship];
      var isHorizontal = p1Ship.getDirection() === 'horizontal';
      var y = Number(cell.dataset.y) - (isHorizontal ? 0 : draggedShipIndex);
      var x = Number(cell.dataset.x) - (isHorizontal ? draggedShipIndex : 0);
      var outcome = p1Board.placeShip(p1Ship, y, x);

      if (outcome) {
        _view_gameboardView__WEBPACK_IMPORTED_MODULE_1__["default"].renderGrid(_home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_0__.elements.p1Grid, p1Board, p1.getType());
        addDragAndDropEventListeners();
        draggedsShip.parentElement.removeChild(draggedShip);

        if (p1Board.areAllShipsPlaced()) {
          _home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_0__.elements.startBtn.classList.add('show');
          _home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_0__.elements.fleetInfo.classList.add('hide');
          _home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_0__.elements.fleetInfo.classList.remove('show');
        }
      }
    };

    var dragOver = function dragOver(e) {
      return e.preventDefault();
    };

    var dragEnter = function dragEnter(e) {
      return e.preventDefault();
    };

    var dragLeave = function dragLeave() {};

    var dragEnd = function dragEnd() {};

    var addDragAndDropEventListeners = function addDragAndDropEventListeners() {
      var ships = document.querySelectorAll('.ship');
      var cells = _home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_0__.elements.p1Grid.childNodes;

      var _iterator = _createForOfIteratorHelper(ships),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ship = _step.value;
          ship.addEventListener('mousedown', getDraggedShipIndex);
          ship.addEventListener('dragstart', dragStart);
          ship.addEventListener('dragend', dragEnd);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(cells),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var cell = _step2.value;
          cell.addEventListener('dragover', dragOver);
          cell.addEventListener('dragenter', dragEnter);
          cell.addEventListener('dragleave', dragLeave);
          cell.addEventListener('drop', dragDrop);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };

    return {
      addDragAndDropEventListeners: addDragAndDropEventListeners
    };
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drag);

/***/ }),

/***/ "./src/app/factories/game.js":
/*!***********************************!*\
  !*** ./src/app/factories/game.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/app/factories/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/app/factories/player.js");
/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag */ "./src/app/factories/drag.js");
/* harmony import */ var _view_gameboardView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/gameboardView */ "./src/app/view/gameboardView.js");
/* harmony import */ var _home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/app/view/base.js */ "./src/app/view/base.js");






var Game = function Game(type) {
  var p1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('human');
  var p2;

  if (type === 'singleplayer') {
    p2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('computer');
  } else {
    p2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])('human');
  }

  var p1Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var p2Board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var drag = (0,_drag__WEBPACK_IMPORTED_MODULE_2__["default"])(p1, p1Board);

  var resetGame = function resetGame() {
    p1.resetFleet();
    p2.resetFleet();
    p1Board.reset();
    p2Board.reset();
  };

  var addRotateEventListeners = function addRotateEventListeners() {
    var ships = document.querySelectorAll('.ship');
    ships.forEach(function (ship) {
      ship.addEventListener('dblclick', function (e) {
        var shipElement = e.target.parentElement;
        var ship = p1.getFleet()[shipElement.dataset.ship];
        ship.changeDirection();
        shipElement.classList.toggle('vertical');
      });
    });
  };

  var renderFleet = function renderFleet() {
    _view_gameboardView__WEBPACK_IMPORTED_MODULE_3__["default"].renderFleet(p1.getFleet());
    drag.addDragAndDropEventListeners();
    addRotateEventListeners();
  };

  var addGridEventListeners = function addGridEventListeners() {
    if (p2.getType === 'human') _home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_4__.elements.p1Grid.addEventListener('click', ctrlAttack);
    _home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_4__.elements.p2Grid.addEventListener('click', ctrlAttack);
  };

  var ctrlAttack = function ctrlAttack(e) {
    var cell = e.target;

    if (cell.classList.contains('grid-cell')) {
      var y = cell.dataset.y;
      var x = cell.dadtaset.x;
      var boardCell = p2Board.getBoard()[y][x];

      if (boardCell !== 'miss' && boardCell !== 'hit') {
        p1.attack(y, x, p2Board);
        p2.autoAttack(p1Board);
        renderGrids();
      }

      if (p1Board.areAllShipsSunk() || p2Board.areAllShipsSunk()) {
        var winner = '';

        if (p1Board.areAllShipsSunk()) {
          winner = 'Computer Wins!';
        } else if (p2Board.areAllShipsSunk()) {
          winner = 'You Win!';
        }

        _home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_4__.elements.p2Grid.removeEventListener('click', ctrlAttack);
        _view_gameboardView__WEBPACK_IMPORTED_MODULE_3__["default"].renderWinner(winner);
      }
    }
  };

  var renderGrids = function renderGrids() {
    _view_gameboardView__WEBPACK_IMPORTED_MODULE_3__["default"].renderGrid(_home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_4__.elements.p1Grid, p1Board, p1.getType());
    _view_gameboardView__WEBPACK_IMPORTED_MODULE_3__["default"].renderGrid(_home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_4__.elements.p2Grid, p2Board, p2.getType());
  };

  var autoPlace = function autoPlace() {
    p1Board.reset();
    p1Board.autoPlaceFleet(p1.getFleet());
    renderGrids();
    _view_gameboardView__WEBPACK_IMPORTED_MODULE_3__["default"].autoPlace();
  };

  var startGame = function startGame() {
    addGridEventListeners();
    if (p2.getType() === 'computer') p2Board.autoPlaceFleet(p2.getFleet());
    _view_gameboardView__WEBPACK_IMPORTED_MODULE_3__["default"].startGame();
  };

  var playAgain = function playAgain() {
    resetGame();
    renderGrids();
    _view_gameboardView__WEBPACK_IMPORTED_MODULE_3__["default"].playAgain();
    renderFleet();
  };

  return {
    renderGrids: renderGrids,
    renderFleet: renderFleet,
    autoPlace: autoPlace,
    startGame: startGame,
    playAgain: playAgain
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/app/factories/gameboard.js":
/*!****************************************!*\
  !*** ./src/app/factories/gameboard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Gameboard = function Gameboard() {
  var board = Array(10).fill(null).map(function () {
    return Array(10).fill(null);
  });

  var getBoard = function getBoard() {
    return board;
  };

  var placedShips = [];

  var areAllShipsPlaced = function areAllShipsPlaced() {
    return placedShips.length === _helpers__WEBPACK_IMPORTED_MODULE_0__.SHIP_TYPES.length;
  };

  var adjustCoords = function adjustCoords(y0, x0, i, direction) {
    var x = x0 + i;
    var y = y0;

    if (direction === 'vertical') {
      x = x0;
      y = y0 + i;
    }

    return [y, x];
  };

  var placeShip = function placeShip(ship, y0, x0) {
    var direction = ship.getDirection();
    var valid = checkValid(ship.length, direction, y0, x0);

    if (valid) {
      for (var i = 0; i < ship.length; i++) {
        var _adjustCoords = adjustCoords(y0, x0, i, direction),
            _adjustCoords2 = _slicedToArray(_adjustCoords, 2),
            y = _adjustCoords2[0],
            x = _adjustCoords2[1];

        board[y][x] = {
          ship: ship,
          index: i
        };
      }

      placedShips.push(ship);
      return valid;
    } else {
      return valid;
    }
  };

  var checkValid = function checkValid(length, direction, y0, x0) {
    var cells = [];

    for (var i = 0; i < length; i++) {
      var _adjustCoords3 = adjustCoords(y0, x0, i, direction),
          _adjustCoords4 = _slicedToArray(_adjustCoords3, 2),
          y = _adjustCoords4[0],
          x = _adjustCoords4[1];

      if (y < 10 && x < 10) {
        cells.push(board[y][x]);
      } else {
        return false;
      }
    }

    return cells.every(function (cell) {
      return cell === null;
    });
  };

  var autoPlace = function autoPlace(ship) {
    var _randCoords = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.randCoords)(),
        _randCoords2 = _slicedToArray(_randCoords, 2),
        y = _randCoords2[0],
        x = _randCoords2[1];

    var changeOrient = Math.random() > 0.5;
    if (changeOrient) ship.changeDirection();
    var placed = placeShip(ship, y, x);
    if (!placed) autoPlace(ship);
  };

  var autoPlaceFleet = function autoPlaceFleet(fleet) {
    for (var ship in fleet) {
      autoPlace(fleet[ship]);
    }
  };

  var receiveAttack = function receiveAttack(y, x) {
    if (board[y][x] === null) {
      board[y][x] = 'miss';
    } else if (board[y][x].ship) {
      board[y][x].ship.hit(board[y][x].index);
      board[y][x] = 'hit';
    }

    return board[y][x];
  };

  var areAllShipsSunk = function areAllShipsSunk() {
    return placedShips.every(function (ship) {
      return ship.isSunk();
    });
  };

  var reset = function reset() {
    board = Array(10).fill(null).map(function () {
      return Array(10).fill(null);
    });
    placedShips = [];
  };

  return {
    getBoard: getBoard,
    placeShip: placeShip,
    areAllShipsPlaced: areAllShipsPlaced,
    receiveAttack: receiveAttack,
    areAllShipsSunk: areAllShipsSunk,
    autoPlaceFleet: autoPlaceFleet,
    reset: reset
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/app/factories/player.js":
/*!*************************************!*\
  !*** ./src/app/factories/player.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Player = function Player() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'human';
  var fleet = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createFleet)(_helpers__WEBPACK_IMPORTED_MODULE_0__.SHIP_TYPES);

  var getType = function getType() {
    return type;
  };

  var getFleet = function getFleet() {
    return fleet;
  };

  var attack = function attack(y, x, enemyBoard) {
    return enemyBoard.receiveAttack(y, x);
  };

  var autoAttack = function autoAttack(enemyBoard) {
    var _randCoords = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.randCoords)(),
        _randCoords2 = _slicedToArray(_randCoords, 2),
        y = _randCoords2[0],
        x = _randCoords2[1];

    var cell = enemyBoard.getBoard()[y][x];

    if (cell === 'miss' || cell === 'hit') {
      autoAttack(enemyBoard);
    } else {
      enemyBoard.receiveAttack(y, x);
    }
  };

  var resetFleet = function resetFleet() {
    return fleet = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createFleet)(_helpers__WEBPACK_IMPORTED_MODULE_0__.SHIP_TYPES);
  };

  return {
    getType: getType,
    getFleet: getFleet,
    attack: attack,
    autoAttack: autoAttack,
    resetFleet: resetFleet
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/app/factories/ships.js":
/*!************************************!*\
  !*** ./src/app/factories/ships.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.js");


var Ship = function Ship(type) {
  var id = type;
  var length = _helpers__WEBPACK_IMPORTED_MODULE_0__.SHIP_LENGTHS[type];
  var direction = 'horizontal';

  var getDirection = function getDirection() {
    return direction;
  };

  var changeDirection = function changeDirection() {
    direction === 'horizontal' ? direction = 'vertical' : direction = 'horizontal';
  };

  var hits = Array(length).fill(null);

  var hit = function hit(i) {
    return hits[i] = 'hit';
  };

  var getHits = function getHits() {
    return hits;
  };

  var isSunk = function isSunk() {
    return hits.every(function (h) {
      return h === 'hit';
    });
  };

  return {
    id: id,
    length: length,
    hit: hit,
    getHits: getHits,
    isSunk: isSunk,
    getDirection: getDirection,
    changeDirection: changeDirection
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/app/helpers.js":
/*!****************************!*\
  !*** ./src/app/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SHIP_TYPES": () => (/* binding */ SHIP_TYPES),
/* harmony export */   "SHIP_LENGTHS": () => (/* binding */ SHIP_LENGTHS),
/* harmony export */   "randCoords": () => (/* binding */ randCoords),
/* harmony export */   "createFleet": () => (/* binding */ createFleet)
/* harmony export */ });
/* harmony import */ var _home_brirrito_the_odin_project_Battleship_src_app_factories_ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/factories/ships.js */ "./src/app/factories/ships.js");

var SHIP_TYPES = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer'];
var SHIP_LENGTHS = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2
};

var rand = function rand() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  return Math.floor(Math.random() * size);
};

var randCoords = function randCoords() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  return [rand(size), rand(size)];
};
var createFleet = function createFleet(types) {
  var fleet = {};
  types.forEach(function (type) {
    return fleet[type] = (0,_home_brirrito_the_odin_project_Battleship_src_app_factories_ships_js__WEBPACK_IMPORTED_MODULE_0__["default"])(type);
  });
  return fleet;
};

/***/ }),

/***/ "./src/app/view/base.js":
/*!******************************!*\
  !*** ./src/app/view/base.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elements": () => (/* binding */ elements)
/* harmony export */ });
var elements = {
  p1Gameboard: document.querySelector('.p1-gameboard'),
  p2Gameboard: document.querySelector('.p2-gameboard'),
  p1Grid: document.querySelector('.p1-grid'),
  p2Grid: document.querySelector('.p2-grid'),
  infoContainer: document.querySelector('.info-container'),
  infoText: document.querySelector('.info-text'),
  autoPlaceBtn: document.querySelector('.fleet-autoplace'),
  playAgainBtn: document.querySelector('.play-again'),
  startBtn: document.querySelector('.start'),
  fleetContainer: document.querySelector('.fleet-container'),
  fleetDraggable: document.querySelector('.fleet-draggable'),
  fleetInfo: document.querySelector('.fleet-info')
};

/***/ }),

/***/ "./src/app/view/gameboardView.js":
/*!***************************************!*\
  !*** ./src/app/view/gameboardView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/app/view/base.js");


var gameboardView = function () {
  var renderCell = function renderCell(y, x, status) {
    return "<div class=\"grid-cell cell-".concat(y, "-").concat(x, " ").concat(status, "\" data-y='").concat(y, "' data-x='").concat(x, "></div>");
  };

  var clearGrid = function clearGrid(parent) {
    parent.textContent = '';
  };

  var renderGrid = function renderGrid(parent, gameboard, type) {
    clearGrid(parent);
    var board = gameboard.getBoard();
    var length = board.length;
    var grid = '';

    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length; j++) {
        var status = board[i][j];

        if (status === null) {
          status = '';
        } else if (status.ship) {
          if (type === 'human') {
            status = status.ship.id;
          } else {
            status = '';
          }
        }

        grid += renderCell(i, j, status);
      }
    }

    parent.insertAdjacentHTML('afterbegin', grid);
  };

  var renderFleet = function renderFleet(fleet) {
    for (var ship in fleet) {
      var container = document.createElement('div');
      container.classList.add('ship', "".concat(fleet[ship].id, "-container"));
      container.setAttribute('draggable', true);
      container.dataset.ship = "".concat(fleet[ship].id);
      var divs = '';

      for (var i = 0; i < fleet[ship].length; i++) {
        divs += "<div class=".concat(fleet[ship].id, " data-index='").concat(i, "'></div>");
      }

      container.insertAdjacentHTML('afterbegin', divs);
      _base__WEBPACK_IMPORTED_MODULE_0__.elements.fleetDraggable.prepend(container);
    }
  };

  var autoPlace = function autoPlace() {
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.startBtn.classList.add('show');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.fleetInfo.classList.add('hide');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.fleetInfo.classList.remove('show');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.fleetDraggable.textContent = '';
  };

  var startGame = function startGame() {
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.p1Gameboard.classList.toggle('grid-disabled');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.p2Gameboard.classList.toggle('grid-disabled');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.p2Gameboard.classList.toggle('hide');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.p2Gameboard.classList.toggle('show');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.startBtn.classList.remove('show');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.autoPlaceBtn.classList.remove('show');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.fleetDraggable.classList.toggle('slide-out');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.fleetDraggable.classList.toggle('slide-in');
  };

  var renderWinner = function renderWinner(winner) {
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.infoContainer.classList.toggle('show');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.infoText.textContent = "".concat(winner.toUpperCase);
  };

  var playAgain = function playAgain() {
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.infoContainer.classList.toggle('show');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.p1Gameboard.classList.toggle('grid-disabled');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.p2Gameboard.classList.toggle('grid-disabled');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.p2Gameboard.classList.toggle('hide');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.p2Gameboard.classList.toggle('show');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.fleetInfo.classList.toggle('hide');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.fleetInfo.classList.toggle('show');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.autoPlaceBtn.classList.add('show');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.fleetContainer.classList.toggle('slide-in');
    _base__WEBPACK_IMPORTED_MODULE_0__.elements.fleetContainer.classList.toggle('slide-out');
  };

  return {
    renderGrid: renderGrid,
    renderFleet: renderFleet,
    autoPlace: autoPlace,
    startGame: startGame,
    renderWinner: renderWinner,
    playAgain: playAgain
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardView);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable.\n   ╷\n13 │   background: $bg-color;\n   │               ^^^^^^^^^\n   ╵\n  src/scss/_base.scss 13:15  @import\n  src/style.scss 1:9         root stylesheet");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_brirrito_the_odin_project_Battleship_src_app_factories_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/factories/game.js */ "./src/app/factories/game.js");
/* harmony import */ var _home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/view/base.js */ "./src/app/view/base.js");
/* harmony import */ var _home_brirrito_the_odin_project_Battleship_src_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/style.scss */ "./src/style.scss");



var gameType = 'singlePlayer';
var game = (0,_home_brirrito_the_odin_project_Battleship_src_app_factories_game_js__WEBPACK_IMPORTED_MODULE_0__["default"])(gameType);
game.renderGrids();
game.renderFleet();
_home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_1__.elements.autoPlaceBtn.addEventListener('click', function (e) {
  console.log('autoplaced player fleet');
  game.autoPlace();
});
_home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_1__.elements.startBtn.addEventListener('click', function (e) {
  console.log('game start');
  game.startGame();
});
_home_brirrito_the_odin_project_Battleship_src_app_view_base_js__WEBPACK_IMPORTED_MODULE_1__.elements.playAgainBtn.addEventListener('click', function (e) {
  console.log("Let's play again!");
  game.playAgain();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFMO0FBQ0QsQ0FIRDtBQUtBakYsbUlBQUEsQ0FBdUMsT0FBdkMsRUFBZ0QsVUFBQ1EsQ0FBRCxFQUFPO0FBQ3JEK0ksRUFBQUEsT0FBTyxDQUFDQyxHQUFSO0FBQ0FGLEVBQUFBLElBQUksQ0FBQ3BFLFNBQUw7QUFDRCxDQUhELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9mYWN0b3JpZXMvZHJhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9mYWN0b3JpZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9mYWN0b3JpZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvZmFjdG9yaWVzL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAvdmlldy9iYXNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwL3ZpZXcvZ2FtZWJvYXJkVmlldy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gJy9ob21lL2JyaXJyaXRvL3RoZV9vZGluX3Byb2plY3QvQmF0dGxlc2hpcC9zcmMvYXBwL3ZpZXcvYmFzZS5qcyc7XG5pbXBvcnQgZ2FtZWJvYXJkVmlldyBmcm9tICcuLi92aWV3L2dhbWVib2FyZFZpZXcnO1xuXG5jb25zdCBEcmFnID0gKHAxLCBwMUJvYXJkKSA9PiB7XG4gIGxldCBkcmFnZ2VkU2hpcDtcbiAgbGV0IGRyYWdnZWRTaGlwSW5kZXg7XG5cbiAgY29uc3QgZ2V0RHJhZ2dlZFNoaXBJbmRleCA9IChlKSA9PiB7XG4gICAgZHJhZ2dlZFNoaXBJbmRleCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LmluZGV4KTtcblxuICAgIGNvbnN0IGRyYWdTdGFydCA9IChlKSA9PiB7XG4gICAgICBkcmFnZ2VkU2hpcCA9IGUudGFyZ2V0O1xuICAgIH07XG5cbiAgICBjb25zdCBkcmFnRHJvcCA9IChlKSA9PiB7XG4gICAgICBjb25zdCBjZWxsID0gZS50YXJnZXQ7XG4gICAgICBjb25zdCBwMVNoaXAgPSBwMS5nZXRGbGVldCgpW2RyYWdnZWRTaGlwLmRhdGFzZXQuc2hpcF07XG4gICAgICBjb25zdCBpc0hvcml6b250YWwgPSBwMVNoaXAuZ2V0RGlyZWN0aW9uKCkgPT09ICdob3Jpem9udGFsJztcblxuICAgICAgY29uc3QgeSA9IE51bWJlcihjZWxsLmRhdGFzZXQueSkgLSAoaXNIb3Jpem9udGFsID8gMCA6IGRyYWdnZWRTaGlwSW5kZXgpO1xuICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsLmRhdGFzZXQueCkgLSAoaXNIb3Jpem9udGFsID8gZHJhZ2dlZFNoaXBJbmRleCA6IDApO1xuXG4gICAgICBjb25zdCBvdXRjb21lID0gcDFCb2FyZC5wbGFjZVNoaXAocDFTaGlwLCB5LCB4KTtcbiAgICAgIGlmIChvdXRjb21lKSB7XG4gICAgICAgIGdhbWVib2FyZFZpZXcucmVuZGVyR3JpZChlbGVtZW50cy5wMUdyaWQsIHAxQm9hcmQsIHAxLmdldFR5cGUoKSk7XG4gICAgICAgIGFkZERyYWdBbmREcm9wRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgZHJhZ2dlZHNTaGlwLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZHJhZ2dlZFNoaXApO1xuXG4gICAgICAgIGlmIChwMUJvYXJkLmFyZUFsbFNoaXBzUGxhY2VkKCkpIHtcbiAgICAgICAgICBlbGVtZW50cy5zdGFydEJ0bi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgZWxlbWVudHMuZmxlZXRJbmZvLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICBlbGVtZW50cy5mbGVldEluZm8uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGRyYWdPdmVyID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkcmFnRW50ZXIgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRyYWdMZWF2ZSA9ICgpID0+IHt9O1xuICAgIGNvbnN0IGRyYWdFbmQgPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0IGFkZERyYWdBbmREcm9wRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG4gICAgICBjb25zdCBjZWxscyA9IGVsZW1lbnRzLnAxR3JpZC5jaGlsZE5vZGVzO1xuXG4gICAgICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBnZXREcmFnZ2VkU2hpcEluZGV4KTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBkcmFnRW5kKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcmFnRHJvcCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IGFkZERyYWdBbmREcm9wRXZlbnRMaXN0ZW5lcnMgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgRHJhZyBmcm9tICcuL2RyYWcnO1xuaW1wb3J0IGdhbWVib2FyZFZpZXcgZnJvbSAnLi4vdmlldy9nYW1lYm9hcmRWaWV3JztcbmltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnL2hvbWUvYnJpcnJpdG8vdGhlX29kaW5fcHJvamVjdC9CYXR0bGVzaGlwL3NyYy9hcHAvdmlldy9iYXNlLmpzJztcblxuY29uc3QgR2FtZSA9ICh0eXBlKSA9PiB7XG4gIGNvbnN0IHAxID0gUGxheWVyKCdodW1hbicpO1xuICBsZXQgcDI7XG4gIGlmICh0eXBlID09PSAnc2luZ2xlcGxheWVyJykge1xuICAgIHAyID0gUGxheWVyKCdjb21wdXRlcicpO1xuICB9IGVsc2Uge1xuICAgIHAyID0gUGxheWVyKCdodW1hbicpO1xuICB9XG5cbiAgY29uc3QgcDFCb2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBwMkJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgZHJhZyA9IERyYWcocDEsIHAxQm9hcmQpO1xuXG4gIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICBwMS5yZXNldEZsZWV0KCk7XG4gICAgcDIucmVzZXRGbGVldCgpO1xuICAgIHAxQm9hcmQucmVzZXQoKTtcbiAgICBwMkJvYXJkLnJlc2V0KCk7XG4gIH07XG5cbiAgY29uc3QgYWRkUm90YXRlRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwRWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBwMS5nZXRGbGVldCgpW3NoaXBFbGVtZW50LmRhdGFzZXQuc2hpcF07XG4gICAgICAgIHNoaXAuY2hhbmdlRGlyZWN0aW9uKCk7XG4gICAgICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3ZlcnRpY2FsJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJGbGVldCA9ICgpID0+IHtcbiAgICBnYW1lYm9hcmRWaWV3LnJlbmRlckZsZWV0KHAxLmdldEZsZWV0KCkpO1xuICAgIGRyYWcuYWRkRHJhZ0FuZERyb3BFdmVudExpc3RlbmVycygpO1xuICAgIGFkZFJvdGF0ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgYWRkR3JpZEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGlmIChwMi5nZXRUeXBlID09PSAnaHVtYW4nKVxuICAgICAgZWxlbWVudHMucDFHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3RybEF0dGFjayk7XG4gICAgZWxlbWVudHMucDJHcmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3RybEF0dGFjayk7XG4gIH07XG5cbiAgY29uc3QgY3RybEF0dGFjayA9IChlKSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0O1xuICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnZ3JpZC1jZWxsJykpIHtcbiAgICAgIGNvbnN0IHkgPSBjZWxsLmRhdGFzZXQueTtcbiAgICAgIGNvbnN0IHggPSBjZWxsLmRhZHRhc2V0Lng7XG5cbiAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IHAyQm9hcmQuZ2V0Qm9hcmQoKVt5XVt4XTtcbiAgICAgIGlmIChib2FyZENlbGwgIT09ICdtaXNzJyAmJiBib2FyZENlbGwgIT09ICdoaXQnKSB7XG4gICAgICAgIHAxLmF0dGFjayh5LCB4LCBwMkJvYXJkKTtcbiAgICAgICAgcDIuYXV0b0F0dGFjayhwMUJvYXJkKTtcblxuICAgICAgICByZW5kZXJHcmlkcygpO1xuICAgICAgfVxuXG4gICAgICBpZiAocDFCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSB8fCBwMkJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIGxldCB3aW5uZXIgPSAnJztcbiAgICAgICAgaWYgKHAxQm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICB3aW5uZXIgPSAnQ29tcHV0ZXIgV2lucyEnO1xuICAgICAgICB9IGVsc2UgaWYgKHAyQm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICB3aW5uZXIgPSAnWW91IFdpbiEnO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnRzLnAyR3JpZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGN0cmxBdHRhY2spO1xuICAgICAgICBnYW1lYm9hcmRWaWV3LnJlbmRlcldpbm5lcih3aW5uZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJHcmlkcyA9ICgpID0+IHtcbiAgICBnYW1lYm9hcmRWaWV3LnJlbmRlckdyaWQoZWxlbWVudHMucDFHcmlkLCBwMUJvYXJkLCBwMS5nZXRUeXBlKCkpO1xuICAgIGdhbWVib2FyZFZpZXcucmVuZGVyR3JpZChlbGVtZW50cy5wMkdyaWQsIHAyQm9hcmQsIHAyLmdldFR5cGUoKSk7XG4gIH07XG5cbiAgY29uc3QgYXV0b1BsYWNlID0gKCkgPT4ge1xuICAgIHAxQm9hcmQucmVzZXQoKTtcbiAgICBwMUJvYXJkLmF1dG9QbGFjZUZsZWV0KHAxLmdldEZsZWV0KCkpO1xuICAgIHJlbmRlckdyaWRzKCk7XG4gICAgZ2FtZWJvYXJkVmlldy5hdXRvUGxhY2UoKTtcbiAgfTtcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgYWRkR3JpZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgaWYgKHAyLmdldFR5cGUoKSA9PT0gJ2NvbXB1dGVyJykgcDJCb2FyZC5hdXRvUGxhY2VGbGVldChwMi5nZXRGbGVldCgpKTtcbiAgICBnYW1lYm9hcmRWaWV3LnN0YXJ0R2FtZSgpO1xuICB9O1xuXG4gIGNvbnN0IHBsYXlBZ2FpbiA9ICgpID0+IHtcbiAgICByZXNldEdhbWUoKTtcbiAgICByZW5kZXJHcmlkcygpO1xuICAgIGdhbWVib2FyZFZpZXcucGxheUFnYWluKCk7XG4gICAgcmVuZGVyRmxlZXQoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlckdyaWRzLFxuICAgIHJlbmRlckZsZWV0LFxuICAgIGF1dG9QbGFjZSxcbiAgICBzdGFydEdhbWUsXG4gICAgcGxheUFnYWluLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgeyByYW5kQ29vcmRzLCBTSElQX1RZUEVTIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgbGV0IGJvYXJkID0gQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICBsZXQgcGxhY2VkU2hpcHMgPSBbXTtcbiAgY29uc3QgYXJlQWxsU2hpcHNQbGFjZWQgPSAoKSA9PiBwbGFjZWRTaGlwcy5sZW5ndGggPT09IFNISVBfVFlQRVMubGVuZ3RoO1xuICBcblxuICBjb25zdCBhZGp1c3RDb29yZHMgPSAoeTAsIHgwLCBpLCBkaXJlY3Rpb24pID0+IHtcbiAgICBsZXQgeCA9IHgwICsgaTtcbiAgICBsZXQgeSA9IHkwO1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHggPSB4MDtcbiAgICAgIHkgPSB5MCArIGk7XG4gICAgfVxuICAgIHJldHVybiBbeSwgeF07XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHkwLCB4MCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHNoaXAuZ2V0RGlyZWN0aW9uKCk7XG4gICAgY29uc3QgdmFsaWQgPSBjaGVja1ZhbGlkKHNoaXAubGVuZ3RoLCBkaXJlY3Rpb24sIHkwLCB4MCk7XG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgW3ksIHhdID0gYWRqdXN0Q29vcmRzKHkwLCB4MCwgaSwgZGlyZWN0aW9uKTtcbiAgICAgICAgYm9hcmRbeV1beF0gPSB7IHNoaXAsIGluZGV4OiBpIH07XG4gICAgICB9XG5cbiAgICAgIHBsYWNlZFNoaXBzLnB1c2goc2hpcCk7XG4gICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tWYWxpZCA9IChsZW5ndGgsIGRpcmVjdGlvbiwgeTAsIHgwKSA9PiB7XG4gICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBbeSwgeF0gPSBhZGp1c3RDb29yZHMoeTAsIHgwLCBpLCBkaXJlY3Rpb24pO1xuICAgICAgaWYgKHkgPCAxMCAmJiB4IDwgMTApIHtcbiAgICAgICAgY2VsbHMucHVzaChib2FyZFt5XVt4XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjZWxscy5ldmVyeSgoY2VsbCkgPT4gY2VsbCA9PT0gbnVsbCk7XG4gIH07XG5cbiAgY29uc3QgYXV0b1BsYWNlID0gKHNoaXApID0+IHtcbiAgICBjb25zdCBbeSwgeF0gPSByYW5kQ29vcmRzKCk7XG4gICAgY29uc3QgY2hhbmdlT3JpZW50ID0gTWF0aC5yYW5kb20oKSA+IDAuNTtcbiAgICBpZiAoY2hhbmdlT3JpZW50KSBzaGlwLmNoYW5nZURpcmVjdGlvbigpO1xuICAgIGNvbnN0IHBsYWNlZCA9IHBsYWNlU2hpcChzaGlwLCB5LCB4KTtcbiAgICBpZiAoIXBsYWNlZCkgYXV0b1BsYWNlKHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IGF1dG9QbGFjZUZsZWV0ID0gKGZsZWV0KSA9PiB7XG4gICAgZm9yIChjb25zdCBzaGlwIGluIGZsZWV0KSB7XG4gICAgICBhdXRvUGxhY2UoZmxlZXRbc2hpcF0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHksIHgpID0+IHtcbiAgICBpZiAoYm9hcmRbeV1beF0gPT09IG51bGwpIHtcbiAgICAgIGJvYXJkW3ldW3hdID0gJ21pc3MnO1xuICAgIH0gZWxzZSBpZiAoYm9hcmRbeV1beF0uc2hpcCkge1xuICAgICAgYm9hcmRbeV1beF0uc2hpcC5oaXQoYm9hcmRbeV1beF0uaW5kZXgpO1xuICAgICAgYm9hcmRbeV1beF0gPSAnaGl0JztcbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkW3ldW3hdO1xuICB9O1xuXG4gIGNvbnN0IGFyZUFsbFNoaXBzU3VuayA9ICgpID0+IHBsYWNlZFNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcblxuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBib2FyZCA9IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSk7XG4gICAgcGxhY2VkU2hpcHMgPSBbXTtcbiAgfTtcblxuICByZXR1cm4geyBcbiAgICBnZXRCb2FyZCxcbiAgICBwbGFjZVNoaXAsXG4gICAgYXJlQWxsU2hpcHNQbGFjZWQsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhcmVBbGxTaGlwc1N1bmssXG4gICAgYXV0b1BsYWNlRmxlZXQsXG4gICAgcmVzZXQsXG4gIH07XG59OyBcblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7IiwiaW1wb3J0IHsgU0hJUF9UWVBFUywgcmFuZENvb3JkcywgY3JlYXRlRmxlZXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgUGxheWVyID0gKHR5cGUgPSAnaHVtYW4nKSA9PiB7XG4gIGxldCBmbGVldCA9IGNyZWF0ZUZsZWV0KFNISVBfVFlQRVMpO1xuXG4gIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB0eXBlO1xuICBjb25zdCBnZXRGbGVldCA9ICgpID0+IGZsZWV0O1xuXG4gIGNvbnN0IGF0dGFjayA9ICh5LCB4LCBlbmVteUJvYXJkKSA9PiBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeSwgeCk7XG5cbiAgY29uc3QgYXV0b0F0dGFjayA9IChlbmVteUJvYXJkKSA9PiB7XG4gICAgY29uc3QgW3ksIHhdID0gcmFuZENvb3JkcygpO1xuICAgIGNvbnN0IGNlbGwgPSBlbmVteUJvYXJkLmdldEJvYXJkKClbeV1beF07XG4gICAgaWYgKGNlbGwgPT09ICdtaXNzJyB8fCBjZWxsID09PSAnaGl0Jykge1xuICAgICAgYXV0b0F0dGFjayhlbmVteUJvYXJkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHksIHgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNldEZsZWV0ID0gKCkgPT4gKGZsZWV0ID0gY3JlYXRlRmxlZXQoU0hJUF9UWVBFUykpO1xuXG4gIHJldHVybiB7IGdldFR5cGUsIGdldEZsZWV0LCBhdHRhY2ssIGF1dG9BdHRhY2ssIHJlc2V0RmxlZXQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJpbXBvcnQgeyBTSElQX0xFTkdUSFMgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgU2hpcCA9ICh0eXBlKSA9PiB7XG4gIGNvbnN0IGlkID0gdHlwZTtcbiAgY29uc3QgbGVuZ3RoID0gU0hJUF9MRU5HVEhTW3R5cGVdO1xuICBsZXQgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuXG4gIGNvbnN0IGdldERpcmVjdGlvbiA9ICgpID0+IGRpcmVjdGlvbjtcbiAgY29uc3QgY2hhbmdlRGlyZWN0aW9uID0gKCkgPT4ge1xuICAgIGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gKGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCcpIDogKGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJyk7XG4gIH07XG5cbiAgY29uc3QgaGl0cyA9IEFycmF5KGxlbmd0aCkuZmlsbChudWxsKTtcbiAgY29uc3QgaGl0ID0gKGkpID0+IChoaXRzW2ldID0gJ2hpdCcpO1xuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRzLmV2ZXJ5KChoKSA9PiBoID09PSAnaGl0Jyk7XG5cbiAgcmV0dXJuIHsgaWQsIGxlbmd0aCwgaGl0LCBnZXRIaXRzLCBpc1N1bmssIGdldERpcmVjdGlvbiwgY2hhbmdlRGlyZWN0aW9uIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnL2hvbWUvYnJpcnJpdG8vdGhlX29kaW5fcHJvamVjdC9CYXR0bGVzaGlwL3NyYy9hcHAvZmFjdG9yaWVzL3NoaXBzLmpzJztcblxuZXhwb3J0IGNvbnN0IFNISVBfVFlQRVMgPSBbXG4gICdjYXJyaWVyJyxcbiAgJ2JhdHRsZXNoaXAnLFxuICAnY3J1aXNlcicsXG4gICdzdWJtYXJpbmUnLFxuICAnZGVzdHJveWVyJyxcbl07XG5cbmV4cG9ydCBjb25zdCBTSElQX0xFTkdUSFMgPSB7XG4gIGNhcnJpZXI6IDUsXG4gIGJhdHRsZXNoaXA6IDQsXG4gIGNydWlzZXI6IDMsXG4gIHN1Ym1hcmluZTogMyxcbiAgZGVzdHJveWVyOiAyLFxufTtcblxuY29uc3QgcmFuZCA9IChzaXplID0gMTApID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpO1xuXG5leHBvcnQgY29uc3QgcmFuZENvb3JkcyA9IChzaXplID0gMTApID0+IFtyYW5kKHNpemUpLCByYW5kKHNpemUpXTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZsZWV0ID0gKHR5cGVzKSA9PiB7XG4gIGNvbnN0IGZsZWV0ID0ge307XG4gIHR5cGVzLmZvckVhY2goKHR5cGUpID0+IChmbGVldFt0eXBlXSA9IFNoaXAodHlwZSkpKTtcbiAgcmV0dXJuIGZsZWV0O1xufTsiLCJleHBvcnQgY29uc3QgZWxlbWVudHMgPSB7XG4gIHAxR2FtZWJvYXJkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtZ2FtZWJvYXJkJyksXG4gIHAyR2FtZWJvYXJkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItZ2FtZWJvYXJkJyksXG4gIHAxR3JpZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWdyaWQnKSxcbiAgcDJHcmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItZ3JpZCcpLFxuICBpbmZvQ29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1jb250YWluZXInKSxcbiAgaW5mb1RleHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLXRleHQnKSxcbiAgYXV0b1BsYWNlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxlZXQtYXV0b3BsYWNlJyksXG4gIHBsYXlBZ2FpbkJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktYWdhaW4nKSxcbiAgc3RhcnRCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpLFxuICBmbGVldENvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZWV0LWNvbnRhaW5lcicpLFxuICBmbGVldERyYWdnYWJsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsZWV0LWRyYWdnYWJsZScpLFxuICBmbGVldEluZm86IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGVldC1pbmZvJyksXG59OyIsImltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSAnLi9iYXNlJztcblxuY29uc3QgZ2FtZWJvYXJkVmlldyA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlbmRlckNlbGwgPSAoeSwgeCwgc3RhdHVzKSA9PlxuICBgPGRpdiBjbGFzcz1cImdyaWQtY2VsbCBjZWxsLSR7eX0tJHt4fSAke3N0YXR1c31cIiBkYXRhLXk9JyR7eX0nIGRhdGEteD0nJHt4fT48L2Rpdj5gO1xuXG4gIGNvbnN0IGNsZWFyR3JpZCA9IChwYXJlbnQpID0+IHtcbiAgICBwYXJlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgfTtcblxuICBjb25zdCByZW5kZXJHcmlkID0gKHBhcmVudCwgZ2FtZWJvYXJkLCB0eXBlKSA9PiB7XG4gICAgY2xlYXJHcmlkKHBhcmVudCk7XG4gICAgY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICBjb25zdCBsZW5ndGggPSBib2FyZC5sZW5ndGg7XG4gICAgbGV0IGdyaWQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBzdGF0dXMgPSBib2FyZFtpXVtqXTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gbnVsbCkge1xuICAgICAgICAgIHN0YXR1cyA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cy5zaGlwKSB7XG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdodW1hbicpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9IHN0YXR1cy5zaGlwLmlkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ3JpZCArPSByZW5kZXJDZWxsKGksIGosIHN0YXR1cyk7XG4gICAgICB9XG4gICAgfVxuICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBncmlkKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJGbGVldCA9IChmbGVldCkgPT4ge1xuICAgIGZvciAoY29uc3Qgc2hpcCBpbiBmbGVldCkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hpcCcsIGAke2ZsZWV0W3NoaXBdLmlkfS1jb250YWluZXJgKTtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgY29udGFpbmVyLmRhdGFzZXQuc2hpcCA9IGAke2ZsZWV0W3NoaXBdLmlkfWA7XG4gICAgICBsZXQgZGl2cyA9ICcnO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbGVldFtzaGlwXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBkaXZzICs9IGA8ZGl2IGNsYXNzPSR7ZmxlZXRbc2hpcF0uaWR9IGRhdGEtaW5kZXg9JyR7aX0nPjwvZGl2PmBcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBkaXZzKTtcbiAgICAgIGVsZW1lbnRzLmZsZWV0RHJhZ2dhYmxlLnByZXBlbmQoY29udGFpbmVyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXV0b1BsYWNlID0gKCkgPT4ge1xuICAgIGVsZW1lbnRzLnN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICBlbGVtZW50cy5mbGVldEluZm8uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGVsZW1lbnRzLmZsZWV0SW5mby5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgZWxlbWVudHMuZmxlZXREcmFnZ2FibGUudGV4dENvbnRlbnQgPSAnJztcbiAgfTtcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgZWxlbWVudHMucDFHYW1lYm9hcmQuY2xhc3NMaXN0LnRvZ2dsZSgnZ3JpZC1kaXNhYmxlZCcpO1xuICAgIGVsZW1lbnRzLnAyR2FtZWJvYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2dyaWQtZGlzYWJsZWQnKTtcbiAgICBlbGVtZW50cy5wMkdhbWVib2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgZWxlbWVudHMucDJHYW1lYm9hcmQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIGVsZW1lbnRzLnN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICBlbGVtZW50cy5hdXRvUGxhY2VCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIGVsZW1lbnRzLmZsZWV0RHJhZ2dhYmxlLmNsYXNzTGlzdC50b2dnbGUoJ3NsaWRlLW91dCcpO1xuICAgIGVsZW1lbnRzLmZsZWV0RHJhZ2dhYmxlLmNsYXNzTGlzdC50b2dnbGUoJ3NsaWRlLWluJyk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyV2lubmVyID0gKHdpbm5lcikgPT4ge1xuICAgIGVsZW1lbnRzLmluZm9Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIGVsZW1lbnRzLmluZm9UZXh0LnRleHRDb250ZW50ID0gYCR7d2lubmVyLnRvVXBwZXJDYXNlfWA7XG4gIH07XG5cbiAgY29uc3QgcGxheUFnYWluID0gKCkgPT4ge1xuICAgIGVsZW1lbnRzLmluZm9Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIGVsZW1lbnRzLnAxR2FtZWJvYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2dyaWQtZGlzYWJsZWQnKTtcbiAgICBlbGVtZW50cy5wMkdhbWVib2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdncmlkLWRpc2FibGVkJyk7XG4gICAgZWxlbWVudHMucDJHYW1lYm9hcmQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIGVsZW1lbnRzLnAyR2FtZWJvYXJkLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICBlbGVtZW50cy5mbGVldEluZm8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgIGVsZW1lbnRzLmZsZWV0SW5mby5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgZWxlbWVudHMuYXV0b1BsYWNlQnRuLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICBlbGVtZW50cy5mbGVldENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdzbGlkZS1pbicpO1xuICAgIGVsZW1lbnRzLmZsZWV0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3NsaWRlLW91dCcpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyR3JpZCxcbiAgICByZW5kZXJGbGVldCwgXG4gICAgYXV0b1BsYWNlLFxuICAgIHN0YXJ0R2FtZSxcbiAgICByZW5kZXJXaW5uZXIsXG4gICAgcGxheUFnYWluLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkVmlldzsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2FtZSBmcm9tICcvaG9tZS9icmlycml0by90aGVfb2Rpbl9wcm9qZWN0L0JhdHRsZXNoaXAvc3JjL2FwcC9mYWN0b3JpZXMvZ2FtZS5qcyc7XG5pbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gJy9ob21lL2JyaXJyaXRvL3RoZV9vZGluX3Byb2plY3QvQmF0dGxlc2hpcC9zcmMvYXBwL3ZpZXcvYmFzZS5qcyc7XG5pbXBvcnQgJy9ob21lL2JyaXJyaXRvL3RoZV9vZGluX3Byb2plY3QvQmF0dGxlc2hpcC9zcmMvc3R5bGUuc2Nzcyc7XG5cblxubGV0IGdhbWVUeXBlID0gJ3NpbmdsZVBsYXllcic7XG5sZXQgZ2FtZSA9IEdhbWUoZ2FtZVR5cGUpO1xuXG5nYW1lLnJlbmRlckdyaWRzKCk7XG5nYW1lLnJlbmRlckZsZWV0KCk7XG5cbmVsZW1lbnRzLmF1dG9QbGFjZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdhdXRvcGxhY2VkIHBsYXllciBmbGVldCcpO1xuICBnYW1lLmF1dG9QbGFjZSgpO1xufSk7XG5cbmVsZW1lbnRzLnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc29sZS5sb2coJ2dhbWUgc3RhcnQnKTtcbiAgZ2FtZS5zdGFydEdhbWUoKTtcbn0pO1xuXG5lbGVtZW50cy5wbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhgTGV0J3MgcGxheSBhZ2FpbiFgKTtcbiAgZ2FtZS5wbGF5QWdhaW4oKTtcbn0pO1xuIl0sIm5hbWVzIjpbImVsZW1lbnRzIiwiZ2FtZWJvYXJkVmlldyIsIkRyYWciLCJwMSIsInAxQm9hcmQiLCJkcmFnZ2VkU2hpcCIsImRyYWdnZWRTaGlwSW5kZXgiLCJnZXREcmFnZ2VkU2hpcEluZGV4IiwiZSIsIk51bWJlciIsInRhcmdldCIsImRhdGFzZXQiLCJpbmRleCIsImRyYWdTdGFydCIsImRyYWdEcm9wIiwiY2VsbCIsInAxU2hpcCIsImdldEZsZWV0Iiwic2hpcCIsImlzSG9yaXpvbnRhbCIsImdldERpcmVjdGlvbiIsInkiLCJ4Iiwib3V0Y29tZSIsInBsYWNlU2hpcCIsInJlbmRlckdyaWQiLCJwMUdyaWQiLCJnZXRUeXBlIiwiYWRkRHJhZ0FuZERyb3BFdmVudExpc3RlbmVycyIsImRyYWdnZWRzU2hpcCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImFyZUFsbFNoaXBzUGxhY2VkIiwic3RhcnRCdG4iLCJjbGFzc0xpc3QiLCJhZGQiLCJmbGVldEluZm8iLCJyZW1vdmUiLCJkcmFnT3ZlciIsInByZXZlbnREZWZhdWx0IiwiZHJhZ0VudGVyIiwiZHJhZ0xlYXZlIiwiZHJhZ0VuZCIsInNoaXBzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2VsbHMiLCJjaGlsZE5vZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkdhbWVib2FyZCIsIlBsYXllciIsIkdhbWUiLCJ0eXBlIiwicDIiLCJwMkJvYXJkIiwiZHJhZyIsInJlc2V0R2FtZSIsInJlc2V0RmxlZXQiLCJyZXNldCIsImFkZFJvdGF0ZUV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsInNoaXBFbGVtZW50IiwiY2hhbmdlRGlyZWN0aW9uIiwidG9nZ2xlIiwicmVuZGVyRmxlZXQiLCJhZGRHcmlkRXZlbnRMaXN0ZW5lcnMiLCJjdHJsQXR0YWNrIiwicDJHcmlkIiwiY29udGFpbnMiLCJkYWR0YXNldCIsImJvYXJkQ2VsbCIsImdldEJvYXJkIiwiYXR0YWNrIiwiYXV0b0F0dGFjayIsInJlbmRlckdyaWRzIiwiYXJlQWxsU2hpcHNTdW5rIiwid2lubmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlcldpbm5lciIsImF1dG9QbGFjZSIsImF1dG9QbGFjZUZsZWV0Iiwic3RhcnRHYW1lIiwicGxheUFnYWluIiwicmFuZENvb3JkcyIsIlNISVBfVFlQRVMiLCJib2FyZCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInBsYWNlZFNoaXBzIiwibGVuZ3RoIiwiYWRqdXN0Q29vcmRzIiwieTAiLCJ4MCIsImkiLCJkaXJlY3Rpb24iLCJ2YWxpZCIsImNoZWNrVmFsaWQiLCJwdXNoIiwiZXZlcnkiLCJjaGFuZ2VPcmllbnQiLCJNYXRoIiwicmFuZG9tIiwicGxhY2VkIiwiZmxlZXQiLCJyZWNlaXZlQXR0YWNrIiwiaGl0IiwiaXNTdW5rIiwiY3JlYXRlRmxlZXQiLCJlbmVteUJvYXJkIiwiU0hJUF9MRU5HVEhTIiwiU2hpcCIsImlkIiwiaGl0cyIsImdldEhpdHMiLCJoIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwicmFuZCIsInNpemUiLCJmbG9vciIsInR5cGVzIiwicDFHYW1lYm9hcmQiLCJxdWVyeVNlbGVjdG9yIiwicDJHYW1lYm9hcmQiLCJpbmZvQ29udGFpbmVyIiwiaW5mb1RleHQiLCJhdXRvUGxhY2VCdG4iLCJwbGF5QWdhaW5CdG4iLCJmbGVldENvbnRhaW5lciIsImZsZWV0RHJhZ2dhYmxlIiwicmVuZGVyQ2VsbCIsInN0YXR1cyIsImNsZWFyR3JpZCIsInBhcmVudCIsInRleHRDb250ZW50IiwiZ2FtZWJvYXJkIiwiZ3JpZCIsImoiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZGl2cyIsInByZXBlbmQiLCJ0b1VwcGVyQ2FzZSIsImdhbWVUeXBlIiwiZ2FtZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9