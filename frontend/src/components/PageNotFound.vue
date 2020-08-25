<template>
  <div>
    <b-jumbotron header="404 Not Found" lead="Oops!">
      <p>Sorry, an error has occured, Requested page not found!</p>
      <b-button variant="primary" href="#" @click.prevent="$router.goPage('/')">Go to main page</b-button>
    </b-jumbotron>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class PageNotFound extends Vue {
  }
</script>
