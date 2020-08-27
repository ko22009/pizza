<template>
  <div>
    <b-row v-show="!pizza.length">
      <loading-pizza v-for="_ in 6" :count="pizza.length"/>
    </b-row>
    <b-row class="justify-content-center">
      <pizza
        v-for="item in pizza"
        :key="item.id"
        :item="item"
      />
    </b-row>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import Pizza from '@/components/Pizza.vue'
  import LoadingPizza from '@/components/LoadingPizza.vue'

  @Component({
    components: {
      Pizza,
      LoadingPizza
    }
  })
  export default class Home extends Vue {

    get pizza() {
      return this.$store.getters['pizza/pizza']
    }

    mounted() {
      this.$store.commit('loading/setLoading', true)
      this.$store.dispatch('pizza/get').finally(() => this.$store.commit('loading/setLoading', false))
    }

  }
</script>
