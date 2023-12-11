function ocultarFormulariosExcetoInicial() {
    var formularios = document.getElementsByClassName('form-container');
    for (var i = 1; i < formularios.length; i++) {
      formularios[i].style.display = 'none';
    }
  }

  window.onload = function() {
    ocultarFormulariosExcetoInicial();
  };

  function mostrarFormulario() {
    var formularios = document.getElementsByClassName('form-container');
    for (var i = 0; i < formularios.length; i++) {
      formularios[i].style.display = 'none';
    }

    var selecao = document.getElementById('form-selection').value;

    document.getElementById(selecao).style.display = 'block';
  }