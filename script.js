const scenes=[...document.querySelectorAll('.scene')];

// Timed to closely match the 18.4-second reference video.
const durations=[
  2700, // scattered intro words
  700,  // hello
  1500, // name
  1200, // red partner
  700,  // software developer
  700,  // data analyst
  1500, // based in
  2200, // Egypt
  3000, // stacked yellow cards
  700,  // so...
  1000, // closing phrase
  2500  // long black ending
];

let index=0;
let timer=null;

function show(i){
  scenes.forEach((scene,n)=>scene.classList.toggle('active',n===i));
  index=i;
}

function next(){
  clearTimeout(timer);
  timer=setTimeout(()=>{
    if(index<scenes.length-1){
      show(index+1);
      next();
    }else{
      show(0);
      next();
    }
  },durations[index]);
}

document.addEventListener('visibilitychange',()=>{
  if(document.hidden){
    clearTimeout(timer);
  }else{
    show(0);
    next();
  }
});

show(0);
next();
