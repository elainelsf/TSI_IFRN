$(document).ready(() => {
   
});

function exibirResultado() {
    console.log("oi")
    var msg = $('#msg');

    var principal = $('#principal').val();
    var taxajuros = $('#taxajuros').val()/100;
    var meses = $('#meses').val();
    var valorFinal;

    valorFinal = principal * (1 + taxajuros) ** meses;
    console.log(valorFinal);
    msg.html('<p class="alert alert-success">' + valorFinal.toFixed(2) + '</p>');    
}
