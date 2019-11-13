const URL = 'https://baas.kinvey.com/'
const APP_KEY = 'kid_H1t1K1diH'
const APP_SECRET = '74987b3b79e34df8a40cca4b395e479c'

const basicHeaders = {
  'Content-Type': 'application/json',
  Authorization: 'Basic ' + window.btoa(`${APP_KEY}:${APP_SECRET}`)
}

function register (user) {
  const fetchData = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: basicHeaders
  }
  return window.fetch(`${URL}user/${APP_KEY}/`, fetchData)
}

function login (user) {
  const fetchData = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: basicHeaders
  }
  return window.fetch(`${URL}user/${APP_KEY}/login`, fetchData)
}

function logout () {
  const kinveyHeaders = {
    'Content-Type': 'application/json',
    Authorization: 'Kinvey ' + window.localStorage.getItem('token')
  }
  const fetchData = {
    method: 'POST',
    headers: kinveyHeaders
  }
  return window.fetch(`${URL}user/${APP_KEY}/_logout`, fetchData)
}

export { register, login, logout }
