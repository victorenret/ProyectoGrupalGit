let nav = document.getElementById("menSoc");

function menus() {
  let Desplazamiento_actual = window.pageYOffset;

  if (Desplazamiento_actual >= 40) {
    nav.classList.remove("bg-dark");
    nav.className = "bg-dark1";
    nav.style.transition = "1s";
  } else {
    nav.classList.remove("bg-dark1");
    nav.className = "bg-dark";
    nav.style.transition = "1s";
  }
}

window.addEventListener("load", function () {
  menus();
});

window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
  menus();
});

function startfecha() {
  var d = new Date(),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  fechap = [day, month, year].join("-");

  document.getElementById("fecha").innerHTML = fechap;
}

function startTime() {
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("reloj").innerHTML = h + ":" + m + ":" + s;
  t = setTimeout("startTime()", 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

window.onload = function () {
  startTime();
  startfecha();
};

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('nombre').value;
    if (usuario.length == 0) {
        alert('Introducir texto en el campo Nombre');
        return;
    }

    var correo = document.getElementById('correo').value;
    if (correo.length == 0) {
        alert('Introducir texto en el campo Correo');
        return;
    }

    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0) {
        alert('Introducir texto en el campo Mensaje');
        return;
    }
    this.submit();
}
