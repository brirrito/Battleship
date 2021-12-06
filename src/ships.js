class Battleship {
  
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.hits = [];
  }
  hit(index) {
    this.hits.push(index);
  }
}
