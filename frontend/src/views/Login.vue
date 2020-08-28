<template>
  <b-form @submit.prevent="login">

    <b-form-group
      :state="state('login')"
      :invalid-feedback="error('login')"
    >
      <b-form-input
        v-model="form.login"
        placeholder="Enter login"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      :state="state('password')"
      :invalid-feedback="error('password')"
    >
      <b-form-input
        type="password"
        v-model="form.password"
        placeholder="Enter password"
      ></b-form-input>
    </b-form-group>
    <b-form-invalid-feedback class="mb-2" :force-show="!!commonError">{{ commonError }}</b-form-invalid-feedback>
    <b-button type="submit" variant="primary">Login</b-button>
  </b-form>
</template>

<script lang="ts">

  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class Login extends Vue {
    form = {
      login: '',
      password: ''
    }

    commonError = ''
    errors: { [key: string]: Array<string> } = {}

    state(field: string) {
      return this.errors && !(field in this.errors)
    }

    error(field: string) {
      if (this.errors && field in this.errors) {
        return this.errors[field].join(', ')
      }
      return ''
    }

    login() {
      this.$store.dispatch('auth/login', this.form)
        .then(() => this.$router.push('/').catch((_) => {
        }))
        .catch(err => {
          this.errors = err.errors
          this.commonError = err.error
        })
    }

  }

</script>
