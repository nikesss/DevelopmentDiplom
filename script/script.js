var count = 0;
document.querySelector("#laptop").addEventListener("submit", function (event) {
  var title = document.querySelector("#title").value;
  var ramSize = document.querySelector("#ram").value;
  var year = document.querySelector("#year").value;
  var processor = document.querySelector("#proccesor").value;
  var countCores = document.querySelector("#countCore").value;
  var caseMaterial = document.querySelector("#material").value;
  var mass = document.querySelector("#mass").value;
  if (count > 0) {
    var deelteBlock;
    if (document.querySelector(".succes")) {
      deelteBlock = document.querySelector(".succes");
      deelteBlock.remove();
      count--;
    }
    if (document.querySelector(".no_succes")) {
      deelteBlock = document.querySelector(".no_succes");
      deelteBlock.remove();
      count--;
    }
  }
  var laptop = new Laptop(
    title,
    ramSize,
    year,
    processor,
    countCores,
    caseMaterial,
    mass,
  );

  var viewLaptop = new ViewLaptop();
  if (
    title === "" ||
    ramSize === "" ||
    year === "" ||
    processor === "" ||
    countCores === "" ||
    caseMaterial === "" ||
    mass === ""
  ) {
    viewLaptop.getMessage("Заполните пожалуйста все поля ввода", "no_succes");
    count++;
  } else if (mass > 3) {
    viewLaptop.getMessage("Вес должен быть меньше 3-х кг", "no_succes");
    count++;
  } else {
    count++;
    viewLaptop.addProduct(laptop);
    viewLaptop.getMessage("Новый ноутбук добавлен", "succes");
    viewLaptop.clearInput();
    viewLaptop.deleteProduct();
    viewLaptop.viewInfo(laptop);
  }

  event.preventDefault();
});
document
  .querySelector("#ultrabook")
  .addEventListener("submit", function (event) {
    var title = document.querySelectorAll("#title")[1].value;

    var ramSize = document.querySelectorAll("#ram")[1].value;

    var year = document.querySelectorAll("#year")[1].value;

    var processor = document.querySelectorAll("#proccesor")[1].value;

    var countCores = document.querySelectorAll("#countCore")[1].value;

    var color = document.querySelector("#color").value;

    var mass = document.querySelectorAll("#mass")[1].value;
    if (count > 0) {
      var deelteBlock;
      if (document.querySelector(".succes")) {
        deelteBlock = document.querySelector(".succes");
        deelteBlock.remove();
        count--;
      }
      if (document.querySelector(".no_succes")) {
        deelteBlock = document.querySelector(".no_succes");
        deelteBlock.remove();
        count--;
      }
    }
    var ultrabook = new Ultrabook(
      title,
      ramSize,
      year,
      processor,
      countCores,
      color,
      mass,
    );
    var viewUltrabook = new ViewUltrabook();
    if (
      title === "" ||
      ramSize === "" ||
      year === "" ||
      processor === "" ||
      countCores === "" ||
      color === "" ||
      mass === ""
    ) {
      viewUltrabook.getMessage(
        "Заполните пожалуйста все поля ввода",
        "no_succes",
      );
      count++;
    } else if (mass > 1.5) {
      viewUltrabook.getMessage("Вес должен быть меньше 1.5-a кг", "no_succes");
      count++;
    } else {
      viewUltrabook.addProduct(ultrabook);
      viewUltrabook.getMessage("Новый ноутбук добавлен", "succes");

      viewUltrabook.clearInput();
      viewUltrabook.deleteProduct();
      viewUltrabook.viewInfo(ultrabook);
      count++;
    }

    event.preventDefault();
  });
