const scenes=[...document.querySelectorAll('.scene')];
const durations=[1700,1200,1600,1700,1700,2200,2700,2400,9000];
let current=0;
let timer;
function show(i){scenes.forEach((s,n)=>s.classList.toggle('active',n===i));current=i}
function play(){clearTimeout(timer);timer=setTimeout(()=>{if(current<scenes.length-1){show(current+1);play()}else{timer=setTimeout(()=>{show(0);play()},1800)}},durations[current])}
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearTimeout(timer);else play()});
show(0);play();