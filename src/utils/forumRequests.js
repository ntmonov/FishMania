const URL = 'https://baas.kinvey.com/'
const APP_KEY = 'kid_H1t1K1diH'

function getTopics () {
  const kinveyHeaders = {
    'Content-Type': 'application/json',
    Authorization: 'Kinvey ' + window.localStorage.getItem('token')
  }
  const fetchData = {
    method: 'GET',
    headers: kinveyHeaders
  }
  return window.fetch(`${URL}appdata/${APP_KEY}/topics`, fetchData)
}

function getPosts (topicId) {
  const kinveyHeaders = {
    'Content-Type': 'application/json',
    Authorization: 'Kinvey ' + window.localStorage.getItem('token')
  }
  const fetchData = {
    method: 'GET',
    headers: kinveyHeaders
  }
  return window.fetch(`${URL}appdata/${APP_KEY}/posts/?query={"topicId":"${topicId}"}`, fetchData)
}

function postTopic (title) {
  const kinveyHeaders = {
    'Content-Type': 'application/json',
    Authorization: 'Kinvey ' + window.localStorage.getItem('token')
  }
  const fetchData = {
    method: 'POST',
    headers: kinveyHeaders,
    body: JSON.stringify({ title })
  }
  return window.fetch(`${URL}appdata/${APP_KEY}/topics`, fetchData)
}

function postComment (post) {
  const kinveyHeaders = {
    'Content-Type': 'application/json',
    Authorization: 'Kinvey ' + window.localStorage.getItem('token')
  }
  const fetchData = {
    method: 'POST',
    headers: kinveyHeaders,
    body: JSON.stringify(post)
  }
  return window.fetch(`${URL}appdata/${APP_KEY}/posts`, fetchData)
}

export { getTopics, getPosts, postTopic, postComment }
