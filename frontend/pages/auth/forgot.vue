<template>
  <b-container class="container-wrapper">
    <b-row>
      <b-col
        sm="12"
        md="4"
        offset-md="4"
        class="content-wrapper shadow"
      >
        <b-form @submit="onSubmit">
          <h1 class="form-title my-4">
            Forgot Password
          </h1>
          <b-form-group
            id="input-group-1"
            label="Email :"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            />
          </b-form-group>
          <b-button type="submit" class="btn-type-1 mt-2">
            Submit
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'ForgotPassword',
  layout: 'admin',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.name = ''
    }
  }
}
</script>

<style scoped>

</style>
