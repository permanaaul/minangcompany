// product/page.js
import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

export default function Products({limit}) {
  const makanan = [
    {
      id: 1,
      name: 'Rendang',
      description: 'Makanan khas Padang yang terkenal di seluruh dunia.',
      image: '/images/rendang.jpg',
    },
    {
      id: 2,
      name: 'Kerupuk Balado',
      description: 'Camilan khas dengan rasa pedas manis.',
      image: '/images/kerupuk_balado.jpg',
    },
    {
      id: 3,
      name: 'Batik Minang',
      description: 'Kain batik dengan motif khas Minangkabau.',
      image: '/images/batik_minang.jpeg',
    },
    {
      id: 4,
      name: 'Songket Minang',
      description: 'Kain tenun tradisional dengan motif emas atau perak.',
      image: '/images/songket_minang.jpg',
    },
    {
      id: 5,
      name: 'Kopi Solok',
      description: 'Kopi khas dari daerah Solok, Sumatra Barat.',
      image: '/images/kopi_solok.jpeg',
    },
    {
      id: 6,
      name: 'Galamai',
      description: 'Makanan manis khas Payakumbuh, mirip dengan dodol.',
      image: '/images/galamai.jpg',
    },
    {
      id: 7,
      name: 'Keripik Sanjai',
      description: 'Keripik singkong dengan bumbu khas Padang.',
      image: '/images/keripik_sanjai.jpg',
    },
    {
      id: 8,
      name: 'Teh Talua',
      description: 'Minuman khas Minangkabau yang terbuat dari teh yang dicampur dengan telur ayam kampung, gula, dan perasan jeruk nipis.',
      image: '/images/teh_talua.jpg',
    },
  ];

  const productsToShow = makanan.slice(0, limit);

  return (
    <div className="bg-cover bg-center rounded-lg  bg-gray-800" >
      <div className="py-12 px-6 sm:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Products</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-center font-bold text-white">Discover our range of products inspired by the unique heritage of Padang and the Minangkabau culture.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
          {productsToShow.map((product, id) => (
            <Link href="/product" key={id}>
              <div
                key={id}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in" 
                style={{ 
                  animationDelay: `${id * 0.3}s`,
                 }}
              >
                <Image src={product.image} alt={product.name} width={400} height={192} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold text-black mb-2">{product.name}</h3>
                <p className="text-black font-bold mb-4">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
