(function($) {
'use strict';

    // GAME1 START

    $(document).on('click', '.game1 .table:not(.go) .cell:not(.checked)', function(){
        let $parent = $(this).parent('.table'),
            turn = $parent.attr('data-turn'),
            checkedCount = $(this).siblings('.checked').length + 1;

        $(this).addClass('checked');

        if ( turn == 1 ) {
            changeTurn(2, 't1', $(this), $parent);
        } else {
            changeTurn(1, 't2', $(this), $parent);
        }
        if ( checkedCount == 9 ) {
            checkWin(true);
        } else if ( checkedCount >= 5 ) {
            checkWin(false);
        }
    });

    function checkWin(){
        setTimeout( () => {
            if ( $('.cell1').hasClass('t1') && $('.cell2').hasClass('t1') && $('.cell3').hasClass('t1') ) {
                winClass('win1');
            } else if ( $('.cell3').hasClass('t1') && $('.cell6').hasClass('t1') && $('.cell9').hasClass('t1') ) {
                winClass('win2');
            } else if ( $('.cell1').hasClass('t1') && $('.cell4').hasClass('t1') && $('.cell7').hasClass('t1') ) {
                winClass('win3');
            } else if ( $('.cell7').hasClass('t1') && $('.cell8').hasClass('t1') && $('.cell9').hasClass('t1') ) {
                winClass('win4');
            } else if ( $('.cell1').hasClass('t1') && $('.cell5').hasClass('t1') && $('.cell9').hasClass('t1') ) {
                winClass('win5');
            } else if ( $('.cell3').hasClass('t1') && $('.cell5').hasClass('t1') && $('.cell7').hasClass('t1') ) {
                winClass('win6');
            } else if ( $('.cell1').hasClass('t2') && $('.cell2').hasClass('t2') && $('.cell3').hasClass('t2') ) {
                winClass('win1');
            } else if ( $('.cell3').hasClass('t2') && $('.cell6').hasClass('t2') && $('.cell9').hasClass('t2') ) {
                winClass('win2');
            } else if ( $('.cell1').hasClass('t2') && $('.cell4').hasClass('t2') && $('.cell7').hasClass('t2') ) {
                winClass('win3');
            } else if ( $('.cell7').hasClass('t2') && $('.cell8').hasClass('t2') && $('.cell9').hasClass('t2') ) {
                winClass('win4');
            } else if ( $('.cell1').hasClass('t2') && $('.cell5').hasClass('t2') && $('.cell9').hasClass('t2') ) {
                winClass('win5');
            } else if ( $('.cell3').hasClass('t2') && $('.cell5').hasClass('t2') && $('.cell7').hasClass('t2') ) {
                winClass('win6');
            }
        }, 100);
    };

    function winClass(cls) {
        $('.game1 .table').addClass(cls);
        setTimeout( () => {
            $('.game1 .table').addClass('go');
        }, 50);
    }

    function changeTurn(turn, cls, $block, $blockParent) {
        $block.addClass(cls);
        $blockParent.attr('data-turn', turn);
    }

    // GAME1 END

})(jQuery)