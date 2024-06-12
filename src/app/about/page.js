'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')  // Mengambil 3 pengguna acak
      .then(response => response.json())
      .then(data => {
        setTeamMembers(data.results);
      })
      .catch(error => console.error('Error fetching team members:', error));
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto pt-6 md:pt-8 lg:pt-16 pb-6 md:pb-12 lg:pb-24" style={{ backgroundImage: "url('/images/vintage9.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <h1 className="text-5xl font-bold text-center mb-12 text-black">
          About Padang Heritage
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section className="mb-16 p-6 bg-white rounded-lg shadow-lg border-4 border-black hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundImage: "url('/images/vintage6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h2 className="text-3xl font-semibold mb-6 text-black text-center">Company History</h2>
            <p className="text-xl leading-relaxed mb-6 text-black">
              Padang Heritage was founded with a passion to showcase the rich cultural heritage and vibrant traditions of the Minangkabau people. Since its inception, our mission has been to provide an immersive experience that highlights the beauty, history, and culinary delights of Padang and the greater Minangkabau region.
            </p>
            <p className="text-xl leading-relaxed text-black">
              Over the years, we have achieved numerous milestones, from organizing cultural exhibitions to hosting traditional cooking classes. Each milestone marks our commitment to preserving and promoting the unique aspects of Minangkabau culture. Our journey began with a small group of enthusiasts, and today, we stand as a prominent name in cultural tourism and heritage preservation.
            </p>
          </section>

          <section className="mb-16 mt-50 p-6 bg-white rounded-lg shadow-lg border-4 border-black hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundImage: "url('/images/vintage6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h2 className="text-3xl font-semibold mb-6 text-black text-center">Culture</h2>
            <p className="text-xl leading-relaxed mb-6 text-black">
              At Padang Heritage, our culture is deeply rooted in respect, community, and a shared love for our heritage. We believe in creating an inclusive environment where every member feels valued and inspired. Our team is like a family, bound by a common goal to celebrate and sustain the rich traditions of our ancestors.
            </p>
            <p className="text-xl leading-relaxed mb-6 text-black">
              Our values are centered around authenticity, excellence, and education. We strive to deliver authentic experiences that resonate with both locals and visitors. Excellence drives us to continually improve and offer the highest quality in our services and programs. Education is at the heart of our mission; we aim to educate others about the significance of Minangkabau culture and traditions.
            </p>
          </section>
          
          <section className="mb-16 p-6 bg-white rounded-lg shadow-lg border-4 border-black hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundImage: "url('/images/vintage6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h2 className="text-3xl font-semibold mb-6 text-black text-center">Our Achievements</h2>
            <ul className="list-disc pl-6">
              <li className="text-xl leading-relaxed text-black mb-2">Organized over 50 cultural exhibitions</li>
              <li className="text-xl leading-relaxed text-black mb-2">Hosted more than 100 traditional cooking classes</li>
              <li className="text-xl leading-relaxed text-black mb-2">Received recognition from the local government</li>
              <li className="text-xl leading-relaxed text-black mb-2">Featured in international travel magazines</li>
              <li className="text-xl leading-relaxed text-black mb-2">Partnered with renowned cultural institutions</li>
            </ul>
          </section>

          <section className="mb-16 p-6 bg-white rounded-lg shadow-lg border-4 border-black hover:shadow-xl transition-shadow duration-300 ease-in-out" style={{ backgroundImage: "url('/images/vintage6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h2 className="text-3xl font-semibold mb-6 text-black text-center">Our Team</h2>
            {teamMembers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <Image src={member.picture.large} alt={member.name.first} width={200} height={200} className="rounded-full mx-auto mb-4" />
                    <p className="text-xl font-semibold text-black">{member.name.first} {member.name.last}</p>
                    <p className="text-gray-800">{member.email}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xl text-black">Loading team members...</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
