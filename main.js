function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
    // 'play()' executa a tag 'audio'
};

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    // se a função do 'onclick' estiver acompanhada de parênteses, é invocada imediatamente
    contador = contador + 1;
};