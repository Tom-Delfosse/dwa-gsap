<template>
  <div class="base">
    <!-- <pre>{{ route.fullPath }}</pre> -->
    <!-- <pre>{{ route.params }}</pre> -->
    <h1 class="base__title">{{ title }}</h1>
    <svg
      v-if="id === 2"
      class="base__ball-outer"
      viewBox="0 0 800 400"
      width="680"
    >
      <circle class="base__ball" ref="ball" cx="80" cy="80" r="80" />
    </svg>
    <div v-else-if="id >= 9" class="base__ball-outer">
      <div
        v-for="i in 3"
        :key="i"
        :class="`base__ball${i}`"
        :ref="setBallsRef"
      ></div>
    </div>
    <div v-else class="base__ball-outer">
      <div class="base__ball" ref="ball"></div>
    </div>
    <button @click="onClick" class="base__action">RUN</button>
  </div>
</template>

<script>
import {
  defineComponent,
  // Lifecycle hooks
  // onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  // onBeforeUnmount,
  // onUnmounted,
  ref,
} from 'vue'
import { useRoute } from 'vue-router'
import * as steps from '@/composables/steps'

export default defineComponent({
  name: 'Base',
  setup() {
    const ball = ref()
    let balls = []

    const setBallsRef = el => {
      balls.push(el)
    }

    const route = useRoute()
    const id = parseInt(route.params.id, 10)
    const currentStep = steps[`step${id}`]
    const { title } = currentStep

    const onClick = () => {
      const targets = id < 9 ? ball.value : balls
      currentStep.run(targets, false)
    }
    // Lifecycle hooks
    // console.log('base:setup')

    // onBeforeMount(() => {
    //   console.log('base:onBeforeMount')
    // })
    onMounted(() => {
      console.log('base:onMounted', balls)
    })
    onBeforeUpdate(() => {
      balls = []
      console.log('base:onBeforeUpdate', balls)
    })
    onUpdated(() => {
      console.log('base:onUpdated', balls)
    })
    // onBeforeUnmount(() => {
    //   console.log('base:onBeforeUnmount')
    // })
    // onUnmounted(() => {
    //   console.log('base:onUnmounted')
    // })

    return { id, title, ball, setBallsRef, route, onClick }
  },
})
</script>

<style lang="scss">
$d: 10vw;

.base {
  position: relative;
}

.base__title {
  margin-bottom: $d * 2;
}

.base__ball-outer {
  position: relative;
  margin-left: $d * 2;
}

[class^='base__ball']:not([class$='-outer']) {
  position: absolute;
  border-radius: 50%;
}

.base__ball,
.base__ball1 {
  width: $d;
  height: $d;
  background: $c-primary;
  fill: $c-primary;
}

.base__ball2 {
  top: $d * 0.125;
  width: $d * 0.75;
  height: $d * 0.75;
  background: lighten($c-primary, 10%);
}

.base__ball3 {
  top: $d * 0.25;
  width: $d * 0.5;
  height: $d * 0.5;
  background: lighten($c-primary, 20%);
}

.base__action {
  position: absolute;
  top: 4rem;
  right: 4rem;
  padding: 1em 2em;
  color: $c-primary;
  font-weight: 700;
  background-color: $c-secondary;
  border: 1px solid $c-primary;
  cursor: pointer;
  transition: color 0.35s ease-in-out, background-color 0.35s ease-in-out;

  &:hover {
    color: $c-white;
    background-color: $c-primary;
  }
}
</style>
