<template>
  <b-navbar toggleable="lg" type="light" class="mb-3 pl-0 pr-0">

    <router-link to="/">
      <b-navbar-brand class="text-danger">
        <img src="/assets/pizza.png" class="d-inline-block align-top" style="width: 30px" alt="Pizza Hot">
        Pizza Hot
      </b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto align-items-center">

        <b-badge @click.prevent="changeCurrency" variant="dark" class="cursor-pointer">{{currency}}</b-badge>

        <li class="nav-item">
          <span class="nav-link">
            <router-link tag="span" class="cursor-pointer" to="/">
            <b-avatar id="shop" :badge="count" variant="none" badge-variant="warning" icon="cart"></b-avatar>
            </router-link>
          </span>
        </li>

        <fragment v-if="!isLoggedIn">
          <li class="nav-item">
          <span class="nav-link">
            <router-link tag="span" class="cursor-pointer" to="/login">
              Login
            </router-link>
          </span>
          </li>

          <li class="nav-item">
          <span class="nav-link">
            <router-link tag="span" class="cursor-pointer" to="/register">
              Register
            </router-link>
          </span>
          </li>
        </fragment>

        <fragment v-else>
          <li class="nav-item">
            <span class="nav-link">
            <router-link tag="span" class="cursor-pointer" to="/profile">
              Profile
            </router-link>
          </span>
          </li>

          <li class="nav-item">
            <span class="nav-link cursor-pointer" @click="logout">Log Out</span>
          </li>
        </fragment>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class TopNav extends Vue {

    get count() {
      return '' + this.$store.getters['shop/count']
    }

    changeCurrency() {
      this.$store.commit('shop/changeCurrency')
    }

    get currency() {
      return this.$store.getters['shop/currency']
    }

    get isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn']
    }

    logout() {
      this.$store.dispatch('auth/logout')
        .then(() => {
          this.$router.push('/').catch()
        })
    }
  }
</script>
