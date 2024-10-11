class Usuario {
    constructor(userId, nome, sobrenome, matricula, senha, email, cargo, cpf) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._matricula = matricula;
        this._senha = senha;
        this._email = email;
        this._cargo = cargo;
        this._cpf = cpf;
        this._userId = userId;
    }

    constructor(nome, sobrenome, matricula, senha, email, cargo, cpf) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._matricula = matricula;
        this._senha = senha;
        this._cargo = cargo;
        this._email = email;
        this._cpf = cpf;
    }

    constructor(nome, sobrenome, matricula, senha, cargo) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._matricula = matricula;
        this._cargo = cargo;
        this._senha = senha;
    }


    get userId() {
        return this._userId;
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

    get cargo() {
        return this._cargo;
    }

    set cargo(value) {
        this._cargo = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get senha() {
        return this._senha;
    }

    set senha(value) {
        this._senha = value;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(value) {
        this._cpf = value;
    }
}