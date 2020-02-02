import React, {Component} from 'react';
// Prop ・・・ 変更不可（イミュータブル）
// State ・・・ 変更可（ミュータブル）クラスコンポーネントで使用できる

const App = () => (<Counter></Counter>)

class Counter extends Component {
  // コンストラクタ（初期化時に実行される）
  constructor(props){
    // Component側の初期化処理を実行
    super(props)

    console.log(this.state)
    // stateの初期化
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    // setStateを使用することで自動でバインドされている仮想DOMが更新されて再描画される
    this.setState({ count: this.state.count + 1 })
  }
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render(){
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={ this.handlePlusButton }>+1</button>
        <button onClick={ this.handleMinusButton }>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
