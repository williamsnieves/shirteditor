import React from 'react';
import ImageSrc from './imagesSrc';

export default React.createClass({
  render(){
    return (
      <div>
        <ImageSrc url="assets/barcaback.png" />
        <ImageSrc url="assets/arsenalback.png" />
        <ImageSrc url="assets/bayernback.png" />
        <ImageSrc url="assets/chelseaback.png" />
        <ImageSrc url="assets/madridback.png" />
        <ImageSrc url="assets/villarealback.png" />
      </div>
    )
  }
})
