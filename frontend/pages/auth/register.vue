<template>
  <b-container class="container-wrapper" @submit="onSubmit">
    <b-row>
      <b-col
        sm="12"
        md="4"
        offset-md="4"
        class="content-wrapper shadow"
      >
        <Message v-if="error.mode" :title="error.title" :message="error.message" :type="error.type" />
        <b-form>
          <h1 class="form-title my-4">
            Register
          </h1>

          <b-form-group
            id="input-group-0"
            label="Name :"
            label-for="input-11"
          >
            <b-form-input
              id="input-11"
              v-model="form.name"
              type="text"
              required
              placeholder="Name"
            />
          </b-form-group>

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
            id="input-group-3"
            label="Confirm password:"
            label-for="input-1"
          >
            <b-form-input
              id="input-3"
              v-model="form.confirmPassword"
              type="password"
              required
              placeholder="Enter password"
            />
          </b-form-group>
          <b-button type="submit" class="btn-type-1 mt-2">
            Register
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import message from '@/components/message'

export default {
  name: 'Register',
  layout: 'admin',
  components: {
    message
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      error: {
        mode: false,
        type: '',
        message: '',
        title: ''
      }
    }
  },
  methods: {
    async onSubmit (e) {
      e.preventDefault()
      try {
        const res = await this.$store.dispatch('admin/register', this.form)
        if (res.status === 200) {
          this.error.mode = true
          this.error.title = 'Success ! '
          this.error.message = 'Account created successfully. Please login'
          this.error.type = 'success'
          this.onReset()
        }
      } catch (e) {
        // console.log(e.response.data.errors[0].message)
        // console.log(e.response.data.errors[0].status)
        if (e.response.data.errors.length > 0) {
          this.error.mode = true
          this.error.title = 'User creation failed !'
          this.error.message = e.response.data.errors[0].message
          this.error.type = 'danger'
        }
      }
    },
    onReset () {
      this.form.name = ''
      this.form.email = ''
      this.form.password = ''
      this.form.confirmPassword = ''
    }
  }
}
</script>

<style scoped>

</style>
