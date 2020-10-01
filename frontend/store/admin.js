export const state = () => ({
  userId: '',
  token: '',
  authenticated: false
})

export const getters = {
  status: state => state.authenticated
}

export const actions = {
  async register (data, formData) {
    const graphqlQuery = {
      query: `
          mutation {
            createUser( userInput: {
              name:"${formData.name}",
              email:"${formData.email}",
              password:"${formData.password}",
              confirmPassword:"${formData.confirmPassword}"
            }){
              _id
              email
            }
          }
        `
    }
    const res = await this.$axios.post('http://localhost:8080/graphql', graphqlQuery, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res
  },
  async signIn ({ commit, dispatch }, formData) {
    const graphqlQuery = {
      query: `
        query{
            loginData(
              email: "${formData.email}",
              password: "${formData.password}"
            ) {userId, token}
        }
      `
    }
    const res = await this.$axios.post('http://localhost:8080/graphql', graphqlQuery, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    localStorage.setItem('token', res.data.data.loginData.token)
    localStorage.setItem('userId', res.data.data.loginData.userId)
    const remainingMilliseconds = 60 * 60 * 1000
    const expiryDate = new Date(
      new Date().getTime() + remainingMilliseconds
    )
    localStorage.setItem('expiryDate', expiryDate.toISOString())
    commit('loadUserData', {
      ...res.data.data.loginData,
      status: true
    })
    dispatch('autoLogout', remainingMilliseconds)
  },
  autoLogout ({ commit }, milliseconds) {
    setTimeout(() => {
      commit('logout')
    }, milliseconds)
  }
}

export const mutations = {
  loadUserData (state, data) {
    state.token = data.token
    state.userId = data.userId
    state.authenticated = data.status
  },
  logout () {
    localStorage.removeItem('userToken')
    localStorage.removeItem('expiryDate')
    localStorage.removeItem('userId')
    this.state.userId = null
    this.state.token = null
    this.state.authenticated = false
  }
}
