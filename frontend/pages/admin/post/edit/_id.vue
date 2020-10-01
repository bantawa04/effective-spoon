<template>
  <b-container class="container-wrapper">
    <b-row>
      <b-col
        class="content-wrapper shadow"
        sm="12"
        md="6"
        offset-md="3"
      >
        <b-form @submit="onSubmit">
          <h1 class="form-title my-4">
            Edit post
          </h1>
          <b-form-group
            label="Title"
          >
            <b-form-input
              id="input-2"
              type="text"
              required
            />
          </b-form-group>
          <b-form-group
            label="Image"
          >
            <b-form-file
              v-model="image"
              accept=".jpg, .png"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            />
          </b-form-group>
          <b-form-group
            label="Content"
          >
            <b-form-textarea
              id="textarea"
              v-model="text"
              rows="10"
            />
          </b-form-group>
          <b-button type="submit" class="btn-type-1 mt-2">
            Save
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Edit',
  layout: 'admin',
  data () {
    return {
      image: ''
    }
  },
  methods: {
    onSubmit () {
    }
  }
}
</script>

<style scoped>

</style>
