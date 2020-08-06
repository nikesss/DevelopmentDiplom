function Laptop(
  name,
  model,
  serialNumber,
  yearOfManufacture,
  ramSize,
  romSize,
  mass,
  haveDisk,
) {
  this.name = name;
  this.model = model;
  this.serialNumber = serialNumber;
  this.yearOfManufacture = yearOfManufacture;
  this.ramSize = ramSize;
  this.romSize = romSize;
  this.mass = mass;
  this.haveDisk = haveDisk;
  this.getRomSize = () => {
    return this.romSize;
  };
}
Laptop.prototype.getRamSize = function () {
  return this.ramSize;
};
function Ultrabook(
  name,
  model,
  serialNumber,
  yearOfManufacture,
  ramSize,
  romSize,
  mass,
) {
  Laptop.call(
    this,
    name,
    model,
    serialNumber,
    yearOfManufacture,
    ramSize,
    romSize,
    mass,
  );
  if (this.mass <= 0 || this.mass > 1.5) {
    throw "Масса не должна быть более 1.5 кг";
  } else this.mass = mass;
}
Ultrabook.prototype = Object.create(Laptop.prototype);
Ultrabook.prototype.getName = function () {
  return this.name;
};
Ultrabook.prototype.getYear = function () {
  return this.yearOfManufacture;
};
