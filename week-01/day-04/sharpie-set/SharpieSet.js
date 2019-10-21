class SharpieSet {
  constructor(sharpieList) {
    this.list = sharpieList;
  }

  countUsable() {
    return this.list.filter((i) => i.inkAmount > 0).length;
  }

  removeTrash() {
    this.list = this.list.filter((i) => i.inkAmount > 0);
  }
}

module.exports = SharpieSet;
