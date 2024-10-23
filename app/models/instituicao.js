class Instituicao {
    constructor(instId=null, cnpj="", nome, pesResp="") {
        this.instId = instId;
        this.cnpj = cnpj;
        this.nome = nome;
        this.pesResp = pesResp;
    }

    get instId() {
        return this.instId;
    }

    set instId(value) {
        this.instId = value;
    }

    get cnpj() {
        return this.cnpj;
    }

    set cnpj(value) {
        this.cnpj = value;
    }

    get nome() {
        return this.nome;
    }

    set nome(value) {
        this.nome = value;
    }

    get pesResp() {
        return this.pesResp;
    }

    set pesResp(value) {
        this.pesResp = value;
    }
}

module.exports = Instituicao;
