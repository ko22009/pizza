<template>
  <div class="quantity">
    <b-input-group style="width: auto">
      <b-input-group-prepend>
        <b-btn variant="warning" @click="decrement()">-</b-btn>
      </b-input-group-prepend>

      <b-input-group-text class="bg-dark text-light" style="min-width: 44px;display: flex;justify-content: center;">
        {{count}}
      </b-input-group-text>

      <b-input-group-append>
        <b-btn variant="warning" @click="increment()">+</b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>

</template>
<script lang="ts">
  import {Component, Model, Ref, Vue} from 'vue-property-decorator'

  @Component
  export default class Quantity extends Vue {
    @Ref('quantity') quantityEl!: HTMLFormElement
    @Model('input') readonly count!: number

    increment() {
      this.$emit('input', this.count + 1)
    }

    decrement() {
      if (this.count > 1) {
        this.$emit('input', this.count - 1)
      }
    }
  }
</script>

<style scoped>
  .quantity {
    display: inline-flex;
  }
  .input-group-text {
    border-radius: unset;
    border: unset;
  }
</style>
