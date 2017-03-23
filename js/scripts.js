$(function() {
  $("#formOne").submit(function(event) {
    var nameInput  = $("#name").val();
    var personalityInput = $("#personality").val();
    var perspectiveInput = $("#perspective").val();
    var teamInput = $("#team").val();
    event.preventDefault();

    if (personalityInput === "Introverted" && perspectiveInput === "Pessimistic" && teamInput === "By myself"){
      $(".name").text(nameInput);
      $("#sloth").show();
    } else if (personalityInput === "Extroverted" && (perspectiveInput === "Optimistic" || perspectiveInput === "Pessimistic") && teamInput === "By myself"){
      $(".name").text(nameInput);
      $("#squirrel").show();
    } else if (personalityInput === "Extroverted" && perspectiveInput === "Optimistic" && teamInput === "On a team"){
      $(".name").text(nameInput);
      $("#monkey").show();
    } else {
      $(".name").text(nameInput);
      $("#dog").show();
    }
  });
});
