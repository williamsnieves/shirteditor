import React from 'react'
import Canvas from './canvas'
import Images from './images'
import Filters from './filters'

export default React.createClass({
  render(){
    return (<section className="wrapper">
      <Canvas />
      <Images />
      <Filters />
    </section>)
  }
})
