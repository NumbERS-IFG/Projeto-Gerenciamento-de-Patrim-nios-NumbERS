class Situacao {
    constructor(sitId=null, situacao) {
        this.situacao = sitId;
        this.sitId = sitId;
        this.situacao = situacao;
    }

    get sitId() {
        return this.sitId;
    }

    set sitId(value) {
        this.sitId = value;
    }

    get situacao() {
        return this.situacao;
    }

    set situacao(value) {
        this.situacao = value;
    }
}

module.exports = Situacao;
