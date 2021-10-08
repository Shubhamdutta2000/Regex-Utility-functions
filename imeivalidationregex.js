// Validate IMEI numbers.
$('#RequestProofOfPurchaseFloorStockForm').find('.imei').each(function() {
    var pattern = /^(?!\b(.)\1+\b)\d{15}$/gi;
    if(pattern.test($(this).val()) == false) {
        validate = false;
        $(this).addClass('err');
        $(this).parent().find('label').addClass('err');
    }
  });