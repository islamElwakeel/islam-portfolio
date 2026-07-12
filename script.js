const scenes=gsap.utils.toArray(".scene");
gsap.set(scenes,{autoAlpha:0});

const tl=gsap.timeline({repeat:-1,defaults:{ease:"power2.out"}});

// 0.00–0.55: sentence assembles.
tl.set("#intro",{autoAlpha:1},0)
  .from(".iw",{opacity:0,y:7,stagger:.055,duration:.22},0);

// 0.55–3.15: words scatter, then continue drifting independently.
tl.to(".i1",{x:"-24vw",y:"-30vh",rotation:-13,duration:.62},.55)
  .to(".i2",{x:"9vw",y:"-35vh",rotation:8,duration:.62},.55)
  .to(".i3",{x:"31vw",y:"-13vh",rotation:17,duration:.62},.55)
  .to(".i4",{x:"-15vw",y:"30vh",rotation:-10,duration:.62},.55)
  .to(".i5",{x:"19vw",y:"31vh",rotation:12,duration:.62},.55)
  .to(".i1",{x:"-=4vw",y:"+=4vh",rotation:"-=5",duration:1.75,ease:"sine.inOut"},1.17)
  .to(".i2",{x:"+=5vw",y:"+=3vh",rotation:"+=6",duration:1.75,ease:"sine.inOut"},1.17)
  .to(".i3",{x:"-=4vw",y:"-=5vh",rotation:"-=7",duration:1.75,ease:"sine.inOut"},1.17)
  .to(".i4",{x:"+=6vw",y:"-=4vh",rotation:"+=5",duration:1.75,ease:"sine.inOut"},1.17)
  .to(".i5",{x:"-=5vw",y:"+=2vh",rotation:"-=5",duration:1.75,ease:"sine.inOut"},1.17)
  .to(".iw",{opacity:0,filter:"blur(3px)",duration:.20},2.95)
  .set("#intro",{autoAlpha:0},3.14);

// 3.10–3.68 hello
tl.set("#hello",{autoAlpha:1},3.08)
  .from("#hello p",{opacity:0,rotation:-12,scale:.8,duration:.23},3.10)
  .to("#hello",{autoAlpha:0,duration:.12},3.62);

// 3.68–4.36 i am
tl.set("#iam",{autoAlpha:1},3.66)
  .from("#iam p",{opacity:0,y:9,duration:.20},3.68)
  .to("#iam",{autoAlpha:0,duration:.12},4.29);

// 4.32–6.85 browser/video
tl.set("#browserScene",{autoAlpha:1},4.30)
  .from(".browser-window",{width:"5%",height:"6%",opacity:0,duration:.36,ease:"back.out(1.8)"},4.32)
  .from(".left-name",{x:-38,opacity:0,duration:.26},4.58)
  .from(".right-name",{x:38,opacity:0,duration:.26},4.58)
  .from(".video-poster",{opacity:0,scale:.92,duration:.28},4.70)
  .to("#browserScene",{autoAlpha:0,duration:.14},6.76);

// 6.78–7.98 red partner
tl.set("#partner",{autoAlpha:1},6.76)
  .from(".partner span",{y:18,opacity:0,duration:.22},6.80)
  .from(".partner strong",{scale:.48,rotation:-7,opacity:0,duration:.35,ease:"back.out(2)"},6.88)
  .to("#partner",{autoAlpha:0,duration:.13},7.91);

// 7.94–9.26 role cycle
tl.set("#roles",{autoAlpha:1},7.92)
  .from(".role-a",{x:-24,opacity:0,duration:.18},7.96)
  .from(".role-b",{x:24,opacity:0,duration:.18},7.96)
  .to([".role-a",".role-b"],{opacity:0,y:-8,duration:.12},8.32)
  .call(()=>{document.querySelector(".role-a").textContent="data";document.querySelector(".role-b").textContent="analyst"},null,8.45)
  .fromTo([".role-a",".role-b"],{opacity:0,y:8},{opacity:1,y:0,duration:.16},8.46)
  .to([".role-a",".role-b"],{opacity:0,y:-8,duration:.12},8.74)
  .call(()=>{document.querySelector(".role-a").textContent="IT";document.querySelector(".role-b").textContent="specialist"},null,8.87)
  .fromTo([".role-a",".role-b"],{opacity:0,y:8},{opacity:1,y:0,duration:.16},8.88)
  .to("#roles",{autoAlpha:0,duration:.12},9.18);

