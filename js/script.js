/*cambio menu da tre linee a x*/
$(".menu-icons").on("click", function () {
  $("nav").toggleClass("active");
});

/*RIMOZIONE DEL MENU ICONS AL CLICK SU UN LINK*/
$(document).ready(function () {
  $(".nav-list a").click(function () {
    $("nav").removeClass("active");
  });
});

/*Carosello immagini cambio automatico di foto*/
let slideIndex = 0;
const slideImages = document.querySelectorAll(".slide-images .img-container");

function showSlides() {
  for (let i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slideImages.length) {
    slideIndex = 1;
  }
  slideImages[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
showSlides();

/*FADE IN ON SCROLL*/
$(document).ready(function () {
  $(window).scroll(function () {
    //CON SCHERMI INFERIORI A 960PX ESEGUE LE ISTRUZIONI
    if ($(window).width() <= 960) {
      if ($(this).scrollTop() < 850) {
        /*SE IL MOUSE ARRIVA ALLA POSIZIONE 850 IL PRIMO PARAGRAFO DA OPACITA 0(NON VISIBILE) DIVENTA VISIBILE*/
        $(".paragrafo-1").css({ opacity: "0", transition: ".5s" });
      } else {
        $(".paragrafo-1").css({ opacity: "1" });
      }

      if ($(this).scrollTop() < 1000) {
        $(".paragrafo-2").css({ opacity: "0", transition: ".5s" });
      } else {
        $(".paragrafo-2").css({ opacity: "1" });
      }

      if ($(this).scrollTop() < 1250) {
        $(".paragrafo-3").css({ opacity: "0", transition: ".5s" });
      } else {
        $(".paragrafo-3").css({ opacity: "1" });
      }
    } //CON SCHERMI MAGGIORI DI 960PX
    else {
      if ($(this).scrollTop() < 750) {
        $(".paragrafo-1").css({ opacity: "0" });
        $(".paragrafo-2").css({ opacity: "0", transition: ".3s" });
        $(".paragrafo-3").css({ opacity: "0", transition: ".6s" });
      } else {
        $(".paragrafo-1").css({ opacity: "1" });
        $(".paragrafo-2").css({ opacity: "1" });
        $(".paragrafo-3").css({ opacity: "1" });
      }
    }
  });
});

/*BOTTONI PER CAMBIARE IMMAGINI CONTAINER SERVIZI*/
let count = 0;
$(document).ready(function () {
  $(".right")
    .first()
    .click(function () {
      let slides = $(".container-services .container");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      count++;
      if (count > slides.length) {
        count = 1;
      }
      slides[count - 1].style.display = "flex";
    });

  $(".left").click(function () {
    let slides = $(".container-services .container");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    count--;
    if (count < 1) {
      count = slides.length;
    }
    slides[count - 1].style.display = "flex";
  });
});

/*AL CLICK SU UNO DI QUESTI LINK NASCONDE QUELLI PRESENTI MOSTRANDO SOLO QUELLO CHE SI VUOLE*/
$(document).ready(function () {
  $("#tourist-guide").on("click", function () {
    $(".first").css({ display: "none" });
    $(".third").css({ display: "none" });
    $(".second").css({ display: "flex" });
    $("html, body").animate(
      {
        scrollTop: $(".container-services").offset().top,
      },
      1000
    );
  });

  $("#breakfast").on("click", function () {
    $(".first").css({ display: "none" });
    $(".third").css({ display: "flex" });
    $(".second").css({ display: "none" });
    $("html, body").animate(
      {
        scrollTop: $(".container-services").offset().top,
      },
      1000
    );
  });

  $("#transfer").on("click", function () {
    $(".first").css({ display: "flex" });
    $(".third").css({ display: "none" });
    $(".second").css({ display: "none" });
    $("html, body").animate(
      {
        scrollTop: $(".container-services").offset().top,
      },
      1000
    );
  });

  $("#services").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(".container-services").offset().top,
      },
      1000
    );
  });

  $("#gallery").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(".gallery").offset().top,
      },
      1000
    );
  });

  $("#beach").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(".main-container-beach").offset().top,
      },
      1000
    );
  });

  $("#around-us").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(".main-container-around-services").offset().top,
      },
      1000
    );
  });

  $("#blog").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(".container-paragrafi").offset().top,
      },
      1000
    );
  });
});

