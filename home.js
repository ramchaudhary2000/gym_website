let flag = 0;
// This is a comment
// function controller(x){
//     flag = flag+1;
// }

slideshow(flag);

function slideshow(num){
    const slides = document.getElementsByClassName("slide");
    console.log(slides)
    console.log(slides[0])
    slides[num].style.display = "block";
}




// let flag = 1;
// showSlides(flag);
// function aSlides(num) {
//   showSlides(flag += num);}
// function bSlide(num) {
//   showSlides(flag = num); }

// function showSlides(num) {
//     let i;
//     let slides = document.getElementsByClassName("slide");
//     console.log(slides);
//     if (num > slides.length) {flag = 1}    
//       if (num < 1) {flag = slides.length}
//       for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//        }slides[flag-1].style.display = "block"
//     }
