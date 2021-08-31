/*Monedas*/
$(document).ready(function() {

    /*Declaracion de la constante*/
    var totalMoneda=0;
    var totalBillete=0;
    var total = 0;
  
    $( ".moneda" ).change(function(event) {
      sumar();
      Total();
    });
    $( ".billetes" ).change(function(event) {
      sumarBillete();
      Total();
      
  });
  function sumar(){
    $('.moneda').each(function(index,elem){
        var target = $(elem.currentTarget);
        var amountVal =  $(elem).data("amount");
        var currencyVal =  $(elem).val();
        totalMoneda += (currencyVal * amountVal) ;
        $('#monedas').val(totalMoneda);
    });
  }
    function sumarBillete(){
      $('.billetes').each(function(index,elem){
          var target = $(elem.currentTarget);
          var amountVal =  $(elem).data("amount");
          var currencyVal =  $(elem).val();
          totalBillete += (currencyVal * amountVal) ;
          $('#sumaBillete').val(totalBillete);
      });
  }
  function Total(){
    total = totalBillete + totalMoneda;
    $('#suma').val(total); 
    totalBillete = 0;
    totalMoneda = 0;
  }
  });