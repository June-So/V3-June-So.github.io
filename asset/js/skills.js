$(document).ready(function(){
/* ------- Fonction --------- */

/**
 * Construit un bloc progress-bar pour chaque compétence de langages
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

  skillProgress('HTML',80);
  skillProgress('CSS',60);
  skillProgress('JS',30);
  skillProgress('PHP',70);
  skillProgress('MYSQL',80);
  skillProgress('PYTHON',10);

  skillProgress('FRONTEND',35,125.0);
  skillProgress('BACKEND',65,175.0);
  skillProgress('DATABASE',55,125.0);

});
