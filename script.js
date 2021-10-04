function verificar(){
    var ini = window.document.getElementById("txtini")
    var fim = window.document.getElementById("txtfim")
    var passo = window.document.getElementById("txtpass")
    
    var res = window.document.getElementById("res");
    res.innerHTML = ''

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = "Impossível contar"
        window.alert("Erro falta dados!")
    } else {
        ini = Number.parseInt(ini.value)
        fim = Number.parseInt(fim.value)
        passo = Number.parseInt(passo.value)

        if(passo <= 0){
            window.alert("valor de passo indevido")
        }else{
        
            if(ini < fim){
                //contagem crescente
                for(ini ; ini < fim; ini += passo){
                    res.innerHTML += `${ini} &#128516 ` 
            }res.innerHTML += `\u{1F3C1}`}
           else{
                //contagem regressiva
                for(ini; ini > fim; ini -= passo){
                    res.innerHTML += `${ini} &#128516 `
            }res.innerHTML += `\u{1F3C1}`}
        }
    }
}


