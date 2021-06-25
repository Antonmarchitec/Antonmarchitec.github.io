

let estado = false;
let btnResponsive = document.getElementById("btnResp");
let contMenu = document.getElementById("menuProyectos");

btnResponsive.addEventListener("click",function(){
    if(estado == false){
        contMenu.classList.add("derecha");
        estado=true;
    }else if(estado == true){
        contMenu.classList.remove("derecha");
        estado=false;
    }
})