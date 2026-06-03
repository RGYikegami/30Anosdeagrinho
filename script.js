// 1. Captura dos elementos do DOM usando document.querySelector
const btnCalcular = document.querySelector('#btn-calcular');
const inputAreaPlantio = document.querySelector('#area-plantio');
const inputAreaPreservacao = document.querySelector('#area-preservacao');
const inputUsoFertilizantes = document.querySelector('#uso-fertilizantes');
const containerResposta = document.querySelector('#mensagem-tela');

// 2. Adição do escutador de eventos (Event Listener) para o botão de cálculo
btnCalcular.addEventListener('click', () => {
    // Captura e conversão dos valores dos inputs para números decimais (float)
    const areaPlantio = parseFloat(inputAreaPlantio.value);
    const areaPreservacao = parseFloat(inputAreaPreservacao.value);
    const usoFertilizantes = parseFloat(inputUsoFertilizantes.value);

    // Limpa qualquer estilo ou resultado anterior do contêiner de respostas
    containerResposta.className = "escondido";
    containerResposta.innerHTML = "";

    // 3. Validação Estrita de Dados (
