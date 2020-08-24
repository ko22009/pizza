<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
// import {Api} from "@/api";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  async mounted () {
    // const api = new Api()
    // await api.fetch('todos')
  }
}
</script>
