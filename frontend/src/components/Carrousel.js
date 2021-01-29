import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';
import Slide from './Slide'

const items = [
    [{imagen:'./assets/Berlin.png', titulo:'Berlin'},
    {imagen:'./assets/México.jpg', titulo:'México'},
    {imagen:'./assets/New York.jpg', titulo:'New York'},
    {imagen:'./assets/Hawaii.jpg', titulo:'Hawaii'}
    ],
    [{imagen:'./assets/Paris.jpg', titulo:'Paris'},
    {imagen:'./assets/Rome.jpg', titulo:'Rome'},
    {imagen:'./assets/Rio de Janeiro.jpg', titulo:'Rio de Janeiro'},
    {imagen:'./assets/Bora Bora.jpg', titulo:'Bora Bora'}
    ],
    [{imagen:'./assets/Istanbul.jpg', titulo:'Bruges'},
    {imagen:'./assets/Egypt.jpg', titulo:'Guiza'},
    {imagen:'./assets/Venice.jpg', titulo:'Venice'},
    {imagen:'./assets/San Carlos de Bariloche.jpg', titulo:'San Carlos de Bariloche'}
    ]
];

const Carrousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }
  const slides = items.map((item,index) => { 
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item[index].titulo}
        
      >
        <Slide images={item}/>  
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      
    >
      {slides}
      <CarouselControl direction="prev" directionText="" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="" onClickHandler={next} />
    </Carousel>
  );
}

export default Carrousel;