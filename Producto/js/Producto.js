class Producto {
    constructor(id, nombre, cantidad, costo){
        this.id=id;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.costo=costo;
    }
    info(){
        return "Codigo: "+ this.id + " | Nombre: "+ this.nombre +" | Cantidad: "+ this.cantidad +" | Costo: "+ this.costo + "\n"
    }
    infoHtml(){
        return "<p>Codigo: "+ this.id + " | Nombre: "+ this.nombre + " | Cantidad: "+ this.cantidad + " | Costo: "+ this.costo + "</p>";
    }
}