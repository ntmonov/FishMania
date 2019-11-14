import React from 'react'
import { getPosts } from '../../utils/forumRequests'
import CreatePost from './CreatePost'

class Posts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
    this.getData = this.getData.bind(this)
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    const topicId = this.props.match.params.id
    const posts = await getPosts(topicId).then(res => res.json())
    this.setState({ posts })
  }

  render () {
    return (
      <>
        <CreatePost {...this.props} />
        {this.state.posts.map(post => (
          <div className='card' key={post._id}>
            <div className='card-body'>
              <h5 className='card-title'>{post.title}</h5>
              <p className='card-text'>{post.body}</p>
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default Posts
