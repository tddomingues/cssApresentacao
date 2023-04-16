//Relogio

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})


//Enviar Fofocas

function mostrarConfirm() {
    var resposta = window.confirm("Deseja enviar fofocas cômicas para nós?");
    if (resposta === true) {
      var email = window.prompt("Digite seu endereço de e-mail:");
    } else {
    }
  }

