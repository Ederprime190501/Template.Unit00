/*Monedas*/
$(document).ready(function() {

    /*Declaracion de la constante*/
    var totalMoneda=0;
    var totalBillete=0;
    var total = 0;
  
    $( ".monto" ).change(function(event) {
      sumar();
      Total();
    });
    $( ".billete" ).change(function(event) {
      sumarBillete();
      Total();
      
  });
  function sumar(){
    $('.monto').each(function(index,elem){
        var target = $(elem.currentTarget);
        var amountVal =  $(elem).data("amount");
        var currencyVal =  $(elem).val();
        totalMoneda += (currencyVal * amountVal) ;
        $('#monedaTotal').val(totalMoneda);
    });
  }
    function sumarBillete(){
      $('.billete').each(function(index,elem){
          var target = $(elem.currentTarget);
          var amountVal =  $(elem).data("amount");
          var currencyVal =  $(elem).val();
          totalBillete += (currencyVal * amountVal) ;
          $('#billeteTotal').val(totalBillete);
      });
  }
  function Total(){
    total = totalBillete + totalMoneda;
    $('#sumaTotal').val(total); 
    totalBillete = 0;
    totalMoneda = 0;
  }
  });