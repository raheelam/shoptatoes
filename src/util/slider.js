var slideIndex = 1;
export const setSlider = (sliderName) =>{
    showSlides(slideIndex, sliderName);
}

// Next/previous controls
export function plusSlides(n, sliderName) {
  showSlides(slideIndex += n, sliderName);
}



function showSlides(n, sliderName) {
  var i;
  var slides = document.getElementsByClassName(sliderName);
  //var dots = document.getElementsByClassName("dot");
  if(slides.length > 0){
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    slides[slideIndex-1].style.display = "block";
  }
 
 
}