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

// JQUERY PARA VALIDAR FORMULARIO

$(document).ready(function(){
  if(document.getElementById("formulario")) {
    $("#formulario").validate({ 
    rules:{
      usuario: {
        required: true, 
        minlength: 3, 
        maxlength: 15,
      },
      correo: {
        required: true, 
        minlength: 10, 
        maxlength: 50,
      },
      mensaje: {
        required: true, 
        minlength: 10, 
        maxlength: 100,
      }
    },
    messages: {
      usuario: {
        required: "Debe ingresar Nombre y Apellido", 
        minlength: "El usuario debe tener un mínimo de 3 carácteres", 
        maxlength: "El usuario debe tener un máximo de 15 carácteres",
      },
      correo: {
        required: "Debe ingresar un Correo Válido", 
        minlength: "El correo debe tener un mínimo de 10 carácteres", 
        maxlength: "El correo debe tener un máximo de 50 carácteres",
      },
      mensaje: {
        required: "Debe ingresar un Mensaje", 
        minlength: "El mensaje debe tener como minimo 10 carácteres", 
        maxlength: "El mensaje debe tener un máximo de 100 carácteres",
      }
    },
  });
  }

})


function confirmarenvio(){

  var nombre = document.getElementById("txtnombre").value;
  var email = document.getElementById("txtemail").value;
  var mensaje = document.getElementById("txtmensaje").value;

if((nombre.length != 0)&&(email.length != 0)&&(mensaje.length != 0)){
    var confirmacion = confirm("¿Desea enviar su mensaje?");
    if (confirmacion) {
        alert("Mensaje enviado");
        return true;
    } else {
        alert("Su mensaje no ha sido enviado");
        return false;
    }
  }
}

