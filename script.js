let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slidemarketing2");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 2000); // Altera a imagem a cada 2 segundos
}

// Inicia o slideshow
showSlides();
