var operacion1;
var operacion2;
var calculo;
var numbres;
function init(){
    var input_content = document.getElementById("operation").value;
    var resultado= document.getElementById("resultado");
    var reset= document.getElementById('reset');
    var suma= document.getElementById('suma');
    var resta= document.getElementById('resta');
    var masmenos= document.getElementById('masmenos');
    var multiplicacion= document.getElementById('multiplicacion');
    var division= document.getElementById('division');
    var pi= document.getElementById("pi");
    var igual= document.getElementById('igual');
    var borrar= document.getElementById("borrar");
    var borrar_num= document.getElementById("borrar_num");
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
    punto.onclick = function(e){
        resultado.textContent = resultado.textContent  + ".";
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
    division.onclick=function(e){
        operacion1 = resultado.textContent;
        calculo= "/";
        limpiar();
    }
    igual.onclick=function(e){
        operacion2=resultado.textContent;
        resolver();
    }
    
    reset.onclick=function(e){
        resetear();

    }
}

function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operacion1 = 0;
    operacion2 = 0;
    calculo = "";
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
   resetear();
   resultado.textContent = resul;
   }
}

function seno(operaciones){
    r = Math.sin(operaciones);
    return r;
}

function cos(n1){
    //Funcion del coseno de un numero
    r = Math.cos(n1);
    return r;
}

function tan(n1){
    //Funcion del tangente de un numero
    r = Math.tan(n1);
    return r;
}

function log(n1){
    //Funcion de Logarritmo de un numero
    r = Math.log(n1);
    return r;
}

function pow(n1, n2){
    //Funcion de Potencia
    r = Math.pow(n1, n2);
    return r;
}

function raiz(n1){
    //Funcion de raiz cuadrada
    r = Math.sqrt(n1);
    return r;
}

function prc(n1, n2){
    //Funcion de Potencia
    r = ((n1/100)*n2);
    return r;
}
