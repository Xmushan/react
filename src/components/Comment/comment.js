import React from 'react'

export default class Comment extends React.Component{
    // static propsTypes = {
    //     comment: this.propsTypes.object.isRequired
    // }
    constructor(){
        super()
    }

    render(){
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}