//ANIMAZIONE DEL DIV.GALLERY, NON APPENA SI RAGGIUNGE ESSO NELLA PAGINA COMPARE CON UNO SLIDE DA SINISTRA VERSO DESTRA
$(document).ready(function () {
  $(".container-image img").css({
    opacity: "0",
    "margin-left": "-100px",
  });

  $(".container-image span").css({
    opacity: "0",
    "margin-left": "-100px",
  });

  $(window).scroll(function () {
    var windowHeight = $(window).height();
    var scrollHeight = $(document).scrollTop();
    if ($(window).width() > 767) {
      var galleryOffset = $(".container-image img").offset().top;
      if (scrollHeight > galleryOffset - windowHeight + 380) {
        // Se si raggiunge il div .gallery
        $(".container-image img").animate(
          { "margin-left": "0", opacity: "1" },
          500
        ); // Animazione dello slide-in da sinistra verso destra
        $(".container-image span").animate(
          { "margin-left": "0", opacity: "1" },
          500
        );
      }
    } else if ($(window).width() <= 767) {
      var galleryOffset = $(".container-image span").offset().top;
      if (scrollHeight > galleryOffset - windowHeight + 280) {
        // Se si raggiunge il div .gallery
        $(".container-image img").animate(
          { "margin-left": "0", opacity: "1" },
          500
        ); // Animazione dello slide-in da sinistra verso destra
        $(".container-image span").animate(
          { "margin-left": "0", opacity: "1" },
          500
        );
      }
    }
  });
});

//EVENTI SUI CLICK DELLE VARIE IMMAGINI PER MOSTRARE UNA GALLERIA DI ESSE
$(document).ready(function () {
  // Aggiungo un listener di click a tutte le immagini nella galleria
  $(".container-image").on("click", function () {
    $('.main-container-bookmark').css({
      'display':'none'
    });
    // Creo un nuovo div per la galleria
    const $gallery = $('<div class="gallery-fullscreen"></div>');

    // Creo i div per le immagini, il pulsante per chiudere la galleria e le frecce per scorrere le immagini
    const $imagesContainer = $('<div class="gallery-images"></div>');
    const $btnArrContainer = $('<div class="btn-arr-container"></div>');
    const $nextButton = $(
      '<div class="gallery-next-button"><i class="fa fa-angle-right right"></i></div>'
    );
    const $prevButton = $(
      '<div class="gallery-prev-button"><i class="fa fa-angle-left left"></i></div>'
    );
    const $closeButton = $(
      '<div class="gallery-close-button"><i class="fa-solid fa-x"></i></div>'
    );

    // Leggo l'attributo "data-images" associato alla miniatura clicata
    $("#livingRoom").attr(
      "data-images",
      "./photos/livingroom/living-room.jpeg, ./photos/livingroom/living-room-2.jpeg, ./photos/livingroom/living-room-3.jpeg, ./photos/livingroom/living-room-tv.jpeg"
    );
    $("#bathRoom").attr(
      "data-images",
      "./photos/bathroom/bathroom-1.jpeg, ./photos/bathroom/bathroom-2.jpeg"
    );
    $("#bedRoom").attr(
      "data-images",
      "./photos/bedroom/bedroom-bed.jpeg, ./photos/bedroom/bedroom-guest.jpeg, ./photos/bedroom/master-bedroom.jpeg, ./photos/bedroom/bedroom-wardrobe.jpeg"
    );
    $("#kitchen").attr(
      "data-images",
      "./photos/kitchen/kitchen.jpeg, ./photos/kitchen/fridge.jpeg"
    );
    $("#outDoor").attr(
      "data-images",
      "./photos/balcony&outdoor/balcony.jpeg, ./photos/balcony&outdoor/balcony-2.jpeg, ./photos/balcony&outdoor/beach.jpeg"
    );

    const imagesAttr = $(this).attr("data-images");

    // Creo un array di URL di immagini dalla stringa di attributo letta
    const images = imagesAttr.split(",");

    let currentImageIndex = 0;
    const $image = $("<img>").attr("src", images[currentImageIndex]);
    $imagesContainer.append($image);

    // Aggiungo una freccia per passare all'immagine successiva
    $nextButton.on("click", function () {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      $image.attr("src", images[currentImageIndex]);
    });

    // Aggiungo una freccia per passare all'immagine precedente
    $prevButton.on("click", function () {
      currentImageIndex =
        (currentImageIndex - 1 + images.length) % images.length;
      $image.attr("src", images[currentImageIndex]);
    });

    // Aggiungo tutto alla galleria e alla pagina
    $btnArrContainer.append($prevButton, $nextButton);
    $gallery.append($closeButton, $imagesContainer, $btnArrContainer);
    $("body").append($gallery);

    // Aggiungo un listener per chiudere la galleria
    $closeButton.on("click", function () {
      $gallery.remove();
      $('.main-container-bookmark').css({'display' : 'block'});
    });
  });
});

