/*Monedas*/
$(document).ready(function() {

    /*Declaracion de la constante*/
    var totalMoneda=0;
    var totalBillete=0;
    var total = 0;
  
    $( ".coins" ).change(function(event) {
      sumar();
      Total();
    });
    $( ".ticket" ).change(function(event) {
      sumarBillete();
      Total();
      
  });
  function sumar(){
    $('.coins').each(function(index,elem){
        var target = $(elem.currentTarget);
        var amountVal =  $(elem).data("amount");
        var currencyVal =  $(elem).val();
        totalMoneda += (currencyVal * amountVal) ;
        $('#coin').val(totalMoneda);
    });
  }
    function sumarBillete(){
      $('.ticket').each(function(index,elem){
          var target = $(elem.currentTarget);
          var amountVal =  $(elem).data("amount");
          var currencyVal =  $(elem).val();
          totalBillete += (currencyVal * amountVal) ;
          $('#tickets').val(totalBillete);
      });
  }
  function Total(){
    total = totalBillete + totalMoneda;
    $('#result').val(total); 
    totalBillete = 0;
    totalMoneda = 0;
  }
  });