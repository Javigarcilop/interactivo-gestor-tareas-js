document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.getElementById("tituloPrincipal");
  titulo.textContent = "Bienvenido al gestor interactivo de tareas";

  document.getElementById("btnActualizarNombre").addEventListener("click", function () {
      const valor = document.getElementById("inputNombre").value;
      document.getElementById("mensajeBienvenida").textContent =
        "Bienvenido a nuestro gestor interactivo de tareas " + valor;
    });

  const div = document.getElementById("cuadroInfo1");
  div.addEventListener("mouseover", function () {
    div.style.color = "red";
  });
  div.addEventListener("mouseout", function () {
    div.style.color = "blue";
  });

  const div2 = document.getElementById("cuadroInfo2");
  div2.addEventListener("dblclick", function () {
    div2.style.display = "none";
  });

  const img = document.getElementById("imagenGaleria");
  img.addEventListener("click", function () {
    img.style.width = "100px";
    img.style.height = "300px";
  });

  const botonOcultar = document.getElementById("btnOcultarTareas")
  const lista = document.getElementById("listaTareas")
    botonOcultar.addEventListener("click", function () {
        lista.style.display = "none";
    });

    const botonAlternar = document.getElementById("btnAlternarTema")
    const estiloPagina = document.getElementById("stylePage")
       botonAlternar.addEventListener("click", function () {
         estiloPagina.style.backgroundColor = "white";
      });

      
});
