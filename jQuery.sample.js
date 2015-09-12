;(function($) {
    $.fn.hoge = function() {
        $('.hide-btn').click(function(){
            $('.square').fadeOut(1000);
            $('.square').css('color', 'red');
        });
    }
})(jQuery);