import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Histoslider from '../lib/components/Histoslider'

const main = document.getElementById('main')

class App extends Component {

  histogramChanged (newSelection) {
    this.setState({
      selection: newSelection
    })
  }

  constructor () {
    super()
    this.state = {
      selection: [4, 2]
    }
  }

  changeX (e) {
    this.setState({
      selection: [+e.target.value, this.state.selection[1]]
    })
  }

  changeY (e) {
    this.setState({
      selection: [this.state.selection[0], +e.target.value]
    })
  }

  render () {
    const data = [1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 5, 5, 6, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 3, 2, 3, 3, 3, 3, 3]
    return (
      <div>
        <div style={{ margin: '0 0 1rem 0' }}>
          <p><b>Selection</b> { this.state.selection ? <code>{JSON.stringify(this.state.selection)}</code> : 'None' }</p>
        </div>
        <div className='demo-wrapper'>
          <Histoslider
            selection={this.state.selection}
            padding={20}
            width={400}
            height={200}
            data={data}
            onChange={this.histogramChanged.bind(this)}
          />
          <Histoslider
            selection={this.state.selection}
            padding={20}
            width={400}
            height={200}
            bucketSize={3}
            selectionColor='purple'
            data={data}
            onChange={this.histogramChanged.bind(this)}
          />
          <Histoslider
            selection={this.state.selection}
            padding={20}
            width={400}
            height={200}
            selectionColor='orange'
            bucketSize={6}
            data={data}
            onChange={this.histogramChanged.bind(this)}
          />
          <Histoslider
            selection={this.state.selection}
            padding={15}
            width={400}
            height={200}
            selectionColor='steelblue'
            bucketSize={2.5}
            data={data}
            onChange={this.histogramChanged.bind(this)}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(React.createElement(App), main)
