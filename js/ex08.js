
function validaNumero(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
 
  function ordenaNumeros() {
    var arrayDeNumeros = []; 
  
   
    while (true) {
      var entradaNumeros = prompt("Digite um número (ou algo diferente para parar):");
      
      
      if (validaNumero(entradaNumeros)) {
        
        arrayDeNumeros.push(parseFloat(entradaNumeros));
      }else if(entradaNumeros === "fim"){
        alert("Programa Finalizado")
        break;
      } else {
        alert("Isso não é  numero Programa Finalizado")
        break;
      }
    }
  
    
    arrayDeNumeros.sort(function(a, b) {
      return a - b;
    });
 
     alert(arrayDeNumeros);
  }
  
  
  ordenaNumeros();
  