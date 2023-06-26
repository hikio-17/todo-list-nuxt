export default function ({ store, redirect }) {
  if (!store.state.auth.loggedIn) {
    alert('Silahkan login terlebih dahulu.')
    return redirect('/')
  }
}
