import { Carousel } from '@mantine/carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const ClientCarousel = () => {
  const emblaRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaRef.current) {
        emblaRef.current.scrollNext();
      }
    }, 2500); // Change slide every 2.5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <Carousel
      getEmblaApi={(embla) => (emblaRef.current = embla)}
      nextControlIcon={<div className='carousel-arrow next'><FaArrowRight /></div>}
      previousControlIcon={<div className='carousel-arrow prev'><FaArrowLeft /></div>}
      withIndicators
      loop
    >
      <Carousel.Slide>
        <div style={{ position: 'relative', width: '100%', height: '500px' }}>
          <Image
            src='/images/kotapadang.jpg'
            alt='Kota Padang 1'
            layout='fill'
            objectFit='cover'
            loading='eager'  // Ensure above-the-fold image loads eagerly
            sizes="(max-width: 768px) 100vw, 50vw"
            srcSet="/images/kotapadang.jpg 640w, /images/kotapadang.jpg 1024w, /images/kotapadang.jpg 1920w"
            priority  // Preload hint for Next.js
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div style={{ position: 'relative', width: '100%', height: '500px' }}>
          <Image
            src='/images/kotapadangdua.jpg'
            alt='Kota Padang 2'
            layout='fill'
            objectFit='cover'
            loading='lazy'
            sizes="(max-width: 768px) 100vw, 50vw"
            srcSet="/images/kotapadangdua.jpg 640w, /images/kotapadangdua.jpg 1024w, /images/kotapadangdua.jpg 1920w"
          />
        </div>
      </Carousel.Slide>
    </Carousel>
  );
};

export default ClientCarousel;
