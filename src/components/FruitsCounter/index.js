import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    m: 0,
    b: 0,
  }

  mango = () => {
    this.setState(p => ({
      m: p.m + 1,
    }))
  }

  banana = () => {
    this.setState(p => ({
      b: p.b + 1,
    }))
  }

  render() {
    const {m, b} = this.state
    return (
      <div className="container">
        <div className="imgcontainer">
          <h1>
            Bob ate {m} mangoes {b} bananas
          </h1>

          <div className="imgele">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <div>
                <button type="button" onClick={this.mango}>
                  Eat Mango
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="bananaS"
              />
              <div>
                <button type="button" onClick={this.banana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
