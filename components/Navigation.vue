<template>
  <header>
    <b-container>
      <b-navbar toggleable="lg" type="light">
        <b-navbar-brand to="/" class="logo-wrapper">
          <img src="@/assets/img/logo.png" alt="" srcset="" height="45px">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav class="nav-wrapper">
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/recent-posts">Recent Posts</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/contact">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>

</style>
