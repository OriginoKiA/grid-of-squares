function generate(main,rows,columns) {    //generates the grid
   for (var i=0;i<rows;i++){ //generate rows
        main.append("<tr></tr>");
    }
    for (var i=0;i<columns;i++){ //generate columns
        $("tr").append("<td></td>");
    }
}
function getData(main) {
        rows = $("#rows").val();
        columns = $("#columns").val();
        generate(main,rows,columns); //generate grid
    }

$(document).ready(function() {
    var main = $(".main"); //refers to the table
    var popup = $("#popup");
    
    getData(main);
    
    $(".main td").mouseenter(function(){
        $(this).css("background-color","black");
    });
    popup.dialog({autoOpen: false});
    
    $("#changegrid").click(function(){
        popup.dialog("open");
    });
    
    $("#getdata").click(function() {
        getData(main);
    });
});

