/* ----------  Template  ---------- */
function html_tags(id){
    html = ''
    $.each(listProjects[id]['tag'], function(key,value){
        html = html + '<span class="badge badge-pill float-right">'+value+'</span>';
    });
    return '<div class="col-12 mb-2">' + html + '</div>';
}


function createProject(){
    $.each(listProjects, function(key,value){
        sub_info = '<p class="mb-1"><small>'+ value['date'] +' - '+ value['state'] +'</small></p><p class="mb-0">' + value['type'] + '</p>'
        col_info = '<div class="col-xs-12 col-sm-5 col-md-3"><h2 class="mb-0">'+ value['name'] +'</h2>'+ sub_info +'</div>';
        tags = html_tags(key);
        col_resume = '<div class="col-xs-12 col-sm-7 col-md-9 row" id="info-'+ key +'">'+ tags+'<p class="pl-3 mb-1">'+ value['resume'] +'</p></div>';

        html = '<div class="row my-2 py-3 border">' + col_info + col_resume + '</div>';
        $('#indexProject').append(html);
    });
}


/* -----------  Controller ---------- */
$(document).ready(function(){
  createProject();
});
