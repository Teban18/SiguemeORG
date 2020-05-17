 //Funcion que valida accion onmouseover sobre nombres

 function validation(person)
 {    
 document.getElementById(person.teban.name).onclick=function()
 {
   setContactLink(person.teban.name);
 }

 document.getElementById(person.marce.name).onclick=function()
 {
   setContactLink(person.marce.name);
 }
 }