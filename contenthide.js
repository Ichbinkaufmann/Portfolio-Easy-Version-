var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

function toggleDetail(e) {
  const target = $(e.target);

  if ($(target).hasClass("active")) {
    $(target).html("More Info").removeClass("active");
  } else {
    $(target).html("Less Info").addClass("active");
  }

  const item = $(target).parents(".about-exp-item");
  const detail = $(item).children(".about-exp-item-detail");
  $(detail).slideToggle();
}

$("the-textarea").keyup(function () {
  var characterCount = $(this).val().length,
    current = $("#current"),
    maximum = $("#maximum"),
    theCount = $("#the-count");

  current.text(characterCount);

  /*This isn't entirely necessary, just playin around*/
  if (characterCount < 70) {
    current.css("color", "#666");
  }
  if (characterCount > 70 && characterCount < 90) {
    current.css("color", "#6d5555");
  }
  if (characterCount > 90 && characterCount < 100) {
    current.css("color", "#793535");
  }
  if (characterCount > 100 && characterCount < 120) {
    current.css("color", "#841c1c");
  }
  if (characterCount > 120 && characterCount < 139) {
    current.css("color", "#8f0001");
  }

  if (characterCount >= 140) {
    maximum.css("color", "#8f0001");
    current.css("color", "#8f0001");
    theCount.css("font-weight", "bold");
  } else {
    maximum.css("color", "#666");
    theCount.css("font-weight", "normal");
  }
});
