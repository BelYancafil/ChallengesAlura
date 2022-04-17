
function encriptar() { 
    var aCodificar = document.getElementById("textbox").value;
    var encriptado = aCodificar.replace(/[eèêëé]/gi,'enter').replace(/[iíìîï]/gi,'imes').replace(/[oóòôõö]/gi,'ober').replace(/[aáàâãä]/gi,'ai').replace(/[uùûüú]/gi,'ufat');
    
    encriptado=encriptado.toLowerCase();
    document.getElementById("textresultado").innerHTML=encriptado;
    document.getElementById("textbox").value="";
    
    if (aCodificar == "") { 
        alert("Ingrese el texto que desea codificar");
        return true;
    }
}

function desencriptar() {
        var aDesCodificar = document.getElementById("textbox").value;
        var desencriptar = aDesCodificar.replace(/ai/gi,'a').replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    
    document.getElementById("textresultado").innerHTML=desencriptar;
    
    if (aDesCodificar == "") { 
        alert("Ingrese el texto que desea codificar");
        return true;
    }
}


function copiar() {
    var paraCopiar = document.getElementById("textresultado");

    paraCopiar.select();
    document.execCommand('copy');   
    
    alert("¡El texto fue copiado!");

}