//AL CLICK SULL H4 (FOLLOW AND CONTACT US) USCURANNO I VARI LINK

//EVENTO AL CLICK DI UNA SPIAGGIA CHE PORTA DIRETTAMENTE SU GOOGLE MAPS
$(".preview-beach").click(function () {
  switch ($(this).index()) {
    case 0:
      window.open(
        "https://www.google.com/maps/@40.7591898,17.6975203,18z/data=!10m2!1e3!2e10?rapsrc=apiv3",
        "_blank"
      );
      break;
    case 1:
      window.open(
        "https://www.google.com/maps/place/Spiaggia+dell'Isoletta/@40.7612783,17.6967532,18z/data=!4m6!3m5!1s0x1346699596b4f645:0xb57aa0b1af147f48!8m2!3d40.7604842!4d17.6965606!16s%2Fg%2F11c40q5zhq!10m2!1e3!2e10?rapsrc=apiv3",
        "_blank"
      );
      break;
    case 2:
      window.open(
        "https://www.google.com/maps/place/Spiaggia+di+Pantanagianni+Grande/@40.7543607,17.7189807,15z/data=!4m6!3m5!1s0x1346690964b8cd09:0xb9c41b900cecfcff!8m2!3d40.7488216!4d17.7223366!16s%2Fg%2F11cnb01nl5?hl=it",
        "_blank"
      );
      break;
    case 3:
      window.open(
        "https://www.google.com/maps/place/Spiaggia+di+Morgicchio/@40.7490699,17.7308056,15.75z/data=!4m10!1m2!2m1!1sSpiaggia+di+Morgicchio+santa+sabina!3m6!1s0x13466910429d2365:0xd260f1460174c197!8m2!3d40.7456557!4d17.7301781!15sCiNTcGlhZ2dpYSBkaSBNb3JnaWNjaGlvIHNhbnRhIHNhYmluYVolIiNzcGlhZ2dpYSBkaSBtb3JnaWNjaGlvIHNhbnRhIHNhYmluYZIBBWJlYWNomgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5WZW5NM2NraFJFQUXgAQA!16s%2Fg%2F11cncxylc3",
        "_blank"
      );
      break;
    case 4:
      window.open(
        "https://www.google.com/maps/place/Spiaggia+di+Lamaforca/@40.7668104,17.6727242,16z/data=!4m10!1m2!2m1!1sSpiaggia+di+lamaforca+santa+sabina!3m6!1s0x134669e14c556465:0x7d94d168d703ad2b!8m2!3d40.7671516!4d17.6746202!15sCiJTcGlhZ2dpYSBkaSBsYW1hZm9yY2Egc2FudGEgc2FiaW5hkgEFYmVhY2jgAQA!16s%2Fg%2F11cnb5z_lm",
        "_blank"
      );
      break;
    case 5:
      window.open(
        "https://www.google.com/maps/place/Spiaggia+di+Specchiolla/@40.7423819,17.7367545,16.25z/data=!4m6!3m5!1s0x13466919c0a953f7:0xd607ee404c9123e6!8m2!3d40.740746!4d17.7378667!16s%2Fg%2F11cnb00tk9",
        "_blank"
      );
      break;
    default:
      console.log("Invalid index.");
  }
});

//CAMBIO COLORE PER TUTTE LE CLASSI CON TITLE NEL NOME DELLA CLASSE
//$('div[class*="title"]:not(.container-pharagrap-around-services-title)').css('color', '#d5b77f');

//SCRIPT PER AGEVOLARE GLI SCHERMI MOBILE
$(".nav-social").on("click", function () {
  $(this).addClass("touch");
});

//SCRIPT PER BOOKMARK
$(document).ready(function() {
  $('.main-container-bookmark').on('click', function(event) {
    event.preventDefault(); // previene il comportamento predefinito del link
    $('html, body').animate({scrollTop: 0 }, 1000); // anima lo scroll verso l'alto
  });
});
