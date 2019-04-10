import React, { Component } from 'react';
import Canvas, {Image as CanvasImage, Path2D, ImageData} from 'react-native-canvas';
import Img from "../asset/placeHolderImage.jpg"
 
class App extends Component {
 
  handleCanvas = (canvas) => {
    const context = canvas.getContext('2d');
    const image = new CanvasImage(canvas);
    canvas.width = 100;
    canvas.height = 100;


    image.src = this.props.data
    image.addEventListener('load', () => {
      context.drawImage(image, 0, 0, 100, 100);
    });




  }
 
  render() {
    return (
      <Canvas ref={this.handleCanvas} style={{width:"100%",height:500,borderWidth:2,borderColor:"black"}}/>
    )
  }
}

export default App