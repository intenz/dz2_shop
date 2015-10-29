$(document).ready(function($) {
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

    $('.slid_show__link').on('click', function(e){
        e.preventDefault();

        var
            $this = $(this),
            item = $this.closest('.slid_show__item'),
            container = $this.closest('.phone__item'),
            display = container.find('.phone__link'),
            path = item.find('img').attr('src'),
            duration = 300;

        if(!item.hasClass('active')) {
            item.addClass('active').siblings().removeClass('active');

            display.find('img').fadeOut(duration,function(){
                $(this).attr('src', path).fadeIn(duration);
            });
            
        }
    }); // - > end slid_show img


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

    $('.bar__link_ls3').on('click', function(e){
     e.preventDefault();
        $('.bar__link_ls3').addClass('active');
        $('.bar__link_ls2').removeClass('active');
        $('.bar__link_ls1').removeClass('active');
       $('.wrapp_variable').removeClass('vertical');
      
       $('.wrapp_variable').addClass('horizon');
   });

    $('.bar__link_ls2').on('click', function(e){
     e.preventDefault();
     $('.bar__link_ls2').addClass('active');
        $('.bar__link_ls3').removeClass('active');
        $('.bar__link_ls1').removeClass('active');

       $('.wrapp_variable').removeClass('horizon').removeClass('vertical');
    });
    $('.bar__link_ls1').on('click', function(e){
     e.preventDefault();
     $('.bar__link_ls1').addClass('active');
        $('.bar__link_ls2').removeClass('active');
        $('.bar__link_ls3').removeClass('active');

       $('.wrapp_variable').removeClass('horizon');
      

       $('.wrapp_variable').addClass('vertical');
 }); // -> end phone_slider
    $('.accordeon__reset-filter').on('click', function(e){
    e.preventDefault();

    var $this = $(this);
    var accordeonItem = $this.closest('.accordeon__item');
    var input = accordeonItem.find('input');

      input.each(function(){
        $(this).prop('checked', false);
      });
    }); // end acordeon_reset

    $('.bar__select').select2();
}); // - > ready_end

// $('.info_wrapp').columnize();
// $('.info__text').columnize({ width: 20 });
// $('.info__text').columnize({ columns: 1 });