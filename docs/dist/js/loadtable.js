function loadTable(data) {
    try{
        if (data.name != undefined) {
            document.getElementById("table").innerHTML = document.getElementById("table").innerHTML += 
            "<tr>" +
                "<td>" + data.name + "</td>" +
                "<td>" + data.description + "</td>" +
                "<td>" + data.advantage + "</td>" +
                "<td>" + data.disadvantage + "</td>" +
                "<td>" + data.year + "</td>" +
                "<td>" + data.visit + "</td>" +
                "<td>" + data.location + "</td>" +
            "<tr>"
        }
    }catch(error){
        console.log("table element no printed yet")
    }
}