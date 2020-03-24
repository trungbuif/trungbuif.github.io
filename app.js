$(function () {
    $('.menu').click(function (e) { 
        e.preventDefault();
        $('.menu').removeClass('active-cot1');
        $(this).addClass('active-cot1');
        var loc = $(this).data('loc');
        $('.khoi').each(function (index, element) {
            // element == this
            if ($(this).hasClass(loc)) {
                $('.khoi').removeClass('active-cot2');
                $(this).addClass('active-cot2');
                $(this).show(300);                
            } else {
                $(this).hide(300);
            }
        });
    });
    $('.filter').click(function (e) { 
        e.preventDefault();
        $('.filter').removeClass('active-filter');
        $(this).addClass('active-filter');
        var filter = $(this).data('filter');
        $('.item').each(function (index, element) {
            // element == this
            if ($(this).hasClass(filter)) {
                $(this).show(400);
            } else {
                $(this).hide(400);
            }
        });
    });
});