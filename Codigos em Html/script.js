window.onload = function() {
    var buttons = document.querySelectorAll(".styledButton"); // Seleciona todos os botões com a classe 'styledButton'
    
    buttons.forEach(function(button) {
        button.style.backgroundColor = "#4CAF50"; // Cor de fundo verde
        button.style.color = "white"; // Cor do texto
        button.style.padding = "15px 32px"; // Espaçamento interno
        button.style.textAlign = "center"; // Alinhamento do texto
        button.style.fontSize = "16px"; // Tamanho da fonte
        button.style.border = "none"; // Remover bordas padrão
        button.style.borderRadius = "12px"; // Bordas arredondadas
        button.style.cursor = "pointer"; // Cursor de mãozinha ao passar o mouse
        button.style.transition = "background-color 0.3s ease"; // Transição suave na cor de fundo

        // Alterando o estilo quando o botão é pressionado
        button.onmousedown = function() {
            button.style.backgroundColor = "#3e8e41"; // Cor de fundo mais escura ao pressionar
        };

        // Revertendo o estilo quando o botão é solto
        button.onmouseup = function() {
            button.style.backgroundColor = "#4CAF50"; // Cor de fundo original
        };

        // Estilo para o hover (passar o mouse)
        button.onmouseover = function() {
            button.style.backgroundColor = "#45a049"; // Cor de fundo mais escura ao passar o mouse
        };

        // Revertendo o estilo quando o mouse sai
        button.onmouseout = function() {
            button.style.backgroundColor = "#4CAF50"; // Cor de fundo original
        };
    });
};