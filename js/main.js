$(function() {
    $(".product-item__value_num").filter(function(){
        return $(this).text().trim() != "0";
      }).css('color', 'black');
    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: '- / -'
        }
    });
  
    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD.MM') + ' - ' + picker.endDate.format('DD.MM'));
    });
  
    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  
  });

  $('input[name="delivery-method"]').click(function(){
	var target = $('#courier-' + $(this).val());
 
	$('.place-info__from').not(target).hide(0);
	target.fadeIn(500);
});

$('input[name="swap-to"]').click(function(){
	var target = $('#swap-to-' + $(this).val());
 
	$('.place-info__to').not(target).hide(0);
	target.fadeIn(500);
});

$(function(){

    var valueElement = $('#value1');
    function incrementValue(e){
        valueElement.text(Math.max(parseInt(valueElement.text()) + e.data.increment, 0));
        return false;
    }

    $('#plus1').bind('click', {increment: 1}, incrementValue);

    $('#minus1').bind('click', {increment: -1}, incrementValue);

});

$(function(){

    var valueElement = $('#value0');
    function incrementValue(e){
        valueElement.text(Math.max(parseInt(valueElement.text()) + e.data.increment, 0));
        return false;
    }

    $('#plus0').bind('click', {increment: 1}, incrementValue);

    $('#minus0').bind('click', {increment: -1}, incrementValue);

});

$(function(){

    var valueElement = $('#value2');
    function incrementValue(e){
        valueElement.text(Math.max(parseInt(valueElement.text()) + e.data.increment, 0));
        return false;
    }

    $('#plus2').bind('click', {increment: 1}, incrementValue);

    $('#minus2').bind('click', {increment: -1}, incrementValue);

});

$(document).ready(function() {
    $("#order").validate({ 
        submitHandler: function(form) {
            $("#submit-order").click(function() {
                $( ".order-payment" ).css("display","block");
            });
        }
    });
})

$("#submit-order").click(function() {
    $( ".order" ).css("opacity", "0.5");
    $( ".order-payment" ).show("");
});