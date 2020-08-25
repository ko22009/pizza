<template>
  <div id="app">
    <div id="nav">

      <b-nav>
        <b-nav-item v-if="!isLoggedIn" @click="$router.goPage('/login')">Login</b-nav-item>
        <b-nav-item v-else @click="logout">Logout</b-nav-item>
        <b-nav-item @click="$router.goPage('/')">Home</b-nav-item>
        <b-nav-item @click="$router.goPage('/profile')">Profile</b-nav-item>
      </b-nav>
      <b-avatar class="mr-3"></b-avatar>

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

<script lang="ts">

  import {Vue, Component} from "vue-property-decorator";

  @Component
  export default class App extends Vue {

    get isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }

    logout() {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    }

  }

</script>
