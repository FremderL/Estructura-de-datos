
class Inventario {

    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.tamanio = 0;
    }

    agregar(producto) {

        let actual = this.primero;

        while (actual !== null && actual.id < producto.id) {
            actual = actual.sig;
        }

        if (actual !== null && actual.id === producto.id) {
            return false;
        }

        if (this.primero === null) {
            this.primero = producto;
            this.ultimo = producto;
        }
        else if (actual === this.primero) {
            producto.sig = this.primero;
            this.primero.ant = producto;
            this.primero = producto;
        }

        else if (actual === null) {
            producto.ant = this.ultimo;
            this.ultimo.sig = producto;
            this.ultimo = producto;
        }

        else {
            producto.ant = actual.ant;
            producto.sig = actual;

            actual.ant.sig = producto;
            actual.ant = producto;
        }

        this.tamanio++;
        return true;
    }

    buscar(codigo) {

        codigo = Number(codigo);
        let actual = this.primero;

        while (actual !== null && actual.id <= codigo) {

            if (actual.id === codigo) {
                return actual;
            }

            actual = actual.sig;
        }

        return null;
    }

    eliminar(codigo) {

        let producto = this.buscar(codigo);

        if (producto === null) {
            return null;
        }

        if (producto.ant !== null) {
            producto.ant.sig = producto.sig;
        } else {
            this.primero = producto.sig;
        }

        if (producto.sig !== null) {
            producto.sig.ant = producto.ant;
        } else {
            this.ultimo = producto.ant;
        }

        producto.ant = null;
        producto.sig = null;

        this.tamanio--;

        return producto;
    }

    listar() {

        let html = "";
        let actual = this.primero;

        while (actual !== null) {
            html += actual.infoHtml();
            actual = actual.sig;
        }

        return html;
    }

    listarInverso() {

        let html = "";
        let actual = this.ultimo;

        while (actual !== null) {
            html += actual.infoHtml();
            actual = actual.ant;
        }

        return html;
    }

    extraerPrimero() {

        if (this.primero === null) {
            return null;
        }

        let guardar = this.primero;

        this.primero = guardar.sig;

        if (this.primero !== null) {
            this.primero.ant = null;
        } else {
            this.ultimo = null;
        }

        guardar.ant = null;
        guardar.sig = null;

        this.tamanio--;

        return guardar;
    }

    extraerUltimo() {

        if (this.ultimo === null) {
            return null;
        }

        let guardar = this.ultimo;

        this.ultimo = guardar.ant;

        if (this.ultimo !== null) {
            this.ultimo.sig = null;
        } else {
            this.primero = null;
        }

        guardar.ant = null;
        guardar.sig = null;

        this.tamanio--;

        return guardar;
    }
}
