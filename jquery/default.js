var modal = document.getElementById("myModal");
var btn = document.getElementById("btn-click");
var span = document.getElementsByClassName("close");

btn.onclick = function terms() {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function closeme() {
  var closemodal = document.getElementById("myModal");
  closemodal.style.display = "none";
}

//   ---------------------------------------------------------------------

$(document).ready(function () {


  setInterval(function () {
    $(".main_hi").addClass("changeText");
    $(".main_hi").css({ "opacity": "1" })
  }, 500);

  setInterval(function () {
    $(".main_text").addClass("changeText");
    $(".main_text").css({ "opacity": "1" });
  }, 1000);

  setInterval(function () {
    $(".main_know").addClass("changeText");
    $(".main_know").css({ "opacity": "1" });
  }, 1500);

  $(".main_hi").removeClass("changeText");
  $(".main_text").removeClass("changeText");
  $(".main_know").removeClass("changeText");



  //  Bar 1
  $(".bar-1").mouseenter(function () {
    $(".bar-2-1").css({ "width": "80%" })
  })

  $(".bar-1").mouseleave(function () {
    $(".bar-2-1").css({ "width": "0%" })
  })

  //  Bar 2
  $(".bar-2").mouseenter(function () {
    $(".bar-2-2").css({ "width": "75%" })
  })

  $(".bar-2").mouseleave(function () {
    $(".bar-2-2").css({ "width": "0%" })
  })
  //  Bar 3
  $(".bar-3").mouseenter(function () {
    $(".bar-2-3").css({ "width": "85%" })
  })

  $(".bar-3").mouseleave(function () {
    $(".bar-2-3").css({ "width": "0%" })
  })

  //  Bar 4
  $(".bar-4").mouseenter(function () {
    $(".bar-2-4").css({ "width": "80%" })
  })

  $(".bar-4").mouseleave(function () {
    $(".bar-2-4").css({ "width": "0%" })
  })

  //  Bar 5
  $(".bar-5").mouseenter(function () {
    $(".bar-2-5").css({ "width": "70%" })
  })

  $(".bar-5").mouseleave(function () {
    $(".bar-2-5").css({ "width": "0%" })
  })

  //  Bar 6
  $(".bar-6").mouseenter(function () {
    $(".bar-2-6").css({ "width": "60%" })
  })

  $(".bar-6").mouseleave(function () {
    $(".bar-2-6").css({ "width": "0%" })
  })

  //  Bar 7
  $(".bar-7").mouseenter(function () {
    $(".bar-2-7").css({ "width": "55%" })
  })

  $(".bar-7").mouseleave(function () {
    $(".bar-2-7").css({ "width": "0%" })
  })

  //  Bar 8
  $(".bar-8").mouseenter(function () {
    $(".bar-2-8").css({ "width": "50%" })
  })

  $(".bar-8").mouseleave(function () {
    $(".bar-2-8").css({ "width": "0%" })
  })

  //  Bar 9
  $(".bar-9").mouseenter(function () {
    $(".bar-2-9").css({ "width": "40%" })
  })

  $(".bar-9").mouseleave(function () {
    $(".bar-2-9").css({ "width": "0%" })
  })

  AOS.init();
});