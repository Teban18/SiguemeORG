/**
 * Función para cargar los valores por defecto de links de contacto 
*/

/**
 * Funcion que se invoca una vez cargado el documento. 
 * carga el index con los datos de data.json y los links con person.json
*/
$(document).ready(function ()
{
  $.getJSON("json/defaultvalues.json", function( json )
  {        
    let defaultvalues = json.default;       
    for(k in defaultvalues)
    {                    
      defaultValues(defaultvalues[k]);   
    }          
  });
  $.getJSON("json/contact.json", function( json )
  {
    let contact = json.linkcontact;
    for(j in contact)
    {
      validatePerson(contact[j]);
    }
  });
  $.getJSON("json/data.json", function( json )
  {        
    let data = json.textdata;        
    for(i in data)
    {                    
      writeData(data[i]);   
    }          
  });
  }); 

 