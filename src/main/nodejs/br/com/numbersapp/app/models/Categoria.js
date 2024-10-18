class Categoria {
    constructor(catId=null, categoria) {
        this.catId = catId;
        this.categoria = categoria;
    }

    get catId() {
        return this.catId;
    }

    set catId(value) {
        this.catId = value;
    }

    get categoria() {
        return this.categoria;
    }

    set categoria(value) {
        this.categoria = value;
    }
}

module.exports = Categoria;
