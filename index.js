class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque misterioso";
        }

        console.log("O " + this.tipo + " atacou usando " + ataque);
    }
}

const heroiMago = new heroi ("Silva", 180, "mago");
const heroiGuerreiro = new heroi ("Oliveira", 32, "guerreiro");
const heroiMonge = new heroi ("Ferreira", 50, "monge");
const heroiNinja = new heroi ("Ribeiro", 25, "ninja");

heroiMago.atacar();
heroiGuerreiro.atacar();
heroiMonge.atacar();
heroiNinja.atacar();