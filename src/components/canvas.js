import React from 'react';

export default React.createClass({
  componentDidMount(){
    var canvas = new fabric.Canvas('main');
    var rect = new fabric.Rect({
  		left: 100,
  		top: 100,
  		fill: 'red',
  		width: 20,
  		height: 20,
  		angle: 45
  	})

    var text = new fabric.Text('Hello fabric' ,{
      fontSize: 30
    })

    canvas.add(text)
    canvas.add(rect)
  },

  render(){
    return (
      <canvas id="main" width="680" height="400">
      </canvas>
    )
  }


})
