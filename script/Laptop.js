function Laptop(
  title,
  ramSize,
  year,
  processor,
  countCores,
  mass,
  caseMaterial,
) {
  this.title = title;
  this.ramSize = ramSize;
  this.year = year;
  this.processor = processor;
  this.countCores = countCores;
  this.caseMaterial = caseMaterial;
  this.mass = mass;
}
Laptop.prototype.toString = function () {
  return `Вес - ${this.mass} материал корпуса - ${this.caseMaterial} год выпуска - ${this.year} `;
};
