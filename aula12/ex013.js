var agora = new Date()

var diaSemana = agora.getDay()

/* var diaSemana = 7 */

switch (diaSemana) {

  case 0:
    var diaSemanaExtenso = 'Domingo'
  break
  case 1:
    var diaSemanaExtenso = 'Segunda'
  break
  case 2:
    var diaSemanaExtenso = 'Terça'
  break
  case 3:
    var diaSemanaExtenso = 'Quarta'
  break
  case 4:
    var diaSemanaExtenso = 'Quinta'
  break
  case 5:
    var diaSemanaExtenso = 'Sexta'
  break
  case 6:
    var diaSemanaExtenso = 'Sábado'
  break
  default:
    var diaSemanaExtenso = 'Dia inválido !!!'
  break

}

console.log(`O dia da semana é ${diaSemanaExtenso}`)