
    $('input[name="datepicker"]').daterangepicker({
        singleDatePicker: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'),10)
    })

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

$(document).ready(function(){

    $("#phone").mask("+7 (999) 99-99-999");

    $("#address").suggestions({
        token: "5f7a47b94462b92b9c01e7d86c24a2e19b09cf63",
        type: "ADDRESS",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });

    $("#address2").suggestions({
        token: "5f7a47b94462b92b9c01e7d86c24a2e19b09cf63",
        type: "ADDRESS",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });

    $(".close-payment").click(function() {
        $( ".order-payment" ).hide("slow")
        $( ".order" ).css("opacity", "");
    });

    $("#submit-order").click(function() {
        $( ".order" ).css("opacity", "0.5");
        $( ".order-payment" ).show("");
    });
    
    $(".close-order").click(function() {
        $( ".order" ).hide("slow")
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

    $(function(){

        var valueElement = $('#value0');
        function incrementValue(e){
            valueElement.text(Math.max(parseInt(valueElement.text()) + e.data.increment, 0));
            return false;
        }
    
        $('#plus0').bind('click', {increment: 1}, incrementValue);
    
        $('#minus0').bind('click', {increment: -1}, incrementValue);
    
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
});

// WWW

// Замените на свой API-ключ
var token = "5f7a47b94462b92b9c01e7d86c24a2e19b09cf63";
var $city = $("#city");

// удаляет районы города и всё с 65 уровня
function removeNonCity(suggestions) {
  return suggestions.filter(function(suggestion) {
    return suggestion.data.fias_level !== "5" && suggestion.data.fias_level !== "65";
  });
}

function join(arr /*, separator */) {
  var separator = arguments.length > 1 ? arguments[1] : ", ";
  return arr.filter(function(n){return n}).join(separator);
}

function cityToString(address) {
  return join([
      join([address.city_type, address.city], " "),
      join([address.settlement_type, address.settlement], " ")
    ]);
}

// Ограничиваем область поиска от города до населенного пункта
$city.suggestions({
  token: token,
  type: "ADDRESS",
  hint: false,
  count: 20,
  geoLocation: false,
  bounds: "city-settlement",
  onSuggestionsFetch: removeNonCity
});

