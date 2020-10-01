<template>
  <b-container class="container-wrapper">
    <b-row class="content-wrapper">
      <b-col cols="12">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
            <tr>
              <th scope="col">
                #
              </th>
              <th scope="col">
                Title
              </th>
              <th scope="col">
                Image
              </th>
              <th scope="col">
                Created at
              </th>
              <th> Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">
                1
              </th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td class="d-flex">
                <b-button size="sm" variant="info" class="mr-2">
                  <i class="far fa-edit"/>
                </b-button>
                <b-button size="sm" variant="danger">
                  <i class="far fa-trash-alt"/>
                </b-button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </b-col>
      <b-col cols="12">
        <Pagination/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Pagination from '@/components/Pagination'

export default {
  name: 'Dashboard',
  layout: 'admin',
  components: {
    Pagination
  },
  fetch () {
    if (!this.$store.state.admin.authenticated) {
      this.$router.replace('/auth/login')
    }
  },
  async mounted () {
    await this.loadPost()
  },
  methods: {
    async loadPost () {
      await this.$store.dispatch('post/fetchPost')
    }
  }
}
</script>

<style scoped>

</style>
