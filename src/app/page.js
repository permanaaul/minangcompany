'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import Products from './product/page';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=1')  // Mengambil 1 pengguna acak
      .then(response => response.json())
      .then(data => {
        setTeamMember(data.results[0]);
      })
      .catch(error => console.error('Error fetching team member:', error));
  }, []);

  const ClientCarousel = dynamic(() => import('../components/ClientCarousel'), { ssr: false });

  return (
    <div className="container mx-auto p-4 space-y-12">
      {/* Hero Section with Carousel */}
      <section className="hero relative rounded-lg shadow-lg border-4 border-black rounded-md">
        <div className="relative">
          <ClientCarousel />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white">
            <h1 className="text-6xl font-bold mb-2 lg:mb-4">Discover the Beauty of Minangkabau Verse</h1>
            <p className="text-xl mb-8">Experience the Rich Culture of Minangkabau with Us</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview text-center py-12 bg-trans text-black border-4 border-black rounded-md p-4 border-4" style={{ backgroundImage: "url('/images/vintage11.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h2 className="text-4xl font-bold mb-6">About Padang Heritage</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8 font-bold">Padang Heritage has been promoting the cultural richness and natural beauty of Padang city, along with the vibrant traditions of the Minangkabau people, for over a decade.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-lg border-4 border-black hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundImage: "url('/images/vintage6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h3 className="text-3xl font-semibold mb-4 text-black text-center">Company History</h3>
            <p className="text-lg leading-relaxed mb-4 text-black">
              Padang Heritage was founded with a passion to showcase the rich cultural heritage and vibrant traditions of the Minangkabau people.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg border-4 border-black hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundImage: "url('/images/vintage6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h3 className="text-3xl font-semibold mb-4 text-black text-center">Culture</h3>
            <p className="text-lg leading-relaxed mb-4 text-black">
              At Padang Heritage, our culture is deeply rooted in respect, community, and a shared love for our heritage.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg border-4 border-black hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundImage: "url('/images/vintage6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h3 className="text-3xl font-semibold mb-4 text-black text-center">Our Team</h3>
            {teamMember ? (
              <div className="text-center">
                <Image src={teamMember.picture.large} alt={teamMember.name.first} width={200} height={200} className="rounded-full mx-auto mb-4" />
                <p className="text-xl font-semibold text-black">{teamMember.name.first} {teamMember.name.last}</p>
                <p className="text-gray-800">{teamMember.email}</p>
              </div>
            ) : (
              <p className="text-xl text-black">Loading team member...</p>
            )}
          </div>
        </div>

        <Link href="/about" legacyBehavior>
          <a className="text-black hover:text-gray-400 mt-8 inline-block">Learn more about us</a>
        </Link>
      </section>

      {/* Products */}
      <Products limit={3} />

      {/* Testimonials */}
      <section className="testimonials py-8 md:py-12 bg-white text-black border-4 border-black rounded-md border-4" style={{ backgroundImage: "url('/images/vintage10.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "calc(100vh - 64px)" }}>
        <h2 className="text-4xl font-bold text-center text-white mb-8">What Our Customers Say</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <blockquote className="p-6 border-l-4 border-white bg-gray-300 rounded-lg" style={{ backgroundImage: "url('/images/vintage6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <p className="text-lg italic font-bold">&quot;The best products I&apos;ve ever used! Highly recommend to everyone.&quot;</p>
            <footer className="mt-2 text-sm text-black-400 font-bold">- Customer A</footer>
          </blockquote>
          <blockquote className="p-6 border-l-4 border-white bg-gray-300 rounded-lg" style={{ backgroundImage: "url('/images/vintage6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <p className="text-lg italic font-bold">&quot;Fantastic customer service and top-quality products.&quot;</p>
            <footer className="mt-2 text-sm text-black-400 font-bold">- Customer B</footer>
          </blockquote>
          <blockquote className="p-6 border-l-4 border-white bg-gray-300 rounded-lg" style={{ backgroundImage: "url('/images/vintage6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <p className="text-lg italic font-bold">&quot;I love the variety of products available. There&apos;s something for everyone.&quot;</p>
            <footer className="mt-2 text-sm text-black-400 font-bold">- Customer C</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

          