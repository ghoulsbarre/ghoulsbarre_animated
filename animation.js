const pageWrap = document.getElementById('pageWrap');

gsap.to(pageWrap, {
  scale: 1,
  duration: 3,
  ease: "power4.inOut"
});

gsap.to(pageWrap, {
  rotate: 0,
  duration: 3,
  ease: "power4.out"
});

gsap.to(pageWrap, {
  filter: "blur(0em)",
  duration: 3,
  ease: "power4.out",
  onComplete: () => {
    pageWrap.style.filter = "none";        // remove filter from GPU
    document.body.style.overflow = "auto"; // unlock scroll
    pageWrap.style.height = "auto";        // let page grow with content
    pageWrap.style.overflow = "visible";
  }
});
