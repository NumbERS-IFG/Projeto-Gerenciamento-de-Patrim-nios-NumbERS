class Projeto {
    constructor(projId=null, nome, areaPesquisa="", tipoProjeto, descricao="") {
        this.projId = projId;
        this.nome = nome;
        this.areaPesquisa = areaPesquisa;
        this.tipoProjeto = tipoProjeto;
        this.descricao = descricao;
    }

    get projId() {
        return this.projId;
    }

    set projId(value) {
        this.projId = value;
    }

    get nome() {
        return this.nome;
    }

    set nome(value) {
        this.nome = value;
    }

    get areaPesquisa() {
        return this.areaPesquisa;
    }

    set areaPesquisa(value) {
        this.areaPesquisa = value;
    }

    get tipoProjeto() {
        return this.tipoProjeto;
    }

    set tipoProjeto(value) {
        this.tipoProjeto = value;
    }

    get descricao() {
        return this.descricao;
    }

    set descricao(value) {
        this.descricao = value;
    }
}

module.exports = Projeto;
