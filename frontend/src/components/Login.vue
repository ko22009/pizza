<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label for="email">Email</label>
      <input id="email" required v-model="email" type="email" placeholder="Name"/>
      <label for="password">Password</label>
      <input id="password" required v-model="password" type="password" placeholder="Password"/>
      <hr/>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">

  import {Vue, Component} from "vue-property-decorator";

  @Component
  export default class Login extends Vue {
    email: any;
    password: any;

    login () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email, password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }

  }

</script>
