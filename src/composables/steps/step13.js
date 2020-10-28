import gsap from 'gsap'

export const title = 'Callback + async'
export const run = targets => {
  console.log('step12', title)

  gsap
    .to(targets, {
      x: 300,
      scale: 2,
      ease: 'bounce',
      stagger: 0.125,
      onComplete() {
        console.log('complete')
        // gsap.to(targets, {
        //   clearProps: 'all',
        // })
      },
    })
    .then(() => {
      console.log('resolved')
      // gsap.to(targets, {
      //   clearProps: 'all',
      // })
    })
}
