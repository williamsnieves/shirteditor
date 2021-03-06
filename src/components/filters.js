import React from 'react';


export default React.createClass({
  customText: '',
  addTextHandler(e){
    e.preventDefault();
    let {canvas} = this.props;
    let $ = this.getDomId;
    let description = $("wrapper-description");
    description.style.display = "block";
    console.log(description);
    console.log("addButton", canvas);


  },
  getInitialState(){
    return {
      complete: false
    }
  },
  getDomId(id){
    return document.getElementById(id)
  },
  addCanvasHandler(e){
    e.preventDefault()
    let {canvas} = this.props
    let $ = this.getDomId;
    let title = $("title");

    let customText = new fabric.Text(title.value, {
      fontSize: 30,
      fill: 'white',
      originX: 'center',
      originY: 'center'
    })

    this.customText  = customText;

    canvas.add(customText);

    title.value = "";

    let description = $("wrapper-description");
    description.style.display = "none";

    console.log("add to canvas", title.value)
  },
  changeSizeHandler(e){
    e.preventDefault();
    this.customText.set({fontSize: e.target.value}).setCoords();
    this.props.canvas.renderAll();
    console.log("size", e.target.value);
  },
  changeTopHandler(e){
    e.preventDefault();
    this.customText.setTop(parseInt(e.target.value, 10)).setCoords();
    this.props.canvas.renderAll();
    console.log("top", e.target.value);
  },
  changeLeftHandler(e){
    e.preventDefault();
    this.customText.setLeft(parseInt(e.target.value, 10)).setCoords();
    this.props.canvas.renderAll();
    console.log("left", e.target.value);
  },
  changeGrayHandler(e){
    e.preventDefault();
    this.setState({
      complete: !this.state.complete
    })
    console.log(this.state)
    let {canvas} = this.props;
    var elementsCanvas = this.props.canvas.getObjects();
    if(this.state.complete){
      console.log("coloco el filtro")
      console.log(this.props.canvas.getObjects())

      elementsCanvas[0].filters.push(
        new fabric.Image.filters.Grayscale()
      )
      elementsCanvas[0].applyFilters(canvas.renderAll.bind(canvas))
    }else{
      console.log("quito el filtro")
      if(elementsCanvas.length > 0){
        elementsCanvas[0].filters.shift()
        elementsCanvas[0].applyFilters(canvas.renderAll.bind(canvas))
      }
    }
    //console.log("sepia", e.target.checked);
  },
  updateControls(){
     this.customText.value = this.customText.getAngle();
  },
  toggleOption(){

  },
  render(){
    return (
      <div className="wrapper-filters">
        <p>
          <button onClick={this.addTextHandler} className="create-button">Add text</button>
        </p>
        <p id="wrapper-description">
          <label>Title</label>
          <input type="text" name="title" id="title"/>
          <button onClick={this.addCanvasHandler} className="canvas-button">Add to canvas</button>
        </p>
        <p>
          <label>
            <span>Size:</span>
            <input onChange={this.changeSizeHandler} type="range" id="size-control" max="200" min="-200"/>
          </label>
        </p>
        <p>
          <label>
            <span>Top:</span>
            <input onChange={this.changeTopHandler} type="range" id="top-control" max="700" min="-700"/>
          </label>
        </p>
        <p>
          <label>
            <span>Left:</span>
            <input onChange={this.changeLeftHandler} type="range" id="left-control" max="700" min="-700"/>
          </label>
        </p>
        <p>
          <label>
            <span>Gray:</span>
            <input onChange={this.changeGrayHandler} type="checkbox" defaultChecked={this.state.complete}  id="gray-control"/>
          </label>
        </p>
      </div>
    )
  }
})
