import React, { Component } from 'react';
import './ImageLinkForm.css'
import uploadIcon from './outbox.svg';

class ImageLinkForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            file: null,
            height: null,
            width: null
        }
    }

    handleChange = (event) => {
        if(typeof event.target.files[0] !== 'undefined'){
            this.setState({
                file: URL.createObjectURL(event.target.files[0])
            })
        }
    }

    render(){
        const image = new Image();
        
        if(this.state.file !==null){
            image.src = this.state.file;
            image.onload = () =>  { this.setState({height : image.height, width: image.width})}
        }
        const imageElement = this.state.file ===null? null: <img src={this.state.file} width='300px'></img>;
        return(
            <div className='ma4 mt0'>
                <p className='f3'>
                    {'This will detect the desired size and orientation of the image'}
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
                <div className='mv3'>
                    {imageElement}
                </div>
                <div>
                    <p>The image height is: {this.state.height}</p>
                </div>

            </div>
        );
    }
} 

export default ImageLinkForm;