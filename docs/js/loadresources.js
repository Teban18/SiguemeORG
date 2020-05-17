
//Array con las imagenes que se iran mostrando en la web
var person = 
{
  "teban":{"name":"teban"},
  "marce":{"name":"marce"}
};   

onload=function(){
  validation(person);
  setContactLink(person.teban.name);
}