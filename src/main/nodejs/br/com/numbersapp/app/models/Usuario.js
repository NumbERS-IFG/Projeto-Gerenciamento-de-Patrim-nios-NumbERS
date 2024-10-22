class Usuario {
    constructor(nome, sobrenome, matricula, senha, cargo) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._matricula = matricula;
        this._senha = senha;
        this._email = null;
        this._cargo = cargo;
        this._cpf = null;
        this._userId = null;
    }
    get userId() {
        return this._userId
    }

    set userId(value) {
        this._userId = value;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    set sobrenome(value) {
        this._sobrenome = value;
    }

    get matricula() {
        return this._matricula;
    }

    set matricula(value) {
        this._matricula = value;
    }

    get senha() {
        return this._senha;
    }

    set senha(value) {
        this._senha = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get cargo() {
        return this._cargo;
    }

    set cargo(value) {
        this._cargo = value;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(value) {
        this._cpf = value;
    }
}

module.exports = Usuario;
