// ANIMATION for Navbar
gsap.from(".header-logo a",{
  opacity : 0,
  duration : 1,
  delay : 0.5
});

// ANIMATION for Hero section
gsap.from("#hero h4",{
 opacity : 0,
  x : -150,
  duration : 0.8,
  delay : 0.8,
})
gsap.from("#hero h2",{
  opacity : 0,
   x : 200,
   duration : 0.8,
   delay : 1,
 })
gsap.from("#hero h1",{
 opacity : 0,
  x : -150,
  duration : 0.8,
  delay : 1.2,
})
gsap.from("#hero p",{
  opacity : 0,
   x : 150,
   duration : 0.8,
   delay : 1.5,
 })
 gsap.from("#hero button",{
  opacity : 0,
   y : 150,
   duration : 0.8,
   delay : 1.7,
 })

gsap.from("#feature .feature-box", {
  opacity : 0,
  x : -150,
  duration : 0.8,
  delay : 3,
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