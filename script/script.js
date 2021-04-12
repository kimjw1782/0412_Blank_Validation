$(function(){

    $("button").click(function(){
        var blankChk = $("#blankChk").val();
        if (blankChk.trim() == "") {

            $("#blankChkArea>span").text(" * 공백안됨, 필수!");

            $("#blankChk").val("").focus();
        } else {

            $("#blankChkArea>span").text("");
        }
    });

});
