<template>
  <b-navbar toggleable="lg" type="light" class="mb-3 pl-0 pr-0">

    <b-navbar-brand href="/" @click.prevent="$router.goPage('/')">
      <b-navbar-brand class="text-danger" href="#">
        <img src="/assets/pizza.png" class="d-inline-block align-top" style="width: 30px" alt="Pizza Hot">
        Pizza Hot
      </b-navbar-brand>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">

        <fragment v-if="!isLoggedIn">
          <b-nav-item @click="$router.goPage('/login')">Login</b-nav-item>
          <b-nav-item @click="$router.goPage('/register')">Register</b-nav-item>
        </fragment>

        <fragment v-else>
          <b-nav-item @click="$router.goPage('/profile')">Profile</b-nav-item>
          <b-nav-item @click.prevent="logout">Log Out</b-nav-item>
        </fragment>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class TopNav extends Vue {
    get isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }

    logout() {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
        })
    }
  }
</script>
