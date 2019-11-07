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

    $(".del-btn").click(function(event){
        let idVal = $(this).val();

        $.ajax({
            method: "DELETE",
            url: `/api/burgers/${idVal}`
        }).then(function(res){
            document.location.href = "/";
        });
    });

    $("#burger_name").keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
           $("#submit-btn").click();
        }
    });

    $("form").on("submit", function (event) {
        event.preventDefault();
        $.ajax({
            method: "POST",
            url: "/api/burgers",
            data:
            {
                burger_name: $("#burger_name").val().trim(),
                devoured: 0
            },
            error: function(xhr, textStatus, errorThrown){
                // console.log(xhr, textStatus, errorThrown);
                $("#burger_name").addClass("is-invalid");
            }
        }).then(function (data) {
            document.location.href="/";
        });
    });
});