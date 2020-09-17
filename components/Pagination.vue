<template>
  <div class="overflow-auto">
    <div class="mt-3">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        align="center"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {
      rows: 10,
      perPage: 3,
      currentPage: 1
    }
  }
}
</script>

<style scoped></style>
