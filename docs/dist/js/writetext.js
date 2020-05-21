function writeText(data)
{
        try
        {
        document.getElementById(data.elementid).innerHTML=data.text;       
        }catch(error)
        {
                console.log("element no printed yet")
        }       
}