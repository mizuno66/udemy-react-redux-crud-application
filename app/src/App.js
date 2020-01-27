import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         Hello,World!
//       </div>
//     );
//   }
// }

// jsxを使わない場合の書き方
// jsxを利用する場合は、トランスパイラーにて上記から下記に変換される
class App extends Component{
  render(){
    return React.createElement(
      "h1",
      null,
      "Hello, world!!"
    );
  }
}

export default App;
