$(document).ready(function() {
    $('#clock').countdown('2016/04/10', function(event) {
        $(this).html(event.strftime('%-D %!D:giorno,giorni;<br />%-H %!H:ora,ore;<br />%-M %!M:minuto,minuti;<br />%-S %!S:secondo,secondi;<br />'));
    });
});
