import gsap from 'gsap'

export const title = 'Timeline + yoyo'
export const run = targets => {
  console.log('step8', title)

  gsap
    .timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        duration: 1.5,
      },
    })
    .to(targets, {
      x: 200,
      scale: 2,
      ease: 'bounce',
    })
}
