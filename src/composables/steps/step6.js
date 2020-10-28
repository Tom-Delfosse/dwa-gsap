import gsap from 'gsap'

export const title = 'Timeline + defaults'
export const run = (targets, clear = false) => {
  console.log('step6', title)

  gsap
    .timeline({
      defaults: {
        duration: 1.5,
      },
    })
    .to(targets, {
      x: 200,
      scale: 2,
      ease: 'bounce',
    })
    .to(targets, {
      x: 0,
      scale: 1,
      ease: 'back.inOut(3)',
      clearProps: clear ? 'all' : '',
    })
}
