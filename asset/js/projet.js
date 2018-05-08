$(document).ready(function(){

/* ----------  Template  ---------- */

  function createProject(){
    $.each(listProjects, function(key,value){
      $('#indexProject').append('<div class="col-md-6 project bloc-text">'+
          '<div class="info-'+key+'">'+
            '<h2>'+value['name']+'</h2>'+
            '<p>'+value['state']+'</p>'+
            '<p>'+value['resume']+'</p>'+
          '</div>'+
          // '<p class="icon-link"><a href="'+value['link']['url']+'"><i class="'+value['link']['icon']+'"></i></a></p>'+
        '</div>');
        createTag(key);
    });
  }

  function createTag(id){
    $.each(listProjects[id]['tag'], function(key,value){
      $('.info-'+id).append('<span class="badge badge-pill">'+value+'</span>');
    })
  }

/* -----------  Controller ---------- */

createProject();

});
