class Condicao {
    constructor(condId=null, condicao) {
        this.condId = condId;
        this.condicao = condicao;
    }

    get condId() {
        return this.condId;
    }

    set condId(value) {
        this.condId = value;
    }

    get condicao() {
        return this.condicao;
    }

    set condicao(value) {
        this.condicao = value;
    }
}

module.exports = Condicao;
