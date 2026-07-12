const scenes=[...document.querySelectorAll('.scene')];
const durations=[1200,900,2300,1600,1900,1200,2400,1000,3000,900,4300];
const total=durations.reduce((a,b)=>a+b,0);
const bar=document.getElementById('progress');
let index=0,timer,loopStarted=performance.now();
function show(i){scenes.forEach((s,n)=>s.classList.toggle('active',n===i));index=i}
function run(){clearTimeout(timer);show(index);timer=setTimeout(()=>{index=(index+1)%scenes.length;if(index===0)loopStarted=performance.now();run()},durations[index])}
function tick(){const elapsed=(performance.now()-loopStarted)%total;bar.style.width=`${(elapsed/total)*100}%`;requestAnimationFrame(tick)}
document.addEventListener('visibilitychange',()=>{if(!document.hidden){loopStarted=performance.now()-durations.slice(0,index).reduce((a,b)=>a+b,0);run()}});
run();tick();