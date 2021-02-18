
/*selectionner tous les paragraphe */
var $allText = $('.anniversaire p');
$allText.hide(); /*masquer les paragraphes */

/*recuperer le premier element */
var $firstItem = $('.special-day');

$firstItem.on('click', function(e){
    e.preventDefault();
    var $span = $('.special-day span');
    $span.remove(); 
    $allText.first().show();
});

/*identifier les paragraphes*/
var $first  = $('.annif-text:eq(0)');
var $second = $('.annif-text:eq(1)');
var $last   = $('.annif-text:eq(2)');

/* les evenements */
$first.on('click',function(e){
    e.preventDefault();
    $second.show();
});

$second.on('click',function(e){
    e.preventDefault();
    $last.show();
});

$last.on('click', function(e){
    $allText.text("Happy birthday !") ;
    var $bg = $('.bg-info');
    $bg.css("background-image", "url('img/bg.jpg')"); 
});






