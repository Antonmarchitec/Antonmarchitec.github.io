let estado = false;
let btnResponsive = document.getElementById("iconResponsive");
let contMenu = document.getElementById("header_nav");

btnResponsive.addEventListener("click",function(){
    if(estado == false){
        contMenu.classList.add("aux");
        estado = true;
    }else if (estado == true){
        contMenu.classList.remove("aux");
        estado = false;
    }
})