'use client';

import { Carousel } from '@mantine/carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const ClientCarousel = () => {
  const emblaRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaRef.current) {
        emblaRef.current.scrollNext();
      }
    }, 3000); // Ganti slide setiap 3 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  return (
    <Carousel
      getEmblaApi={embla => (emblaRef.current = embla)}
      nextControlIcon={<div className='carousel-arrow next'><FaArrowRight /></div>}
      previousControlIcon={<div className='carousel-arrow prev'><FaArrowLeft /></div>}
      withIndicators
      loop
    >
      <Carousel.Slide>
        <div style={{ width: '100%', height: '500px', position: 'relative' }}>
          <Image
            src='/images/kotapadang.jpg'
            alt='Kota Padang 1'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div style={{ width: '100%', height: '500px', position: 'relative' }}>
          <Image
            src='/images/kotapadangdua.jpg'
            alt='Kota Padang 2'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </Carousel.Slide>
    </Carousel>
  );
};

export default ClientCarousel;
