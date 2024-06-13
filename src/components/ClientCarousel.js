'use client';
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
    }, 2500); // Ganti slide setiap 2.5 detik

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
            layout="fill"
            objectFit="cover"
            alt='Kota Padang 1'
            loading="eager" // Nonaktifkan lazy loading di sini
            priority // Prioritaskan pemuatan gambar ini
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div style={{ width: '100%', height: '500px', position: 'relative' }}>
          <Image
            src='/images/kotapadangdua.jpg'
            layout="fill"
            objectFit="cover"
            alt='Kota Padang 2'
            loading="eager" // Nonaktifkan lazy loading di sini
          />
        </div>
      </Carousel.Slide>
    </Carousel>
  );
};

export default ClientCarousel;
