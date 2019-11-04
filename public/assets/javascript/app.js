$(document).ready(function () {
    $(".eat-btn").click(function (event) {
        let buttonVal = $(this).val();
        let data = {
            devoured: true
        };

        $.ajax({
            method: "PUT",
            url: `/api/burgers/${buttonVal}`,
            data: data
        }).then(function (res) {
            document.location.href = "/";
        });
    });

    $(".make-btn").click(function (event) {
        let buttonVal = $(this).val();
        let data = {
            devoured: false
        };

        $.ajax({
            method: "PUT",
            url: `/api/burgers/${buttonVal}`,
            data: data
        }).then(function (res) {
            document.location.href = "/";
        });
    });
});