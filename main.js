let usuario = prompt("Crea tu usuario");
let contraseña = prompt("Crea tu contraseña");
let estado = true;
function ingresarCuenta() {
  while (estado == true) {
    let nuevoUsuario = prompt("Ingresa tu usuario");
    let nuevaContraseña = prompt("Ingresa tu contraseña");
    if (nuevoUsuario == usuario && nuevaContraseña == contraseña) {
      alert("Ingresaste a tu cuenta");
      break;
    } else {
      alert("El usuario o la contraseña es incorrecta");
    }
  }
}
ingresarCuenta();
