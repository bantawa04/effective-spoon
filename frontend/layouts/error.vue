<template>
  <b-container>
    <b-row>
      <b-col class="error-wrapper">
        <h1 class="error-code">{{statusCode}}</h1>
        <h4>{{message}}</h4>
        <b-link to="/" class="btn to-home">Home</b-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'error.vue',
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    },
    message () {
      return this.error.message || 'Error'
    }
  }
}
</script>

<style scoped>

</style>
