// clientcarousel
'use client';

import { Carousel } from '@mantine/carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';


const ClientCarousel = () => (
  <Carousel
    nextControlIcon={<div className='bg-black-300 text-black p-6 rounded-full flex items-center justify-center transform -translate-y-1/2 top-1/2 absolute right-0'><FaArrowRight /></div>}
    previousControlIcon={<div className='bg-black-300 text-black p-6 rounded-full flex items-center justify-center transform -translate-y-1/2 top-1/2 absolute left-0'><FaArrowLeft /></div>}
    withIndicators
    loop
    autoplay={{ delay: 3000 }}
  >
    <Carousel.Slide>
      <div style={{ width: '100%', height: '500px', position: 'relative' }}>
        <Image
          src='/images/kotapadang.jpg'
          fill
          style={{ objectFit: 'cover' }}
          alt='Kota Padang 1'
        />
      </div>
    </Carousel.Slide>
    <Carousel.Slide>
      <div style={{ width: 'full', height: '500px', position: 'relative' }}>
        <Image
          src='/images/kotapadangdua.jpg'
          fill
          style={{ objectFit: 'cover' }}
          alt='Kota Padang 2'
        />
      </div>
    </Carousel.Slide>
  </Carousel>
);

export default ClientCarousel;