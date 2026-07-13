(() => {
  const audio = document.getElementById('motionAudio');
  const audioBase64 = (window.__AUDIO_PARTS || []).join('');
  if (audioBase64) {
    const binary = atob(audioBase64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    audio.src = URL.createObjectURL(new Blob([bytes], { type: 'audio/mp4' }));
    audio.load();
  }
  const profileVideo = document.getElementById('profileVideo');
  const startOverlay = document.getElementById('startOverlay');
  const scenes = gsap.utils.toArray('.scene');
  const DURATION = 18.965;
  let started = false;
  let lastAudioTime = 0;
  let browserWasActive = false;

  gsap.set(scenes, { autoAlpha: 0 });

  const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } });

  // 0.00–2.93 — full sentence, then continuously drifting scattered words.
  tl.set('#sceneIntro', { autoAlpha: 1 }, 0)
    .from('.intro-word', { opacity: 0, y: 7, stagger: 0.045, duration: 0.2 }, 0.08)
    .to('.intro-1', { x: '-29vw', y: '-29vh', rotation: -14, duration: 0.65 }, 0.62)
    .to('.intro-2', { x: '-8vw', y: '-36vh', rotation: 8, duration: 0.65 }, 0.62)
    .to('.intro-3', { x: '27vw', y: '-18vh', rotation: 15, duration: 0.65 }, 0.62)
    .to('.intro-4', { x: '-18vw', y: '29vh', rotation: -10, duration: 0.65 }, 0.62)
    .to('.intro-5', { x: '8vw', y: '34vh', rotation: 7, duration: 0.65 }, 0.62)
    .to('.intro-6', { x: '30vw', y: '24vh', rotation: 14, duration: 0.65 }, 0.62)
    .to('.intro-1', { x: '-=4vw', y: '+=5vh', rotation: '-=5', duration: 1.55, ease: 'sine.inOut' }, 1.28)
    .to('.intro-2', { x: '+=7vw', y: '+=4vh', rotation: '+=6', duration: 1.55, ease: 'sine.inOut' }, 1.28)
    .to('.intro-3', { x: '-=6vw', y: '-=6vh', rotation: '-=8', duration: 1.55, ease: 'sine.inOut' }, 1.28)
    .to('.intro-4', { x: '+=8vw', y: '-=5vh', rotation: '+=6', duration: 1.55, ease: 'sine.inOut' }, 1.28)
    .to('.intro-5', { x: '-=7vw', y: '+=3vh', rotation: '-=5', duration: 1.55, ease: 'sine.inOut' }, 1.28)
    .to('.intro-6', { x: '-=5vw', y: '-=4vh', rotation: '-=7', duration: 1.55, ease: 'sine.inOut' }, 1.28)
    .to('.intro-word', { opacity: 0, filter: 'blur(3px)', scale: 0.84, duration: 0.18 }, 2.76)
    .set('#sceneIntro', { autoAlpha: 0 }, 2.94);

  // 2.94–3.63 — hello.
  tl.set('#sceneHello', { autoAlpha: 1 }, 2.93)
    .from('#sceneHello .minimal-word', { opacity: 0, scale: 0.82, rotation: -8, duration: 0.23 }, 2.96)
    .to('#sceneHello', { autoAlpha: 0, duration: 0.12 }, 3.58);

  // 3.66–4.30 — i am.
  tl.set('#sceneIam', { autoAlpha: 1 }, 3.64)
    .from('#sceneIam .minimal-word', { opacity: 0, y: 10, duration: 0.2 }, 3.68)
    .to('#sceneIam', { autoAlpha: 0, duration: 0.12 }, 4.26);

  // 4.30–6.62 — browser window with the user's video and name below.
  tl.set('#sceneBrowser', { autoAlpha: 1 }, 4.28)
    .from('.browser-window', { opacity: 0, scale: 0.1, rotation: -2, duration: 0.42, ease: 'back.out(1.75)' }, 4.31)
    .from('.browser-caption', { opacity: 0, y: 18, duration: 0.28 }, 4.62)
    .to('.browser-window', { scale: 1.025, duration: 1.25, ease: 'none' }, 5.04)
    .to('#sceneBrowser', { autoAlpha: 0, duration: 0.14 }, 6.54);

  // 6.58–7.82 — red partner stamp.
  tl.set('#scenePartner', { autoAlpha: 1 }, 6.55)
    .from('.partner-lockup>span', { opacity: 0, y: 20, duration: 0.22 }, 6.59)
    .from('.partner-lockup>strong', { opacity: 0, scale: 0.42, rotation: -8, duration: 0.34, ease: 'back.out(2.1)' }, 6.7)
    .to('.partner-lockup>strong', { scale: 1.055, duration: 0.13, yoyo: true, repeat: 1 }, 7.28)
    .to('#scenePartner', { autoAlpha: 0, duration: 0.13 }, 7.75);

  // 7.78–9.24 — rapid role swaps, matching the original cadence.
  tl.set('#sceneRoles', { autoAlpha: 1 }, 7.76)
    .fromTo('.role-1', { opacity: 0, x: -26 }, { opacity: 1, x: 0, duration: 0.18 }, 7.79)
    .to('.role-1', { opacity: 0, x: 26, duration: 0.12 }, 8.05)
    .fromTo('.role-2', { opacity: 0, x: -26 }, { opacity: 1, x: 0, duration: 0.16 }, 8.08)
    .to('.role-2', { opacity: 0, x: 26, duration: 0.11 }, 8.32)
    .fromTo('.role-3', { opacity: 0, x: -26 }, { opacity: 1, x: 0, duration: 0.16 }, 8.35)
    .to('.role-3', { opacity: 0, x: 26, duration: 0.11 }, 8.59)
    .fromTo('.role-4', { opacity: 0, x: -26 }, { opacity: 1, x: 0, duration: 0.16 }, 8.62)
    .to('.role-4', { opacity: 0, x: 26, duration: 0.11 }, 8.86)
    .fromTo('.role-5', { opacity: 0, x: -26 }, { opacity: 1, x: 0, duration: 0.16 }, 8.89)
    .to('#sceneRoles', { autoAlpha: 0, duration: 0.12 }, 9.17);

  // 9.20–10.55 — based in enters diagonally and settles.
  tl.set('#sceneBased', { autoAlpha: 1 }, 9.16)
    .from('#sceneBased .minimal-word', { opacity: 0, x: 58, y: -36, rotation: -38, duration: 0.35 }, 9.2)
    .to('#sceneBased .minimal-word', { x: 0, y: 0, rotation: 0, duration: 0.32 }, 9.48)
    .to('#sceneBased', { autoAlpha: 0, duration: 0.13 }, 10.46);

  // 10.50–12.92 — Egypt collage.
  tl.set('#sceneEgypt', { autoAlpha: 1 }, 10.45)
    .from('.egypt-composition', { opacity: 0, scale: 0.84, duration: 0.3 }, 10.49)
    .from('.egypt-title', { opacity: 0, scale: 0.42, duration: 0.36, ease: 'back.out(1.7)' }, 10.56)
    .from('.pyramid', { opacity: 0, y: 90, stagger: 0.07, duration: 0.34 }, 10.62)
    .from('.tech-sticker', { opacity: 0, scale: 0, rotation: -20, stagger: 0.055, duration: 0.23 }, 10.72)
    .to('.egypt-composition', { scale: 1.035, duration: 1.62, ease: 'none' }, 11.18)
    .to('#sceneEgypt', { autoAlpha: 0, duration: 0.13 }, 12.84);

  // 12.92–15.78 — cards stack one by one, open as a fan, then collapse to the last card.
  tl.set('#sceneBuild', { autoAlpha: 1 }, 12.86)
    .from('.build-copy', { opacity: 0, x: -22, duration: 0.2 }, 12.91)
    .set('.service-card', { opacity: 0, x: 28, y: 0, rotation: 0, scale: 0.9 }, 12.9)
    .to('.card-1', { opacity: 1, scale: 1, duration: 0.22 }, 13.26)
    .to('.card-1', { rotation: -18, x: 12, y: 34, duration: 0.25 }, 13.78)
    .to('.card-2', { opacity: 1, scale: 1, rotation: 1, x: 29, y: 0, duration: 0.22 }, 13.78)
    .to('.card-1', { rotation: -27, x: 0, y: 64, duration: 0.23 }, 14.28)
    .to('.card-2', { rotation: -14, x: 13, y: 34, duration: 0.23 }, 14.28)
    .to('.card-3', { opacity: 1, scale: 1, rotation: 1, x: 30, y: 0, duration: 0.22 }, 14.28)
    .to('.card-1', { rotation: -36, x: -12, y: 92, duration: 0.23 }, 14.78)
    .to('.card-2', { rotation: -24, x: 0, y: 66, duration: 0.23 }, 14.78)
    .to('.card-3', { rotation: -11, x: 15, y: 35, duration: 0.23 }, 14.78)
    .to('.card-4', { opacity: 1, scale: 1, rotation: 1, x: 31, y: 0, duration: 0.22 }, 14.78)
    .to(['.card-1','.card-2','.card-3'], { rotation: -86, y: 20, opacity: 0, duration: 0.4, stagger: 0.045, ease: 'power2.in' }, 15.34)
    .to('.card-4', { rotation: 0, x: 31, y: 0, scale: 1.02, duration: 0.22 }, 15.53)
    .to('#sceneBuild', { autoAlpha: 0, duration: 0.12 }, 15.73);

  // 15.78–16.58 — so ...
  tl.set('#sceneSo', { autoAlpha: 1 }, 15.72)
    .from('.so-word>span', { opacity: 0, scale: 0.84, duration: 0.18 }, 15.77)
    .to('.so-word i:nth-of-type(1)', { opacity: 1, duration: 0.08 }, 16.02)
    .to('.so-word i:nth-of-type(2)', { opacity: 1, duration: 0.08 }, 16.16)
    .to('.so-word i:nth-of-type(3)', { opacity: 1, duration: 0.08 }, 16.3)
    .to('#sceneSo', { autoAlpha: 0, duration: 0.12 }, 16.5);

  // 16.56–17.68 — closing sentence builds in two lines.
  tl.set('#sceneClosing', { autoAlpha: 1 }, 16.49)
    .from('#sceneClosing span:first-child', { opacity: 0, y: 8, duration: 0.22 }, 16.57)
    .from('#sceneClosing span:last-child', { opacity: 0, y: 8, duration: 0.22 }, 17.04)
    .to('#sceneClosing', { autoAlpha: 0, duration: 0.13 }, 17.63);

  // 17.68–18.965 — black ending.
  tl.set('#sceneFinal', { autoAlpha: 1 }, 17.62)
    .from('#sceneFinal p', { opacity: 0, scale: 0.9, duration: 0.24 }, 17.7)
    .to({}, { duration: DURATION - 17.94 });

  tl.duration(DURATION);

  function updateMedia(time) {
    const browserActive = time >= 4.28 && time < 6.64;
    if (browserActive && !browserWasActive) {
      profileVideo.currentTime = 0;
      profileVideo.play().catch(() => {});
    } else if (!browserActive && browserWasActive) {
      profileVideo.pause();
    }
    browserWasActive = browserActive;
  }

  function sync() {
    if (!started) return;
    const time = audio.currentTime || 0;
    if (time + 0.2 < lastAudioTime) {
      tl.time(0, false);
      profileVideo.pause();
      profileVideo.currentTime = 0;
      browserWasActive = false;
    }
    tl.time(Math.min(time, DURATION), false);
    updateMedia(time);
    lastAudioTime = time;
    requestAnimationFrame(sync);
  }

  async function start() {
    if (started) return;
    try {
      audio.currentTime = 0;
      await audio.play();
      started = true;
      startOverlay.classList.add('started');
      requestAnimationFrame(sync);
    } catch (error) {
      startOverlay.querySelector('span').textContent = 'Tap again to start';
    }
  }

  startOverlay.addEventListener('click', start);
  startOverlay.addEventListener('touchend', (event) => {
    event.preventDefault();
    start();
  }, { passive: false });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      audio.pause();
      profileVideo.pause();
    } else if (started) {
      audio.play().catch(() => {});
    }
  });
})();
