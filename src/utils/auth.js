function isAuth () {
  return window.localStorage.getItem('token') !== null
}

export { isAuth }
