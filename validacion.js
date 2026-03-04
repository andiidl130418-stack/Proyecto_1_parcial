(function () {
  'use strict' //Activa el modo estricto para evitar errores comunes de escritura de código

  //Selecciona todos los formularios que tienen la clase 'needs-validation' de Bootstrap
  const forms = document.querySelectorAll('.needs-validation')

  //Convierte la lista de formularios en un arreglo y los recorre uno por uno
  Array.from(forms).forEach(form => {
    
    //Agrega un "escuchador" para el evento 'submit' (cuando el usuario intenta enviar)
    form.addEventListener('submit', event => {
      
      //Verifica si el formulario NO cumple con las reglas de validación de HTML5
      if (!form.checkValidity()) {
        event.preventDefault()    // Detiene el envío real del formulario
        event.stopPropagation()   // Evita que el evento se propague a otros elementos
      } else {
        //Si todo es válido, detenemos el envío solo para mostrar el mensaje de éxito
        event.preventDefault()
        alert('Se a validado!')
      }
      
      //Agrega la clase de Bootstrap 'was-validated' para mostrar visualmente los errores (en rojo) o aciertos (en verde) en los campos
      form.classList.add('was-validated')
      
    }, false)
  })
})()