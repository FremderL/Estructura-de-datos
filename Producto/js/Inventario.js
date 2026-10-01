class Inventario {

    constructor() {
        this.productos = [];
    }

    agregar(producto) {

        let left = 0;
        let right = this.productos.length - 1;
        let posicion = 0;

        while (left <= right) {

            let mid = Math.floor((left + right) / 2);

            if (this.productos[mid].id === producto.id) {
                return false;
            }

            if (this.productos[mid].id < producto.id) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        posicion = left;

        this.productos.push(producto);

        for (let i = this.productos.length - 1; i > posicion; i--) {
            this.productos[i] = this.productos[i - 1];
        }

        this.productos[posicion] = producto;

        return true;
    }


    buscar(codigo) {

        let left = 0;
        let right = this.productos.length - 1;

        while (left <= right) {

            let mid = Math.floor((left + right) / 2);

            if (this.productos[mid].id === codigo) {
                return this.productos[mid];

            } else if (this.productos[mid].id < codigo) {
                left = mid + 1;

            } else {
                right = mid - 1;
            }
        }

        return null;
    }


    eliminar(codigo) {

        let left = 0;
        let right = this.productos.length - 1;

        while (left <= right) {

            let mid = Math.floor((left + right) / 2);

            if (this.productos[mid].id === codigo) {

                let eliminado = this.productos[mid];

                for (let i = mid; i < this.productos.length - 1; i++) {
                    this.productos[i] = this.productos[i + 1];
                }
                this.productos.pop();

                return eliminado;

            } else if (this.productos[mid].id < codigo) {
                left = mid + 1;

            } else {
                right = mid - 1;
            }
        }

        return null;
    }


    listar() {

        let html = "";

        for (let i = 0; i < this.productos.length; i++) {
            html += this.productos[i].infoHtml();
        }

        return html;
    }


    listarInverso() {

        let html = "";

        for (let i = this.productos.length - 1; i >= 0; i--) {
            html += this.productos[i].infoHtml();
        }

        return html;
    }

    extraerPrimero() {

        if (this.productos.length === 0) {
            return null;
        }

        let guardar = this.productos[0];

        for (let i = 0; i < this.productos.length - 1; i++) {
            this.productos[i] = this.productos[i + 1];
        }

        this.productos.pop();

        return guardar;
    }


    extraerUltimo() {

        if (this.productos.length === 0) {
            return null;
        }

        let guardar = this.productos[this.productos.length - 1];

        this.productos.pop();
        return guardar;
    }
}