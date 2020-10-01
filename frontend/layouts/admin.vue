<template>
  <div>
    <Navigation v-if="!isLogin" :is-admin="isAdmin" />
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navigation from '~/components/Navigation'

export default {
  name: 'Admin',
  components: {
    Navigation
  },
  data () {
    return {
      isLogin: false
    }
  },
  computed: {
    ...mapState('admin', {
      isAdmin: 'authenticated'
    })
  },
  mounted () {
    this.setNav()
    this.loadState()
    this.autoLogout()
  },
  methods: {
    loadState () {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      const payload = {
        status: true,
        token,
        userId
      }
      if (token && userId) {
        this.$store.commit('admin/loadUserData', payload)
      }
    },
    autoLogout () {
      const expiryDate = localStorage.getItem('expiryDate')
      if (expiryDate) {
        const remainingMilliseconds =
          new Date(expiryDate).getTime() - new Date().getTime()
        this.$store.dispatch('admin/autoLogout', remainingMilliseconds)
      }
    },
    setNav () {
      if (this.$route.name === 'admin-login') {
        this.isLogin = true
      }
    }
  }
}
</script>

<style scoped>

</style>
