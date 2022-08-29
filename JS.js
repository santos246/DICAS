$("#tabs").tabs();

$(".proximo").on("click", function() 
{
    var indice = $('#tabs ul li a[href="#' + $(this).parent().prop("id") + '"]').parent().index();
    
    $("#tabs").tabs("option", "active", (indice + 1));
});