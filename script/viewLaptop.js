function ViewLaptop() {}
var myWindow;
ViewLaptop.prototype.addProduct = function (obj) {
  var block = document.querySelector("#list-laptops");
  var ullist = document.createElement("ul");

  ullist.className = "body_title";
  ullist.innerHTML =
    "<li>" +
    obj.title +
    "</li>" +
    "<li>" +
    obj.processor +
    "</li>" +
    "<li>" +
    obj.ramSize +
    "</li>" +
    "<li>" +
    obj.countCores +
    "</li>" +
    `<li><button class="info">Инфо</button>` +
    '<button id="delete">Удалить</button></li>';
  ullist.querySelector(".info").addEventListener("click", function () {
    

    myWindow = window
      .open("about:blank", "", "width=200,height=200")

      .document.write(`<h1>${obj.toString()}</h1>`);

    
  });
  block.appendChild(ullist);
};
ViewLaptop.prototype.getMessage = function (message, nameCl) {
  var cont = document.querySelector(".container");
  var form = document.querySelector(".insertInfo");

  var infoBlock = document.createElement("div");
  infoBlock.className = nameCl;
  infoBlock.innerHTML = message;

  cont.insertBefore(infoBlock, form);
};

ViewLaptop.prototype.deleteMessage = function () {
  var deleteBlock = document.querySelector("nameCL");
};
ViewLaptop.prototype.deleteProduct = function () {
  var a = document.querySelectorAll("ul");
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function (e) {
      if (e.target && e.target.id == "delete") {
        a[i].remove();
      }
    });
  }
};
ViewLaptop.prototype.clearInput = function () {
  document.querySelector("#title").value = "";
  document.querySelector("#ram").value = "";
  document.querySelector("#year").value = "";
  document.querySelector("#proccesor").value = "";
  document.querySelector("#countCore").value = "";
  document.querySelector("#material").value = "";
  document.querySelector("#mass").value = "";
};
ViewLaptop.prototype.viewInfo = function (obj) {
  // var a = document.querySelectorAll(".body_title");
  // for (let i = 0; i < a.length; i++) {
  //   a[i].addEventListener("click", function (e) {
  //     if (e.target && e.target.className == "info") {
  //
  //     }
  //   });
  // }
};
