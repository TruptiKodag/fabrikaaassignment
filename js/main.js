$(document).ready(function() {
    $(window).scroll(function() {
        var con = $(this).scrollTop();
        if (con <= 0) {
            $(".search-box").show('blind');
            $(".searching-box").hide('blind');
            $(".logo-img").show();
        } else {
            $(".search-box").hide('blind');
            $(".logo-img").hide();
            $(".searching-box").show('blind');
        }
    });
});
''