$(document).ready(function () {

    $('.brad-circle').ready(function () {
        $('.brad-circle').css({"transform": "rotate3d(0,1,0,180deg)"});
        $('.brad-circle').css({"-moz-transform": "rotate3d(0,1,0,180deg)"});
        $('.brad-circle').css({"-o-transform": "rotate3d(0,1,0,180deg)"});
        $('.brad-circle').css({"-ms-transform": "rotate3d(0,1,0,180deg)"});
        $('.brad-circle').css({"-webkit-transform": "rotate3d(0,1,0,180deg)"});
    });

    $('.header-name').click(function () {
         $.scrollTo('0px', 0, {duration:'slow'} );
    });

    $('.header-anchor').click(function () {
        var dt = this.getAttribute("data-target");
        if (!$(dt).hasClass('in'))
        {
            $(dt).collapse('show');
        }
        else
        {
            var x = $(dt).offset().top;
            $.scrollTo(x-140, 0, {duration:'slow'} );
        }
    });

    $('.collapse').on('hide.bs.collapse', function () {
        $(this).parent().children('.article-box-expand').children('i').removeClass("fa-toggle-on");
        $(this).parent().children('.article-box-expand').children('i').addClass("fa-toggle-off");
    });

    $('.collapse').on('show.bs.collapse', function () {
        $(this).parent().children('.article-box-expand').children('i').removeClass("fa-toggle-off");
        $(this).parent().children('.article-box-expand').children('i').addClass("fa-toggle-on");
    });
    
    $('.collapse').on('shown.bs.collapse', function () {
        var x = $(this).offset().top;
        $.scrollTo(x-140, 0, {duration:'slow'} );
    });
});