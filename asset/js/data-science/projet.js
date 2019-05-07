$(document).ready(function(){

/* ----------  Template  ---------- */

  function createProject(){
    $.each(listProjects, function(key,value){
        col_info = '<div class="col-3"><h2>'+ value['name'] +'</h2></div>';
        col_resume = '<div class="col-9" id="info-'+ key +'"><p>'+ value['resume'] +'</p></div>';
        html = '<div class="row my-2 py-3 border">' + col_info + col_resume + '</div>';
        $('#indexProject').append(html);
        createTag(key);
    });
  }

  function createTag(id){
    $.each(listProjects[id]['tag'], function(key,value){
      $('#info-'+id).append('<span class="badge badge-pill">'+value+'</span>');
    })
  }

  /* -----------  Controller ---------- */

  createProject();

});
