(function($) {
'use strict';

// GAME1 START

$(document).on('click', '.game1 .cell:not(.checked)', function(){
    var turn = $(this).parent().attr('data-turn');

    $(this).addClass('checked');
    
    console.log(turn)

    if ( turn == 1 ) {
        $(this).addClass('t1');
        $(this).parent().attr('data-turn', 2);
    } else {
        $(this).addClass('t2');
        $(this).parent().attr('data-turn', 1);
    }
});

// GAME1 END

})(jQuery)