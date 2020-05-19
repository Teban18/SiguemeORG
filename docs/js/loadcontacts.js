 /**
  * Funcion que valida el click sobre x persona para mostrar sus respectivos links
  * Por defecto está en esteban que es la primera foto del slider 
 */
 function validatePerson(contact)
 {  
    document.getElementById(contact.nameid).onclick=function()
    {
        document.getElementById("inicon").href = contact.link.linkedin;
        document.getElementById("ghicon").href = contact.link.github;
    }
 }

 /**
  * Función para que al hacer click sobre la foto no se recargue la página
 */
  document.getElementById("person-slider").onclick = function (){

 }

