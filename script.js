const scenes = gsap.utils.toArray(".scene");

function hideAll() {
  gsap.set(scenes, {autoAlpha: 0});
}

function buildTimeline() {
  hideAll();

  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
    defaults: {ease: "power2.out"}
  });

  tl.set("#intro", {autoAlpha: 1}, 0)
    .from(".word", {opacity: 0, y: 8, stagger: 0.06, duration: 0.28}, 0)
    .to(".w1", {x: "-26vw", y: "-25vh", rotation: -14, filter: "blur(1px)", duration: 0.72}, 0.42)
    .to(".w2", {x: "5vw", y: "-33vh", rotation: 9, filter: "blur(1px)", duration: 0.72}, 0.42)
    .to(".w3", {x: "30vw", y: "-12vh", rotation: 16, filter: "blur(1px)", duration: 0.72}, 0.42)
    .to(".w4", {x: "-12vw", y: "27vh", rotation: -9, filter: "blur(1px)", duration: 0.72}, 0.42)
    .to(".w5", {x: "18vw", y: "30vh", rotation: 13, filter: "blur(1px)", duration: 0.72}, 0.42)
    .to(".word", {opacity: 0, scale: .8, duration: .18}, 1.08)
    .set("#intro", {autoAlpha: 0}, 1.24);

  tl.set("#identity", {autoAlpha: 1}, 1.20)
    .from(".code-window", {scale: .18, rotation: -4, opacity: 0, duration: .42, ease: "back.out(1.8)"}, 1.20)
    .from(".first-name", {x: -55, opacity: 0, duration: .35}, 1.42)
    .from(".last-name", {x: 55, opacity: 0, duration: .35}, 1.42)
    .to(".code-window", {scale: 1.08, duration: .48, ease: "sine.inOut"}, 2.35)
    .to("#identity", {autoAlpha: 0, duration: .18}, 3.07);

  tl.set("#partner", {autoAlpha: 1}, 3.08)
    .from(".your", {y: 22, opacity: 0, duration: .25}, 3.12)
    .from(".partner-tag", {scale: .42, rotation: -8, opacity: 0, duration: .38, ease: "back.out(2)"}, 3.22)
    .to(".partner-tag", {scale: 1.06, duration: .16, yoyo: true, repeat: 1}, 3.72)
    .to("#partner", {autoAlpha: 0, duration: .16}, 4.02);

  tl.set("#roles", {autoAlpha: 1}, 4.02)
    .from(".role-left", {x: -30, opacity: 0, duration: .22}, 4.05)
    .from(".role-right", {x: 30, opacity: 0, duration: .22}, 4.05)
    .to(".role-left", {opacity: 0, y: -13, duration: .15}, 4.57)
    .to(".role-right", {opacity: 0, y: 13, duration: .15}, 4.57)
    .call(() => {
      document.querySelector(".role-left").textContent = "data";
      document.querySelector(".role-right").textContent = "analyst";
    }, null, 4.74)
    .fromTo(".role-left", {opacity: 0, y: 14}, {opacity: 1, y: 0, duration: .2}, 4.75)
    .fromTo(".role-right", {opacity: 0, y: -14}, {opacity: 1, y: 0, duration: .2}, 4.75)
    .to(".role-left", {opacity: 0, y: -13, duration: .15}, 5.12)
    .to(".role-right", {opacity: 0, y: 13, duration: .15}, 5.12)
    .call(() => {
      document.querySelector(".role-left").textContent = "IT";
      document.querySelector(".role-right").textContent = "specialist";
    }, null, 5.28)
    .fromTo(".role-left", {opacity: 0, y: 14}, {opacity: 1, y: 0, duration: .2}, 5.29)
    .fromTo(".role-right", {opacity: 0, y: -14}, {opacity: 1, y: 0, duration: .2}, 5.29)
    .to("#roles", {autoAlpha: 0, duration: .15}, 5.72);

  tl.set("#based", {autoAlpha: 1}, 5.65)
    .from("#based p", {rotation: -38, x: 70, y: -45, opacity: 0, duration: .42}, 5.68)
    .to("#based p", {rotation: 0, x: 0, y: 0, duration: .32}, 6.04)
    .to("#based", {autoAlpha: 0, duration: .15}, 6.72);

  tl.set("#egypt", {autoAlpha: 1}, 6.70)
    .from(".egypt-collage", {scale: .82, opacity: 0, duration: .34}, 6.72)
    .from(".egypt-title", {scale: .4, opacity: 0, duration: .34, ease: "back.out(1.7)"}, 6.80)
    .from(".tile", {scale: 0, rotation: -18, opacity: 0, stagger: .06, duration: .25}, 6.90)
    .to(".egypt-collage", {scale: 1.03, duration: 1.6, ease: "none"}, 7.35)
    .to("#egypt", {autoAlpha: 0, duration: .16}, 9.00);

  tl.set("#help", {autoAlpha: 1}, 8.98)
    .from(".help-label", {opacity: 0, x: -25, duration: .24}, 9.02)
    .set(".yellow-card", {x: 28, y: 0, rotation: 0, opacity: 0, scale: .82}, 9.02)
    .to(".c1", {opacity: 1, scale: 1, duration: .22}, 9.28)
    .to(".c2", {opacity: 1, scale: 1, rotation: -17, x: 8, y: 30, duration: .24}, 9.58)
    .to(".c3", {opacity: 1, scale: 1, rotation: 10, x: 14, y: 55, duration: .24}, 9.88)
    .to(".c4", {opacity: 1, scale: 1, rotation: -9, x: 21, y: 78, duration: .24}, 10.18)
    .to(".c5", {opacity: 1, scale: 1, rotation: 4, x: 30, y: 0, duration: .24}, 10.48)
    .to(".c1", {rotation: -26, y: 72, x: -8, duration: .22}, 10.52)
    .to(".c2", {rotation: -18, y: 55, x: 4, duration: .22}, 10.52)
    .to(".c3", {rotation: -9, y: 36, x: 13, duration: .22}, 10.52)
    .to(".c4", {rotation: 6, y: 18, x: 21, duration: .22}, 10.52)
    .to(".c5", {rotation: 0, y: 0, x: 30, duration: .22}, 10.52)
    .to([".c1",".c2",".c3",".c4"], {rotation: -82, transformOrigin: "left center", opacity: 0, duration: .4, stagger: .04}, 11.18)
    .to(".c5", {rotation: 0, x: 30, y: 0, scale: 1.02, duration: .25}, 11.45)
    .to("#help", {autoAlpha: 0, duration: .16}, 12.05);

  tl.set("#so", {autoAlpha: 1}, 12.02)
    .from("#so p", {opacity: 0, scale: .8, duration: .2}, 12.06)
    .to("#so", {autoAlpha: 0, duration: .15}, 12.72);

  tl.set("#closing", {autoAlpha: 1}, 12.68)
    .from("#closing span", {opacity: 0, y: 8, stagger: .12, duration: .18}, 12.72)
    .to("#closing", {autoAlpha: 0, duration: .16}, 13.82);

  tl.set("#final", {autoAlpha: 1}, 13.80)
    .from("#final p", {opacity: 0, scale: .9, duration: .28}, 13.85)
    .to({}, {duration: 4.27});

  return tl;
}

buildTimeline();
