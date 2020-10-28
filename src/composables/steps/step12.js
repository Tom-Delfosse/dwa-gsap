import gsap from 'gsap'

export const title = 'Stagger'
export const run = targets => {
  console.log('step12', title)

  gsap.to(targets, {
    x: 300,
    scale: 2,
    ease: 'bounce',
    stagger: 0.125,
    // clearProps: 'all',
  })
}
