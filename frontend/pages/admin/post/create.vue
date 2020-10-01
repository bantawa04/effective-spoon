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
            Create new post
          </h1>
          <b-form-group
            label="Title"
          >
            <b-form-input
              id="input-2"
              v-model="form.title"
              type="text"
              required
            />
          </b-form-group>
          <b-form-group
            label="Image"
          >
            <div class="custom-file mb-3">
              <input
                id="customFile"
                ref="fileInput"
                type="file"
                class="custom-file-input"
                @input="pickFile"
              >
              <label
                class="custom-file-label"
                for="customFile"
              >
                {{ image.previewName ? image.previewName : 'Upload Image' }}
              </label>
            </div>
          </b-form-group>
          <div
            v-if="image.preview"
            class="imagePreviewWrapper"
            :style="{ 'background-image': `url(${image.previewPath})` }"
          />
          <b-form-group
            label="Content"
          >
            <b-form-textarea
              id="textarea"
              v-model="form.content"
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
  name: 'Create',
  layout: 'admin',
  data () {
    return {
      form: {
        title: '',
        content: '',
        imageUrl: ''
      },
      image: {
        preview: false,
        previewPath: '',
        previewName: '',
        file: ''
      },
      text: ''
    }
  },
  methods: {
    async onSubmit (event) {
      event.preventDefault()
      const formData = new FormData()
      formData.append('image', this.image.file)
      try {
        const filePath = await this.$store.dispatch('post/uploadPostImage', formData)
        this.form.imageUrl = filePath
        const status = await this.$store.dispatch('post/createPost', this.form)
        console.log(status)
        if (status === 200) {
          this.$router.push('/admin/dashboard')
        }
      } catch (e) {
        console.log(e)
      }
    },
    // async uploadImage () {
    //   await uploadImage()
    // },
    selectImage () {
      this.$refs.fileInput.click()
      this.error = null
    },
    pickFile () {
      const input = this.$refs.fileInput
      const file = input.files
      if (file[0].type === 'image/jpg' || file[0].type === 'image/jpeg' || file[0].type === 'image/png') {
        if (file) {
          this.generateBase64FromImage(file[0])
            .then((b64) => {
              this.image.previewPath = b64
              this.image.preview = true
              this.image.previewName = file[0].name
              this.image.file = file[0]
              // console.log(b64)
              // console.log(file[0])
            })
            .catch((e) => {
              console.log(e)
              this.image.previewImage = null
            })
        }
      } else {
        this.error = 'Only jpg,jpeg,png accepted.'
      }
    },
    resetPreview () {
      this.image.preview = null
    },
    generateBase64FromImage (imageFile) {
      const reader = new FileReader()
      const promise = new Promise((resolve, reject) => {
        reader.onload = e => resolve(e.target.result)
        reader.onerror = err => reject(err)
      })

      reader.readAsDataURL(imageFile)
      return promise
    }
  }
}
</script>

<style scoped lang="scss">
.imagePreviewWrapper {
  width: 250px;
  height: 250px;
  display: block;
  margin: 0 auto;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
