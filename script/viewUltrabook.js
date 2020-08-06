function ViewUltrabook() {}
ViewUltrabook.prototype = Object.create(ViewLaptop.prototype);

ViewUltrabook.prototype.clearInput = function () {
  document.querySelectorAll("#title")[1].value = "";
  document.querySelectorAll("#ram")[1].value = "";
  document.querySelectorAll("#year")[1].value = "";
  document.querySelectorAll("#proccesor")[1].value = "";
  document.querySelectorAll("#countCore")[1].value = "";
  document.querySelector("#color").value = "";
  document.querySelectorAll("#mass")[1].value = "";
};
