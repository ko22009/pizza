<template>
  <footer class="footer bg-warning mt-2">
    <div class="container">

      <b-navbar toggleable="lg" type="light" class="pl-0 pr-0">

        <b-navbar-brand class="cursor-pointer" @click.prevent="$router.goPage('/')">
          <b-navbar-brand class="text-danger">
            <img src="/assets/pizza.png" class="d-inline-block align-top" style="width: 30px" alt="Pizza Hot">
            Pizza Hot
          </b-navbar-brand>
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto align-items-center">
          <li class="nav-item">
            <span class="font-weight-normal">Pizza Hot. Service Delivery Pizza</span>
          </li>
        </b-navbar-nav>

      </b-navbar>

    </div>
  </footer>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class BottomNav extends Vue {

  }
</script>
