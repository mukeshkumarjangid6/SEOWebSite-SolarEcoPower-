$(document).ready(function ()
{
    $(".home").click(function ()
    {
        $(localStorage['visited']).removeClass("active");
        localStorage['visited'] = ".home";
    });


    $(".about").click(function ()
    {
        $(localStorage['visited']).removeClass("active");
        localStorage['visited'] = ".about";
    });

    $(".contact").click(function ()
    {
        $(localStorage['visited']).removeClass("active");
        localStorage['visited'] = ".contact";
    });

    $(".product").click(function ()
    {
        $(localStorage['visited']).removeClass("active");
        localStorage['visited'] = ".product";
    });


    $(".dropdown").click(function ()
    {
        $(localStorage['visited']).removeClass("active");
        localStorage['visited'] = ".dropdown";
    });

    var v = localStorage['visited'];
    $(v).addClass("active");


});


