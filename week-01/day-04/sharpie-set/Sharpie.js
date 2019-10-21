class Sharpie {
  constructor(color, width, inkAmount = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }

  use() {
    this.inkAmount--;
  }
}
module.exports = Sharpie;
