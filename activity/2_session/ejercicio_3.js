//Ejercicio resuelto con la ayuda de Javier, compañero del Master
class InvertirCadena {
    cadenaInvertir = "";

    constructor(cadena){
        this.cadenaInvertir = cadena;
    }
    myMethod() {
        this.invert()
    }    
        invert = () => {
            if (this.cadenaInvertir == "") {
                try{
                    throw ("No hay string aun XD");
                }catch (e){
                    console.log(e);
                }
            }
            else {
                //  return console.log(this.cadenaInvertir.split("").reverse("").join(""));
            }
        }    
}

var invertirCadena = new InvertirCadena("");

const reverseString = str => str.split("").reverse().join("");
console.log(reverseString(invertirCadena.cadenaInvertir));
invertirCadena.invert();
invertirCadena.myMethod();