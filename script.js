const scenes=[...document.querySelectorAll('.scene')];
const durations=[1300,2300,1700,1700,1100,2200,900,2800,2600,900,5000];
const total=durations.reduce((a,b)=>a+b,0);
const progressBar=document.getElementById('progressBar');
const pauseButton=document.getElementById('pauseButton');
const replayButton=document.getElementById('replayButton');
const skipButton=document.getElementById('skipButton');
let current=0,timer=null,startedAt=0,elapsedBeforePause=0,paused=false,progressTimer=null;
function showScene(index){scenes.forEach((scene,i)=>scene.classList.toggle('active',i===index));current=index}
function sceneElapsedBefore(index){return durations.slice(0,index).reduce((a,b)=>a+b,0)}
function startProgress(){clearInterval(progressTimer);const baseElapsed=sceneElapsedBefore(current)+elapsedBeforePause;const baseTime=performance.now();progressTimer=setInterval(()=>{if(paused)return;const elapsed=baseElapsed+(performance.now()-baseTime);progressBar.style.width=`${Math.min(100,(elapsed/total)*100)}%`},80)}
function scheduleCurrent(remaining=durations[current]){clearTimeout(timer);startedAt=performance.now();timer=setTimeout(()=>{elapsedBeforePause=0;if(current<scenes.length-1){showScene(current+1);scheduleCurrent(durations[current]);startProgress()}else{clearInterval(progressTimer);progressBar.style.width='100%';setTimeout(replay,3200)}},remaining)}
function replay(){clearTimeout(timer);clearInterval(progressTimer);paused=false;pauseButton.textContent='Pause';elapsedBeforePause=0;progressBar.style.width='0%';showScene(0);scheduleCurrent(durations[0]);startProgress()}
function pauseResume(){if(!paused){paused=true;clearTimeout(timer);clearInterval(progressTimer);elapsedBeforePause+=performance.now()-startedAt;pauseButton.textContent='Resume'}else{paused=false;pauseButton.textContent='Pause';const remaining=Math.max(120,durations[current]-elapsedBeforePause);scheduleCurrent(remaining);startProgress()}}
pauseButton.addEventListener('click',pauseResume);
replayButton.addEventListener('click',replay);
skipButton.addEventListener('click',()=>{clearTimeout(timer);clearInterval(progressTimer);paused=false;showScene(scenes.length-1);progressBar.style.width='100%';pauseButton.textContent='Pause'});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&!paused)pauseResume()});
replay();