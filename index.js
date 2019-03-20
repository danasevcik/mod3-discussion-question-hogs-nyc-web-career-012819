/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/
const faveHog = document.querySelector('#myFaveHog')
const gitHub = document.querySelector('#github-logo')
const about = document.querySelector('#about-logo')
const disclaimer = document.querySelector('#pholder-logo')
const buttonArray = [faveHog, gitHub, about, disclaimer]

// faveHog.addEventListener('click', () => {
  // console.log('clicked')
  // let buttonArray = [gitHub, about, disclaimer]
  // delayedFadeOut(faveHog, 2000)
  // fadeAllOut(1000, buttonArray)
  // delayedFadeIn(faveHog, 2000)
// })

function delayedFadeOut(div, range) {
  // Your solution here
  // console.log('fading')
  // console.log(div)
  // console.log(range)
  // setTimeout(fadeOut(div), range)
  fadeOut(div)
}

function delayedFadeIn(div, range) {
  // Your solution here
  // setTimeout(fadeIn(div), range)
  fadeIn(div)
}

function fadeAllOut(el, group) {
  // Your solution here
  // debugger
  const index = group.indexOf(el)
  group.splice(index, 1)
  group.forEach(div => {
    delayedFadeOut(div)

  })
  setTimeout(() => {fadeOut(el)}, 500)
  group.push(el)
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
    delayedFadeIn(div)
  })
}
