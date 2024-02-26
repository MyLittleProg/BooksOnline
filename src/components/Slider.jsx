import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import cl from '../style/Main.module.css'
function SliderComp() {
    return ( 
        <CarouselProvider
        isIntrinsicHeight={true}
        totalSlides={3}>
            <ButtonBack className={cl.BackBtn}><img src={require('../style/img/back.png')} alt="Error IMG" 
            className={cl.StrelkaBack}/>
            </ButtonBack>
            <ButtonNext className={cl.NextBtn}><img src={require('../style/img/next.png')} alt="Error IMG" 
            className={cl.StrelkaNext}/>
            </ButtonNext>
            <Slider>
                <Slide index={0}><img src={require('../style/img/Banner.png')} alt="Error IMG" /></Slide>
                <Slide index={1}><img src={require('../style/img/Banner.png')} alt="Error IMG" /></Slide>
                <Slide index={2}><img src={require('../style/img/Banner.png')} alt="Error IMG" /></Slide>
            </Slider>
        </CarouselProvider>
     );
}

export default SliderComp;