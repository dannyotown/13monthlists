

function openMenu(){
        $('.collapseBox').animate({height:'400'});
        $('.openButton').css('display','none');
        $('.closeButton').css('display','block');
}
function closeMenu(){
        $('.collapseBox').animate({height:'65'});
        $('.closeButton').css('display','none');
        $('.openButton').css('display','block');
}