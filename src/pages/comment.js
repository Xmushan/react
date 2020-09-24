import React, {Component} from 'react'
import CommentInput from '../components/Comment/commentInput'
import CommentList from '../components/Comment/commentList'
class comment extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  handleSubmitComment (comment) {
    this.state.comments.push(comment)
    this.setState({
      comment: this.state.comments
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default comment
