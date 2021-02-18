
var $anniversaire = $('.anniversaire');
var $allText = $('.anniversaire p');
$allText.hide();

var $firstItem = $('.special-day');

$firstItem.on('click', function(e){
    e.preventDefault();
    var $span = $('.special-day span');
    $span.remove();
    $next = $firstItem.next();
    $next.show();
});

var $item =$('.annif-text');
$item.on('click',function(e){
    e.preventDefault();
    $next = $item.after();
    $next.show();
});









