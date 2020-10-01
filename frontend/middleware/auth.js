export default function ({ store, redirect }) {
  if (!store.state.admin.authenticated) {
    redirect('/auth/login')
  }
}
