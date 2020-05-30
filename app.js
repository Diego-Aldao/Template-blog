(function () {
  if (history.length == 1) {
    let botonDisabled = document.getElementById("disabled");
    botonDisabled.classList.add("disabled");
  }
  let hamburguesa = document.getElementById("menu");
  let menuDesplegable = document.getElementById("menu-desplegable");
  let menuFuera = document.getElementById("menu-fuera");

  hamburguesa.addEventListener("click", trasladar);
  function trasladar() {
    menuDesplegable.style.right = "0";
  }

  menuFuera.addEventListener("click", cerrar);
  function cerrar() {
    menuDesplegable.style.right = "-200%";
  }
})();
console.log(history.length);
