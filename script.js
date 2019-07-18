

function openMenu(){
        $('.collapseBox').animate({height:'600'});
        $('.openButton').css('display','none');
        $('.closeButton').css('display','block');
        $( ".collapseFlex" ).fadeIn(1000);
}
function closeMenu(){
        $('.collapseBox').animate({height:'65'});
        $('.closeButton').css('display','none');
        $('.openButton').css('display','block');
        $( ".collapseFlex" ).css('display','none');

}
