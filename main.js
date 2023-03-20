function toca_som (id_audio) {
    const elemento = document.querySelector(id_audio);
    if (elemento === null){
        console.log('elemento não existe');
    }
    else if(elemento.localName != 'audio'){
        console.log('uso indevido do elemento');
    }
    else{
        elemento.play();
    }
}





 const lista_de_teclas = document.querySelectorAll('.tecla');

 
 for ( let contador = 0;contador < lista_de_teclas.length;contador++) {
    const tecla = lista_de_teclas[contador];
    const instrumento = tecla.classList[1];
    const id_audio = `#som_${instrumento}` ;
    tecla.onclick = function(){
        toca_som(id_audio);
    }
    tecla.onkeydown = function(evento){
        if(evento.code==='Space' || evento.code==='Enter')
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function(){
        
        tecla.classList.remove('ativa');
    }
   
 
 }



