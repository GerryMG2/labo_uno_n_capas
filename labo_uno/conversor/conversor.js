var far = document.getElementById("far");
var cel = document.getElementById("cel");
var respuesta = document.getElementById("respuesta");

far.addEventListener("input", function (evt) {convertir(parseFloat(far.value),'F')})
cel.addEventListener("input",function (evt) {convertir(parseFloat(cel.value),'C')});

function convertir(value,tipo){
    console.log(value);
    console.log(tipo);
    if(tipo == 'F'){

         try {
             var res = (value - 32) * (5/9);
             console.log(res);
             cel.value = res;
         } catch (error) {
             respuesta.innerHTML = '';
         }
    }

    if(tipo == 'C'){
        try {
            
            var res = (value * (9/5)) + (5/9);
            console.log(res);
            far.value = res;
        } catch (error) {
            respuesta.innerHTML = '';
        }
   }
}


