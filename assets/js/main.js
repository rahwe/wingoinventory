  
$(document).ready(function(){
    // Select search
    $('select').selectpicker();

    // Datatable
    $('#inventoryNone').DataTable({
        "dom": '<"top"i>rt<"bottom"lp><"clear">',
      });
    $('#inventoryOne').DataTable({
        "dom": '<"top"i>rt<"bottom"lp><"clear">',
      });
    $('#inventoryTwo').DataTable({
        "dom": '<"top"i>rt<"bottom"lp><"clear">',
    });

    $('#inventoryThree').DataTable({
        "dom": '<"top"i>rt<"bottom"lp><"clear">',
    });

    $('#inventoryFour').DataTable({
        "dom": '<"top"i>rt<"bottom"lp><"clear">',
    });

    $('#inventoryFive').DataTable({
        "dom": '<"top"i>rt<"bottom"lp><"clear">',
    });

    $('#inventorySix').DataTable({
        "dom": '<"top"i>rt<"bottom"lp><"clear">',
    });

    $('#example').DataTable({
        "dom": '<"top"i>rt<"bottom"lpB><"clear">',

        buttons: [
            'csv', 'print',
        ]
    });

    // show agent stock by selection
    $("#agentID").on('change', function(){
        $(".data").hide();
        $("#" + $(this).val()).fadeIn(500)
        //console.log($("#" + $(this).val()))
    }).change();



});




