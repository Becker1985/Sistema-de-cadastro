function tocasom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    
    
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else  {
        console.log('elemento não encontrado ou seletor invalido');
        
    }
    
}

const listadeteclas = document.querySelectorAll('.tecla');


//enquanto
for( let contador = 0; contador < listadeteclas.length; contador++){
    const tecla = listadeteclas[contador];
    const instrumento = tecla.classList[1];
    const idaudio = `#som_${instrumento}`;

      tecla.onclick= function(){
        tocasom(idaudio);
    }
    tecla.onkeydown = function (evento){
        if(evento.code == 'space' || 'enter'){

        tecla.classList.add("ativa")
        }
    }        
    tecla.onkeyup = function (){
            tecla.classList.remove("ativa")

    }

}
