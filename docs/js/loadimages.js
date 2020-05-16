 

//Array con las imagenes que se iran mostrando en la web
    
var images = 
{
  'teban':{'link':'https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-9/p960x960/96220846_130373231953648_8237748583693025280_o.jpg?_nc_cat=101&_nc_sid=dd7718&_nc_eui2=AeHxmY_29KPXRuv7mmYKkQG8tNQVkwMBCI601BWTAwEIjokQcZ_iHmVE6brUR_o1jpetPnQXGFHUlP--ETZcnhS7&_nc_ohc=tXnFiMEc4mgAX8Ty-B6&_nc_ht=scontent.fbog2-1.fna&_nc_tp=6&oh=c87514a6de76d4a86d46fea80f7c83bf&oe=5EE0B2C7','name':'teban'},
  'marce':{'link':'https://pps.whatsapp.net/v/t61.24694-24/95090693_653973981846514_737736060880437560_n.jpg?oe=5EC0E25C&oh=11e8d4ed40242782f3ba75e86be2d40c','name':'marce'}
};
   
   //Funcion que valida accion onmouseover sobre el nombre esteban
  document.getElementById("esteban").onmouseover=function()
  {
    document.getElementById("img").src=images.teban.link;
    setContactLink(images.teban.name);
  }
  //Funcion que valida accion onmouseover sobre el nombre marcela
  document.getElementById("marcela").onmouseover=function()
  {
    document.getElementById("img").src=images.marce.link;
    setContactLink(images.marce.name);
  }
 
   onload=function(){
     document.getElementById("img").src=images.marce.link;
     setContactLink(images.marce.name);
   }