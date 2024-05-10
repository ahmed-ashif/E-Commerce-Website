// ANIMATION for Navbar
let tlm = gsap.timeline();

tlm.from(".header-menu a",{
  opacity : 0,
  y : -150,
  duration : 0.8,
  delay : 0,
  stagger : 0.4
});

gsap.from(".header-logo a",{
  opacity : 0,
  duration : 1,
  delay : 0.5
});

gsap.from(".header-menu i",{
  opacity : 0,
  x : 30,
  duration : 0.7,
  delay : 2.2
});

// ANIMATION for Hero section

gsap.from("h4",{
 opacity : 0,
  x : -150,
  duration : 0.8,
  delay : 2.8,
})
gsap.from("h2",{
  opacity : 0,
   x : 200,
   duration : 0.8,
   delay : 3.5,
 })
gsap.from("h1",{
 opacity : 0,
  x : -150,
  duration : 0.8,
  delay : 4,
})
gsap.from("#hero p",{
  opacity : 0,
   x : 150,
   duration : 0.8,
   delay : 4.5,
 })
 gsap.from("#hero button",{
  opacity : 0,
   y : 150,
   duration : 0.8,
   delay : 5,
 })

// Shopping animation 
 gsap.to("#shopping p",{
  transform: "translateX(-100%)",
  scrollTrigger: {
  trigger: "#shopping",
  scroller: "body",
  // markers: true,
  start: "top 0%",
  end: "top -150%",
  scrub: 4,
  pin: true
}
})
 
 
 
