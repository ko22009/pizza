<template>
  <div class="home">
    <img alt="Vue logo" src="/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import api from '@/api'

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  async mounted () {
    //await api.get('todos')
  }
}
</script>
