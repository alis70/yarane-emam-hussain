/*controls*/
/**START**/


$(document).ready(function()
{
	$("input[type=button]").click(function()
	{		
		{
			if($(this).val() == "+" && parseInt($("#poem *").css("font-size")) < 30)
			{
				//INCREASE FONT-SIZE OF TEXT UNTIL 30
				$("#poem *").css({"font-size":"+=1"});
			}else
			{
				if($(this).val() == "-" && parseInt($("#poem *").css("font-size")) > 8)
				{
					//DECREASE FONT-SIZE OF TEXT UNTIL 8
					$("#poem *").css({"font-size":"-=1"});
				}else
				{
					if($(this).val() == "O")
					{
						//RESET FONT-SIZE
						$("#poem h1").css({"font-size":"22px"});
						$("#poem p, #poem strong, #poem span, #poem li").css({"font-size":"15px"});
						$("#poem h").css({"font-size":"16px"});
					}
				}
			}
		}
	});
});	

/**END**/

/**************/
/**************/


$(document).ready(function() {

  //Must be a smarter way to do this
  //Maybe create an array or object of each page/link
  //and have the events happen to each one

  $("#page-one").css("opacity", 1);

  $('#nav-one').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-one').fadeTo(500, 1);
  });
  $('#nav-2').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-2').fadeTo(500, 1);
  });
  $('#nav-3').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-3').fadeTo(500, 1);
  });
  $('#nav-4').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-4').fadeTo(500, 1);
  });
  $('#nav-5').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-5').fadeTo(500, 1);
  });
  $('#nav-6').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-6').fadeTo(500, 1);
  });
  $('#nav-7').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-7').fadeTo(500, 1);
  });
  $('#nav-8').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-8').fadeTo(500, 1);
  });
  $('#nav-9').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-9').fadeTo(500, 1);
  });
  $('#nav-10').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-10').fadeTo(500, 1);
  });
  $('#nav-11').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-11').fadeTo(500, 1);
  });
  $('#nav-12').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-12').fadeTo(500, 1);
  });
  $('#nav-13').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-13').fadeTo(500, 1);
  });

});


/******************/
   /*highlight*/
/*****************/



$(function() {
    $('#search').bind('keyup change', function(ev) {
        // pull in the new value
        var searchTerm = $(this).val();

        // remove any old highlighted terms
        $('.text').removeHighlight();

        // disable highlighting if empty
        if ( searchTerm ) {
            // highlight the new term
            $('.text').highlight( searchTerm );
        }
    });
});

/*search page*/

$("#inpt_search").on('focus', function() {
		$(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function() {
		if ($(this).val().length == 0)
				$(this).parent('label').removeClass('active');
});