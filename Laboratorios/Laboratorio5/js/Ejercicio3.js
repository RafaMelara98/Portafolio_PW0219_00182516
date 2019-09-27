/*3. Realice una función en JS, que dados un número y un arreglo como parámetros, 
retorne cuantas ocurrencias existen de ese número dentro del arreglo. */

var arr1 = [1,2,3,4,5,6,7,4,9];

function ocurr(a, arr){
    var aux = 0;
    for(let i=0; i<arr.lenght ;i++){
        if(arr[i] == a ){
            aux = aux + 1;
        }
    }
    console.log(`existen: ${aux}` )
    
}
