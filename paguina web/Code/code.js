// Array para almacenar los productos del carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    // Agregar el producto al array del carrito
    carrito.push({ nombre, precio });

    // Actualizar la interfaz del carrito
    mostrarCarrito();
}

// Función para mostrar el carrito en pantalla
function mostrarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");

    // Limpiar la lista actual
    listaCarrito.innerHTML = "";

    // Variable para calcular el total
    let total = 0;

    // Agregar cada producto como un elemento de lista
    carrito.forEach((producto, index) => {
        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - S/ ${producto.precio.toFixed(2)}`;
        listaCarrito.appendChild(item);
        total += producto.precio;
    });

    // Mostrar el total
    totalElemento.textContent = total.toFixed(2);
}
document.addEventListener("DOMContentLoaded", function () {
  const buscador = document.getElementById("buscador");
  const productos = document.querySelectorAll(".producto");

  buscador.addEventListener("keyup", function () {
    const filtro = buscador.value.toLowerCase();
    productos.forEach(function (producto) {
      const texto = producto.textContent.toLowerCase();
      producto.style.display = texto.includes(filtro) ? "block" : "none";
    });
  });
});
function iniciarSesion() {
  alert("Función de inicio de sesión aún no disponible.");
}
