import { elements } from '/home/brirrito/the_odin_project/Battleship/src/app/view/base.js';
import gameboardView from '../view/gameboardView';

const Drag = (p1, p1Board) => {
  let draggedShip;
  let draggedShipIndex;

  const getDraggedShipIndex = (e) => {
    draggedShipIndex = Number(e.target.dataset.index);

    const dragStart = (e) => {
      draggedShip = e.target;
    };

    const dragDrop = (e) => {
      const cell = e.target;
      const p1Ship = p1.getFleet()[draggedShip.dataset.ship];
      const isHorizontal = p1Ship.getDirection() === 'horizontal';

      const y = Number(cell.dataset.y) - (isHorizontal ? 0 : draggedShipIndex);
      const x = Number(cell.dataset.x) - (isHorizontal ? draggedShipIndex : 0);

      const outcome = p1Board.placeShip(p1Ship, y, x);
      if (outcome) {
        gameboardView.renderGrid(elements.p1Grid, p1Board, p1.getType());
        addDragAndDropEventListeners();
        draggedsShip.parentElement.removeChild(draggedShip);

        if (p1Board.areAllShipsPlaced()) {
          elements.startBtn.classList.add('show');
          elements.fleetInfo.classList.add('hide');
          elements.fleetInfo.classList.remove('show');
        }
      }
    };

    const dragOver = (e) => e.preventDefault();
    const dragEnter = (e) => e.preventDefault();
    const dragLeave = () => {};
    const dragEnd = () => {};

    const addDragAndDropEventListeners = () => {
      const ships = document.querySelectorAll('.ship');
      const cells = elements.p1Grid.childNodes;

      for (const ship of ships) {
        ship.addEventListener('mousedown', getDraggedShipIndex);
        ship.addEventListener('dragstart', dragStart);
        ship.addEventListener('dragend', dragEnd);
      }

      for (const cell of cells) {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
      }
    };

    return { addDragAndDropEventListeners };
  }
}

export default Drag;