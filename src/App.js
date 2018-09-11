import React, { Component } from 'react';
//ReactはJSXを使うときはスコープに存在しないといけない
//JSXのタグはtranspileすると、JSに変換される。Reactがtranspileを担当する。
class App extends Component {
  render() {
    // const greeting = "Hi!TOM!"
    // const dom = <h1 className="foo">{greeting}</h1>
    // return  dom
    // return <input type="text" onClick={ () => {console.log("I am clicked")}}/>
    // return <input type="text" onChange={ () => {console.log("I am clicked")}}/>
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={ () => {console.log("I am clicked")}}/>
      </React.Fragment>
    )
  }
}

// class App extends Component {
//   render() {
//     return  React.createElement(
//       "h1",
//       null,
//       "Hello,world!!"
//     );
//   }
// }


export default App;
