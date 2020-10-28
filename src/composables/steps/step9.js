import gsap from 'gsap'

export const title = 'Timeline + multiple'
export const run = targets => {
  console.log('step9', title)

  gsap
    .timeline({
      defaults: {
        duration: 1.5,
      },
    })
    .to(targets[0], {
      x: 300,
      scale: 2,
      ease: 'bounce',
    })
    .to(targets[1], {
      x: 300,
      scale: 2,
      ease: 'bounce',
    })
    .to(targets[2], {
      x: 300,
      scale: 2,
      ease: 'bounce',
    })
}
