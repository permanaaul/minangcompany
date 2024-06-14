// TeamPage.js
'use client'; // Menggunakan use client untuk memastikan komponen ini adalah komponen klien

import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=6');
        setTeamMembers(response.data.results);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4" >
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out" >
            <div className="relative w-24 h-24 mx-auto mb-4">
  <Image src={member.picture.large} alt={`Profile of ${member.name.first} ${member.name.last}`} width={96} height={96} className="w-full h-full rounded-full object-cover border-4 border-white shadow-md" />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 rounded-full"></div>
</div>

            <h2 className="text-2xl font-semibold mt-4 mb-2 text-white">{`${member.name.first} ${member.name.last}`}</h2>
            <p className="text-white mb-4">{member.email}</p>
            <p className="text-white">Location: {`${member.location.city}, ${member.location.country}`}</p>
            <p className="text-white">Phone: {member.phone}</p>
            <p className="text-white">Date of Birth: {new Date(member.dob.date).toLocaleDateString()}</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
      </div>
    </div>
  );
}
