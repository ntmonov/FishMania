function isAuth () {
  return window.localStorage.getItem('token') !== null
}

function isAuthor (userId) {
  return userId === window.localStorage.getItem('userId')
}

export { isAuth, isAuthor }
