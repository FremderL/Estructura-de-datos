class Inventario {

    constructor() {
        this.primero = null;
    }


    agregar(producto) {

        producto.sig = null;

        if (this.primero === null) {
            this.primero = producto;
        } else {
            this.veagregate(producto, this.primero);
        }
    }


    veagregate(producto, actual) {

        if (actual.sig === null) {
            actual.sig = producto;
        } else {
            this.veagregate(producto, actual.sig);
        }
    }


    buscar(codigo) {

        let aux = this.primero;

        while (aux !== null) {

            if (aux.id === codigo) {
                return aux;
            }

            aux = aux.sig;
        }

        return null;
    }


    eliminar(codigo) {

        if (this.primero === null) {
            return null;
        }

        if (this.primero.id === codigo) {

            let eliminado = this.primero;

            this.primero = this.primero.sig;

            eliminado.sig = null;

            return eliminado;
        }

        let aux = this.primero;

        while (aux.sig !== null) {

            if (aux.sig.id === codigo) {

                let eliminado = aux.sig;

                aux.sig = aux.sig.sig;

                eliminado.sig = null;

                return eliminado;
            }

            aux = aux.sig;
        }

        return null;
    }


    insertar(producto, posicion) {

        if (posicion < 0) {
            return;
        }

        if (posicion === 0) {

            producto.sig = this.primero;
            this.primero = producto;

            return;
        }

        let aux = this.primero;
        let contador = 0;

        while (aux !== null && contador < posicion - 1) {

            aux = aux.sig;
            contador++;
        }

        if (aux !== null) {

            producto.sig = aux.sig;
            aux.sig = producto;
        }
    }


    listar() {

        let html = "";

        let aux = this.primero;

        while (aux !== null) {

            html += aux.infoHtml();

            aux = aux.sig;
        }

        return html;
    }


    extraerPrimero() {

        if (this.primero === null) {
            return null;
        }

        let guardar = this.primero;

        this.primero = this.primero.sig;

        guardar.sig = null;

        return guardar;
    }


    agregarInicio(producto) {

        producto.sig = this.primero;

        this.primero = producto;
    }

}