import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
    constructor(props){
        super(props)
        
    }
  render() {
    console.log(this.props)
    return (
      <div>
        {/* <button onClick={()=>{console.log(this.props)}}>dianji</button> */}
        {this.props.comments.map((comment, i) =>
          <Comment comment={comment} key={i} />
        )}
      </div>
    )
  }
}

export default CommentList