
$(document).ready(function () {

    // ***************************************function on add button****************************************

    $("#btn1").click(function () {
        var a = $("#inp").val();
        console.log(a);
        if (inp.value.length == 0) {
            alert("please enter some text");
        }
        else {
            var x = $("<div class='task'></div>");
            var txt = $("<label></label>").text(a);
            $("#inp").val(" ");
            var edit = $("<button class='btn btn-success edit'></button>")
                .text("edit")
                .click(function () {
                    $(this).next().css("display", "block");
                    var par = $(this).prev().text();
                    $(this).next().val(par);
                    console.log(par);
                });

            // ***************************************function on edit button****************************************

            var inpbox = $("<input class='inp1'></input>").blur(function (e) {
                e.preventDefault();
                var n = $(this).parent("div");
                var o = n.children("label").text($(this).val());
                $(".inp1").hide();
                console.log($(this).val());
            });

            // ***************************************function on complete button****************************************

            var check = $(
                "<input type='checkbox' name='ch' class='check'></input>"
            ).on("change", function () {
                if ($(this).prop("checked") == true) {
                    var a1 = $(this).parent("div");
                    $(".comp").append(a1);
                } else {
                    var a1 = $(this).parent("div");
                    $(".incomp").append(a1);
                }
            });

            // ***************************************function on del button****************************************

            var del = $("<button class='btn btn-success del'></button>")
                .text("delete")
                .click(function () {
                    $(this).parent().remove();
                });

            // ***************************************function on append and prepend element****************************************

            x.prepend(check);
            x.append(txt, edit, inpbox, del);

            $(".incomp").append(x);
           
        }
    });
});