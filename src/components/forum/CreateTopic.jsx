import React from 'react'
import { withRouter } from 'react-router-dom'
import { postTopic } from '../../utils/forumRequests'

class CreateTopic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const value = e.target.value
    this.setState({ title: value })
  }

  async handleSubmit (e) {
    e.preventDefault()
    try {
      await postTopic(this.state.title)
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
            <input type='text' className='form-control' id='title' name='title' value={this.state.title} onChange={this.handleChange} />
          </div>
          <button type='submit' className='btn btn-primary'>Post topic</button>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateTopic)
