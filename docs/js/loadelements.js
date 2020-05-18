/**
 * Función que escribe los elementos en el index.
 * Requiere id del elemento que se quiere escribir y el texto que se va a escribir
 * Datos obtenidos desde data.json
*/
function writeData(data)
{
        document.getElementById(data.elementid).innerHTML=data.text;       
}