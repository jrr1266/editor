const textColor = document.getElementById("color-funte");
const textArea = document.querySelector(".text-area");
const textAltura = document.querySelector(".intro-letra");
const textTipo = document.querySelector("#Tipo-fuente");
const negrita = document.getElementById("negrita");
const capitalCase = document.getElementById("mayuscula-minuscula");
const colorFondo = document.getElementById("color-fondo");
const alinearDerecha = document.getElementById("Alinear-Derecha");
const alinearIzquierda = document.getElementById("Alinear-Izquierda");
const alinearCentro = document.getElementById("Alinear-Centro");
const caracter = document.querySelector(".cantidad-letras");
const cerrar = document.querySelector(".close__ventana-button");
const defecto = document.getElementById("default");
const save = document.querySelector(".guardar");
const imrpimir = document.getElementById("print");
const barra = document.querySelector(".menu-boton-barra");
const barraPrincipal = document.querySelector(".barra__principal")
let letraNegrita = true;
let mayuscula = true;
let botonBarra = false;
caracter.innerHTML = "";
/*EVENTOS*/
window.addEventListener("load",()=>{
    textArea.textContent = "Elimina esta nota para comenzar a escribir para Comenzar a escribir";
    textColor.addEventListener("input",(e)=>{
  colores(e);
});
textAltura.addEventListener("input",(e)=>{
textArea.style.fontSize = e.target.value +"px";
})
textTipo.addEventListener("change",()=>{
    letraEstilo();
})
negrita.addEventListener("click",()=>{
    if(letraNegrita){
        textArea.style.fontWeight = '900'
        return letraNegrita = false;
    }
    else{
        textArea.style.fontWeight = '100'
        return letraNegrita = true
    }
})
capitalCase.addEventListener("click",()=>{
if (mayuscula) {
    textArea.style.textTransform = "uppercase";
    return mayuscula = false;
}
else{
   textArea.style.textTransform = "lowercase" 
   return mayuscula = true;
}
})
colorFondo.addEventListener("input",(e)=>{
     textArea.style.backgroundColor = e.target.value
})
alinearIzquierda.addEventListener("click",()=>{
  textArea.style.textAlign = "start"
})
alinearCentro.addEventListener("click",()=>{
  textArea.style.textAlign = "center"
})
alinearDerecha.addEventListener("click",()=>{
  textArea.style.textAlign = "end"
})
 
textArea.addEventListener("keyup",(e)=>{
nombre = e.key    
tecla = e.keyCode;
ultimaPalabra(nombre,tecla);

})
cerrar.addEventListener("click",()=>{
 let out = confirm("Estas seguro que deseas cerrar sin guardar");
 if(out === true){
window.close();
 }
 else{
    guardar();
 }
})
})
defecto.addEventListener("click",()=>{
    textArea.style.color = "#000";
    textArea.style.backgroundColor = "#aaa";
    textArea.style.fontSize = 25 + "px";
    textArea.style.fontFamily = 'Arial Narrow';
    textArea.style.textAlign = "start";
    textArea.style.fontWeight = '100';
})
save.addEventListener("click",()=>{
    guardar();
})
imrpimir.addEventListener("click",()=>{
    imprimirConEstilos();
})
//para mostar la barra de herramienstas;
barra.addEventListener("click",()=>{
if(botonBarra === false){
barraPrincipal.style.display = "flex";
return botonBarra = true;
}
else if(botonBarra === true){
barraPrincipal.style.display = "none";
return botonBarra = false;
}
})
/*FUNCIONES DE EVENTOS*/

let colores = (e)=>{
    textArea.style.color = e.target.value;
     }

let letraEstilo = ()=>{
        let fuente = textTipo.value;
        switch (fuente) {
            case "1":
               textArea.style.fontFamily = 'Arial Narrow';
                break;
            case "2":
               textArea.style.fontFamily = 'Times New Roman';
                break;
            case "3":
               textArea.style.fontFamily = 'Franklin Gothic Medium';
                break;
            case "4":
               textArea.style.fontFamily = 'Verdana';
                break;   
            case "5":
                textArea.style.fontFamily = 'Trebuchet MS' 
                break;    
             case "6":
               textArea.style.fontFamily = 'Courier New';
                break;   
            case "7":
                textArea.style.fontFamily = 'Impact' 
                break;
            case "8":
                textArea.style.fontFamily = 'Lucida Sans' 
                break;   
        }
}
let ultimaPalabra = (name,value)=>{
    if(value != 8){
      caracter.innerHTML = name;
 
    }
else if(value === 8){
   caracter.innerHTML = "Actualizando Contenido"; 
}
}
function guardar() {
  let salvarArchivo = confirm(`El archivo generado para guardar cambios es un archivo TXT.
Desea guardar los cambios`);
  if(salvarArchivo){
    let nombreArchivo = prompt("Ingrese el nombre del archivo");
    if (nombreArchivo) {
         let archivo = new Blob([textArea.innerHTML], {type:"pdf ;charset=utf-8"});
         saveAs(archivo,`${nombreArchivo}`);
    }
  }
  
}

let imprimirConEstilos = ()=>{
     let iframe = document.createElement('iframe');
         document.body.appendChild(iframe);
         iframe.contentWindow.document.open();
         iframe.contentWindow.document.write(textArea.outerHTML);
         iframe.contentWindow.document.close();
         iframe.contentWindow.print();
         document.body.removeChild(iframe);
}

