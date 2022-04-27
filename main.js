let ventana = document.getElementById("ventana")
let boton = document.getElementById("nav")

let textfixed = document.getElementById("nav-bar-crece")

let iconoTransform = document.getElementById("icono")

let ya = document.getElementById("ojala")
// siempre que traigo un evento se despliega una función
boton.addEventListener("click", function (){
    
    if (ventana.classList.contains("navactive")){
        ventana.classList.remove("navactive")
    } else if (!ventana.classList.contains("navactive")){
        ventana.classList.toggle("navactive")
    }

    if (textfixed.classList.contains("nv-crece")){
        textfixed.classList.remove("nv-crece")
    } else if (!textfixed.classList.contains("nv-crece")){
        textfixed.classList.toggle("nv-crece")
    }
    
    if (iconoTransform.classList.contains("icon-cross")){
        iconoTransform.classList.remove("icon-cross")
    } else if (!iconoTransform.classList.contains("icon-cross")){
        iconoTransform.classList.toggle("icon-cross")
    }

    // if (ojala.classList.contains("container-fluid")){
    //     ojala.classList.remove("container-fluid")
    // } else if (!ojala.classList.contains("container-fluid")){
    //     ojala.classList.toggle("container-fluid")
    // }
})
