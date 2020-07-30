class Laptop {
  constructor(
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
  }

  getRamSize() {
    return this.ramSize;
  }
  getRomSize() {
    return this.ramSize;
  }
}

class Ultrabook extends Laptop {
  constructor(
    name,
    model,
    serialNumber,
    yearOfManufacture,
    ramSize,
    romSize,
    mass,
  ) {
    super(name, model, serialNumber, yearOfManufacture, ramSize, romSize, mass);
    if (this.mass <= 0 || this.mass > 1.5) {
      throw "Масса не должна быть более 1.5 кг";
    } else this.mass = mass;
  }
  getName() {
    return this.name;
  }
  getYear() {
    return this.yearOfManufacture;
  }
}
