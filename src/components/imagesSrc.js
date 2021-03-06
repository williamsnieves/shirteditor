import React from 'react';

export default React.createClass({
  clickHandler(e){
    e.preventDefault();
    let base = window.location.href;
    let pathImage = e.target.attributes.src.value;
    let urlImg = base + pathImage;
    let canvas = this.props.canvas;
    //console.log(canvas.width, canvas.height);
    canvas.clear()
    let image = fabric.Image.fromURL(urlImg, function(oImg) {
        oImg.set({
          top: canvas.height / 2,
          left: canvas.width / 2,
          originX: 'center',
          originY: 'center'
        });
        /*oImg.filters.push(
    			new fabric.Image.filters.Grayscale()
    		)
        oImg.applyFilters(canvas.renderAll.bind(canvas))*/
        canvas.add(oImg);
        canvas.sendToBack(oImg)


    });
  },
  render(){
    let {url} = this.props;
    return (
      <div className="image-wrapper-pic">
        <img src={url} onClick={this.clickHandler}/>
      </div>
    )
  }
})
