<template>
  <div id="app" class="app">
    <b-container class="flex-grow-1">
      <top-nav/>
      <b-overlay variant="white" :show="show" no-wrap>
      </b-overlay>
      <router-view/>
    </b-container>
    <bottom-nav/>
  </div>
</template>

<script lang="ts">

  import {Vue, Component} from "vue-property-decorator"
  import TopNav from '@/components/TopNav.vue'
  import BottomNav from '@/components/BottomNav.vue'

  @Component({
    components: {
      TopNav,
      BottomNav
    }
  })
  export default class App extends Vue {
    get show() {
      return this.$store.getters['loading/loading']
    }
  }

</script>

<style scoped>
  .app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
</style>
