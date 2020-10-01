<template>
  <header>
    <b-container>
      <b-navbar toggleable="lg" type="light">
        <b-navbar-brand to="/" class="logo-wrapper">
          <img src="@/assets/img/logo.png" alt="" srcset="" height="45px">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav class="nav-wrapper">
          <b-navbar-nav v-if="isAdmin" class="ml-auto">
            <b-nav-item to="/admin/dashboard">
              Dashboard
            </b-nav-item>
            <b-nav-item to="/admin/post/create">
              Create Post
            </b-nav-item>
            <b-nav-item @click="logout">
              Logout
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-else class="ml-auto">
            <b-nav-item to="/">
              Home
            </b-nav-item>
            <b-nav-item to="/recent-posts">
              Recent Posts
            </b-nav-item>
            <b-nav-item to="/about">
              About
            </b-nav-item>
            <b-nav-item to="/contact">
              Contact
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    isAdmin: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    logout () {
      this.$store.commit('admin/logout')
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped>

</style>
