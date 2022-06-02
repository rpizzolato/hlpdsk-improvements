//https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk

var dataini = document.getElementById('id_sc_field_dat_abert').value;
var solic = document.getElementById('id_sc_field_usu_abr_cham').value;
var cargo = document.getElementById('id_sc_field_usu_abr_cargo').value;
var hrabertura = document.getElementById('id_sc_field_dat_abert_hora').value;
var ocorrencia = document.getElementById('id_sc_field_oco_cham').value;

function detectaProblema() {
  var probDetected = document.getElementById('id_sc_field_oco_cham').value;
  var servRealizado = document.getElementById('id_sc_field_serv_realiz_cham');
  var regexp = new RegExp(/fotocondutor/i);
  var n = regexp.test(probDetected);
  //checa se é toner
  if (n) {
    servRealizado.innerHTML = 'Realizado a troca do fotocondutor.';
  }
}
detectaProblema();

function addData(campo) {
  document.getElementById(campo).value = dataini;

  if (campo == 'id_sc_field_dat_entr') {
    document.getElementById(campo).value = dataAtualFormatada();
  }

  if (campo == 'id_sc_field_dthr_fim_atend') {
    document.getElementById(campo).value = dataAtualFormatada();
  }
}

function dataAtualFormatada() {
  var data = new Date(),
    dia = data.getDate().toString(),
    diaF = (dia.length == 1) ? '0' + dia : dia,
    mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = (mes.length == 1) ? '0' + mes : mes,
    anoF = data.getFullYear();
  return diaF + "/" + mesF + "/" + anoF;
}

function addSolic(campo) {
  document.getElementById(campo).value = solic;
}

function addCargo(campo) {
  document.getElementById(campo).value = cargo;
}

function addHora(campo) {
  document.getElementById(campo).value = hrabertura;
}

function verificaSeChamadoNovo(campo) {
  var localSolic = document.getElementById(campo).value;
  if (localSolic == '') {
    document.getElementById('id_sc_field_dthr_inicio_atend').value = '';
    document.getElementById('id_sc_field_dthr_inicio_atend_hora').value = '';
    document.getElementById('id_sc_field_dthr_fim_atend').value = '';
    document.getElementById('id_sc_field_dat_entr').value = '';
  }
}

function addProbDetec(campo) {
  var probDetectado = document.getElementById('id_sc_field_probl_detc').value;
  if (probDetectado == '') {
    document.getElementById(campo).value = ocorrencia;
  }
}

// function addButtonLimpar() {
//   var btnLimpar = document.createElement('button');

//   btnLimpar.setAttribute('type','button');

//   var node = document.getElementById('sc_b_sai_b');
//   document.body.appendChild(button);
// }

// addButtonLimpar();

addData('id_sc_field_dthr_inicio_atend');
addData('id_sc_field_dthr_fim_atend');
addData('id_sc_field_dat_entr');
addSolic('id_sc_field_usu_rec_cham');
addCargo('id_sc_field_usu_rec_cargo');
addHora('id_sc_field_dthr_inicio_atend_hora');
addProbDetec('id_sc_field_probl_detc');
verificaSeChamadoNovo('id_sc_field_usu_abr_cham');

document.querySelector('input[name=cod_sit][value="4"]').checked = true;
