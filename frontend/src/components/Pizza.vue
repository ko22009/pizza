<template>
  <b-col cols="12" sm="6" lg="4" class="mb-4">
    <b-card style="height: 100%">
      <b-card-title class="h5">
        {{item.name}}
      </b-card-title>
      <b-card-img :alt="item.name" :src="item.image" class="mb-2" style="max-width: 300px; margin: auto"
                  top></b-card-img>
      <b-card-text>
        {{ item.description }}
      </b-card-text>
      <b-card-text class="d-flex justify-content-between font-weight-bold">
        <span>{{ item.weight }} gr.</span>
        <span>{{ price }}</span>
      </b-card-text>
      <div style="display: flex; justify-content: space-between;">
        <quantity :count="count" @input="e => count = e"/>
        <b-avatar variant="dark" ref="floatCart" size="35" :badge="`+` + count" class="buy" badge-variant="warning"
                  icon="cart"></b-avatar>
        <b-button :disabled="process" @click="buy(item.id, $event)" href="#" variant="danger">Buy</b-button>
      </div>
    </b-card>
  </b-col>
</template>

<script lang="ts">
  import {Component, Prop, Ref, Vue} from 'vue-property-decorator'
  import {ItemPizza} from '@/store/modules/pizza'
  import Quantity from '@/components/Quantity.vue'
  import $ from 'jquery'
  import {euro, Order} from '@/store/modules/shop'

  @Component({
    components: {
      Quantity,
    },
  })
  export default class Pizza extends Vue {
    @Prop() item!: ItemPizza
    @Ref('floatCart') floatCartEl!: Vue
    count = 1
    process = false
    product: Order | null = null

    get price() {
      const currency = this.$store.getters['shop/currency']
      const price = currency == euro ? this.item.price_euro : this.item.price_dollar
      return Number((this.count * price).toFixed(2)) + ' ' + this.$store.getters['shop/currency']
    }

    buy(id: number, event: MouseEvent) {
      const x = event.x
      const y = event.y
      const shop = $('#shop')
      const goX = shop.offset()?.left
      const goY = shop.offset()?.top
      this.product = {id: id, count: this.count}
      this.floatCartEl.$el.setAttribute('style', `display:flex; left: ${x}px; top: ${y}px`)
      this.process = true
      $(this.floatCartEl.$el).animate({
          'left': goX,
          'top': goY
        },
        1500,
        () => {
          this.floatCartEl.$el.setAttribute('style', `display:none`)
          this.count = 1
          this.process = false
          this.$store.commit('shop/add', this.product)
          this.product = null
        },
      )
    }

    beforeDestroy() {
      if (this.product) {
        this.$store.commit('shop/add', this.product)
        $(this.floatCartEl.$el).stop(true)
      }
    }

  }
</script>

<style lang="scss" scoped>
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .buy {
    position: fixed;
    z-index: 1000;
    display: none;
    width: 35px;
    height: 35px;
  }
</style>
