let usuario = prompt("Crea tu usuario").toUpperCase();
let contraseña = prompt("Crea tu contraseña").toUpperCase();
let estado = true;
function ingresarCuenta() {
  while (estado == true) {
    let nuevoUsuario = prompt("Igresa tu usuario").toUpperCase();
    let nuevaContraseña = prompt("Igresa tu contraseña").toUpperCase();
    if (nuevoUsuario == usuario && nuevaContraseña == contraseña) {
      alert("Ingresaste a tu cuenta");
      estado = false;
      break;
    } else {
      alert("El usuario o la contraseña es incorrecta");
    }
  }
}
ingresarCuenta();
