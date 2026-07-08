'use client';

import SectionTitle from '@/components/ui/SectionTitle';
import { invitedTalks } from '@/content/research';
import { CalendarIcon, MapPinIcon, VideoCameraIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { MicrophoneIcon, UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { GlobeAltIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export function InvitedTalksSection() {
  return (
    <section className="space-y-8">

      <div className="space-y-8">
        {invitedTalks.map((talk, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{talk.title}</h3>
                <div className="flex flex-wrap items-center text-gray-500 mt-2 gap-4">
                  <span className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    {talk.speaker}
                  </span>
                  <span className="flex items-center">
  <CalendarIcon className="h-4 w-4 mr-1" />
  {talk.date}
</span>

{talk.location && (
  <span className="flex items-center">
    <MapPinIcon className="h-4 w-4 mr-1" />
    {talk.location}
  </span>
)}

{talk.mode && (
  <span className="flex items-center text-gray-500">
    {talk.mode.toLowerCase() === 'online' ? (
      <GlobeAltIcon className="h-4 w-4 mr-1" /> // or ComputerDesktopIcon
    ) : (
      <BuildingOfficeIcon className="h-4 w-4 mr-1" />
    )}
    {talk.mode}
  </span>
)}

                  {talk.event && (
                    <span className="flex items-center">
                      <MicrophoneIcon className="h-4 w-4 mr-1" />
                      {talk.event}
                    </span>
                  )}
                

                </div>

                {talk.abstract && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Abstract</h4>
                    <p className="text-gray-700">{talk.abstract}</p>
                  </div>
                )}
              </div>

              {(talk.images?.length > 0 || talk.youtubeLinks) && (
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Event Media</h4>

                  {talk.images?.length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center text-gray-700 mb-4">
                        <PhotoIcon className="h-5 w-5 mr-2 text-gray-500" />
                        <span className="font-semibold text-lg">Photo Gallery</span>
                      </div>

                      <div className="relative group">
                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          slidesPerView={1}
                          spaceBetween={16}
                          autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                          }}
                          pagination={{
                            clickable: true,
                            el: `.photo-pagination-${idx}`,
                            type: 'bullets',
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                          }}
                          navigation={{
                            nextEl: `.photo-next-${idx}`,
                            prevEl: `.photo-prev-${idx}`,
                          }}
                          loop={true}
                          className="rounded-xl overflow-hidden shadow-md"
                        >
                          {talk.images.map((url, i) => (
                            <SwiperSlide key={i}>
                              <div className="flex justify-center">
                                <div className="relative aspect-video max-h-[300px] w-full overflow-hidden">
                                  <Image
                                    src={url}
                                    alt={`Talk photo ${i + 1}`}
                                    fill
                                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 75vw"
                                    priority={i === 0}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <button
                          className={`photo-prev-${idx} absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100`}
                          aria-label="Previous photo"
                        >
                          <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>

                        <button
                          className={`photo-next-${idx} absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100`}
                          aria-label="Next photo"
                        >
                          <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        <div className={`photo-pagination-${idx} flex justify-center gap-1.5 mt-4`} />
                      </div>
                    </div>
                  )}

                  {talk.youtubeLinks && (
                    <div className="mt-6">
                      <div className="flex items-center text-gray-700 mb-3">
                        <VideoCameraIcon className="h-5 w-5 mr-2" />
                        <span className="font-medium">Video Recordings</span>
                      </div>
                      <div className="space-y-2">
                        {Object.entries(talk.youtubeLinks).map(([sessionType, url]) => (
                          <div key={sessionType} className="flex items-center">
                            <svg className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385-8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {sessionType.charAt(0).toUpperCase() +
                                sessionType.slice(1).replace(/([A-Z])/g, ' $1')}{' '}
                              Session
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
