import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  randomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    this.setState(prevCount => ({count: prevCount.count + this.randomNumber()}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-con">
        <div className="card-con">
          <h1 className="heading">
            Count <span className="span">{count}</span>
          </h1>
          <p className="desc">Count is {text}</p>
          <button type="button" className="btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
