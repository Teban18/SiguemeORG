/**
 * @function loadPages carga las diferentes vistas sin recargar la página
 * @function click captura el evento cada vez que la persona hace click sobre @param data.trigger
 * @param {*} data es la información que llega desde pages.json 
 * @function preventDefault evita que la página se recargue, lo cual convierte la carga en asíncrona
 */
function loadPages(data){
    $("#"+data.trigger).on("click",function(event){
        event.preventDefault();
        try{
        $("#"+data.container).load(data.linkref)
        }catch(error){
            console.log("element no showed yet")
        }
    });
}