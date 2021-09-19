var operacion1;
var operacion2;
var calculo;
function init(){
    var resultado= document.getElementById("resultado");
    var reset= document.getElementById('reset');
    var suma= document.getElementById('suma');
    var resta= document.getElementById('resta');
    var masmenos= document.getElementById('masmenos');
    var multiplicacion= document.getElementById('multiplicacion');
    var division= document.getElementById('division');
    var pi= document.getElementById("pi");
    var igual= document.getElementById("igual");
    var del= document.getElementById("del");
    var ac= document.getElementById("ac");
    var uno= document.getElementById("uno");
    var dos= document.getElementById("dos");
    var tres= document.getElementById("tres");
    var cuatro= document.getElementById("cuatro");
    var cinco= document.getElementById("cinco");
    var seis= document.getElementById("seis");
    var siete= document.getElementById("siete");
    var ocho= document.getElementById("ocho");
    var nueve= document.getElementById("nueve");
    var cero= document.getElementById("cero");
    var punto= document.getElementById("punto");

}
    //Acciones
{
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }
   
    suma.onclick=function(e){
        operacion1 = resultado.textContent;
        calculo= "+";
        limpiar();
    }

    resta.onclick=function(e){
        operacion1 = resultado.textContent;
        calculo= "-";
        limpiar();
    }
    multiplicacion.onclick=function(e){
        operacion1 = resultado.textContent;
        calculo= "*";
        limpiar();
    }
   
    igual.onclick=function(e){
        operacion2 = resultado.textContent;
        resolver();
    }
}
  
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operacion1 = 0;
    operacion2 = 0;
    calculo = 0;
}
function resolver(){
   var resul = 0;
   switch (calculo){
            case "+":
                resul = parseFloat(operacion1) + parseFloat (operacion2)
                 break;

           case "-":
                resul = parseFloat(operacion1) - parseFloat (operacion2)
                 break;   
           
            case "*":
                resul = parseFloat(operacion1) * parseFloat (operacion2)
                break;

            case "/":
                resul = parseFloat(operacion1) / parseFloat (operacion2)
                break;     

   }
   resetear();
   resultado.textContent = resul;
}
