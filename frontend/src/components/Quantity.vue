<template>
  <div class="quantity">
    <b-input-group>
      <b-input-group-prepend>
        <b-btn variant="info" @click="decrement()">-</b-btn>
      </b-input-group-prepend>

      <b-form-input ref="quantity" v-model="quantity" @blur="update()" @keypress="onlyNumbers($event)"></b-form-input>

      <b-input-group-append>
        <b-btn variant="info" @click="increment()">+</b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>
<script lang="ts">
  import {Component, Prop, Ref, Vue} from 'vue-property-decorator'

  @Component
  export default class Quantity extends Vue {
    @Ref('quantity') quantityEl!: HTMLFormElement
    @Prop() quantity!: number

    update() {
      this.$emit('update', parseInt(this.quantityEl.value))
    }

    onlyNumbers(e: KeyboardEvent) {
      const number = parseInt(e.key)
      if(e.key == 'Enter') this.quantityEl.blur()
      if (isNaN(number)) {
        e.preventDefault()
      } else {
        return true
      }
    }

    increment() {
      this.$emit('update', this.quantity + 1)
    }

    decrement() {
      if (this.quantity > 1) {
        this.$emit('update', this.quantity - 1)
      }
    }
  }
</script>

<style>
  .quantity {
    max-width: 150px;
    width: 100%;
  }

  .quantity input {
    text-align: center;
  }
</style>
