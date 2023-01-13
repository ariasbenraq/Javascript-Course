
document.getElementById("loginSuccessAsync").addEventListener("click", async () => {
    let username = "admin", 
        password = "passwd";
    loginWitUsername(username, password).then((value) => {alert (value)}, (reason) => {alert(reason)});
});

document.getElementById("loginFailureAsync").addEventListener("click", async () => {
    let username = "admin", 
        password = "01234567";
    loginWitUsername(username, password).then((value) => {alert (value)}, (reason) => {alert(reason)});
});

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