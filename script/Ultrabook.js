function Ultrabook(title, ramSize, year, processor, countCores, color, mass) {
  Laptop.call(this, title, ramSize, year, processor, countCores, mass);
  this.color = color;
}

Ultrabook.prototype.toString = function () {
  return `Вес - ${this.mass} цвет корпуса - ${this.color} год выпуска - ${this.year} `;
};
