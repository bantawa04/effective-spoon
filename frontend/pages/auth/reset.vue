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
            Reset Password
          </h1>
          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="input-1"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              required
              placeholder="Enter password"
            />
          </b-form-group>
          <b-form-group
            label="Password:"
            label-for="input-1"
          >
            <b-form-input
              v-model="form.password"
              type="password"
              required
              placeholder="Enter password"
            />
            <b-button type="submit" class="btn-type-1 mt-2">
              Reset
            </b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'ResetPassword',
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
