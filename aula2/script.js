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
        $("div[id^=resultado1]").empty();
    });

    $("#enviar2").on("click", function (event) {
        $.getJSON("./data2.json", function (data) {
            $("#resultado2").append("Name: " + data.name + ', ')
                .append("Idade: " + data.age + ' anos')
                .append('<br>')
                .append("Friends:<br>");

            for (var i in data.friends) {
                $("#resultado2").append((parseInt(i) + 1))
                    .append(' => ')
                    .append(data.friends[i].firstName)
                    .append(' ')
                    .append(data.friends[i].lastName)
                    .append('<br>');
            }
            $("#resultado2").append("Count: " + data.friends.length)
                .append('<br>');
        });
    });

    $("#limpar2").on("click", function (event) {
        $("div[id^=resultado2]").empty();
    });

    $("#enviar3").on("click", function (event) {
        $.getJSON("./data3.json", function (data) {
            for (var i in data.results) {
                $("#resultado3").append(data.results[i].gender);
                $("#resultado3").append('<br>');
                $("#resultado3").append(data.results[i].name.title);
                $("#resultado3").append('<br>');
                $("#resultado3").append(data.results[i].email);
                $("#resultado3").append('<br>');
                $("#resultado3").append(data.results[i].picture.large);
                $("#resultado3").append('<br>');
            }
            $("#resultado3").append(data.info.seed);

        });
    });

    $("#limpar3").on("click", function (event) {
        $("div[id^=resultado3]").empty();
    });
});