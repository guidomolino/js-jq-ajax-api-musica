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
      console.log(lista);
      if (success) {
        stampaDischi(lista);
      }
    },
    error: function (error) {
      console.log("error",error);
    }
  });

}

function stampaDischi(lista) {

  var template = $("#disc-template").html();
  var compiled = Handlebars.compile(template);
  var target = $("#disc-container");

  for (var i = 0; i < lista.length; i++) {
    var disco= lista[i];
    var discHTML = compiled(disco);
    target.append(discHTML);
  }
}


function init() {
  elencoDischi();
}

$(document).ready(init);
