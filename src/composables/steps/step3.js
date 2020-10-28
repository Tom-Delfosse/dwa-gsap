import gsap from 'gsap'

export const title = 'Easing'
export const run = (targets, clear = false) => {
  console.log('step3', title)

  gsap.to(targets, {
    duration: 1,
    x: 200,
    scale: 2,
    ease: 'bounce', // defaults: 'ease-out'
    clearProps: clear ? 'all' : '',
  })
}
