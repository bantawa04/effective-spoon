<template>
  <div>
    <b-alert show :variant="type">
      <p class="alert-heading m-0">
        <strong>{{ title }}</strong>
      </p>
      <p class="m-0">
        {{ message }}
      </p>
    </b-alert>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    title: {
      type: String,
      default: null
    },
    type: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
