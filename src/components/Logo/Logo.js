import React from 'react';
import Tilty from 'react-tilty';
import proteccionLogo from './proteccionLogo.png';

const Logo = () =>{
    return(
        <div className='ma4 mt0'>
            <Tilty className='br2 shadow-2' reverse scale={1.2} perspective={2000} reset={false} style={{ transformStyle: 'preserve-3d', height:150, width: 150 }}>
                <div style={{ transform: 'translateZ(10px)' }}>
                    <img
                        className='content-center'
                        src = {proteccionLogo}
                    >
                    </img>
                </div> 
            </Tilty>
        </div>
    );
} 

export default Logo;