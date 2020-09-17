<template>
  <div class="sidebar-widget sidebar-recent-post">
    <h4 class="widget-title">Recent Posts</h4>
    <ul>
      <li v-for="i in 5" :key="i">
        <h5 class="post-title">Welcome To Futura</h5>
        <p class="post-date">July 21, 2020</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recentPosts'
}
</script>

<style scoped>

</style>
