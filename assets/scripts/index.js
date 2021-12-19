const light = document.querySelector(".light");
const grid = document.querySelector("#hex-grid");
const backEffect = document.querySelector("[backEffect]");

grid.addEventListener('mousemove', function(e){
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
});


backEffect.addEventListener('mousemove', (e) => {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
});




