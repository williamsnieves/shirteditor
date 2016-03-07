import React from 'react'
import Canvas from './canvas'
import Images from './images'
import Filters from './filters'

export default React.createClass({
  getInitialState(){
    return {
      canvas: null
    }
  },
  componentDidMount(){
    this.setState({
      canvas: new fabric.Canvas('main')
    })
  },
  render(){
    let canvasInstance = this.state.canvas;
    return (<section className="wrapper">
      <Canvas />
      <Images canvas={canvasInstance} />
      <Filters canvas={canvasInstance} />
    </section>)
  }
})
