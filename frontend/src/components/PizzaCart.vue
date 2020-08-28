<template>
  <b-card :class="{ remove: hide, 'mb-3': true }" v-if="pizza">

    <div class="d-flex align-items-center">
      <b-card-img :src="pizza.image" alt="Image" style="max-width: 100px"></b-card-img>
      <span class="h3 font-weight-light">{{pizza.name}}</span>
    </div>


    <div class="d-flex">
      <span class="h3 font-weight-light" style="margin-left: 10px;">{{price}}</span>
      <quantity :count="item.count" @input="input" style="margin-left: 30px;" v-if="!hide"/>
      <b-button @click="remove(item.id)" class="ml-3" v-if="!hide" variant="outline-dark">
        <b-icon icon="dash-square"></b-icon>
      </b-button>
    </div>

  </b-card>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import {euro, Order} from '@/store/modules/shop'
  import {ItemPizza} from '@/store/modules/pizza'
  import Quantity from '@/components/Quantity.vue'

  @Component({
    components: {
      Quantity,
    },
  })
  export default class PizzaCart extends Vue {
    @Prop() item!: Order
    @Prop({default: false}) hide?: boolean

    input(count: number) {
      const id = this.item.id
      const data = {
        id: id,
        count: count,
      }
      this.$store.commit('shop/updateCount', data)
    }

    get pizza() {
      const pizza = this.$store.getters['pizza/pizza']
      return pizza.find((pizza: ItemPizza) => pizza.id == this.item.id)
    }

    get price() {
      const currency = this.$store.getters['shop/currency']
      const price = currency == euro ? this.pizza.price_euro : this.pizza.price_dollar
      return Number((this.item.count * price).toFixed(2)) + ' ' + this.$store.getters['shop/currency']
    }

    remove(id: number) {
      this.$store.commit('shop/remove', id)
    }
  }
</script>

<style lang="scss" scoped>
  .card-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .h3 {
    margin-bottom: 0;
  }

  .remove {
    border: none;
    margin-right: auto;

    .card-body {
      padding: 0;
    }
  }
</style>
