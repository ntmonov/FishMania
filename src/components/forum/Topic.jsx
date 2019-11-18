import React from 'react'
import { Link } from 'react-router-dom'
import { getPostsByTopicId } from '../../utils/forumRequests'

class Topic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    getPostsByTopicId(this.props.topic._id).then(res => res.json()).then(data => { this.setState({ count: data.count }) })
  }

  render () {
    const { topic, calcTime } = this.props
    const count = this.state.count || 0
    return (
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        <Link to={`/topics/${topic._id}`}>{topic.title} | {calcTime}</Link>
        <span className='badge badge-primary badge-pill'>{count}</span>
      </li>
    )
  }
}

export default Topic
