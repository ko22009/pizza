<template>
  <div>
    <b-jumbotron header="404 Not Found" lead="Oops!">
      <p>Sorry, an error has occured, Requested page not found!</p>
      <router-link tag="div" to="/">
        <b-button variant="primary">Go to main page</b-button>
      </router-link>
    </b-jumbotron>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class PageNotFound extends Vue {
  }
</script>
