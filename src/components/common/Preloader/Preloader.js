import React from 'react';
import preloader from '../../../assets/images/oval.svg';

let Preloader = props => {
    return <div style={ { backgroundColor: 'grey' } }>
        <img src={preloader} alt={"Spinning loader"}/>
    </div>
};

export default Preloader;