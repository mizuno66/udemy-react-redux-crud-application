import React from 'react';
import PropTypes from 'prop-types';

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
      age: 3,
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

// prop-types定義（型チェック）
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

export default App;
