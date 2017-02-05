$('.spinner .btn:first-of-type').on('click', function() {
    var btn = $(this);
    var input = btn.closest('.spinner').find('input');
    var inputVal = (input.val() == '' || input.val() == undefined) ? input.attr('min') : input.val();
    if (input.attr('max') == undefined || parseInt(inputVal) < parseInt(input.attr('max'))) {
        input.val(parseInt(inputVal, 10) + 1);
    } else {
        btn.next("disabled", true);
    }
});
$('.spinner .btn:last-of-type').on('click', function() {
    var btn = $(this);
    var input = btn.closest('.spinner').find('input');
    var inputVal = (input.val() == '' || input.val() == undefined) ? input.attr('min') : input.val();
    if (input.attr('min') == undefined || parseInt(inputVal) > parseInt(input.attr('min'))) {

        input.val(parseInt(inputVal, 10) - 1);
    } else {
        btn.prev("disabled", true);
    }
});