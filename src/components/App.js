import React,{Component} from 'react';
import { connect } from 'react-redux'

import { increment,decrement} from '../actions'

class App extends Component {
  // constructor(props){
    // super(props)
    // this.state = {count:0} この働きはReduxのReducerが担う
    // }

  // AvtionCreatorが以下の役割を担うので削除 
  // handlePlusButton = () => {
  //   console.log("handlePlusButton")
  //   // this.state.count +=1
  //   this.setState({count: this.state.count +1 })
  //   console.log(this.state.count)
  // }
  // handleMinusButton = () =>{
  //   this.setState({count:this.state.count -1})
  // }

  render(){
    const props = this.props
    return(
    <React.Fragment>
    <div>value:{props.value}</div>
    <button onClick={props.increment}>+1</button>
    <button onClick={props.decrement}>-1</button>
    </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
// ショートハンドで、以下でも可能
// const mapDispatchToProps = ({increment,decrement})

export default connect(mapStateToProps,mapDispatchToProps)(App)