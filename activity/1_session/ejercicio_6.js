class MiClase {
    constructor (prefix) {
        this._prefix = prefix;
        
    }
    append(append){
      console.log(this._prefix, append);
    }
    format(formatting){
       console.log(formatting.toLowerCase());
   }
    
}

let formatter = new MiClase("Hello");

console.log(formatter.append("World"));
console.log(formatter.format("SOY RENZO"));