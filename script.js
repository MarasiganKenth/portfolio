const slider = document.querySelector('.scroller');

slider.addEventListener('wheel', (e)=>{
    e.preventDefault();
    slider.scrollLeft += e.deltaY;
})