function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
    /* 'play()' executa a tag 'audio' */
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
/* se a função do 'onclick' estiver acompanhada de parênteses, é invocada imediatamente */

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;