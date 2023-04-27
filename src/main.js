function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    // 'localName' mostra o nome da tag do elemento
    if (elemento && elemento.localName === 'audio') {

        // 'play()' executa a tag 'audio'
        elemento.play()

    }else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string

    // se a função do 'onclick' estiver acompanhada de parênteses, é invocada imediatamente, por isso a necessidade de uma função anônima
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    // ao pressionar a tecla
    tecla.onkeydown = function (evento) {
        // console.log(evento); 
        // mostra o objeto 'evento'

        // 'code' mostra o nome da tecla pressionada no evento
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    };

    // ao soltar a tecla
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
};
