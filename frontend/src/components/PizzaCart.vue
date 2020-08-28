<template>
  <b-row :class="{ remove: hide, 'm-1': true }"
         style="padding: 1rem;border: 1px solid rgba(0, 0, 0, 0.125);border-radius: 0.25rem;" v-if="pizza">
    <b-col class="mt-2 mt-md-0 mb-3 mb-sm-3 mb-md-2 mb-lg-0 justify-content-center d-flex align-items-center" cols="12"
           lg="2" md="4" order="2" order-sm="0" sm="4">
      <b-card-img :src="pizza.image" alt="Image" style="max-width: 300px;"></b-card-img>
    </b-col>
    <b-col class="d-flex align-items-center mb-0 mb-sm-3 mb-md-2 mb-lg-0" cols="12" lg="6" order="1" sm="8">
      <span class="h3 font-weight-light">{{pizza.name}}</span>
    </b-col>

    <b-col class="justify-content-center justify-content-sm-end d-flex align-items-center flex-wrap" cols="12" lg="4"
           order="4">
      <span class="h3 font-weight-light" v-if="hide">{{item.count}} pcs.</span>
      <span class="h3 font-weight-light" style="min-width: 100px;text-align: center; padding: 10px;">{{price}}</span>
      <div class="d-flex">
        <quantity :count="item.count" @input="input" class="mr-2" v-if="!hide"/>
        <b-button @click="remove(item.id)" v-if="!hide" variant="outline-dark">
          <b-icon icon="dash-square"></b-icon>
        </b-button>
      </div>
    </b-col>
  </b-row>
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
    width: 100%;
    border: none !important;

    .card-body {
      padding: 0;
    }
  }
</style>
