/*2. Realice una función que reciba un arreglo de datos numéricos, y muestre la suma de
 todos los elementos del arreglo y su promedio. */
 var arr = [10,15,20];

 function sumProm(arr){
 
     var suma = 0;
     var aux = 0;
 
     arr.forEach(element => {
         suma= suma + element;
         aux ++;
     });
 
     console.log("La suma de los elementos: " + suma);
 
     var promedio = suma / aux;
 
     console.log("Promedio:" + promedio);
 
 }
 
 sumProm(arr);