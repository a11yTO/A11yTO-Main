var noSleep = new NoSleep();



function ShowCART(){
		        event = $('#username').val();
				ff = $('#fontFamily').val();
				fs = $('#fontSize').val();
				bgc = $('#backColor').val();
				fgc = $('#foreColor').val();

				$.mobile.changePage("#second");
				$('#CART').attr('src','http://www.streamtext.net/player?event='+event+'&ff='+ff+'&fs='+fs+'&bgc='+bgc+'&fgc='+fgc+'&header=false&footer=false&chat=false&controls=false&scroll=false');
				$("#CART").trigger("create");
                noSleep.enable(); // keep the screen on!
				console.log("Wake Lock is enabled");
}



function CheckForm() {
	        if($('#username').val().length > 0){
				ShowCART();
			} else {
                alert('Please fill all necessary fields');
            }
}


$(document).ready(function () {
    $("*").css('font-size', '30px');

   $("check-user").submit(function(e){
        console.log("submit");
		e.preventDefault();
		return false;
    });


  $(document).on('click', '#submit', function() { // catch the form's submit event
			CheckForm();
			return false; // cancel original event to prevent form submitting
	});

	
});





$(document).on('pagecontainershow', function(e, ui) {
    var pageId = $('body').pagecontainer('getActivePage').prop('id');
	if (pageId == 'login') {
				$("#username").focus();
				$('#CART').attr('src','');
				$("#CART").trigger("create");

	}
		
});