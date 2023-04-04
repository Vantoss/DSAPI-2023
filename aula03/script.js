$(document).ready(function(){ //Quando o documento for lido, executa o código
    var valor01 = $("#txtValor1"); //val() = valor
    var valor02 = $("#txtValor2");
    $("#btnSomar").click(function(){ //Quando o botão for clicado, executa a função
        var result = parseFloat(valor01.val()) + parseFloat(valor02.val()); //parseFloat = transforma o valor em float
        $("#resultado").html( "<b>" + result + "</b>"); //hmtl() = modificar o documento html
    });
    $("#btnSubtrair").click(function(){
        var result = parseFloat(valor01.val()) - parseFloat(valor02.val());
        $("#resultado").html( "<b>" + result + "</b>");
        if(result < 0){
            $("resultado").css("color", "red");
        }else{
            $("resultado").css("color", "blue");
        }
    });
    $("#btnMultiplicar").click(function(){
        var result = parseFloat(valor01.val()) * parseFloat(valor02.val());
        $("#resultado").html( "<b>" + result + "</b>");
    });
    $("#btnDividir").click(function(){
        var result = parseFloat(valor01.val()) / parseFloat(valor02.val());
        $("#resultado").html( "<b>" + result + "</b>");
    });
});