// 9.20–10.52 based in
tl.set("#based",{autoAlpha:1},9.18)
  .from("#based p",{x:48,y:-28,rotation:-34,opacity:0,duration:.32},9.21)
  .to("#based p",{x:0,y:0,rotation:0,duration:.28},9.47)
  .to("#based",{autoAlpha:0,duration:.12},10.43);

// 10.46–13.08 Egypt
tl.set("#egypt",{autoAlpha:1},10.43)
  .from(".egypt-collage",{opacity:0,scale:.84,duration:.30},10.47)
  .from(".egypt-word",{opacity:0,scale:.42,duration:.34,ease:"back.out(1.7)"},10.53)
  .from(".object",{opacity:0,scale:0,rotation:-15,stagger:.055,duration:.21},10.62)
  .to(".egypt-collage",{scale:1.035,duration:1.75,ease:"none"},10.94)
  .to("#egypt",{autoAlpha:0,duration:.13},13.00);

// 13.02–15.78 cards: each new card replaces top position, previous cards rotate underneath.
tl.set("#help",{autoAlpha:1},13.00)
  .from(".help-copy",{opacity:0,x:-20,duration:.20},13.03)
  .set(".yellow",{opacity:0,x:26,y:0,rotation:0,scale:.90},13.03)
  .to(".y1",{opacity:1,scale:1,duration:.20},13.30)
  .to(".y1",{rotation:-18,y:34,x:10,duration:.24},13.78)
  .to(".y2",{opacity:1,scale:1,rotation:2,x:27,y:0,duration:.22},13.78)
  .to(".y1",{rotation:-25,y:58,x:0,duration:.22},14.22)
  .to(".y2",{rotation:-13,y:31,x:12,duration:.22},14.22)
  .to(".y3",{opacity:1,scale:1,rotation:1,x:28,y:0,duration:.22},14.22)
  .to(".y1",{rotation:-31,y:78,x:-8,duration:.22},14.66)
  .to(".y2",{rotation:-21,y:56,x:2,duration:.22},14.66)
  .to(".y3",{rotation:-10,y:30,x:14,duration:.22},14.66)
  .to(".y4",{opacity:1,scale:1,rotation:2,x:29,y:0,duration:.22},14.66)
  .to(".y1",{rotation:-36,y:91,x:-13,duration:.20},15.02)
  .to(".y2",{rotation:-27,y:70,x:-3,duration:.20},15.02)
  .to(".y3",{rotation:-17,y:48,x:7,duration:.20},15.02)
  .to(".y4",{rotation:-8,y:26,x:17,duration:.20},15.02)
  .to(".y5",{opacity:1,scale:1,rotation:1,x:30,y:0,duration:.22},15.02)
  .to([".y1",".y2",".y3",".y4"],{rotation:-84,y:20,opacity:0,duration:.36,stagger:.035,ease:"power2.in"},15.36)
  .to(".y5",{rotation:0,x:30,y:0,scale:1.02,duration:.22},15.52)
  .to("#help",{autoAlpha:0,duration:.12},15.73);

// 15.75–16.55
tl.set("#so",{autoAlpha:1},15.73)
  .from("#so p",{opacity:0,scale:.84,duration:.18},15.77)
  .to("#so",{autoAlpha:0,duration:.12},16.47);

// 16.50–17.66
tl.set("#closing",{autoAlpha:1},16.47)
  .from("#closing p",{opacity:0,y:7,duration:.24},16.52)
  .to("#closing",{autoAlpha:0,duration:.12},17.61);

// 17.64–18.40
tl.set("#final",{autoAlpha:1},17.61)
  .from("#final p",{opacity:0,scale:.9,duration:.22},17.65)
  .to({}, {duration:.53});
