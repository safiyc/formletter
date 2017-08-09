$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nametoInput = $("input#nameto").val();
    var fromInput = $("input#from").val();
    var verb1Input = $("input#verb1").val();
    var verb2Input = $("input#verb2").val();
    var nounInput = $("input#noun").val();

    $(".nameto").text(nametoInput);
    $(".from").text(fromInput);
    $(".verb1").text(verb1Input);
    $(".verb2").text(verb2Input);
    $(".noun").text(nounInput);

    $("#letter").show();

    event.preventDefault();
  });
});
