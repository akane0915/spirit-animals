$(function() {
  $("#formOne").submit(function(event) {
    var personalityInput = $("#personality").val();
    var perspectiveInput = $("#perspective").val();
    var teamInput = $("#team").val();
    event.preventDefault();

    if (personalityInput === "Introverted" && perspectiveInput === "Pessimistic" && teamInput === "By myself"){
      $("#sloth").show();
    } else if (personalityInput === "Extroverted" && perspectiveInput === "Optimistic" && teamInput === "By myself"){
      $("#squirrel").show();
    } else if (personalityInput === "Extroverted" && perspectiveInput === "Optimistic" && teamInput === "On a team"){
      $("#monkey").show();
    } else {
      $("#dog").show();
    }
  });

});
