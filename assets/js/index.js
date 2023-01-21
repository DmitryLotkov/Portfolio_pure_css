let offset = 0
const sliderLine = document.querySelector(".slider__items");
const sliderLineLength = document.querySelector(".slider__items").offsetWidth;
const sliderItemWidth = document.querySelector(".slider__item").offsetWidth ;
console.log(sliderLineLength)
document.querySelector(".slider__btn-prev").addEventListener("click", function (){
    offset += sliderLineLength
    if(offset > sliderLineLength){
        offset = 0
    }
    sliderLine.style.left = -offset + "px"
})
document.querySelector(".slider__btn-next").addEventListener("click", function (){
    offset += sliderLineLength
    if(offset > sliderLineLength){
        offset = 0
    }
    sliderLine.style.left = +offset + "px"
})
