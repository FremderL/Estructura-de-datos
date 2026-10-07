let miInv = new Inventario();

const btnAdd = document.getElementById("btnAdd");
const btnDelete = document.getElementById("btnDelete");
const btnSearch = document.getElementById("btnSearch");
const btnList = document.getElementById("btnList");
const btnAddPrimero = document.getElementById("btnAddPrimero");
const btnExtraerPrimero = document.getElementById("btnExtraerPrimero");
const btnInsertar = document.getElementById("btnInsertar");


let prueba = new Producto(1, "Producto 1", 10, 100);
let prueba2 = new Producto(2, "Producto 2", 5, 50);
let prueba3 = new Producto(3, "Producto 3", 20, 200);
let prueba4 = new Producto(4, "Producto 4", 15, 150);

miInv.agregar(prueba);
miInv.agregar(prueba2);
miInv.agregar(prueba3);
miInv.agregar(prueba4);


// AGREGAR
btnAdd.addEventListener("click", () => {

    let codigo = document.getElementById("txtCod").value;
    let nombre = document.getElementById("txtNom").value;
    let cantidad = document.getElementById("txtCant").value;
    let costo = document.getElementById("txtCost").value;
    let detalles = document.getElementById("detalles");

    if (codigo === "" || nombre === "" || cantidad === "" || costo === "") {

        detalles.innerHTML += "<p>Completa todos los campos</p>";
        return;
    }

    let producto = new Producto(
        Number(codigo),
        nombre,
        Number(cantidad),
        Number(costo)
    );

    miInv.agregar(producto);

    if (miInv.buscar(Number(codigo)) != null) {

        detalles.innerHTML +=
            "<p>Se agregó el producto con el código " +
            codigo + "</p>";

    } else {

        detalles.innerHTML +=
            "<p>No se pudo agregar el producto con el código " +
            codigo + "</p>";
    }
});


// ELIMINAR
btnDelete.addEventListener("click", () => {

    let codigo = document.getElementById("txtCod").value;
    let detalles = document.getElementById("detalles");

    if (codigo === "") {

        detalles.innerHTML +=
            "<p>Se debe ingresar el código del producto</p>";

        return;
    }

    let eliminado = miInv.eliminar(Number(codigo));

    if (eliminado != null) {

        detalles.innerHTML +=
            "<p>Se eliminó el producto con el código " +
            codigo + "</p>";

        detalles.innerHTML += eliminado.infoHtml();

    } else {

        detalles.innerHTML +=
            "<p>No se pudo eliminar el producto con el código " +
            codigo + "</p>";
    }
});


// BUSCAR
btnSearch.addEventListener("click", () => {

    let codigo = document.getElementById("txtCod").value;
    let detalles = document.getElementById("detalles");

    if (codigo === "") {

        detalles.innerHTML +=
            "<p>Se debe ingresar el código del producto</p>";

        return;
    }

    let producto = miInv.buscar(Number(codigo));

    if (producto != null) {

        detalles.innerHTML += producto.infoHtml();

    } else {

        detalles.innerHTML +=
            "<p>No se encontró el producto con el código " +
            codigo + "</p>";
    }
});


// LISTAR
btnList.addEventListener("click", () => {

    let detalles = document.getElementById("detalles");
    let productos = miInv.listar();

    if (productos.length > 0) {

        detalles.innerHTML += productos;

    } else {

        detalles.innerHTML +=
            "<p>No hay productos para listar</p>";
    }
});


// AGREGAR AL INICIO
btnAddPrimero.addEventListener("click", () => {

    let detalles = document.getElementById("detalles");

    let codigo = document.getElementById("txtCod").value;
    let nombre = document.getElementById("txtNom").value;
    let cantidad = document.getElementById("txtCant").value;
    let costo = document.getElementById("txtCost").value;

    if (codigo === "" || nombre === "" ||
        cantidad === "" || costo === "") {

        detalles.innerHTML +=
            "<p>Completa todos los campos</p>";

        return;
    }

    let producto = new Producto(
        Number(codigo),
        nombre,
        Number(cantidad),
        Number(costo)
    );

    miInv.agregarInicio(producto);

    if (miInv.buscar(Number(codigo)) != null) {

        detalles.innerHTML +=
            "<p>Se agregó el producto al inicio con el código " +
            codigo + "</p>";

        detalles.innerHTML += producto.infoHtml();

    } else {

        detalles.innerHTML +=
            "<p>No se pudo agregar el producto al inicio con el código " +
            codigo + "</p>";
    }
});


// EXTRAER PRIMERO
btnExtraerPrimero.addEventListener("click", () => {

    let detalles = document.getElementById("detalles");

    let producto = miInv.extraerPrimero();

    if (producto != null) {

        detalles.innerHTML +=
            "<p>Se extrajo el primer producto:</p>";

        detalles.innerHTML += producto.infoHtml();

    } else {

        detalles.innerHTML +=
            "<p>No se pudo extraer el primer producto</p>";
    }
});


// INSERTAR
btnInsertar.addEventListener("click", () => {

    let codigo = document.getElementById("txtCod").value;
    let nombre = document.getElementById("txtNom").value;
    let cantidad = document.getElementById("txtCant").value;
    let costo = document.getElementById("txtCost").value;
    let posicion = document.getElementById("txtPos").value;

    let detalles = document.getElementById("detalles");

    if (codigo === "" || nombre === "" ||
        cantidad === "" || costo === "" || posicion === "") {

        detalles.innerHTML +=
            "<p>Completa todos los campos</p>";

        return;
    }

    let producto = new Producto(
        Number(codigo),
        nombre,
        Number(cantidad),
        Number(costo)
    );

    miInv.insertar(producto, Number(posicion));

    if (miInv.buscar(Number(codigo)) != null) {

        detalles.innerHTML +=
            "<p>Se insertó el producto en la posición " +
            posicion + "</p>";

        detalles.innerHTML += producto.infoHtml();

    } else {

        detalles.innerHTML +=
            "<p>No se pudo insertar el producto en la posición " +
            posicion + "</p>";
    }
});