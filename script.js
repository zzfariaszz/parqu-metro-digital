class Parquimetro{
    constructor (valorInserido){
        this.valor = valorInserido;
        this.tempo = 0;
        this.troco = 0;
    }

    calcular(){
        if (this.valor < 1) {
            return "Valor insuficiente. Insira pelo menos R$ 1,00.";
        }

        if (this.valor  >= 3.00) {
            this.tempo = 120;
            this.troco = this.valor - 3.00;
        }
        else if (this.valor >= 1.75) {
            this.tempo = 60;
            this.troco = this.valor -1.75;
        }
        else if (this.valor >= 1.00) {
            this.tempo = 30;
            this.troco = this.valor - 1.00;
        }

        return `Tempo concedido: ${this.tempo} minutos Troco: R$ ${this.troco.toFixed(2)}`;
    }
}

function simular() {
    const valorDigitado = parseFloat(document.getElementById("valor").value);
    const resultadoDiv = document.getElementById("resultado");
    
    if (isNaN(valorDigitado)) {
        resultadoDiv.innerHTML = "Digite um valor valido!";
        return;
    }

    const parquimetro = new Parquimetro(valorDigitado);
    resultadoDiv.innerHTML = parquimetro.calcular();
}