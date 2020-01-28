import React from 'react';

// クラスComponent
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("clicked")}} />
//       </React.Fragment>
//     )
//   }
// }

// 関数Component
const App = () => {
  return (
    <div>
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
