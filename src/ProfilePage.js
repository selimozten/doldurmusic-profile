import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

const ProfilePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [currentLink, setCurrentLink] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const links = [
    { name: 'Sitemiz', url: 'https://example.com/site', icon: '🌐' },
    { name: 'Spotify', url: 'https://spotify.com/doldurmusic', icon: '🎵' },
    { name: 'DoldurMusic Twitter', url: 'https://twitter.com/doldurmusic', icon: '🐦' },
    { name: 'DoldurSports Twitter', url: 'https://twitter.com/doldursports', icon: '⚽' },
    { name: 'Doldur Kültür Sanat Akademi', url: 'https://example.com/akademi', icon: '🎨' },
    { name: 'DoldurMusic Youtube', url: 'https://youtube.com/doldurmusic', icon: '▶️' },
    { name: 'Linkedin', url: 'https://linkedin.com/company/doldurmusic', icon: '💼' },
  ];

  const handleShare = (url) => {
    setCurrentLink(url);
    setShowSharePopup(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentLink);
    alert('Link copied to clipboard!');
  };

  return (
    <>
      <Helmet>
        <title>Doldur Music Links</title>
        <link rel="icon" href="/src/doldurmusic-logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Ojuju:wght@200..800&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
        <style>
          {`
            body {
              font-family: "Roboto Mono", monospace;
              font-optical-sizing: auto;
              font-weight: 400;
              font-style: normal;
            }
            .ojuju-heading {
              font-family: "Ojuju", sans-serif;
              font-optical-sizing: auto;
              font-weight: 600;
              font-style: normal;
            }
          `}
        </style>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center pt-6 sm:pt-10 px-4 relative overflow-hidden transition-colors duration-300">
        {/* Background animations */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-green-200 dark:bg-green-700 rounded-full"
              style={{
                width: Math.random() * 30 + 10,
                height: Math.random() * 30 + 10,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() + 0.5, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>

        {/* Cool design elements */}
        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-yellow-300 dark:bg-yellow-600 rounded-bl-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-blue-300 dark:bg-blue-600 rounded-tr-full opacity-20"></div>
        
        <div className="w-full max-w-md z-10">
          <div className="flex justify-between items-center mb-6">
            <motion.button 
              className="text-gray-500 dark:text-gray-300 text-xl sm:text-2xl"
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMenu(true)}
            >
              •••
            </motion.button>
            <div className="flex items-center space-x-2">
              <motion.button 
                className="bg-gray-200 dark:bg-gray-600 text-black dark:text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full flex items-center shadow-md text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-1 sm:mr-2">🔔</span>
                Subscribe
              </motion.button>
              <motion.button
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-black dark:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? '🌞' : '🌙'}
              </motion.button>
            </div>
          </div>
          
          <motion.div 
            className="flex flex-col items-center mb-6 sm:mb-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-green-400 dark:bg-green-600 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              d
            </motion.div>
            <h1 className="text-lg sm:text-xl font-bold ojuju-heading text-gray-800 dark:text-white">@doldurmusic</h1>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center">Yeni nesil Müzik / Medya şirketi</p>
          </motion.div>

          <div className="space-y-2 sm:space-y-3">
            {links.map((link, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-700 rounded-lg p-3 sm:p-4 flex justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a href={link.url} className="flex-grow text-sm sm:text-base text-gray-800 dark:text-white">
                  <span>{link.icon} {link.name}</span>
                </a>
                <motion.button
                  className="text-gray-400 dark:text-gray-300"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleShare(link.url)}
                >
                  •••
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {showMenu && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm"
                initial={{ scale: 0.5, y: -100 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.5, y: -100 }}
              >
                <h2 className="text-lg sm:text-xl font-bold mb-4 ojuju-heading text-gray-800 dark:text-white">Menu</h2>
                <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  <li>Settings</li>
                  <li>Help Center</li>
                  <li>Privacy Policy</li>
                  <li>Log Out</li>
                </ul>
                <button 
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg w-full text-sm sm:text-base"
                  onClick={() => setShowMenu(false)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}

          {showSharePopup && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm"
                initial={{ scale: 0.5, y: -100 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.5, y: -100 }}
              >
                <h2 className="text-lg sm:text-xl font-bold mb-4 ojuju-heading text-gray-800 dark:text-white">Share Link</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm sm:text-base">Facebook</button>
                  <button className="bg-blue-400 text-white px-3 py-1 rounded-lg text-sm sm:text-base">Twitter</button>
                  <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm sm:text-base">WhatsApp</button>
                </div>
                <button 
                  className="bg-gray-200 dark:bg-gray-600 text-black dark:text-white px-4 py-2 rounded-lg w-full mb-4 text-sm sm:text-base"
                  onClick={copyToClipboard}
                >
                  Copy Link
                </button>
                <button 
                  className="bg-red-500 text-white px-4 py-2 rounded-lg w-full text-sm sm:text-base"
                  onClick={() => setShowSharePopup(false)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProfilePage;