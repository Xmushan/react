import React,{Component} from 'react'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {changeInput} from '../redux/action'
import changeReducer from '../redux/reducer';
let store = createStore(changeReducer)


class ThemeSwitch extends Component{
    constructor(){
        super()
        this.state={
            inputValue: store.getState().defaultValue,
            date: new Date()
        }
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.tick();
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    handleChangeInput(e){

        store.dispatch(changeInput(e.target.value))
        this.setState({
            inputValue: store.getState().defaultValue
        })
    }
    render(){
        return (
            <div>
                <input value={this.state.inputValue} onChange={this.handleChangeInput.bind(this)}/>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}




// container
class about extends Component{
    render(){
        return(
        <Provider store={store}>
            <div>
                TodoList
                <ThemeSwitch/>
            </div>
        </Provider>
        )
    }
}

export default about