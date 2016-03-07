import React from 'react';
import ImageSrc from './imagesSrc';

export default React.createClass({

  render(){
    return (
      <div>
        <ImageSrc url="assets/barcaback.png" canvas={this.props.canvas} />
        <ImageSrc url="assets/arsenalback.png" canvas={this.props.canvas} />
        <ImageSrc url="assets/bayernback.png" canvas={this.props.canvas} />
        <ImageSrc url="assets/chelseaback.png" canvas={this.props.canvas} />
        <ImageSrc url="assets/madridback.png" canvas={this.props.canvas} />
        <ImageSrc url="assets/villarealback.png" canvas={this.props.canvas} />
      </div>
    )
  }
})
