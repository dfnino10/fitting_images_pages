import React, { Component } from 'react';
import Result from '../Result/Result'
import './ImageLinkForm.css'
import uploadIcon from './outbox.svg';

class ImageLinkForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            imageSrc: null,
            imageHeight: null,
            imageWidth: null
        }
    }

    handleChange = (event) => {
        if(typeof event.target.files[0] !== 'undefined'){
            let image = new Image();
            image.src = URL.createObjectURL(event.target.files[0]);
            let size = []
            image.onload = (()=>{ 
                size[0] = image.height; 
                size[1]= image.width;
                this.setState({
                    imageSrc: image.src,
                    imageHeight: size[0],
                    imageWidth: size[1]
                }) 
            });
        }
    }

    render(){
        let renderElement = this.state.imageSrc === null? <></>:<Result imageSrc={this.state.imageSrc} imageHeight={this.state.imageHeight} imageWidth={this.state.imageWidth}/>
        return(
            <div className='ma4 mt0'>
                <p className='f3'>
                    {'This will detect the desired dimensions and orientation of the image to fit in an A4 page'}
                </p>
                <div className='flex justify-center'>
                    <div className='felx pa4 br3 shadow-2 align-center'>
                        <input className='f4 pa2 inputfile' type="file" name='file' id='file' accept='.jpg' onChange={this.handleChange}/>
                        <label className='flex br2 grow mh3 ph3 pv2 ba bw1 b--black' htmlFor="file">
                            <img className='align-center ph2' src= {uploadIcon} style={{height: '18px'}}>
                            </img>
                            Choose a file
                        </label>
                        {/* <button className='grow f4 br2 link ph3 pv2 dib white bg-blue pointer'>Process</button> */}
                    </div>
                </div>
                {renderElement}
            </div>
        );
    }
} 

export default ImageLinkForm;