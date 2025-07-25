/*
 *  Script com a lógica do relógio digital.
 *  Modifique este arquivo o quanto for necessário.
 *
 *  DICAS GERAIS:
 *
 *  Você pode implementar a lógica de um relógio utilizando o método Date() do javaScript
 *  para retorna um objeto de data com a hora, os minutos e os segundos atuais.
 *
 *  Depois de computar os valores de hora, minutos e segundos,
 *  atualize o DOM do documento HTML por meio do método atualizarRelogio(). Para isso,
 *  você deve atualizar o texto dos elementos HTML que representam a hora, os minutos e os segundos.
 *
 *  Essa atualização pode ser feita usando o método 'setInterval' do javaScript com intervalos
 *  de 1000ms (1 segundo).
 */

setInterval(atualizarRelogio, 1000);


function atualizarRelogio() {
  var h = new Date();
  var m = new Date();
  var s = new Date();
  
  document.getElementById("horas").innerHTML = h.getHours();
  document.getElementById("minutos").innerHTML = h.getMinutes();
  document.getElementById("segundos").innerHTML = h.getSeconds();
}

/** Chamada da função de atualziarRelogio para funcionar o relógio usando o método 'setInterval'*/
// TODO (implementar) ...
