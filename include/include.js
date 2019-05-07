function getCurentFileName(){
    var pagePathName= window.location.pathname;
    return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
}

$(document).ready(function() {
    var filename = getCurentFileName();
    $('#navigation').load('include/navigation.html', function(){
        $('#data-side').attr('href', 'data-science/' + filename);
        $('a[href="' + filename + '"]').parent().addClass('active')
    });
});