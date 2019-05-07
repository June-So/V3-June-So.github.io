/*html = "<div id="skill-DATAMINING">
        <h2 class="font-weight-light>Récupération de données</h2>
        <div class="skill-HTML">
          <i class="icon devicon-html5-plain"></i>
          <i class="far fa-circle c-lblue"></i>
          <i class="far fa-circle c-lblue"></i>
        </div>
        <ul>
          <li>Beautiful Soup</li>
          <li>Selenium</li>
          <li>Utilisation API</li>
        </ul>
      </div>"

     <div class="col">
          <h2>Environnement</h2>
          <ul>
              <li>Linux</li>
              <li>Window</li>
          </ul>
      </div>
*/

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

function add_category(title,slug){
    html = '<div class="col-3 p-2 px-2"><div id="skill-'+ slug +'" class="border p-2 h-100" style="border-radius: 2%;"><h2 class="text-center font-weight-light my-2">' + title + '</h2></div></div>';
    $('#primary-skill').append(html);
}

function add_icon(slug, icon_class, score, left=false, top=false){
    html = '<div class="my-4 skill-' + slug + '"><i class="icon ' + icon_class + '"></i></div>';
    $('#skill-'+slug).append(html)
    skillProgress(slug, score);
    if(left){
        $('#skill-'+slug).find('i').css({"left": left, "top": top});
    }
}

function add_skill(slug, skills, ul){
    skill_slug = $('#skill-' + slug);
    skill_slug.append('<ul class="' + ul + ' list-unstyled  px-4"></ul>');
    skill_list = $('#skill-' + slug).find('ul.'+ ul);
    for(var i = 0; i < skills.length; i++){
        if( ul == 'list-skills' ){
            score = skills[i][1];
            score_pills = '<i class="far fa-circle c-lblue"></i>'.repeat(score) + '<i class="far fa-circle"></i>'.repeat(5-score);
            score_html = '<span class="float-right">' + score_pills + '</span>';
        }else{
            score_html = '';
        }
        title = skills[i][0]
        skill_list.append('<li>' + title + score_html + '</li>');
    }
}

function add_software(title,software){
    list_software = '';
    for(var i=0;i<software.length;i++){
        list_software = list_software + '<li>' + software[i] + '</li>';
    }
    html = '<div class="col"><h2 class="text-center font-weight-light" style="font-size: 26px">' + title + '</h2><ul class="list-unstyled px-4 border-left">' + list_software + '</ul></div>';
    $('#project-software').append(html);
}

class_list_skill = 'list-skills';
class_list = 'list';

add_category('Extraction de données','DATAMINING');
add_category('Base de données','DATABASE');
add_category('Analyse de données','ANALYSIS');
add_category('Visualisation de données','DATAVIZ');
add_category('Traitements de données','PROCESS');
add_category('Machine Learning','ML');
add_category('Deep Learning','DL');
add_category('Application','WEB');

add_icon('DATAMINING', 'icon-extract-data', 10, left=29, top=9);
add_icon('DATABASE', 'icon-database', 55, left=28, top=10);
add_icon('ANALYSIS', 'icon-analysis', 30, left=29, top=12);
add_icon('DATAVIZ', 'icon-presentation', 30, left=28, top=14);
add_icon('PROCESS', 'icon-data-process', 20, left=32, top=9);
add_icon('ML', 'icon-thought', 25, left=27, top=9);
add_icon('DL', 'icon-artificial-intelligence', 10, left=27, top=10);
add_icon('WEB', 'icon-web', 62, left=29, top=9);

var datamining_skill = [['Beautiful Soup', 2], ['Selenium', 2], ['Connexion API',3]]
var database_skill = [['sqlite', 2], ['mysql', 2], ['NoSQLServer', 1], ['PostgresSQL', 2]];
var analysis_skill = [['pandas', 2], ['powerBI', 1]];
var dataviz_skill = [['seaborn', 2], ['matplotlib', 3], ['powerBI', 0]];
var ml_skill = [['sklearn', 2], ['Microsoft Azure ML',1]];
var process_skill = [['Spacy',1],['Nltk',1]];
var dl_skill = [['Keras', 2], ['tensorflow', 0]];
var web_skill = [['Django', 1], ['Flask', 3], ['API Rest', 1]];

var database = [['Base de données relationnelle'],['Modélisation de données']];
var analysis = [['Exploration de données'], ['statistiques descriptives'],['diagnostic de la situation et des données disponibles']];
var dataviz = [];
var ml = [['Algorithmes de prediction (Random Forest, Logistic..)'], ['Algorithmes de classification (SVM, KMeans..)']];
var dl = [['Computer Vision'],['Traitement du langage naturel']]
var web = [['Interface base de données'], ['Application Saas'], ['Développement outils permettant le suivi de métriques métier']];

//add_skill('DATAMINING', 'Extraction de données web')
add_skill('DATABASE', database, class_list);
add_skill('ANALYSIS', analysis, class_list);
add_skill('DATAVIZ', dataviz, class_list);
add_skill('ML', ml, class_list);
add_skill('DL', dl, class_list);
add_skill('WEB', web, class_list);

$('#skill-DATAMINING').find('ul').append('<hr/>')
$('#skill-DATABASE').find('ul').append('<hr/>')
$('#skill-ANALYSIS').find('ul').append('<hr/>')
$('#skill-DATAVIZ').find('ul').append('<hr/>')
$('#skill-ML').find('ul').append('<hr/>')
$('#skill-DL').find('ul').append('<hr/>')
$('#skill-WEB').find('ul').append('<hr/>')

add_skill('DATAMINING', datamining_skill, class_list_skill);
add_skill('DATABASE', database_skill, class_list_skill);
add_skill('ANALYSIS', analysis_skill, class_list_skill);
add_skill('DATAVIZ', dataviz_skill, class_list_skill);
add_skill('PROCESS', process_skill, class_list_skill);
add_skill('ML', ml_skill, class_list_skill);
add_skill('DL', dl_skill, class_list_skill);
add_skill('WEB', web_skill, class_list_skill);

environment = ['Window','Linux','Shell'];
editor = ['Pycharm','Atom','Jupyter Notebook'];
production = ['Apache','Heroku','Docker','Git'];
documents = ['Power Point/Google Slides','Tableur Excel','Microsoft/Google Word','Photoshop','In design'];
add_software('Environnement', environment);
add_software('Editeur & IDE', editor);
add_software('Mise en production', production);
add_software('Documents', documents);


