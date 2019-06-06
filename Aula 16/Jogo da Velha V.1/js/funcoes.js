function verifica(){
    if(((a1 == a2 && a2 == a3) && a1 == "jogador1") || ((a1 == b1 && b1 == c1) && a1 == "jogador1") || ((a1 == b2 && b2 == c3) && a1 == "jogador1") || ((a3 == b2 && b2 == c1) && a3 == "jogador1") || ((a2 == b2 && b2 == c2) && a2 == "jogador1") || ((a3 == b3 && b3 == c3) && a3 == "jogador1") || ((b1 == b2 && b2 == b3) && b1 == "jogador1") || ((c1 == c2 && c2 == c3) && c1 == "jogador1")) {
        $('#mostra_vencedor').html($('#nm_p-1').val());
        $("#vencedor").modal();
    }
    if(((a1 == a2 && a2 == a3) && a1 == "jogador2") || ((a1 == b1 && b1 == c1) && a1 == "jogador2") || ((a1 == b2 && b2 == c3) && a1 == "jogador2") || ((a3 == b2 && b2 == c1) && a3 == "jogador2") || ((a2 == b2 && b2 == c2) && a2 == "jogador2") || ((a3 == b3 && b3 == c3) && a3 == "jogador2") || ((b1 == b2 && b2 == b3) && b1 == "jogador2") || ((c1 == c2 && c2 == c3) && c1 == "jogador2")) {
        $('#mostra_vencedor').html($('#nm_p-2').val());
        $('#vencedor').modal();
    }
    if((!(((a1 == a2 && a2 == a3) && a1 == "jogador1") || ((a1 == b1 && b1 == c1) && a1 == "jogador1") || ((a1 == b2 && b2 == c3) && a1 == "jogador1") || ((a3 == b2 && b2 == c1) && a3 == "jogador1") || ((a2 == b2 && b2 == c2) && a2 == "jogador1") || ((a3 == b3 && b3 == c3) && a3 == "jogador1") || ((b1 == b2 && b2 == b3) && b1 == "jogador1") || ((c1 == c2 && c2 == c3) && c1 == "jogador1")))&& (!(((a1 == a2 && a2 == a3) && a1 == "jogador2") || ((a1 == b1 && b1 == c1) && a1 == "jogador2") || ((a1 == b2 && b2 == c3) && a1 == "jogador2") || ((a3 == b2 && b2 == c1) && a3 == "jogador2") || ((a2 == b2 && b2 == c2) && a2 == "jogador2") || ((a3 == b3 && b3 == c3) && a3 == "jogador2") || ((b1 == b2 && b2 == b3) && b1 == "jogador2") || ((c1 == c2 && c2 == c3) && c1 == "jogador2"))) && ((a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3) != null)) {
        $("#velha").modal();
    };
}

function sair(){
    $('#inicio').show();
    $('#jogo').hide();
    $('.grade').removeClass('X');
    $('.grade').removeClass('O');
    vez = null;
    a1 = null;
    a2 = null;
    a3 = null;
    b1 = null;
    b2 = null;
    b3 = null;
    c1 = null;
    c2 = null;
    c3 = null;
}