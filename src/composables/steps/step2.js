import gsap from 'gsap'

export const title = 'SVG element'
export const run = (targets, clear = false) => {
  console.log('step2', title)

  gsap.to(targets, {
    duration: 1,
    x: 200,
    scale: 2,
    clearProps: clear ? 'all' : '',
  })
}
