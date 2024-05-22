const formulario = document.getElementById("formulario");

const usuario = "nacho";
const clave = "nacho123";

let sesion = JSON.parse(localStorage.getItem("sesion"));
let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

function sesionIniciada(usuarioIngresado) {
  formulario.innerHTML = "";

  const mensaje = document.createElement("h2");
  mensaje.innerText = `Bienvenido ${usuarioIngresado}`;

  const boton = document.createElement("button");
  boton.innerText = "Cerrar sesión";
  boton.className = "btn btn-primary";

  boton.onclick = () => {
    // let titulo = document.createElement("h1");
    // titulo.id = titulo;
    // titulo.innerText = "Ingresa a tu cuenta";

    let user = document.createElement("input");
    user.type = "text";
    user.id = "user";
    user.placeholder = "Ingresa tu usuario";
    user.required;

    let pass = document.createElement("input");
    pass.type = "password";
    pass.id = "password";
    user.placeholder = "Ingresa tu contraseña";
    user.required;

    let btn = document.createElement("button");
    btn.type = "submit";
    btn.innerText = "Enviar";
    btn.className = "btn btn-primary";

    mensaje.innerHTML = "";

    // formulario.appendChild(titulo);
    formulario.appendChild(user);
    formulario.appendChild(pass);
    formulario.appendChild(btn);

    boton.remove();

    localStorage.clear();
  };

  document.body.appendChild(mensaje);
  document.body.appendChild(boton);
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let usuarioIngresado = e.target.children[0].value;
  let claveIngresada = e.target.children[1].value;

  if (usuarioIngresado === usuario && claveIngresada === clave) {
    Swal.fire({
      icon: "success",
      title: "Felicidades",
      text: "Inicio exitoso",
    });
    // alert("Inicio exitoso");
    localStorage.setItem("sesion", JSON.stringify(true));

    const usuarioAGuardar = {
      nombre: usuarioIngresado,
      clave: claveIngresada,
    };

    localStorage.setItem("usuario", JSON.stringify(usuarioAGuardar));
    sesionIniciada(usuarioIngresado);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Credenciales inválidas",
    });
    // alert("Credenciales inválidas");
  }
});

// if (sesion) {
//   sesionIniciada(usuarioGuardado.nombre);
// }

sesion
  ? sesionIniciada(usuarioGuardado.nombre)
  : sesionIniciada(usuarioGuardado.nombre);
