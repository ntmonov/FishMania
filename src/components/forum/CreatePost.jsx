import React from 'react'
import { postComment } from '../../utils/forumRequests'

class CreatePost extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      post: {
        topicId: '',
        title: '',
        body: '',
        user: window.localStorage.getItem('username')
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const name = e.target.name
    const value = e.target.value
    const post = this.state.post
    post[name] = value
    this.setState({ post })
  }

  async handleSubmit (e) {
    e.preventDefault()
    const topicId = this.props.match.params.id
    const post = this.state.post
    post.topicId = topicId
    this.setState({ post })
    try {
      await postComment(this.state.post)
    } catch (e) {
      console.log(e)
    }
    window.location.reload()
  }

  render () {
    return (
      <div className='container mb-3'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' name='title' value={this.state.post.title} onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='title'>Body</label>
            <input type='text' className='form-control' id='body' name='body' value={this.state.post.body} onChange={this.handleChange} />
          </div>
          <button type='submit' className='btn btn-primary'>Post</button>
        </form>
      </div>
    )
  }
}

export default CreatePost
