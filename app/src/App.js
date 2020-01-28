import React from 'react';

const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10,
    },
    {
      name: "Hanako",
      age: 5,
    },
    {
      name: "NoName",
    },
  ]
  // mapを利用して表示
  return (
    <div>
      {
        profiles.map( (profiles, index) => {
          return(
            // KeyにIndexを渡す（仮想DOM内で一意に特定して再描画するため）
            <User name={profiles.name} age={profiles.age} key={index} />
          )
        })
      }
    </div>
  )
}

const User = (props) => {
  return (
    <div>Hi!, I am {props.name}, and {props.age} years old!</div>
  )
}

// デフォルト値を定義
User.defaultProps = {
  age: 1
}

export default App;
