// Exericio 2

const fibonacci = (num, memo) => {
    // Recebe os números anteriores
    // ou um novo objeto, se for a primeira vez
    memo = memo || {};

    // Verifica se já existe o
    // valor calculado anteriormente
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    // Caso realmente não tenha,
    // executa normalmente o código
    return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
};


//Exercicio 05

function inverterString(str) {

    var x = ''; // variavel que vai receber os caracteres invertidos

    //Função for que recebe desde o ultimo caractere e guarda em "x"
    for (var i = str.length - 1; i >= 0; i--) {
        x += str[i];
    }

    //retorna a variavel x com os caracteres invertidos
    return x;
}
console.log(inverterString("Testando a inversão de String, esse estágio é meu"));
