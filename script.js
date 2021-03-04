const loading = document.querySelector('.loading-text'); 
const bg = document.querySelector('.bg');

// load text percentage until a 100
let load = 0;
// load function every 50 milliseconds
let int = setInterval(blurring, 50);


function blurring() {
    // increment loader percentage
    load++;

    // clear interval when it reaches a 100%
    if(load > 99) {
        clearInterval(int);
    }
    loading.innerText = `${load}%`
    loading.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
// code from stack overflow 
const scale = (num, in_min,in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}