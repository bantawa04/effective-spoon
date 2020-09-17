<template>
  <b-container class="container-wrapper">
    <b-row>
      <b-col md="8" offset-md="2" class="contact-wrapper">
        <h1 class="form-title">Talk to John Doe</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deserunt eos excepturi incidunt placeat. A ab
          aperiam ipsa nesciunt voluptatem.</p>

        <b-row class="contact-form">
          <b-col sm="12 " md="4" lg="4">
            <b-form-group
              label="Name *"
            >
              <b-form-input
                id="name"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="12 " md="4" lg="4">
            <b-form-group
              label="Email *"
            >
              <b-form-input
                id="name"
                type="email"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="12 " md="4" lg="4">
            <b-form-group
              label="Subject *"
            >
              <b-form-input
                id="name"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Your message"
            >
              <b-form-textarea
                id="textarea"
                placeholder="Enter something..."
                rows="4"
                no-resize
              ></b-form-textarea>
            </b-form-group>
          </b-col>
          <b-col>
            <b-button class="btn btn-type-1">Send</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style scoped>
</style>
