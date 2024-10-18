class Usuario {
    constructor(userId=null, nome, sobrenome, matricula, senha, email="", cargo, cpf="") {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
        this.senha = senha;
        this.email = email;
        this.cargo = cargo;
        this.cpf = cpf;
        this.userId = userId;
    }

    get userId() {
        return this.userId;
    }

    set userId(value) {
        this.userId = value;
    }

    get nome() {
        return this.nome;
    }

    set nome(value) {
        this.nome = value;
    }

    get sobrenome() {
        return this.sobrenome;
    }

    set sobrenome(value) {
        this.sobrenome = value;
    }

    get matricula() {
        return this.matricula;
    }

    set matricula(value) {
        this.matricula = value;
    }

    get cargo() {
        return this.cargo;
    }

    set cargo(value) {
        this.cargo = value;
    }

    get email() {
        return this.email;
    }

    set email(value) {
        this.email = value;
    }

    get senha() {
        return this.senha;
    }

    set senha(value) {
        this.senha = value;
    }

    get cpf() {
        return this.cpf;
    }

    set cpf(value) {
        this.cpf = value;
    }
}

module.exports = Usuario;
