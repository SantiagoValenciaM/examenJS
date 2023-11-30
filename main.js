// Mostrar en pantalla una lista desordenada de eventos que esten guardados en un array
// Abajo de la lista, poner 2 botones, uno verde y otro rojo
// El boton verde debe decir crear y el boton rojo eliminar

// Array para almacenar los datos ingresados
let dataArray = [];

// Función para agregar un elemento al array y actualizar la lista
function agregarEvento() {
  let inputText = document.getElementById("inputText");
  let item = document.createElement("li");

  if (inputText.value.trim() !== "") {
    dataArray.push(inputText.value);
    item.appendChild(document.createTextNode(inputText.value));
    document.getElementById("ulArray").appendChild(item);
    inputText.value = ""; // Limpiar el campo de entrada después de agregar
  }
}

// Función para eliminar el último elemento del array y actualizar la lista
function eliminarEvento() {
  if (dataArray.length > 0) {
    dataArray.pop(); // Eliminar el último elemento del array
    var list = document.getElementById("ulArray");
    list.removeChild(list.lastElementChild); // Eliminar el último elemento de la lista
  }
}