import React from 'react';


export default React.createClass({
  clickHandler(e){
    e.preventDefault();
    let base = window.location.href;
    let pathImage = e.target.attributes.src.value;
    let urlImg = base + pathImage;
    let canvas = new fabric.Canvas('main');

    let image = fabric.Image.fromURL(urlImg, function(oImg) {
        canvas.add(oImg);
    });
  },
  render(){
    let {url} = this.props;
    return (
      <div>
        <img src={url} onClick={this.clickHandler}/>
      </div>
    )
  }
})
