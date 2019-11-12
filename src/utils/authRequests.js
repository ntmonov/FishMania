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

export { register }
