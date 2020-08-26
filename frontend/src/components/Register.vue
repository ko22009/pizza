<template>
  <b-form @submit.prevent="register">

    <b-form-group
      label="Login:" label-for="input-1"
      :state="state('login')"
      :invalid-feedback="error('login')"
    >
      <b-form-input
        id="input-1"
        v-model="form.login"
        placeholder="Enter login"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      label="Email address:"
      label-for="input-2"
      description="We'll never share your email with anyone else."
      :state="state('email')"
      :invalid-feedback="error('email')"
    >
      <b-form-input
        id="input-2"
        v-model="form.email"
        placeholder="Enter email"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      label="Your Name:"
      label-for="input-3"
      :state="state('name')"
      :invalid-feedback="error('name')"
    >
      <b-form-input
        id="input-3"
        v-model="form.name"
        placeholder="Enter name"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      label="Password:"
      label-for="input-4"
      :state="state('password')"
      :invalid-feedback="error('password')"
    >
      <b-form-input
        id="input-4"
        type="password"
        v-model="form.password"
        placeholder="Enter password"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      label="Password confirmation:"
      label-for="input-5"
      :state="state('password_confirmation')"
      :invalid-feedback="error('password_confirmation')"
    >
      <b-form-input
        id="input-5"
        type="password"
        v-model="form.password_confirmation"
        placeholder="Enter password again"
      ></b-form-input>
    </b-form-group>
    <b-form-invalid-feedback class="mb-2" :force-show="!!commonError">{{ commonError }}</b-form-invalid-feedback>
    <b-button type="submit" variant="primary">Register</b-button>
  </b-form>
</template>

<script lang="ts">

  import {Vue, Component} from "vue-property-decorator";

  @Component
  export default class Register extends Vue {
    form = {
      name: '',
      login: '',
      email: '',
      password: '',
      password_confirmation: ''
    }

    commonError = ''
    errors: { [key: string]: Array<string> } = {}

    state(field: string) {
      return !(field in this.errors)
    }

    error(field: string) {
      if (field in this.errors) {
        return this.errors[field].join(', ')
      }
      return ''
    }

    register() {
      this.$store.dispatch('auth/register', this.form)
        .then(() => this.$router.push('/'))
        .catch(err => {
          this.errors = err.errors
          this.commonError = err.error
        })
    }

  }

</script>
