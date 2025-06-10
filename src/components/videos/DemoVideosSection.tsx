"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlay, FaGraduationCap, FaMoneyBillWave, FaChartLine, FaUserTie, FaBook, FaClock, FaBuilding, FaCheck } from 'react-icons/fa';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  icon: React.ReactNode;
}

const DemoVideosSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videoCategories = [
    { id: 'all', name: 'All Videos', icon: <FaPlay /> },
    { id: 'student', name: 'Asset Management', icon: <FaBuilding /> },
    { id: 'fees', name: 'HostelManagement', icon: <FaMoneyBillWave /> },
    { id: 'result', name: 'Attendance Management', icon: <FaCheck /> },
    { id: 'staff', name: 'Staff Management', icon: <FaUserTie /> },
    { id: 'library', name: 'Library System', icon: <FaBook /> },
    { id: 'walkthrough', name: 'Full Walkthrough', icon: <FaClock /> },
  ];

  const demoVideos: VideoItem[] = [
    {
      id: 'student-1',
      title: 'Assessment Management',
      category: 'student',
      duration: '2:39',
      description: 'Learn how to register new assets, manage assets, and track school assets with KAYUS.',
      thumbnail: '/images/kayus/assets.png',
      videoUrl: 'https://www.youtube.com/embed/Fux3Z0-nV5k?si=3Eh44lu3r258Ob9A',
      icon: <FaBuilding />
    },
    {
      id: 'fees-1',
      title: 'Hostel Management',
      category: 'fees',
      duration: '4:27',
      description: 'Discover how to manage hostel, manage bed space, assign students, and track hostel payments efficiently.',
      thumbnail: '/images/kayus/hostel.png',
      videoUrl: 'https://www.youtube.com/embed/jXYfolmOatU?si=d9v9-Q_Tl5lOl3W6',
      icon: <FaMoneyBillWave />
    },
    {
      id: 'result-1',
      title: 'Attendance Management',
      category: 'result',
      duration: '2:13',
      description: 'See how to mark student attendance, calculate number of days, and generate attendance report automatically.',
      thumbnail: '/images/kayus/attendance.png',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      icon: <FaCheck />
    },
    /* {
      id: 'staff-1',
      title: 'Staff Management & Payroll System',
      category: 'staff',
      duration: '7:18',
      description: 'Learn how to manage teaching and non-teaching staff records, attendance, and process payroll.',
      thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      icon: <FaUserTie />
    },
    {
      id: 'library-1',
      title: 'Library Management System',
      category: 'library',
      duration: '5:53',
      description: 'Explore how to catalog books, manage lending, and track library resources with KAYUS.',
      thumbnail: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      icon: <FaBook />
    },
    {
      id: 'walkthrough-1',
      title: 'Complete KAYUS System Walkthrough',
      category: 'walkthrough',
      duration: '15:27',
      description: 'A comprehensive walkthrough of all KAYUS modules and features for school administrators.',
      thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      icon: <FaClock />
    }, */
  ];

  const filteredVideos = activeCategory === 'all' 
    ? demoVideos 
    : demoVideos.filter(video => video.category === activeCategory);

  const openVideoModal = (video: VideoItem) => {
    setSelectedVideo(video);
    setVideoModalOpen(true);
  };

  // Get related videos based on category
  const getRelatedVideos = (currentVideo: VideoItem) => {
    return demoVideos
      .filter(video => video.category === currentVideo.category && video.id !== currentVideo.id)
      .slice(0, 3);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-primary to-primary-dark text-white">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">KAYUS Demo Videos</h1>
            <p className="text-xl text-white/80 mb-8">
              Explore our comprehensive demo videos to see how KAYUS School Management System can transform your school operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {videoCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-primary text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'}`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Videos Grid */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div 
                  className="relative aspect-video cursor-pointer group"
                  onClick={() => openVideoModal(video)}
                >
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <FaPlay className="text-white ml-1" size={24} />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <span className="text-primary mr-2">{video.icon}</span>
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {videoCategories.find(cat => cat.id === video.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-white">{video.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4">{video.description}</p>
                  <button 
                    onClick={() => openVideoModal(video)}
                    className="text-primary font-medium text-sm hover:underline flex items-center"
                  >
                    Watch Video <FaPlay className="ml-1" size={10} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-6xl bg-white dark:bg-neutral-900 rounded-lg overflow-hidden">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setVideoModalOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <div className="lg:col-span-2">
                <div className="aspect-video">
                  <iframe 
                    className="w-full h-full"
                    src={`${selectedVideo.videoUrl}?autoplay=1`} 
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-neutral-800">
                <h3 className="text-2xl font-bold mb-2 text-neutral-800 dark:text-white">{selectedVideo.title}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-primary mr-2">{selectedVideo.icon}</span>
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {videoCategories.find(cat => cat.id === selectedVideo.category)?.name}
                  </span>
                  <span className="mx-2 text-neutral-400">•</span>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{selectedVideo.duration}</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">{selectedVideo.description}</p>
                
                {/* Related Videos */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-neutral-800 dark:text-white">Related Videos</h4>
                  <div className="space-y-4">
                    {getRelatedVideos(selectedVideo).length > 0 ? (
                      getRelatedVideos(selectedVideo).map((relatedVideo) => (
                        <div 
                          key={relatedVideo.id} 
                          className="flex gap-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 p-2 rounded transition-colors"
                          onClick={() => {
                            setSelectedVideo(relatedVideo);
                          }}
                        >
                          <div className="relative w-24 h-16 flex-shrink-0">
                            <img 
                              src={relatedVideo.thumbnail} 
                              alt={relatedVideo.title} 
                              className="w-full h-full object-cover rounded"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                              <FaPlay className="text-white" size={12} />
                            </div>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-neutral-800 dark:text-white line-clamp-2">{relatedVideo.title}</h5>
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">{relatedVideo.duration}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">No related videos available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DemoVideosSection;
