// Ejercicio 1

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4

// Ejercicio 5
var loginSuccess = document.getElementById("loginSuccess");
var loginFailure = document.getElementById("loginFailure");

loginSuccess.addEventListener("click", function(){console.log("Correcto mano!")});
loginFailure.addEventListener("click", function(){console.log("Incorrecto mano!")});
// Ejercicio 6
var loginSuccessAsync = document.getElementById("loginSuccessAsync");
var loginFailureAsync = document.getElementById("loginFailureAsync");



let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected(new Error("Error: invalid username or password"));
        }
      }, 200);
      
    });
};


loginSuccessAsync.addEventListener("click", function(){console.log("Todo bien mano!")});
loginFailureAsync.addEventListener("click", loginWitUsername("admin", "passwd"));

