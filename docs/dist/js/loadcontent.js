
$(document).ready(function()
{
    try{
        $.getJSON("json/table.json",function(json)
        {
            let infotable = json.table;
            for(i in infotable)
            {
                loadTable(infotable[i]);
            }
        });
        $.getJSON("json/pages.json", function(json)
        {
            let pages = json.pages;
            for(i in pages)
            {
                loadPages(pages[i]);
            }
        });
        $.getJSON("json/data.json",function(json)
        {
            let text = json.text;
            for(j in text)
            {
                writeText(text[j]);
            }
        });
    }catch(error){
        console.log("function probelm")
    }
});