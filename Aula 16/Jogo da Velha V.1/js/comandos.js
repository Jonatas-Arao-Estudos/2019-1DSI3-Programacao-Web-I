var vez = null;
var a1 = null;
var a2 = null;
var a3 = null;
var b1 = null;
var b2 = null;
var b3 = null;
var c1 = null;
var c2 = null;
var c3 = null;
$(document).ready(function(){
    $('#jogo').hide();
    $('#nm_p-1').val("Player 1");
    $('#nm_p-2').val("Player 2");            
});
$(document).on('click','#jogar',function(){
   $('#inicio').hide();
   $('#jogo').show();
   $('#mostrar_nm_p-1').html($('#nm_p-1').val());
   $('#mostrar_nm_p-2').html($('#nm_p-2').val());
   vez = "jogador1";
});
$(document).on('click','.grade',function(){
    if(vez == "jogador1"){
        if ((a1 == null)&&($(this).attr('id')=="a1")){
            a1 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        }
        else if ((a2 == null)&&($(this).attr('id')=="a2")){
            a2 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        }
        else if ((a3 == null)&&($(this).attr('id')=="a3")){
            a3 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        }
        else if ((b1 == null)&&($(this).attr('id')=="b1")){
            b1 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        }
        else if ((b2 == null)&&($(this).attr('id')=="b2")){
            b2 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        }
        else if ((b3 == null)&&($(this).attr('id')=="b3")){
            b3 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        }
        else if ((c1 == null)&&($(this).attr('id')=="c1")){
            c1 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        }
        else if ((c2 == null)&&($(this).attr('id')=="c2")){
            c2 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        }
        else if ((c3 == null)&&($(this).attr('id')=="c3")){
            c3 = vez;
            $(this).toggleClass($("#icone_p-1 option:selected").val());
        }
        vez = "jogador2";
    }
    else{
        if ((a1 == null)&&($(this).attr('id')=="a1")){
            a1 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        }
        else if ((a2 == null)&&($(this).attr('id')=="a2")){
            a2 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        }
        else if ((a3 == null)&&($(this).attr('id')=="a3")){
            a3 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        }
        else if ((b1 == null)&&($(this).attr('id')=="b1")){
            b1 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        }
        else if ((b2 == null)&&($(this).attr('id')=="b2")){
            b2 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        }
        else if ((b3 == null)&&($(this).attr('id')=="b3")){
            b3 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        }
        else if ((c1 == null)&&($(this).attr('id')=="c1")){
            c1 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        }
        else if ((c2 == null)&&($(this).attr('id')=="c2")){
            c2 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        }
        else if ((c3 == null)&&($(this).attr('id')=="c3")){
            c3 = vez;
            $(this).toggleClass($("#icone_p-2 option:selected").val());
        }
        vez = "jogador1";                        
    }
    verifica();     
});
$(document).on('click','#voltar',function(){
    sair();
});
$(document).on('click','#encerrar_1',function(){
    sair();
})
$(document).on('click','#encerrar_2',function(){
    sair();
})        