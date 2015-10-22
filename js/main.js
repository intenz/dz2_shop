jQuery(document).ready(function($) {
	$('.accordeon__trigger').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
				item = $this.closest('.accordeon__item'),
				list = $this.closest('accordeon__content'),
				items = list.find('.accordeon__item'),
				content = item.find('.inner__list'),
				otherContent = list.find('.inner__list'),
				duration = 500;

			if(!item.hasClass('active')) {
				items.removeClass('active');
				item.addClass('active');

				otherContent.stop(true, true).slideUp(duration);
				content.stop(true, true).slideDown(duration);
			} else {
				content.stop(true, true).slideUp(duration);
				item.stop(true, true).removeClass('active');
			}
	}); // -> end accordeon
	$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 30000,
      values: [ 100, 13000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ]);
        $( "#amount1" ).val(ui.values[ 1 ]);
      }
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#amount1" ).val($( "#slider-range" ).slider( "values", 1 ));

    $("input#amount").change(function(){
    	var value1=$("input#amount").val();
    	var value2=$("input#amount1").val();

    		if(parseInt(value1) > parseInt(value2)){
    			value1 = value2;
    			$("input#amount").val(value1);
    		}
    		$("#slider-range").slider("values",0,value1);
    });

     $("input#amount1").change(function(){
    	var value1=$("input#amount").val();
    	var value2=$("input#amount1").val();

    		if(parseInt(value1) > parseInt(value2)){
    			value2 = value1;
    			$("input#amount1").val(value2);
    		}
    		$("#slider-range").slider("values",1,value2);

    	jQuery("#amount, #ampunt1").keypress(function(event){
    		var key,keyChar;
    		if (!event) var event = window.event;

    		if (event.keyCode) key = event.keyCode;
    		else if(event.which) key = event.which;

    		if(key==null || key==0 || key==8 || key==13 || key==46 || key==37 || key==39)
    			return true;
    		keyChar=String.fromCharCode(key);

    		if(!/\d/.test(keyChar)) return false;
    		
    	});
    });

  }); // -> end slider UI

}); // - > ready_end

// $('.info_wrapp').columnize();
// $('.info__text').columnize({ width: 20 });
// $('.info__text').columnize({ columns: 1 });