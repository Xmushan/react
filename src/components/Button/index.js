import React from 'react'

export default class Button extends React.Component {

    renderFun(good,bad){
        let flag = false
        return flag ? good : bad
    }
    render() {
        return (
            <div>

            {
                this.renderFun(
                    <strong>好的</strong>,
                    <strong>坏的</strong>
                )
            }

            </div>
        )
    }
}