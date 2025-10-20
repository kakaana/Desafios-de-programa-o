// Função para simular o envio de código
function enviarCodigo() {
    const codigo = document.getElementById('codigo-usuario').value;

    // Simulação de lógica de testes:
    if (codigo.trim() === "") {
        alert("Ops! Você precisa escrever o código antes de enviar.");
        return;
    }

    // Apenas uma mensagem de sucesso simulada
    alert("Código enviado! Passou em 8/10 testes. Tente otimizar!");
}

// Função para mostrar/esconder a solução oficial
function mostrarSolucao() {
    const solucaoDiv = document.getElementById('solucao-oficial');
    const botao = document.querySelector('.btn-solucao');

    if (solucaoDiv.style.display === 'none' || solucaoDiv.style.display === '') {
        solucaoDiv.style.display = 'block';
        botao.textContent = 'Ocultar Solução Oficial';
    } else {
        solucaoDiv.style.display = 'none';
        botao.textContent = 'Ver Solução Oficial (spoiler!)';
    }
}

// Inicializa a solução como oculta (necessário para alguns navegadores)
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('solucao-oficial').style.display = 'none';
});