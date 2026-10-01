/**
 * Crear una interfaz en HTML para el proyecto del inventario con arreglos usando cajas de texto para cada dato solicitado, al igual que botones para cada acción y un div al final donde se ira mostrando el detalle de las operaciones que se van realizando.
Subir nuevamente las clases Producto e Inventario

Implementar en la clase Producto un metodo infoHtml() que devuelva con HTML la información del producto y ese se mandara llamar en el metodo listar
Dentro del inventario se va a implementar un listarInverso que mostrara todos los productos en orden inverso (no se invierte, ahora solo se regresa la información del ultimo al primero) y se muestra en el div del final
 */


let miInv=new Inventario();
const btnAdd=document.getElementById("btnAdd");
const btnDelete=document.getElementById("btnDelete");
const btnSearch=document.getElementById("btnSearch");
//const btnAddInicio=document.getElementById("btnAddInicio");
const btnList=document.getElementById("btnList");
const btnListInv=document.getElementById("btnListInv");
const btnExtraerPrimero=document.getElementById("btnExtraerPrimero");
const btnExtraerUltimo=document.getElementById("btnExtraerUltimo");



btnAdd.addEventListener("click",()=>{
    let codigo = document.getElementById("txtCod").value;
    let nombre = document.getElementById("txtNom").value;
    let cantidad = document.getElementById("txtCant").value;
    let costo = document.getElementById("txtCost").value;
    let detalles = document.getElementById("detalles");
    if (codigo === "" || nombre === "" || cantidad === "" || costo === "") {
        detalles.innerHTML += "<p> Completa todos los campos</p>"
        return;
    }
    let producto = new Producto(codigo, nombre, cantidad, costo);
    miInv.agregar(producto);
    if (miInv.buscar(codigo)!=null){
        detalles.innerHTML += "<p> Se agrego el producto con el codigo " + codigo + "</p>"
    }else {
        detalles.innerHTML += "<p> No se pudo agregar el producto con el codigo " + codigo + "</p>"
    }
})

btnDelete.addEventListener("click",()=>{
    let codigo = document.getElementById("txtCod").value;
    let detalles = document.getElementById("detalles");
    if (codigo === "") {
        detalles.innerHTML += "<p> Se debe ingresar el codigo del producto</p>"
        return;
    }
    if (miInv.buscar(codigo)== true){
        detalles.innerHTML += "<p> Se elimino el producto con el codigo " + codigo + "</p>"
    }else {
        detalles.innerHTML += "<p> No se pudo eliminar el producto con el codigo " + codigo + "</p>"
    }
})

btnSearch.addEventListener("click",()=>{
    let codigo = document.getElementById("txtCod").value;
    let detalles = document.getElementById("detalles");
    if (codigo === "") {
        detalles.innerHTML += "<p> Se debe ingresar el codigo del producto</p>"
        return;
    }
    let producto = miInv.buscar(codigo);
    if (producto != null){
        detalles.innerHTML += miInv.buscar(codigo).infoHtml()
    }else {
        detalles.innerHTML += "<p> No se encontro el producto con el codigo " + codigo + "</p>"
    }
})
/** 
btnAddInicio.addEventListener("click",()=>{
    let codigo = document.getElementById("txtCod").value;
    let nombre = document.getElementById("txtNom").value;
    let cantidad = document.getElementById("txtCant").value;
    let costo = document.getElementById("txtCost").value;
    let detalles = document.getElementById("detalles");
    if (codigo === "" || nombre === "" || cantidad === "" || costo === "") {
        detalles.innerHTML += "<p> Completa todos los campos</p>"
        return;
    }
    let producto = new Producto(codigo, nombre, cantidad, costo);
    miInv.agregarInicio(producto);
    if (miInv.buscar(codigo)!=null){
        detalles.innerHTML += "<p> Se agrego el producto al inicio con el codigo " + codigo + "</p>"
        detalles.innerHTML += miInv.buscar(codigo).infoHtml()
    }else {
        detalles.innerHTML += "<p> No se pudo agregar el producto al inicio con el codigo " + codigo + "</p>"
    }
})
*/
btnList.addEventListener("click",()=>{
    let detalles = document.getElementById("detalles");
    let productos = miInv.listar();
    if (productos.length > 0){
        detalles.innerHTML += miInv.listar()
        
    }else {
        detalles.innerHTML += "<p> No hay productos para listar</p>"
    }
})

btnListInv.addEventListener("click",()=>{
    let detalles = document.getElementById("detalles");
    let productos = miInv.listar();
    if (productos.length > 0){
        detalles.innerHTML += miInv.listarInverso()
    }else {
        detalles.innerHTML += "<p> No hay productos para listar</p>"
    }
})


btnExtraerPrimero.addEventListener("click",()=>{
    let detalles = document.getElementById("detalles");
    let producto = miInv.extraerPrimero();
    if (producto != null){
        detalles.innerHTML += producto.infoHtml()
    }else {
        detalles.innerHTML += "<p> No se pudo extraer el primer producto</p>"
    }
})

btnExtraerUltimo.addEventListener("click",()=>{
    let detalles = document.getElementById("detalles");
    let producto = miInv.extraerUltimo();
    if (producto != null){
        detalles.innerHTML += producto.infoHtml()
    }else {
        detalles.innerHTML += "<p> No se pudo extraer el último producto</p>"
    }
})
