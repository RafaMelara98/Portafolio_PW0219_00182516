/*5. Palíndromo: Se dice que una palabra es palíndroma cuando se puede leer de la misma manera tanto de derecha a izquierda y viceversa. 
Crear una función en JavaScript que reciba como parámetro una palabra. La función debe retornar si la palabra es palíndroma o no.  */

function palíndroma(palabra){
    var isPalindroma = true;
    var original = palabra.split("");
    var invertido = palabra.split("").reverse();

    for(var i = 0; i< original.length; i++){
        if(invertido[i] != original[i] ){
            console.log("no es palindromo");
            isPalindroma = false;
            break;
        }
        if(isPalindroma == true){
            console.log("es palindroma");
        }
    }
}

palíndroma("ana");
invertido