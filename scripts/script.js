function generate(main,rows,columns) {
   $(".main tr").remove(); // removes previous grid
   $(".main td").css("background-color","white"); //resets everything to white
   for (var i=0;i<rows;i++){ //generate rows
        main.append("<tr></tr>");
    }
   for (var i=0;i<columns;i++){ //generate columns
        $(".main tr").append("<td></td>");
    }
   $("td").mouseenter(function() { //color the grid
        $(this).css("background-color","black");
    });
}

function getData(main,load) {
    if (load) { //if load is true then it will create an 16x16 grid
        generate(main,16,16);
    }
    else { //else the user will have to specify the grid dimensions
        var rows = prompt("Enter rows");
        var columns = prompt("Enter columns");
        generate(main,rows,columns); //generate grid
    }
}

$(document).ready(function() {
    var main = $(".main"); //refers to the table
    var newgrid = $("#newgrid");
    getData(main,true); //generate a 16x16 grid

    $("#newgrid").click(function() {
        getData(main,false); //have user generate their own grid on button click
    });
});

