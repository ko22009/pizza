<template>
  <div>
    <b-row class="justify-content-center">
        <pizza
          v-for="item in pizza"
          :key="item.id"
          :item="item"
          class="m-1"
        />
    </b-row>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import Pizza from '@/components/Pizza.vue'

  @Component({
    components: {
      Pizza
    }
  })
  export default class Home extends Vue {

    get pizza() {
      return this.$store.getters['pizza/pizza']
    }

    mounted() {
      this.$store.dispatch('pizza/get')
    }

  }
</script>
