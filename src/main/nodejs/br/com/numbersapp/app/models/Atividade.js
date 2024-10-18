class Atividade {
    constructor(ativId=null, nome, descricao="") {
        this.ativId = ativId;
        this.nome = nome;
        this.descricao = descricao;
    }

    get ativId() {
        return this.ativId;
    }

    set ativId(value) {
        this.ativId = value;
    }

    get nome() {
        return this.nome;
    }

    set nome(value) {
        this.nome = value;
    }

    get descricao() {
        return this.descricao;
    }

    set descricao(value) {
        this.descricao = value;
    }
}

module.exports = Atividade;
