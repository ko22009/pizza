<template>
  <div>
    <b-toast id="cart-toast" title="Cart" variant="dark" solid @hidden="redirect()" auto-hide-delay="1500">
      Your order is cleared. You will be redirect.
    </b-toast>

    <div class="d-flex align-items-center mb-2  ">
      <span class="h2 text-danger mr-2">Your order</span>
      <span @click="clear" class="h4 cursor-pointer font-weight-light"
            style="border-bottom: 2px dashed">(Clear cart)</span>
    </div>

    <pizza-cart
      v-for="item in items"
      :key="item.id"
      :item="item"
    />

  </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator'
  import PizzaCart from '@/components/PizzaCart.vue'

  @Component({
    components: {
      PizzaCart
    }
  })
  export default class Shop extends Vue {

    get items() {
      return this.$store.getters['shop/order']
    }

    @Watch('count')
    updateCount(val: number) {
      if(!val) this.$bvToast.show('cart-toast')
    }

    clear() {
      this.$store.commit('shop/clear')
      this.$bvToast.show('cart-toast')
    }

    redirect() {
      this.$router.push('/')
    }

    get pizza() {
      return this.$store.getters['pizza/pizza']
    }

    get count() {
      return this.$store.getters['shop/count']
    }

    loadPizza() {
      this.$store.dispatch('pizza/get')
    }

    mounted() {
      if(!this.pizza.length) this.loadPizza()
    }
  }
</script>
