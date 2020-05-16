 

//Array con las imagenes que se iran mostrando en la web
    
var person = 
{
  'teban':{'name':'teban'},
  'marce':{'name':'marce'}
};
   
  //Funcion que valida accion onmouseover sobre nombres

  function validation(person){
     
  document.getElementById(person.teban.name).onclick=function()
  {
    setContactLink(person.teban.name);
  }
 
  document.getElementById(person.marce.name).onclick=function()
  {
    setContactLink(person.marce.name);
  }
  }

  validation(person);

   onload=function(){
     setContactLink(person.teban.name);
   }
