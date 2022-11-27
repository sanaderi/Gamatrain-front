export default function ({ $axios,app, redirect }) {
  $axios.onRequest(config => {
    // do something
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    // if (code === 400) {
    //   redirect('/400')
    // }
  })

  $axios.onResponseError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code == 403) {
      if (app.$auth.loggedIn) {
        app.$auth.logout();
      } else
        redirect("'/?access=denied'");
    }
  })
}
