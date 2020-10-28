<template>
  <nav class="nav">
    <ul class="list">
      <li v-for="(v, k, i) in steps" :key="k" class="item">
        <router-link
          :to="{ name: 'Base', params: { id: i + 1 } }"
          class="link"
          >{{ i + 1 }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
import { defineComponent } from 'vue'
import * as steps from '@/composables/steps'

export default defineComponent({
  name: 'ChromeNav',
  setup() {
    return { steps }
  },
})
</script>

<style lang="scss">
$s: 4rem;

.nav {
  padding: 2rem;
}

.list {
  display: flex;
  justify-content: center;
}

.link {
  display: block;
  width: $s;
  height: $s;
  margin: 0 0.5rem;
  color: $c-gray-darkest;
  line-height: $s;
  text-align: center;
  text-decoration: none;
  border: 1px solid $c-primary;
  border-radius: $s / 2;

  /* prettier-ignore */
  transition:
    color 0.35s ease-in-out,
    background-color 0.35s ease-in-out,
    border-color 0.35s ease-in-out;

  &:hover {
    color: $c-white;
    background-color: $c-secondary;
    border-color: $c-secondary;
  }

  &.router-link-active {
    color: $c-white;
    background-color: $c-primary;
    pointer-events: none;
  }
}
</style>
