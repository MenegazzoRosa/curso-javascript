function carregar() {

  var msg = window.document.getElementById('idMensagem')
  var img = window.document.getElementById('idImagem')

  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `Agora são ${hora} horas`

  if (hora >= 0 && hora < 12) {
    img.src = 'manha.png'
  }
  else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png'
  }
  else {
    img.src = 'noite.png'
  }

}

function carregar2() {
  var msg = window.document.getElementById('idMensagem');
  var img = window.document.getElementById('idImagem');

  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    img.src = 'manha.png';
    img.alt = 'Imagem da manhã';
  } else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png';
    img.alt = 'Imagem da tarde';
  } else {
    img.src = 'noite.png';
    img.alt = 'Imagem da noite';
  }
}