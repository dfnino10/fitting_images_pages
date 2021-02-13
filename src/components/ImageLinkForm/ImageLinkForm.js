import React from 'react';
import './ImageLinkForm.css'
import uploadIcon from './outbox.svg';

const ImageLinkForm = () =>{
    return(
        <div className='ma4 mt0'>
            <p className='f3'>
                {'This will detect the desired size and orientation of the image'}
            </p>
            <div className='flex justify-center'>
                <div className='felx pa4 br3 shadow-2 align-center'>
                    <input className='f4 pa2 inputfile' type="file" name='file' id='file'/>
                    <label className='flex br2 grow mh3 ph3 pv2 ba bw1 b--black' for="file">
                        <img className='align-center ph2' src= {uploadIcon} style={{height: '15px'}}>
                        </img>
                        Choose a file
                    </label>
                    <button className='grow f4 br2 link ph3 pv2 dib white bg-light-blue'>Process</button>
                </div>
                
            </div>
        </div>
    );
} 

export default ImageLinkForm;