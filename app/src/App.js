import React, { Component } from 'react';

class App extends Component {
  render() {
    // ReactではReturnする場合は、一つのタグでなくてはならない
    // return (
    //   <div>
    //     <label htmlFor="bar">bar</label>
    //     <input type="text" onClick={() => {console.log("clicked")}} />
    //   </div>
    // )

    // divなしで書ける
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("clicked")}} />
      </React.Fragment>
    )
  }
}

export default App;
