(()=>{
const audio=document.getElementById('motionAudio');
const profileVideo=document.getElementById('profileVideo');
const cvEntry=document.getElementById('cvEntry');
const scenes=gsap.utils.toArray('.scene');
const DURATION=25;
let browserWasActive=false,startStamp=0,soundUnlocked=false,lastTime=0,started=false;
gsap.set(scenes,{autoAlpha:0});
const tl=gsap.timeline({paused:true,defaults:{ease:'power2.out'}});
tl.set('#sceneIntro',{autoAlpha:1},0)
.from('.intro-word',{opacity:0,y:7,stagger:.045,duration:.2},.08)
.to('.intro-1',{x:'-29vw',y:'-29vh',rotation:-14,duration:.65},.62)
.to('.intro-2',{x:'-8vw',y:'-36vh',rotation:8,duration:.65},.62)
.to('.intro-3',{x:'27vw',y:'-18vh',rotation:15,duration:.65},.62)
.to('.intro-4',{x:'-18vw',y:'29vh',rotation:-10,duration:.65},.62)
.to('.intro-5',{x:'8vw',y:'34vh',rotation:7,duration:.65},.62)
.to('.intro-6',{x:'30vw',y:'24vh',rotation:14,duration:.65},.62)
.to('.intro-1',{x:'-=4vw',y:'+=5vh',rotation:'-=5',duration:1.55,ease:'sine.inOut'},1.28)
.to('.intro-2',{x:'+=7vw',y:'+=4vh',rotation:'+=6',duration:1.55,ease:'sine.inOut'},1.28)
.to('.intro-3',{x:'-=6vw',y:'-=6vh',rotation:'-=8',duration:1.55,ease:'sine.inOut'},1.28)
.to('.intro-4',{x:'+=8vw',y:'-=5vh',rotation:'+=6',duration:1.55,ease:'sine.inOut'},1.28)
.to('.intro-5',{x:'-=7vw',y:'+=3vh',rotation:'-=5',duration:1.55,ease:'sine.inOut'},1.28)
.to('.intro-6',{x:'-=5vw',y:'-=4vh',rotation:'-=7',duration:1.55,ease:'sine.inOut'},1.28)
.to('.intro-word',{opacity:0,filter:'blur(3px)',scale:.84,duration:.18},2.76).set('#sceneIntro',{autoAlpha:0},2.94)
.set('#sceneHello',{autoAlpha:1},2.93).from('#sceneHello .minimal-word',{opacity:0,scale:.82,rotation:-8,duration:.23},2.96).to('#sceneHello',{autoAlpha:0,duration:.12},3.58)
.set('#sceneIam',{autoAlpha:1},3.64).from('#sceneIam .minimal-word',{opacity:0,y:10,duration:.2},3.68).to('#sceneIam',{autoAlpha:0,duration:.12},4.26)
.set('#sceneBrowser',{autoAlpha:1},4.28).from('.browser-window',{opacity:0,scale:.1,rotation:-2,duration:.42,ease:'back.out(1.75)'},4.31).from('.browser-caption',{opacity:0,y:18,duration:.28},4.62).to('.browser-window',{scale:1.025,duration:1.25,ease:'none'},5.04).to('#sceneBrowser',{autoAlpha:0,duration:.14},6.54)
.set('#scenePartner',{autoAlpha:1},6.55).from('.partner-lockup>span',{opacity:0,y:20,duration:.22},6.59).from('.partner-lockup>strong',{opacity:0,scale:.42,rotation:-8,duration:.34,ease:'back.out(2.1)'},6.7).to('.partner-lockup>strong',{scale:1.055,duration:.13,yoyo:true,repeat:1},7.28).to('#scenePartner',{autoAlpha:0,duration:.13},7.75)
.set('#sceneRoles',{autoAlpha:1},7.76)
.fromTo('.role-1',{opacity:0,x:-26},{opacity:1,x:0,duration:.18},7.79).to('.role-1',{opacity:0,x:26,duration:.12},8.05)
.fromTo('.role-2',{opacity:0,x:-26},{opacity:1,x:0,duration:.16},8.08).to('.role-2',{opacity:0,x:26,duration:.11},8.32)
.fromTo('.role-3',{opacity:0,x:-26},{opacity:1,x:0,duration:.16},8.35).to('.role-3',{opacity:0,x:26,duration:.11},8.59)
.fromTo('.role-4',{opacity:0,x:-26},{opacity:1,x:0,duration:.16},8.62).to('.role-4',{opacity:0,x:26,duration:.11},8.86)
.fromTo('.role-5',{opacity:0,x:-26},{opacity:1,x:0,duration:.16},8.89).to('#sceneRoles',{autoAlpha:0,duration:.12},9.17)
.set('#sceneBased',{autoAlpha:1},9.16).from('#sceneBased .minimal-word',{opacity:0,x:58,y:-36,rotation:-38,duration:.35},9.2).to('#sceneBased .minimal-word',{x:0,y:0,rotation:0,duration:.32},9.48).to('#sceneBased',{autoAlpha:0,duration:.13},10.46)
.set('#sceneEgypt',{autoAlpha:1},10.45)
.from('.egypt-composition',{opacity:0,scale:.83,duration:.3},10.49)
.from('.egypt-flag',{opacity:0,x:-50,rotation:-18,duration:.35,ease:'back.out(1.6)'},10.55)
.from('.egypt-title',{opacity:0,scale:.42,duration:.36,ease:'back.out(1.7)'},10.58)
.from('.egypt-subtitle',{opacity:0,y:12,duration:.25},10.77)
.from('.pyramid',{opacity:0,y:90,stagger:.07,duration:.34},10.64)
.from('.temple',{opacity:0,x:-55,duration:.35},10.73)
.from('.sphinx',{opacity:0,x:55,duration:.35},10.77)
.from('.nile',{opacity:0,y:55,duration:.4},10.78)
.from('.tech-sticker',{opacity:0,scale:0,rotation:-20,stagger:.05,duration:.22},10.82)
.to('.egypt-composition',{scale:1.025,duration:1.55,ease:'none'},11.22)
.to('#sceneEgypt',{autoAlpha:0,duration:.13},12.84)
.set('#sceneBuild',{autoAlpha:1},12.86).from('.build-copy',{opacity:0,x:-22,duration:.2},12.91).set('.service-card',{opacity:0,x:28,y:0,rotation:0,scale:.9},12.9)
.to('.card-1',{opacity:1,scale:1,duration:.22},13.26)
.to('.card-1',{rotation:-18,x:12,y:34,duration:.25},13.78).to('.card-2',{opacity:1,scale:1,rotation:1,x:29,y:0,duration:.22},13.78)
.to('.card-1',{rotation:-27,x:0,y:64,duration:.23},14.28).to('.card-2',{rotation:-14,x:13,y:34,duration:.23},14.28).to('.card-3',{opacity:1,scale:1,rotation:1,x:30,y:0,duration:.22},14.28)
.to('.card-1',{rotation:-36,x:-12,y:92,duration:.23},14.78).to('.card-2',{rotation:-24,x:0,y:66,duration:.23},14.78).to('.card-3',{rotation:-11,x:15,y:35,duration:.23},14.78).to('.card-4',{opacity:1,scale:1,rotation:1,x:31,y:0,duration:.22},14.78)
.to(['.card-1','.card-2','.card-3'],{rotation:-86,y:20,opacity:0,duration:.4,stagger:.045,ease:'power2.in'},15.34).to('.card-4',{rotation:0,x:31,y:0,scale:1.02,duration:.22},15.53).to('#sceneBuild',{autoAlpha:0,duration:.12},15.73)
.set('#sceneSo',{autoAlpha:1},15.72).from('.so-word>span',{opacity:0,scale:.84,duration:.18},15.77).to('.so-word i:nth-of-type(1)',{opacity:1,duration:.08},16.02).to('.so-word i:nth-of-type(2)',{opacity:1,duration:.08},16.16).to('.so-word i:nth-of-type(3)',{opacity:1,duration:.08},16.3).to('#sceneSo',{autoAlpha:0,duration:.12},16.5)
.set('#sceneClosing',{autoAlpha:1},16.49).from('#sceneClosing span:first-child',{opacity:0,y:8,duration:.22},16.57).from('#sceneClosing span:last-child',{opacity:0,y:8,duration:.22},17.04).to('#sceneClosing',{autoAlpha:0,duration:.13},17.63)
.set('#sceneFinal',{autoAlpha:1},17.62)
.from('.contact-lockup p',{opacity:0,scale:.9,duration:.24},17.7)
.from('.contact-lockup a',{opacity:0,y:18,scale:.86,duration:.38,ease:'back.out(1.6)'},18.25)
.to('.contact-lockup a',{scale:1.035,duration:.8,yoyo:true,repeat:1,ease:'sine.inOut'},19.0)
.to({},{duration:5.2},19.8);
tl.duration(DURATION);

function updateMedia(t){const active=t>=4.28&&t<6.64;if(active&&!browserWasActive){profileVideo.currentTime=0;profileVideo.play().catch(()=>{});}else if(!active&&browserWasActive){profileVideo.pause();}browserWasActive=active;}
function tryAudio(offset=0){if(!audio)return;audio.currentTime=Math.min(offset,18.8);const p=audio.play();if(p&&p.then)p.then(()=>{soundUnlocked=true;}).catch(()=>{});}
function sync(){if(!started)return;const t=((performance.now()-startStamp)/1000)%DURATION;if(t<lastTime){if(soundUnlocked)tryAudio(0);profileVideo.pause();profileVideo.currentTime=0;browserWasActive=false;}tl.time(t,false);updateMedia(t);lastTime=t;requestAnimationFrame(sync);}
function begin(){if(started)return;started=true;startStamp=performance.now();lastTime=0;cvEntry.classList.add('hidden');tryAudio(0);requestAnimationFrame(sync);}
cvEntry.addEventListener('click',begin,{once:true});
document.addEventListener('visibilitychange',()=>{if(document.hidden){audio?.pause();profileVideo.pause();}else if(started){startStamp=performance.now()-(tl.time()*1000);if(soundUnlocked)tryAudio(tl.time());}});
})();