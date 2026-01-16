function mostrarAlerta(){
    alert("¡Bienvenido a la clínica de fisioterapia de Sonic!");
}

function calcularinput(){
    let val1 = Number(document.getElementById("val1").value);
    let val2 = Number(document.getElementById("val2").value);
    let res = val1 + val2;
    alert("Resultado: " + res);
}
function agregar(valor){
    document.getElementById("pantalla").value += valor;
}

function calcular(){
    try{
        document.getElementById("pantalla").value =
            eval(document.getElementById("pantalla").value);
    }catch{
        document.getElementById("pantalla").value = "Error";
    }
}

function limpiar(){
    document.getElementById("pantalla").value = "";
}
let musicaActiva = false;

function toggleMusic(){
    let audio = document.getElementById("musica");

    if(!musicaActiva){
        audio.play();
        musicaActiva = true;
    }else{
        audio.pause();
        musicaActiva = false;
    }
}