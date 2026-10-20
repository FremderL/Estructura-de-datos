
class Producto {
    constructor(id, nombre, cantidad, costo) {
        this.id = Number(id);
        this.nombre = nombre;
        this.cantidad = Number(cantidad);
        this.costo = Number(costo);
        this.ant = null;
        this.sig = null;
    }

    info() {
        return "Codigo: " + this.id +
            " | Nombre: " + this.nombre +
            " | Cantidad: " + this.cantidad +
            " | Costo: " + this.costo + "\n";
    }

    infoHtml() {
        return "<p>Codigo: " + this.id +
            " | Nombre: " + this.nombre +
            " | Cantidad: " + this.cantidad +
            " | Costo: " + this.costo +
            "</p>";
    }
}
