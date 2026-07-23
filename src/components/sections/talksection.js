'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import {
  CalendarIcon,
  MapPinIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  PhotoIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

import {
  UserIcon,
  MicrophoneIcon,
} from '@heroicons/react/24/solid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export function InvitedTalksSection() {
  const [talks, setTalks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTalks = async () => {
      try {
        const response = await fetch(
          "https://opensheet.elk.sh/1AuCpQjHD_MQwovqAbfwfHbBwTyrhXfV0B0qqJfAubhk/talks"
        );

        const data = await response.json();

        const formatted = data.map((item) => {
          // Parse images safely (filter out empty strings)
          const parsedImages = item.images
            ? item.images.split(",").map((img) => img.trim()).filter(Boolean)
            : [];

          // Parse youtubeLinks safely (handles JSON strings or plain text URLs)
          let parsedYoutube = null;
          if (item.youtubeLinks) {
            try {
              parsedYoutube = typeof item.youtubeLinks === 'string' && item.youtubeLinks.trim().startsWith('{')
                ? JSON.parse(item.youtubeLinks)
                : item.youtubeLinks;
            } catch (e) {
              parsedYoutube = item.youtubeLinks;
            }
          }

          return {
            ...item,
            images: parsedImages,
            parsedYoutube,
          };
        });

        // Sort: Latest Talk First
        formatted.sort((a, b) => {
          const getDate = (value) => {
            if (!value) return new Date(0);
            if (String(value).includes(".")) {
              const [d, m, y] = value.split(".");
              return new Date(`${y}-${m}-${d}`);
            }
            return new Date(value);
          };

          return getDate(b.date) - getDate(a.date);
        });

        setTalks(formatted);
      } catch (err) {
        console.error("Failed to fetch talks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTalks();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="animate-spin h-10 w-10 rounded-full border-4 border-blue-600 border-t-transparent mx-auto"></div>
        <p className="mt-5 text-gray-500">Loading Invited Talks...</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {talks.map((talk, idx) => (
        <div
          key={talk.id || idx}
          className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition duration-300"
        >
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800 leading-snug mb-6">
                {talk.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                {talk.speaker && (
                  <div className="flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                    <UserIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">{talk.speaker}</span>
                  </div>
                )}

                {talk.date && (
                  <div className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    {talk.date}
                  </div>
                )}

                {talk.location && (
                  <div className="flex items-center bg-orange-50 text-orange-700 px-4 py-2 rounded-full">
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    {talk.location}
                  </div>
                )}

                {talk.mode && (
                  <div className="flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full">
                    {String(talk.mode).toLowerCase() === "online" ? (
                      <GlobeAltIcon className="h-5 w-5 mr-2" />
                    ) : (
                      <BuildingOfficeIcon className="h-5 w-5 mr-2" />
                    )}
                    {talk.mode}
                  </div>
                )}
              </div>
            </div>

            {/* Event */}
            {talk.event && (
              <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-8 shadow-sm">
                <div className="flex items-center mb-2">
                  <MicrophoneIcon className="h-6 w-6 mr-2" />
                  <h3 className="font-semibold text-lg text-gray-800">Invited Event</h3>
                </div>
                <p className="leading-7 text-gray-600">{talk.event}</p>
              </div>
            )}

            {/* Abstract */}
            {talk.abstract && (
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Abstract
                </h3>
                <p className="text-gray-600 leading-8">{talk.abstract}</p>
              </div>
            )}

            {/* Event Media */}
            {(talk.images?.length > 0 || talk.parsedYoutube) && (
              <div className="border-t pt-8">
                {talk.images?.length > 0 && (
                  <>
                    <div className="flex items-center mb-6">
                      <PhotoIcon className="h-6 w-6 mr-3 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-800">
                        Event Gallery
                      </h3>
                    </div>

                    <div className="relative">
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={20}
                        loop={talk.images.length > 1}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: true,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        className="rounded-2xl overflow-hidden shadow-xl"
                      >
                        {talk.images.map((image, i) => (
                          <SwiperSlide key={i}>
                            <div className="relative h-[250px] md:h-[450px] lg:h-[550px] w-full bg-gray-100">
                              <Image
                                src={image}
                                alt={`${talk.title || 'Talk'}-${i}`}
                                fill
                                unoptimized
                                className="object-contain"
                                sizes="100vw"
                                priority={i === 0}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </>
                )}

                {/* Videos */}
                {talk.parsedYoutube && (
                  <div className="mt-10">
                    <div className="flex items-center mb-5">
                      <VideoCameraIcon className="h-6 w-6 text-red-600 mr-3" />
                      <h3 className="text-2xl font-bold">Video Recordings</h3>
                    </div>

                    <div className="grid gap-4">
                      {typeof talk.parsedYoutube === 'object' && !Array.isArray(talk.parsedYoutube) ? (
                        Object.entries(talk.parsedYoutube).map(([session, url]) => (
                          <a
                            key={session}
                            href={String(url)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between rounded-xl border border-red-200 bg-red-50 px-5 py-4 hover:bg-red-100 transition"
                          >
                            <span className="font-medium text-red-700">
                              {session}
                            </span>
                            <span className="text-red-600 font-semibold">
                              Watch →
                            </span>
                          </a>
                        ))
                      ) : (
                        <a
                          href={String(talk.parsedYoutube)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-xl border border-red-200 bg-red-50 px-5 py-4 hover:bg-red-100 transition"
                        >
                          <span className="font-medium text-red-700">
                            Watch Video Recording
                          </span>
                          <span className="text-red-600 font-semibold">
                            Watch →
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}