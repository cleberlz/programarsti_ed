$(document).ready(function () {
    $("#enviar").on("click", function (event) {
        $.getJSON("./data.json", function (data) {
            $("#resultado1").append(data.name + ', ');
            $("#resultado1").append(data.age + ' anos');
            $("#resultado1").append('<br>');

            for (var i in data.cars) {
                $("#resultado1").append(data.cars[i] + '<br>');
            }
        });
    });

    $("#limpar").on("click", function (event) {
        $("div[id^=resultado]").empty();
    });
});