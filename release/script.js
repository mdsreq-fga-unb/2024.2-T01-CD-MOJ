// Dados simulados de submissões com logs detalhados
const submissaoDatabase = {
    "12345": {
        codigo: `def soma(a, b):
    return a + b

# Testando a função
print(soma(2, 3))`,
        log: `
Iniciando execução...
Função soma(a, b) chamada com parâmetros: a = 2, b = 3
Executando a operação: 2 + 3
Resultado da operação: 5
Saída do código: 5
Execução finalizada.`
    },
    "67890": {
        codigo: `def soma(a, b)
    return a + b

# Testando a função
print(soma(2, 3))`,
        log: `
Iniciando execução...
Erro: O código contém um erro de sintaxe.
Erro de Sintaxe: Esperava-se ':' após o nome da função 'soma'.
Localização do erro: Linha 1, Coluna 20
Execução finalizada com erro.`
    },
    "11223": {
        codigo: `def dividir(a, b):
    return a / b

# Testando a função com divisão por zero
print(dividir(5, 0))`,
        log: `
Iniciando execução...
Função dividir(a, b) chamada com parâmetros: a = 5, b = 0
Tentando realizar a operação: 5 / 0
Erro: Divisão por zero não permitida.
Localização do erro: Linha 3, Coluna 14
Execução finalizada com erro.`
    },
    "33445": {
        codigo: `def multiplicar(a, b):
    return a * b

# Testando a função com tipos incompatíveis
print(multiplicar("texto", 3))`,
        log: `
Iniciando execução...
Função multiplicar(a, b) chamada com parâmetros: a = "texto", b = 3
Tentando realizar a operação: "texto" * 3
Erro: Tipo incompatível. Esperava-se números, mas foi fornecido uma string.
Localização do erro: Linha 3, Coluna 14
Execução finalizada com erro.`
    }
};

// Função que simula a busca do log e código baseado no ID da submissão
document.getElementById("buscar-log").addEventListener("click", function() {
    const idSubmissao = document.getElementById("submissao-id").value.trim();
    
    if (submissaoDatabase[idSubmissao]) {
        document.getElementById("codigo").textContent = submissaoDatabase[idSubmissao].codigo;
        document.getElementById("log").textContent = submissaoDatabase[idSubmissao].log;
    } else {
        document.getElementById("codigo").textContent = "ID não encontrado.";
        document.getElementById("log").textContent = "Nenhum log disponível para o ID fornecido.";
    }
});

// Função para salvar o log
document.getElementById("salvar-log").addEventListener("click", function() {
    const idSubmissao = document.getElementById("submissao-id").value.trim();
    
    if (submissaoDatabase[idSubmissao]) {
        const log = submissaoDatabase[idSubmissao].log;
        const blob = new Blob([log], { type: 'text/plain' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `log_${idSubmissao}.txt`;
        link.click();
    } else {
        alert("ID não encontrado.");
    }
});

// Função para baixar o código
document.getElementById("baixar-codigo").addEventListener("click", function() {
    const idSubmissao = document.getElementById("submissao-id").value.trim();
    
    if (submissaoDatabase[idSubmissao]) {
        const codigo = submissaoDatabase[idSubmissao].codigo;
        const blob = new Blob([codigo], { type: 'text/plain' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `codigo_${idSubmissao}.txt`;
        link.click();
    } else {
        alert("ID não encontrado.");
    }
});

// Função para recuperar o código diretamente
document.getElementById("recuperar-codigo").addEventListener("click", function() {
    const idSubmissao = document.getElementById("submissao-id").value.trim();
    
    if (submissaoDatabase[idSubmissao]) {
        document.getElementById("codigo").textContent = submissaoDatabase[idSubmissao].codigo;
        document.getElementById("log").textContent = "Log carregado com sucesso.";
    } else {
        document.getElementById("codigo").textContent = "ID não encontrado.";
        document.getElementById("log").textContent = "Nenhum log disponível para o ID fornecido.";
    }
});