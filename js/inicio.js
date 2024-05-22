// const productos = [
//   {
//     id: "1",
//     marca: "Samsung",
//     tamaño: "Normal",
//     tipo: "Celular",
//     precio: "$60.000",
//     color: "Negro",
//     imagen: "../img/productos/img-samsung-galaxy-s10.jpg",
//   },

//   {
//     id: "2",
//     marca: "Apple",
//     tamaño: "Grande",
//     tipo: "Notbook",
//     precio: "$230.000",
//     color: "Negro y Gris",
//     imagen: "../img/productos/img-macbook-pro-2019.jpg",
//   },

//   {
//     id: "3",
//     marca: "Moulinex",
//     tamaño: "Grande",
//     tipo: "Cafetera",
//     precio: "$6.000",
//     color: "Rojo y Blanco",
//     imagen: "../img/productos/img-cafetera-moulinex.jpg",
//   },
//   {
//     id: "4",
//     marca: "Samsung",
//     tamaño: "Grande",
//     tipo: "Televisor",
//     precio: "$175.000",
//     color: "Gris",
//     imagen: "../img/productos/img-tv-samsung-smart.jpg",
//   },
// ];

// const container = document.getElementById("container");

// function crearCard(producto) {
//   const card = document.createElement("div");
//   card.className = "card";

//   const imagenes = document.createElement("img");
//   imagenes.className = "img";
//   imagenes.src = producto.imagen;
//   imagenes.alt = "No imagen";

//   const texto = document.createElement("p");
//   texto.innerText = producto.tipo;
//   texto.className = "texto";

//   card.appendChild(imagenes);
//   card.appendChild(texto);

//   container.appendChild(card);
// }

// productos.forEach((el) => crearCard(el));

const botonIngresar = document.getElementById("botonIngresar");

botonIngresar.addEventListener("click", ingresarCuenta);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});
