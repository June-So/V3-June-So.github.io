$(document).ready(function(){
/* ------- Fonction --------- */

/**
 * Construit un bloc progress-bar pour chaque compétence de langage
 */
 function skillProgress(name,value,size=100.0){
    $('.skill-'+name).circleProgress({
      value: value/100,
      startAngle: -Math.PI / 4 * 2,
      reverse: true,
      size: size,
      fill: {
        // color:'#6cf' // or color: '#3aeabb', or image: 'http://i.imgur.com/pT0i89v.png'
        color:'#6cf',
         // or color: '#3aeabb', or image: 'http://i.imgur.com/pT0i89v.png'
      },
      emptyFill: '#1d1326',
    });
  }

  /**           <div class="bloc-list">
                  <h3>Envrionnement</h3>
                  <div class="row li-skill">
                    <span class="col-6"><i class="fab fa-linux"></i> Linux</span>
                    <i class="far fa-circle c-lblue"></i><i class="far fa-circle c-lblue"></i><i class="far fa-circle c-lblue"></i><i class="far fa-circle"></i><i class="far fa-circle"></i>
                  </div>
                  <div class="row li-skill">
                    <span class="col-6"><i class="devicon-windows8-original"></i> Window</span>
                    <i class="far fa-circle c-lblue"></i><i class="far fa-circle c-lblue"></i><i class="far fa-circle"></i><i class="far fa-circle"></i><i class="far fa-circle"></i>
                  </div>
                  <div class="row li-skill">
                    <span class="col-6"><i class="fas fa-terminal"></i> Shell</span>
                    <i class="far fa-circle c-lblue"></i><i class="far fa-circle c-lblue"></i><i class="far fa-circle"></i><i class="far fa-circle"></i><i class="far fa-circle"></i>
                  </div>
                </div>

  **/
 function score_circle(score){
         score_pills = '<i class="far fa-circle c-lblue"></i>'.repeat(score) + '<i class="far fa-circle"></i>'.repeat(5-score);
          // score_html = '<span class="float-right">' + score_pills + '</span>';
        return score_pills;
 }

 function html_secondary_skill(title, icon, score){
        label_html = '<i class="' + icon + '"></i> ' + title;
        row_html = '<li>'+ label_html + '<span class="float-right">' + score_circle(score) + '</span></li>';
        return row_html;
 }

 function create_block(parent, title, id){
      list_html = '<ul id="' + id + '" class="list-unstyled"></ul>';
      html = '<div class="bloc-list px-3"><h3 class="text-center">' + title +'</h3>'+ list_html + '</div>';
      parent.append(html);
 }

 function create_secondary_skill(parent_id, title, icon, score){
      html = html_secondary_skill(title, icon, score);
      $(parent_id).append(html);
 }



  skillProgress('HTML',80);
  skillProgress('CSS',60);
  skillProgress('JS',30);
  skillProgress('PHP',70);
  skillProgress('MYSQL',80);
  skillProgress('PYTHON',10);

  skillProgress('FRONTEND',35,125.0);
  skillProgress('BACKEND',65,175.0);
  skillProgress('DATABASE',55,125.0);


   /* ----------------------------- */

   first_column = $('#first-column-content');
   second_column = $('#second-column-content');

   create_block(first_column,'Environnement','environment');
   create_secondary_skill('#environment', 'Linux', 'fab fa-linux', 3);
   create_secondary_skill('#environment', 'Window', 'devicon-windows8-original', 2);
   create_secondary_skill('#environment', 'Shell', 'fas fa-terminal', 3);

   create_block(first_column,'Gestion de projet','project');
   create_secondary_skill('#project', 'Apache', 'devicon-apache-plain-wordmark', 3);
   create_secondary_skill('#project', 'Filezilla', 'fas fa-globe', 2);
   create_secondary_skill('#project', 'Git', 'devicon-git-plain', 3);
   create_secondary_skill('#project', 'Bower', 'devicon-bower-plain', 1);
   create_secondary_skill('#project', 'Sass', 'devicon-sass-original', 2);
   create_secondary_skill('#project', 'Workbench', 'fas fa-sitemap', 2);
   create_secondary_skill('#project', 'Trello', 'devicon-trello-plain', 3);

   create_block(second_column,'Editeur et IDE','editor');
   create_secondary_skill('#editor', 'PhpStorm', 'devicon-phpstorm-plain', 3);
   create_secondary_skill('#editor', 'Atom', 'devicon-atom-plain', 3);
   create_secondary_skill('#editor', 'Netbean', 'fas fa-file-code', 2);
   create_secondary_skill('#editor', 'Eclipse', 'fas fa-file-code', 2);

   create_block(second_column,'Bureautique','software');
   create_secondary_skill('#software', 'Microsoft Excel', 'fas fa-file-excel', 2);
   create_secondary_skill('#software', 'InDesign', 'fas fa-file-pdf', 3);
   create_secondary_skill('#software', 'Microsoft Word', 'fas fa-file-word', 3);
   create_secondary_skill('#software', 'Photoshop', 'devicon-photoshop-plain', 2);
   create_secondary_skill('#software', 'Gimp', 'devicon-gimp-plain', 2);
});