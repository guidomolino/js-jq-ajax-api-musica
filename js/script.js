// GOAL:
// Attraverso una chiamata ajax all'Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.

function elencoDischi() {

  $.ajax({

    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "Get",
    success: function(data, state){
      var success = data["success"];
      var lista = data["response"];
      console.log(value);
      if (success) {
        stampaDischi();
      }
    }
  });

}

function stampaDischi(disc) {

  var template = $("#disc-template").html();
  var compiled = Handlebars.compile(template);
  var target = $("#disc-template");

  for (var i = 0; i < disc.length; i++) {
    var disco= disc[i];
    var cont = {
      poster: disc["poster"],
      title: disc["title"],
      year: disc["year"],
      author: disc["author"]
    }
  }

  var disco = compiled(cont);
  target.append(disco);

}


function init() {
  elencoDischi();
  stampaDischi();
}

$(document).ready(init);
