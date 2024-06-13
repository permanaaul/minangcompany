'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Products from './product/page';

const ClientCarousel = dynamic(() => import('../components/ClientCarousel'), { ssr: false });

export default function HomePage() {
  const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=1')
      .then(response => response.json())
      .then(data => {
        setTeamMember(data.results[0]);
      })
      .catch(error => console.error('Error fetching team member:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 space-y-12 bg-gray-900 text-white">
      {/* Hero Section with Carousel */}
      <section className="hero relative rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <ClientCarousel />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white">
            <h1 className="text-6xl font-bold mb-2 lg:mb-4">Discover the Beauty of Minangkabau Verse</h1>
            <p className="text-xl mb-8">Experience the Rich Culture of Minangkabau with Us</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview text-center py-8 bg-gray-800 rounded-lg shadow-lg">
  <h2 className="text-4xl font-bold mb-6">About Padang Heritage</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
    <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
      <h3 className="text-3xl font-semibold mb-4">Company History</h3>
      <p className="text-lg leading-relaxed mb-4">
        Padang Heritage was founded with a passion to showcase the rich cultural heritage and vibrant traditions of the Minangkabau people.
      </p>
    </div>

    <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
      <h3 className="text-3xl font-semibold mb-4">Culture</h3>
      <p className="text-lg leading-relaxed mb-4">
        At Padang Heritage, our culture is deeply rooted in respect, community, and a shared love for our heritage.
      </p>
    </div>

    <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
      <h3 className="text-3xl font-semibold mb-4">Our Team</h3>
      {teamMember ? (
        <div className="text-center">
          <div style={{ width: '200px', height: '200px', position: 'relative' }}>
            <Image
              src={teamMember.picture.large}
              alt={`${teamMember.name.first} ${teamMember.name.last}`}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <p className="text-xl font-semibold">{`${teamMember.name.first} ${teamMember.name.last}`}</p>
          <p className="text-gray-400">{teamMember.email}</p>
        </div>
      ) : (
        <p className="text-xl">Loading team member...</p>
      )}
    </div>
  </div>
</section>

      {/* Products */}
      <Products limit={3} />

      {/* Testimonials */}
      <section className="testimonials py-8 md:py-12 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <blockquote className="p-6 border-l-4 border-gray-600 bg-gray-700 rounded-lg shadow-md">
            <p className="text-lg italic font-semibold">&quot;The best products I&apos;ve ever used! Highly recommend to everyone.&quot;</p>
            <footer className="mt-2 text-sm text-gray-400">- Customer A</footer>
          </blockquote>
          <blockquote className="p-6 border-l-4 border-gray-600 bg-gray-700 rounded-lg shadow-md">
            <p className="text-lg italic font-semibold">&quot;Fantastic customer service and top-quality products.&quot;</p>
            <footer className="mt-2 text-sm text-gray-400">- Customer B</footer>
          </blockquote>
          <blockquote className="p-6 border-l-4 border-gray-600 bg-gray-700 rounded-lg shadow-md">
            <p className="text-lg italic font-semibold">&quot;I love the variety of products available. There&apos;s something for everyone.&quot;</p>
            <footer className="mt-2 text-sm text-gray-400">- Customer C</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
