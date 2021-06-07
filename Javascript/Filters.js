
$(document).ready(function () {
    $("#show_all").click(function () {
        $("#women").show();
        $("#unisex").show();
        $("#kids").show();
        $("#men").show();
        $(".new").show();
        $(".discount").show();
    });
});

$(document).ready(function () {
    $("#show_men").click(function () {
        $("#women").hide();
        $("#unisex").hide();
        $("#kids").hide();
        $(".new").show();
        $(".discount").show();
        $("#men").show();
    });
});
$(document).ready(function () {
    $("#show_women").click(function () {
        $("#men").hide();
        $("#unisex").hide();
        $("#kids").hide();
        $(".new").show();
        $(".discount").show();
        $("#women").show();
    });
});
$(document).ready(function () {
    $("#show_unisex").click(function () {
        $("#women").hide();
        $("#men").hide();
        $("#kids").hide();
        $(".new").show();
        $(".discount").show();
        $("#unisex").show();
    });
});
$(document).ready(function () {
    $("#show_kids").click(function () {
        $("#women").hide();
        $("#unisex").hide();
        $("#men").hide();
        $("#kids").show();
        $(".new").show();
        $(".discount").show();
    });
});

$(document).ready(function () {
    $("#show_discount").click(function () {
        $("#women").show();
        $("#unisex").show();
        $("#kids").show();
        $("#men").show();
        $(".new").show();
        $(".discount").hide();
    });
});

$(document).ready(function () {
    $("#show_new").click(function () {
        $("#women").show();
        $("#unisex").show();
        $("#kids").show();
        $("#men").show();
        $(".discount").show();
        $(".new").hide();
    });
});