$(document).ready(function () {
    $.getJSON("./data.json", function (data) {
        alert(data.name);
    });

});