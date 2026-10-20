/*
Se va a controlar un inventario de productos que se almacenaran ordenados por su código, de estos productos se guarda el código, nombre, cantidad y costo, utilizando una estructura tipo lista doblemente enlazada.
Podremos agregar, buscar por código, eliminar por código, recuperar el listado como texto, extraer el primer elemento (devolverlo y eliminarlo), extraer el último elemento, recuperar el listado en orden inverso.
Crear una interfaz en HTML con cajas de texto para cada dato, al igual que botones para cada acción y un div al final donde se ira mostrando el detalle de las operaciones que se van realizando.
En la búsqueda considerar que esta ordenado y no hacer una búsqueda innecesaria.
No se deben agregar productos con código repetido.
*/

const btnAdd = document.getElementById("btnAdd");
const btnDelete = document.getElementById("btnDelete");
const btnSearch = document.getElementById("btnSearch");
const btnList = document.getElementById("btnList");
const btnListInv = document.getElementById("btnListInv");
const btnExtraerPrimero = document.getElementById("btnExtraerPrimero");
const btnExtraerUltimo = document.getElementById("btnExtraerUltimo");

const detalles = document.getElementById("detalles");

// Crear el inventario.
const miInv = new Inventario();

// Agregar producto.
btnAdd.addEventListener("click", () => {
    let codigo = document.getElementById("txtCod").value.trim();
    let nombre = document.getElementById("txtNom").value.trim();
    let cantidad = document.getElementById("txtCant").value.trim();
    let costo = document.getElementById("txtCost").value.trim();

    if (codigo === "" || nombre === "" ||
        cantidad === "" || costo === "") {
        detalles.innerHTML += "<p>Completa todos los campos.</p>";
        return;
    }

    if (!Number.isSafeInteger(Number(codigo)) ||
        Number(codigo) < 0 ||
        !Number.isSafeInteger(Number(cantidad)) ||
        Number(cantidad) < 0 ||
        !Number.isFinite(Number(costo)) ||
        Number(costo) < 0) {
        detalles.innerHTML +=
            "<p>Verifica el código, la cantidad y el costo.</p>";
        return;
    }

    let producto = new Producto(codigo, nombre, cantidad, costo);

    if (miInv.agregar(producto)) {
        detalles.innerHTML +=
            "<p>Se agregó el producto con código " +
            codigo + ".</p>";
    } else {
        detalles.innerHTML +=
            "<p>No se pudo agregar. El código " +
            codigo + " ya existe.</p>";
    }
});

// Eliminar producto.
btnDelete.addEventListener("click", () => {
    let codigo = document.getElementById("txtCod").value.trim();

    if (codigo === "") {
        detalles.innerHTML +=
            "<p>Se debe ingresar el código del producto.</p>";
        return;
    }

    let producto = miInv.eliminar(codigo);

    if (producto !== null && producto !== false) {
        detalles.innerHTML +=
            "<p>Se eliminó el producto con código " +
            codigo + ".</p>";
    } else {
        detalles.innerHTML +=
            "<p>No se encontró el producto con código " +
            codigo + ".</p>";
    }
});

// Buscar producto.
btnSearch.addEventListener("click", () => {
    let codigo = document.getElementById("txtCod").value.trim();

    if (codigo === "") {
        detalles.innerHTML +=
            "<p>Se debe ingresar el código del producto.</p>";
        return;
    }

    let producto = miInv.buscar(codigo);

    if (producto !== null) {
        detalles.innerHTML += producto.infoHtml();
    } else {
        detalles.innerHTML +=
            "<p>No se encontró el producto con código " +
            codigo + ".</p>";
    }
});

// Listar productos en orden ascendente.
btnList.addEventListener("click", () => {
    let productos = miInv.listar();

    if (productos !== "") {
        detalles.innerHTML += productos;
    } else {
        detalles.innerHTML +=
            "<p>No hay productos para listar.</p>";
    }
});

// Listar productos en orden inverso.
btnListInv.addEventListener("click", () => {
    let productos = miInv.listarInverso();

    if (productos !== "") {
        detalles.innerHTML += productos;
    } else {
        detalles.innerHTML +=
            "<p>No hay productos para listar.</p>";
    }
});

// Extraer el primer producto.
btnExtraerPrimero.addEventListener("click", () => {
    let producto = miInv.extraerPrimero();

    if (producto !== null) {
        detalles.innerHTML +=
            "<p>Primer producto extraído:</p>" +
            producto.infoHtml();
    } else {
        detalles.innerHTML +=
            "<p>No se pudo extraer el primer producto.</p>";
    }
});

// Extraer el último producto.
btnExtraerUltimo.addEventListener("click", () => {
    let producto = miInv.extraerUltimo();

    if (producto !== null) {
        detalles.innerHTML +=
            "<p>Último producto extraído:</p>" +
            producto.infoHtml();
    } else {
        detalles.innerHTML +=
            "<p>No se pudo extraer el último producto.</p>";
    }
});
