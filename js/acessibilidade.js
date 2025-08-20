document.addEventListener('DOMContentLoaded', function () {
    const FONT_SIZE_KEY = 'fontSize';
    const CONTRAST_KEY = 'contrast';

    const body = document.body;
    const btnAumentarFonte = document.getElementById('aumentar-fonte');
    const btnDiminuirFonte = document.getElementById('diminuir-fonte');
    const btnFontePadrao = document.getElementById('fonte-padrao');
    const btnContraste = document.getElementById('contraste');
    const btnVoltarTopo = document.getElementById('btnVoltarTopo');

    let currentFontSize = localStorage.getItem(FONT_SIZE_KEY) ? parseFloat(localStorage.getItem(FONT_SIZE_KEY)) : 16;
    body.style.fontSize = `${currentFontSize}px`;

    // Função para Aumentar a Fonte
    btnAumentarFonte.addEventListener('click', function () {
        if (currentFontSize < 24) { // Limite máximo de 24px
            currentFontSize += 2;
            body.style.fontSize = `${currentFontSize}px`;
            localStorage.setItem(FONT_SIZE_KEY, currentFontSize);
        }
    });

    // Função para Diminuir a Fonte
    btnDiminuirFonte.addEventListener('click', function () {
        if (currentFontSize > 12) { // Limite mínimo de 12px
            currentFontSize -= 2;
            body.style.fontSize = `${currentFontSize}px`;
            localStorage.setItem(FONT_SIZE_KEY, currentFontSize);
        }
    });

    // Função para Restaurar a Fonte Padrão
    btnFontePadrao.addEventListener('click', function () {
        currentFontSize = 16; // Tamanho padrão
        body.style.fontSize = `${currentFontSize}px`;
        localStorage.setItem(FONT_SIZE_KEY, currentFontSize);
    });

    // Função para Alternar o Contraste
    btnContraste.addEventListener('click', function () {
        body.classList.toggle('alto-contraste');
        if (body.classList.contains('alto-contraste')) {
            localStorage.setItem(CONTRAST_KEY, 'enabled');
        } else {
            localStorage.removeItem(CONTRAST_KEY);
        }
    });

    // Verifica se o modo contraste estava ativado na última visita
    if (localStorage.getItem(CONTRAST_KEY) === 'enabled') {
        body.classList.add('alto-contraste');
    }

    // Lógica para o botão "Voltar ao Topo"
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            btnVoltarTopo.style.display = "block";
        } else {
            btnVoltarTopo.style.display = "none";
        }
    };

    btnVoltarTopo.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});