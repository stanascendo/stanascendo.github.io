$(document).ready(function() {
    $('#clock').countdown('2017/02/11', function(event) {
        $(this).html(event.strftime('%-D %!D:giorno,giorni;<br />%-H %!H:ora,ore;<br />%-M %!M:minuto,minuti;<br />%-S %!S:secondo,secondi;<br />'));
    });
});
