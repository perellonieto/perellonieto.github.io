function imgPersonalOver()
{
  if (personal_over == false)
  {
    personal_over = true;
    $('#imgPersonal').animate({
      "opacity": "0"
    }, 1500, function() {
      // Animation complete.
    });
  }
}

function imgPersonalOut()
{
  if (personal_over == true && personal_out == false)
  {
    personal_out = true;
    $('#imgPersonal').animate({
      "opacity": "1"
    }, 850, function() {
      personal_over = false;
      personal_out = false;


      /*if (imgPersId < imgPersMax-1)
       *                    {
       *                        imgPersId = (imgPersId+1);
       *                        actual = imgPersId;
    }
    else
    {
    actual=Math.floor(Math.random()*imgPersMax);
    }*/

      actual=Math.floor(Math.random()*imgPersMax);

      var contenidos = document.getElementsByTagName("div");
      for(var x=0; x<contenidos.length; x++)
      {
	name = contenidos[x].getAttribute("class");
	if (name == 'student')
	{
	  contenidos[x].setAttribute('style', "background: url('"+imgPersList[actual]+"') no-repeat;");
	  return;
	}
      }
    });
  }
}

function pull()
{
  if (pull_over == false)
  {
    pull_over = true;
    $('#me').animate({
      "right": "0px"
    }, 2500, function() {
      // Animation complete.
    });
  }
}

function notPull()
{
  if (pull_over == true && pull_out == false)
  {
    pull_out = true;
    $('#me').animate({
      "right": "-87px"
    }, 2500, function() {
      // Animation complete.
      pull_over = false;
      pull_out = false;
    });
  }
}

function personalBackground()
{
  var contenidos = document.getElementsByTagName("div");
  for(var x=0; x<contenidos.length; x++)
  {
    name = contenidos[x].getAttribute("class");
    if (name == 'student')
    {
      contenidos[x].setAttribute('style', "background: url('"+imgPersList[imgPersId]+"') no-repeat;");
      return;
    }
  }
}

function preload(images) {
  if (document.images) {
    var i = 0;
    var imageObj = new Image();
    for(i=0; i<images.length; i++) {
      //document.write('<img src="' + images[i] + '" />');// Write to page (uncomment to check images)
      imageObj.src=images[i];
    }
  }
}

personal_over = false;
personal_out  = false;
pull_over = false;
pull_out  = false;
imgPersId = 0;
imgPersList = ["./images/valleta_200_shirt_org.png",
"./images/valleta_200_only_me.png",
"./images/valleta_200_me_bw_me_col.png",
"./images/valleta_200_me_dis.png",
"./images/valleta_200_shirt_red.png",
"./images/valleta_200_me_inv.png",
"./images/valleta_200_me_purple.png",
"./images/valleta_200_me_col_me_col.png",
"./images/valleta_200.png",
"./images/valleta_200_me_purple.png",
"./images/valleta_200_em_dis.png",
"./images/valleta_200_empty.png",
"./images/valleta_200_em_col_me_col.png",
"./images/valleta_200_sep.png",
"./images/valleta_200_shirt_green.png",
"./images/valleta_200_em_bw_me_col.png",
"./images/valleta_200_only_red.png",
"./images/valleta_200_metal.png",
"./images/valleta_200_man_updown.png",
"./images/valleta_200_only_bw_pixel.png",
"./images/valleta_200_only_bw_mosaic.png",
"./images/valleta_200_only_bw_lense.png",
"./images/valleta_200_only_bw_motion.png",
"./images/valleta_200_only_bw.png"];
imgPersMax = imgPersList.length;

function updateDate()
{
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var date = new Date(document.lastModified);

  var num = date.getDate();
  var day = dayNames[date.getDay()];
  var month = monthNames[date.getMonth()];
  var year = date.getFullYear();

  var LastUpdated = day + ", " + num + " " + month + " " + year ;

  document.getElementById("date").innerHTML = "This page was last updated on " + LastUpdated;
}

function init() {
  personalBackground();
  preload(imgPersList);
}

window.onload = init;

