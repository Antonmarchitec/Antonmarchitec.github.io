

function Ingreso(){
    let Usuario = "AntonioPonce"
    let Contraseña = "antom";

    let Nombre = document.getElementById("NOMBRE").value;
    let Pin = document.getElementById("CONTRASEÑA").value;

    if(Nombre == Usuario && Pin == Contraseña){
        alert("Bienvenido!!");
    }else{
        alert("Datos incorrectos");
        
    }
}