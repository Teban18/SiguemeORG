

/*Funcion que se invoca una vez cargado el documento 
carga el index con los datos de data.json y person.json
*/
$(document).ready(function ()
{
  $.getJSON("json/data.json", function( json )
  {        
    let data = json.textdata;        
    for(i in data)
    {                    
      writeData(data[i]);   
    }          
  });
  $.getJSON("json/person.json", function( json )
  {
    let person = json.person;
    for(j in person)
    {
      validation(person[j]);
    }
  });
  }); 