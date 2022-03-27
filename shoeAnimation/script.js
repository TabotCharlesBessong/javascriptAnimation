
// Movement animation 

const card = document.querySelector('.card')
const container = document.querySelector('.container')

// animate some items
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase button')
const desc = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')

card.addEventListener("mousemove" , (e)=>{
  let xAxis = (window.innerWidth / 2  - e.pageX ) /8
  let yAxis = (window.innerHeight / 2  - e.pageY ) /8
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis }deg)`
})


// Animate out
container.addEventListener("mouseleave", (e)=>{
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  card.style.transition = "all 0.5 ease"

  // PopBack
  title.style.transform = "translateZ(0px)"
  sneaker.style.transform = "translateZ(0px) rotate(360deg)"
})


// Animation Out

container.addEventListener("mouseenter",(e)=>{
  card.style.transition = "none"
  // PopOut
  title.style.transform = "translateZ(150px) scale(1.2)"
  sneaker.style.transform = "translateZ(230px) scale(0.87)  rotate(360deg)"
  // purchase.style.transform = "rotate(45deg)"
  title.style.color = "lightpink"
})

