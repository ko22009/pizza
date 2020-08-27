<template>
  <div>
    <b-toast id="cart-toast" title="Cart" variant="dark" solid @hidden="redirect()" auto-hide-delay="1500">
      Your order is cleared. You will be redirect.
    </b-toast>

    <div class="d-flex align-items-center mb-2  ">
      <span class="h2 text-danger mr-2">Your order</span>
      <span @click="clear" class="h4 cursor-pointer font-weight-light"
            style="border-bottom: 2px dashed">(Clear order)</span>
    </div>

    <pizza-cart
      v-for="item in items"
      :key="item.id"
      :item="item"
    />

    <div class="d-flex justify-content-between">
      <span class="h3 text-warning">Total order:</span>
      <span class="h3 font-weight-light price">{{totalPrice}}</span>
    </div>

    <hr role="separator" aria-orientation="horizontal" class="dropdown-divider">

    <h2 class="text-danger mt-3">Delivery order</h2>

    <b-form @submit.stop.prevent="">
      <b-form-group
        :state="state('address')"
        :invalid-feedback="error('address')"
        label="Your address:"
        label-for="address"
      >
        <b-form-input
          id="address"
          v-model="form.address"
          placeholder="Enter address"
        ></b-form-input>
      </b-form-group>

      <b-row>

        <b-col>
          <b-form-group
            :state="state('name')"
            :invalid-feedback="error('name')"
            label="Your name:"
            label-for="name"
          >
            <b-form-input
              id="name"
              v-model="form.name"
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            :state="state('email')"
            :invalid-feedback="error('email')"
            label="Your email:"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="form.email"
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            :state="state('phone')"
            :invalid-feedback="error('phone')"
            label="Your phone:"
            label-for="phone"
          >
            <b-form-input
              id="phone"
              v-model="form.phone"
              placeholder="Enter phone"
            ></b-form-input>
          </b-form-group>
        </b-col>

      </b-row>

    </b-form>

    <div class="d-flex justify-content-between">
      <span class="h4 text-dark">Delivery:</span>
      <span class="h4 text-dark price">+{{priceDelivery}} {{currency}}</span>
    </div>

    <div class="d-flex justify-content-between">
      <span class="h3 text-warning font-weight-bold">Total:</span>
      <span class="h3 font-weight-light price">{{total}}</span>
    </div>

    <div class="text-center mt-2 mb-3">
      <b-button squared variant="outline-danger" size="lg">Make order</b-button>
    </div>

  </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator'
  import PizzaCart from '@/components/PizzaCart.vue'
  import {euro, Order} from "@/store/modules/shop";
  import {ItemPizza} from "@/store/modules/pizza";

  @Component({
    components: {
      PizzaCart,
    }
  })
  export default class Shop extends Vue {

    form = {
      address: '',
      name: '',
      email: '',
      phone: ''
    }

    errors: { [key: string]: Array<string> } = {}

    state(field: string) {
      return !(field in this.errors)
    }

    error(field: string) {
      if (field in this.errors) {
        return this.errors[field].join(', ')
      }
      return ''
    }

    get pizzaOrder() {
      let merged = [];
      if(!this.pizza.length) return []
      for (let i = 0; i < this.items.length; i++) {
        merged.push({
            ...this.items[i],
            ...(this.pizza.find((item: ItemPizza) => this.items[i].id === item.id))
          }
        )
      }
      return merged
    }

    get currency() {
      return this.$store.getters['shop/currency']
    }

    get priceDelivery() {
      return this.currency == euro ? 2.4 : 3.6
    }

    get total() {
      const price = this.price + this.priceDelivery
      return Number(price.toFixed(2)) + ' ' + this.$store.getters['shop/currency']
    }

    get totalPrice() {
      return Number(this.price.toFixed(2)) + ' ' + this.$store.getters['shop/currency']
    }

    get price() {
      const priceAttr = this.currency == euro ? 'price_euro' : 'price_dollar'
      let total = 0
      for (let i = 0; i < this.pizzaOrder.length; i++) {
        total += this.pizzaOrder[i].count * this.pizzaOrder[i][priceAttr]
      }
      return total
    }

    get items() {
      return this.$store.getters['shop/order']
    }

    @Watch('count')
    updateCount(val: number) {
      if (!val) this.$bvToast.show('cart-toast')
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
      if (!this.pizza.length) this.loadPizza()
    }
  }
</script>
