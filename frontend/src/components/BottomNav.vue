<template>
  <footer class="footer bg-dark mt-2 text-light">
    <div class="container">

      <b-navbar class="pl-0 pr-0 justify-content-center justify-content-sm-between" toggleable="lg" type="light">

        <router-link to="/">
          <b-navbar-brand>
            <b-navbar-brand class="text-light d-flex align-items-center">
              <img alt="Pizza Hot" class="d-inline-block align-top mr-2" src="/assets/pizza.png" style="width: 30px">
              Pizza Hot
            </b-navbar-brand>
          </b-navbar-brand>
        </router-link>

        <b-navbar-nav class="align-items-center">
          <li class="nav-item">
            <span class="font-weight-normal">Pizza Hot. Service Delivery Pizza</span>
          </li>
        </b-navbar-nav>

      </b-navbar>

    </div>
  </footer>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class BottomNav extends Vue {

  }
</script>
