let carouselIndex = 0;

function carousel() {
  const carouselPicsEls = document.getElementsByClassName("carouselPics");
  for (let i = 0; i < carouselPicsEls.length; i += 1) {
    carouselPicsEls[i].style.display = "none";
  }

  carouselIndex += 1;

  if (carouselIndex > carouselPicsEls.length) {
    carouselIndex = 1;
  }

  carouselPicsEls[carouselIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

carousel();
