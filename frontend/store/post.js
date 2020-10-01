export const state = {
  posts: [],
  post: {
    title: '',
    content: '',
    imageUrl: ''
  }
}

export const actions = {
  fetchPost ({ rootState }) {
    console.log(rootState.admin.token)
    // const res = await this.$axios.get('http://localhost:8080/graphql')
    // console.log(res)
    // commit('loadPosts', res.data.data.posts)
  },
  async uploadPostImage ({ rootState }, file) {
    // console.log(file)
    const res = await this.$axios.put('http://localhost:8080/post-image', file, {
      headers: {
        Authorization: 'Bearer ' + rootState.admin.token
      }
    })
    // console.log(res.data.filePath)
    return res.data.filePath
  },
  async createPost ({ rootState }, postData) {
    const graphqlQuery = {
      query: `
      mutation {
          createPost(postInput: {
            title: "${postData.title}",
            content: "${postData.content}",
            imageUrl: "${postData.imageUrl}"
          })
          {
            _id
            title
            content
          }
        }
      `
    }
    const res = await this.$axios.post('http://localhost:8080/graphql', graphqlQuery, {
      headers: {
        Authorization: 'Bearer ' + rootState.admin.token,
        'Content-Type': 'application/json'
      }
    })
    console.log(res)
    return res.status
  }
}

export const mutations = {
  loadPosts (posts) {
    this.state.posts = posts
  }
}
