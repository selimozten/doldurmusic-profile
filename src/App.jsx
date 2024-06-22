import React from 'react';

const ProfilePage = () => {
  const links = [
    { name: 'Sitemiz', url: '#' },
    { name: 'Spotify', url: '#' },
    { name: 'DoldurMusic Twitter', url: '#' },
    { name: 'DoldurSports Twitter', url: '#' },
    { name: 'Doldur Kültür Sanat Akademi', url: '#' },
    { name: 'DoldurMusic Youtube', url: '#' },
    { name: 'Linkedin', url: '#' },
  ];

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center pt-10 px-4">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <button className="text-gray-500">...</button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-full flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Subscribe
          </button>
        </div>
        
        <div className="flex flex-col items-center mb-8">
          <div className="bg-green-400 w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
            d
          </div>
          <h1 className="text-xl font-bold">@doldurmusic</h1>
          <p className="text-gray-600 text-sm">Yeni nesil Müzik / Medya şirketi</p>
        </div>

        <div className="space-y-3">
          {links.map((link, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
              <span>{link.name}</span>
              <button className="text-gray-400">...</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;