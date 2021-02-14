import React from 'react';

const Result = ({imageSrc, imageHeight, imageWidth}) => {
    let ratio = imageHeight/imageWidth;

    const orientation = imageHeight>=imageWidth? 'vertical': 'horizontal';

    let A4Width, A4Height;

    if(orientation === 'vertical'){
        A4Width = 796;

        A4Height = 1123; 
    }else{
        A4Width = 1123;

        A4Height = 796; 
    }

    let resultWidth = imageWidth;
    let resultHeight = imageHeight;

    const fitVertically = () => {
        resultHeight = A4Height;
        resultWidth = A4Height/ratio;
    }

    const fitHorizontally = () => {
        resultWidth = A4Width;
        resultHeight = A4Width*ratio;
    }

    if(orientation === 'horizontal' && imageWidth> A4Width){
        fitHorizontally();
        if(resultHeight>A4Height){
            fitVertically();
        }
    }

    if(orientation === 'vertical' && imageHeight> A4Height){
        fitVertically();
        if(resultWidth>A4Width){
            fitHorizontally();
        }
    }

    let returnElement=
    <div >
        <p className='f3'>Image preview</p>
        <img src={imageSrc} width='300px'></img>
        <p><strong>Results</strong></p>
        <p>Orientation: {orientation}</p>
        <p>Height: {resultHeight}</p>
        <p>Width: {resultWidth}</p>
    </div>;
    return(
        <>
            {returnElement}
        </>
    );
}

export default Result;
