import gsap from 'gsap'

export const title = 'Timeline + label'
export const run = targets => {
  console.log('step11', title)

  gsap
    .timeline({
      defaults: {
        duration: 1.5,
      },
    })
    .add('start')
    .to(
      targets[0],
      {
        x: 300,
        scale: 2,
        ease: 'bounce',
      },
      'start'
    )
    .to(
      targets[1],
      {
        x: 300,
        scale: 2,
        ease: 'bounce',
      },
      'start+=0.25'
    )
    .to(
      targets[2],
      {
        x: 300,
        scale: 2,
        ease: 'bounce',
      },
      'start+=0.25'
    )
}
