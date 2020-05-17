 //Funcion que valida accion onmouseover sobre nombres

 function validation(person)
 {    
 document.getElementById(person.name).onclick=function()
 {
  document.getElementById("inicon").href = person.linkedin;
  document.getElementById("ghicon").href = person.github;
 }
 }