import React from 'react'

export default class LikeButton extends React.Component {

    // 默认配置
    static defaultProps = {
        liketext: '赞', 
        unlikedtext: '不赞'
    }
    constructor() {
        super()
        this.state = {
            isLiked: false,
            count: 0
        }
    }
    handleClick() {
        console.log(this.state.isLiked)
        this.setState({
            isLiked: !this.state.isLiked
        })
        console.log(this.state.isLiked)
    }

    render() {
        // const wordings = this.props.wordings || { liketext: '赞', unlikedtext: '不赞' }
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>{this.state.isLiked ? '点赞' : '取消'}</button>
                <div>
                    {this.state.isLiked ? this.props.liketext : this.props.unlikedtext}
                </div>
            </div>
        )
    }
}