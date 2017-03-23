$(function() {
  $("#formOne").submit(function(event) {
    var personalityInput = $("#personality").val();
    var perspectiveInput = $("#perspective").val();
    var teamInput = $("#team").val();
    event.preventDefault();
  });
});
