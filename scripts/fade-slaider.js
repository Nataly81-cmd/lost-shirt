(function(){
    const slides = document.querySelectorAll('.fade-slider__item');
    const ActiveClass = "fade-slider__item--visible";
    let index = 0;

    setInterval(function(){
        slides[index].classList.remove(ActiveClass);
        index++;

        if (index + 1 > slides.length){
            index = 0;
        }

        slides[index].classList.add(ActiveClass);

    }, 5000);

})();