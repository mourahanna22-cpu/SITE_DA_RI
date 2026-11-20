$(document).ready(function () {
  $("ul").hide();

  $("h3").on("click", function () {
    $("ul").slideUp();
    $(this).next("ul").slideDown();
  });
  /* Fim do seu código */
});
