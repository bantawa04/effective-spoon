<template>
  <b-container class="container-wrapper">
    <b-row>
      <b-col
        sm="12"
        md="4"
        offset-md="4"
        class="content-wrapper shadow"
      >
        <Message v-if="error.mode" :title="error.title" :message="error.message" :type="error.type"/>
        <b-form>
          <h1 class="form-title my-4">
            Login
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
            <b-button class="btn-type-1 mt-2" @click="onSubmit">
              Login
            </b-button>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import message from '@/components/message'
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  layout: 'admin',
  components: {
    message
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      error: {
        type: null,
        message: '',
        mode: false
      }
    }
  },
  computed: {
    ...mapGetters({
      status: 'admin/status'
    })
  },
  async mounted () {
    console.log('Mounted')
    console.log(this.$store.state.admin.authenticated)
    await this.checkAuth()
  },
  methods: {
    async onSubmit () {
      try {
        await this.$store.dispatch('admin/signIn', this.form)
        if (this.status) {
          console.log(this.status)
          this.onReset()
          console.log('Statue: ' + this.status)
          await this.$router.push({ path: '/admin/dashboard' })
        }
      } catch (e) {
        if (e) {
          console.log(e.message)
          this.error.mode = true
          this.error.title = 'Login failed'
          this.error.message = e.response.data.errors[0].message
          this.error.type = 'danger'
        } else if (e.response.data.errors.length > 0) {
          this.error.mode = true
          this.error.title = 'Login failed'
          this.error.message = e.message
          this.error.type = 'danger'
        }
      }
    },
    onReset () {
      this.form.email = ''
      this.form.password = ''
    },
    checkAuth () {
      setTimeout(() => {
        if (this.$store.state.admin.authenticated) {
          this.$router.replace('/admin/dashboard')
        }
      }, 10)
    }
  }
}
</script>

<style scoped>

</style>
