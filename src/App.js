import React from 'react';
import PTypes from 'prop-types';

const App = () =>{
  const profiles = [
    { name:"Taro",age:10},
    { name:"Hanako",age:5},
    { name:"Rin"}
  ]
  return (
  <React.Fragment>
    {
      profiles.map((profile,index)=>{
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
    {/* <User name = {"Taro"} age={10}/>
    <User name = {"Hanako"} age={5}/> */}
  </React.Fragment>
  )
}
const User = (props)=>{
  return <h1>Hi!I am {props.name},and {props.age}years old!</h1>
}
User.defaultProps = {
  age:5
}

User.propTypes = {
  name: PTypes.string,
  age:PTypes.number.isRequired
}

export default App;
