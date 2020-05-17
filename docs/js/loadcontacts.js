
//Funcion que valida la imagen que se está mostrando

function setContactLink(data)
{
    if(data=="teban")
    {
     document.getElementById("inicon").href = "https://www.linkedin.com/in/andr%C3%A9s-esteban-posada-rinc%C3%B3n-94424b1a7/";
     document.getElementById("ghicon").href = "https://github.com/Teban18";
    }
    else
    {
       document.getElementById("inicon").href = "https://www.linkedin.com/in/marcela-bula-torres-416401157/";
       document.getElementById("ghicon").href = "https://github.com/MarcelaBulaT";
    }
}


