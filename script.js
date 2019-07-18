

function openMenu(){
        $('.collapseBox').animate({height:'800'});
        $('.openButton').css('display','none');
        $('.closeButton').css('display','block');
        $( ".collapseFlex" ).fadeIn(10);
}
function closeMenu(){
        $('.collapseBox').animate({height:'65'});
        $('.closeButton').css('display','none');
        $('.openButton').css('display','block');
        $( ".collapseFlex" ).css('display','none');

}
function weBack(){
    $('.inputSelect').css('display','block');
}