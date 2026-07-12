const scenes=[...document.querySelectorAll('.scene')];
const durations=[1800,1300,1800,1700,1700,2200,2600,2300,2800,9000];
let current=0;
let timer=null;
function show(index){scenes.forEach((s,i)=>s.classList.toggle('active',i===index));current=index}
function run(){clearTimeout(timer);timer=setTimeout(()=>{if(current<scenes.length-1){show(current+1);run()}else{setTimeout(()=>{show(0);run()},2200)}},durations[current])}
document.addEventListener('visibilitychange',()=>{if(document.hidden)clearTimeout(timer);else run()});
show(0);
run();