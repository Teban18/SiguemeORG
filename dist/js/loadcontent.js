

$(document).ready(function()
{
    $('#homeclick').click(function(event){
        event.preventDefault();
        $('#homecontent').load('./home.html')
    });
});