function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
    // 'play()' executa a tag 'audio'
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
};
