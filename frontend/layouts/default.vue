<template>
  <div>
    <Navigation :is-admin="false" />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'
export default {
  components: {
    Navigation,
    Footer
  }
}
</script>
