import React from 'react'
import { Link } from 'react-router-dom'
import { getTopics } from '../../utils/forumRequests'

class Topics extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      topics: []
    }
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    const topics = await getTopics().then(res => res.json())
    this.setState({ topics })
  }

  calcTime (dateIsoFormat) {
    let diff = new Date() - (new Date(dateIsoFormat))
    diff = Math.floor(diff / 60000)
    if (diff < 1) return 'less than a minute'
    if (diff < 60) return diff + ' minute' + pluralize(diff)
    diff = Math.floor(diff / 60)
    if (diff < 24) return diff + ' hour' + pluralize(diff)
    diff = Math.floor(diff / 24)
    if (diff < 30) return diff + ' day' + pluralize(diff)
    diff = Math.floor(diff / 30)
    if (diff < 12) return diff + ' month' + pluralize(diff)
    diff = Math.floor(diff / 12)
    return diff + ' year' + pluralize(diff)
    function pluralize (value) {
      if (value !== 1) return 's'
      else return ''
    }
  }

  render () {
    return (
      <ul className='list-group'>
        {this.state.topics.map(topic => (
          <li key={topic._id} className='list-group-item d-flex justify-content-between align-items-center'>
            <Link to={`/topics/${topic._id}`}>{topic.title} | {this.calcTime(topic._kmd.ect)}</Link>
            <span className='badge badge-primary badge-pill'>{14}</span>
          </li>
        ))}

      </ul>
    )
  }
}

export default Topics
