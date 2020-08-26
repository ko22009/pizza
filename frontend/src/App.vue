<template>
  <div id="app">
    <b-container>
      <top-nav/>
      <b-overlay variant="white" :show="show" no-wrap>
      </b-overlay>
      <router-view/>
    </b-container>
  </div>
</template>

<script lang="ts">

  import {Vue, Component} from "vue-property-decorator"
  import TopNav from '@/components/TopNav.vue'

  @Component({
    components: {
      TopNav,
    }
  })
  export default class App extends Vue {
    get show() {
      return this.$store.getters['loading/loading']
    }
  }

</script>
