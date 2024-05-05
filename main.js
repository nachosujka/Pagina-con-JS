class usuario {
  constructor(nombre, contraseña) {
    this.nombre = nombre;
    this.contraseña = contraseña;
  }
}
const primerUsuario = prompt("Crea tu usuario").toUpperCase();
const primeraContraseña = prompt("Crea tu contraseña").toUpperCase();

let estado = true;

const usuarios = [];
usuarios.push(
  new usuario(primerUsuario.toUpperCase(), primeraContraseña.toUpperCase())
);
usuarios.push(new usuario("Leo".toUpperCase(), "contraseña".toUpperCase()));
usuarios.push(new usuario("Andres".toUpperCase(), "moco".toUpperCase()));
usuarios.push(new usuario("mauro".toUpperCase(), "macro".toUpperCase()));

console.log(usuarios);

console.log(usuarios.some((el) => el.nombre == "Messi"));

function ingresarCuenta() {
  while (estado == true) {
    let nuevoUsuario = prompt("Igresa tu usuario").toUpperCase();
    let nuevaContraseña = prompt("Igresa tu contraseña").toUpperCase();
    if (nuevoUsuario == primerUsuario && nuevaContraseña == primeraContraseña) {
      alert("Ingresaste a tu cuenta");
      estado = false;
      break;
    } else {
      alert("El usuario o la contraseña es incorrecta");
    }
  }
}
ingresarCuenta();

/* const usuario1 = new usuario(primerUsuario, primeraContraseña); */

/* const usuarios = [
  usuario1,
  (usuario2 = {
    nombre: "Leandro",
    contraseña: "contraseña",
  }),
  (usuario3 = {
    nombre: "Lionel",
    contraseña: "leo",
  }),
  (usuario4 = {
    nombre: "Mauro",
    contraseña: "Copa",
  }),
].toUpperCase(); */

/* if(usuarios.find(el => el.nombre ===nuevoUsuario)){
} CODIGO PARA PODER USAR CUALQUIER USUARIO */
