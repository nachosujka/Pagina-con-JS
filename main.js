/* if(usuarios.find(el => el.nombre ===nuevoUsuario)){
} CODIGO PARA PODER USAR CUALQUIER USUARIO  */

class usuario {
  constructor(usuarios, contraseñas) {
    this.usuarios = usuarios;
    this.contraseñas = contraseñas;
  }
}

const usuarios = [];
// usuarios.push(
//   new usuario(nombre.value.toUpperCase(), contraseña.value.toUpperCase())
// );
usuarios.push(new usuario("Leo".toUpperCase(), "contraseña".toUpperCase()));
usuarios.push(new usuario("Andres".toUpperCase(), "moco".toUpperCase()));
usuarios.push(new usuario("mauro".toUpperCase(), "macro".toUpperCase()));

console.log(usuarios.some((el) => el.nombre == "Messi"));

const nombre = document.getElementById("nombre");
const contraseña = document.getElementById("contraseña");

const confirmarNombre = document.getElementById("confirmarNombre");
const confirmarContraseña = document.getElementById("confirmarContraseña");

// const formulario = document.getElementById("formulario");
// console.log(formulario);
// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

const ingresar = document.getElementById("ingresar");
function ingresasteALaCuenta() {
  ingresar.innerHTML = `<p>Ingresaste a tu cuenta</p> <button class="btn btn-primary"><a href="../paginas/inicio.html">cerrar</a></button>`;
}
function incorrecto() {
  ingresar.innerHTML = `<p>El usuario o la contraseña es incorrecta<p>  <button class="btn btn-primary" onclick="limpiar()">cerrar</button>`;
}
function limpiar() {
  ingresar.innerHTML = "";
}
// function ingresarCuenta() {
//   console.log(confirmarContraseña, confirmarNombre);
//   if (
//     confirmarNombre.value == nombre.value &&
//     confirmarContraseña.value == contraseña.value
//   ) {
//     alert("correcto");
//     ingresasteALaCuenta();
//   } else {
//     alert("incorrecto");
//     incorrecto();
//   }
// }

function ingresarCuenta() {
  if (
    formulario.children[0].value == nombre.value &&
    formulario.children[1].value == contraseña.value
  ) {
    alert("ingresaste");
    ingresasteALaCuenta();
  } else {
    alert("usuario o contraseña incorrecta");
    incorrecto();
  }
}

ingresarCuenta();
