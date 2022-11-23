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
imgPersList = [
"./images/mpn_photo_01_300.jpg",
"./images/mpn_photo_02_300.jpg",
"./images/mpn_photo_03_300.jpg",
"./images/mpn_photo_04_300.jpg",
"./images/mpn_photo_05_300.jpg",
"./images/mpn_photo_06_300.jpg",
"./images/mpn_photo_07_300.jpg",
"./images/mpn_photo_08_300.jpg",
"./images/mpn_photo_09_300.jpg",
];
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

  document.getElementById("date").innerHTML = LastUpdated;
}

function div_quote(quote) {
    var $div_quote = $("<div>", {"class": "quote"}).text('"' + quote.quote + '"');
    return $div_quote
}

function div_author(quote) {
    var link = $('<a/>');
    link.attr('href', 'https://en.wikipedia.org/wiki/' + quote.author);
    link.text(quote.author);
    var $div_author = $("<div>", {"class": "quote_author"}).html(link)

    var author_text = ''
    if (quote.a_years) {
        author_text += ' (' + quote.a_years + ')';
    }
    if (quote.source) {
        if (quote.s_link) {
            author_text += '<a href="';
            author_text += quote.s_link;
            author_text += '">';
            author_text += ', ' + quote.source;
            author_text += '</a>';
        }
        else {
            author_text += ', ' + quote.source;
        }
    }

    $div_author.append(author_text);
    return $div_author
}

function load_random_quote()
{
    var now = new Date();
    var fullDaysSinceEpoch = Math.floor(now/8.64e7);

    /**$div_day_quote = $("<div>").append($("<h2>", {"class": "title"}).text("Random favorite quote"));
    $("#quote").append($div_day_quote);
    **/

    $.getJSON("quotations.json", function(json) {
        var i = Math.floor(Math.random()*json.quotations.length);
        var $div_quote = div_quote(json.quotations[i]);
        var $div_author = div_author(json.quotations[i]);
        $("#quote").empty();
        $("#quote").append($div_quote);
        $("#quote").append($div_author);
    });
}

function load_day_quote()
{
    var now = new Date();
    var fullDaysSinceEpoch = Math.floor(now/8.64e7);

    $div_day_quote = $("<div>").append($("<h2>", {"class": "title"}).text("A random quote"));
    $("#personal").append($div_day_quote);

    $.getJSON("quotations.json", function(json) {
        var i = fullDaysSinceEpoch%json.quotations.length;
        var $div_quote_text = div_quote(json.quotations[i]);
        var $div_author = div_author(json.quotations[i]);
        $div_day_quote.append($div_quote_text);
        $div_day_quote.append($div_author);
    });
}

function load_all_quotations()
{
    $.getJSON("quotations.json", function(json) {
        for (var i=0; i<json.quotations.length; i++) {
            var $div_quote = div_quote(json.quotations[i]);
            var $div_author = div_author(json.quotations[i]);
            $("#quotations").append($div_quote);
            $("#quotations").append($div_author);
        }
    });
}

function init() {
  var personal = document.getElementById("personal");
  if (personal) {
      personalBackground();
      preload(imgPersList);
      load_random_quote();
  }
  if (document.getElementById("quotations")) {
    load_all_quotations();
  }

  updateDate();
}

window.onload = init;

