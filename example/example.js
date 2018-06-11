import React from 'react'
import ReactDOM from 'react-dom'
import { DraggableContainer, DraggableChild } from '../src/index'

class Example extends React.Component {
  children = [
    { id: 1, color: '#0000FF', size: 50 },
    { id: 2, color: '#00FF99', size: 100 },
    { id: 3, color: '#333366', size: 150 },
    { id: 4, color: '#CC66FF', size: 200 },
  ]

  _renderChildren() {
    return this.children.map(({ id, color, size }) => {
      const style = { background: color, width: size, height: size }
      return (
        <DraggableChild key={id}>
          <div style={style} />
        </DraggableChild>
      )
    })
  }

  render() {
    return (
      <DraggableContainer>
        {this._renderChildren()}
      </DraggableContainer>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))