class MyCuenta {
    username = "admin";
    password = "passwd"
    constructor(user, pass){
        this.username = user;
        this.password = pass
    }
    metedoOne () {
        this.validUser()
    }
    validUser = () => {
        if (this.username == "admin" && this.password == "passwd") {
            console.log("User logged in");
        }
        else {
            console.log("User or passwd incorrect")
        }
    }

}

let colaborador = new MyCuenta("admin", "passwd");
colaborador.validUser();