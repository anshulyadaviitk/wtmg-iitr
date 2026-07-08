'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

export default function ResearchSection({ researchAreas }) {
 const swiperRef = useRef(null);
    const prevRef = useRef(null);
const nextRef = useRef(null);

useEffect(() => {
  if (swiperRef.current && prevRef.current && nextRef.current) {
    swiperRef.current.params.navigation.prevEl = prevRef.current;
    swiperRef.current.params.navigation.nextEl = nextRef.current;

    // Re-init navigation
    swiperRef.current.navigation.destroy();
    swiperRef.current.navigation.init();
    swiperRef.current.navigation.update();
  }
}, []);
  
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-200/30 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight mb-4">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Areas</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Exploring cutting-edge innovations and scientific breakthroughs in water treatment and management.
          </p>
        </div>

        <div className="relative">
           <Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  modules={[Pagination, Autoplay, Navigation]}
  navigation={false} // Prevent premature init
          spaceBetween={32}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            // ✅ Attach refs before Swiper initializes
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
         pagination={{
  clickable: true,
  el: '#research-pagination',
  bulletClass: 'custom-bullet',
  bulletActiveClass: 'custom-bullet-active',
}}

          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 28 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="pb-16"
            >

          {researchAreas.map((area) => (
            <SwiperSlide key={area.id}>
              <div className="group bg-white rounded-[2rem] shadow-sm border border-slate-200/60 overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200" style={{ height: '560px' }}>
                {/* Image with fixed aspect ratio */}
                <div className="relative aspect-video w-full overflow-hidden flex-shrink-0 bg-slate-100">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {area.icon && (
                    <div className="absolute bottom-4 left-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <area.icon className="h-6 w-6 text-white" />
                    </div>
                  )}
                </div>

                {/* Content area with constrained height and scroll */}
                <div className="p-8 flex flex-col flex-grow overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {area.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed text-sm font-medium">
                      {area.description}
                    </p>
                    {area.projects?.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                          Key Projects
                        </h4>
                        <ul className="space-y-3">
                          {area.projects.slice(0, 3).map((p, idx) => (
                            <li key={idx} className="flex items-start bg-slate-50/80 p-3 rounded-xl border border-slate-100 group/item hover:bg-blue-50/50 transition-colors">
                              <span className="flex-shrink-0 mt-0.5 mr-3 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center group-hover/item:bg-blue-600 transition-colors">
                                <svg
                                  className="h-3 w-3 text-blue-600 group-hover/item:text-white transition-colors"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </span>
                              <span className="text-sm font-semibold text-slate-700 line-clamp-2 group-hover/item:text-slate-900">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Rest of your existing code remains the same */}
        <div id="research-pagination" className="custom-pagination flex justify-center gap-2 mt-6" />

{/* Navigation Arrows */}
<button
  ref={prevRef}
  className="custom-prev absolute left-0 top-[35%] -translate-y-1/2 p-2 sm:p-3 rounded-full hover:bg-gray-50 transition-colors z-10"
>
  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</button>

<button
  ref={nextRef}
  className="custom-next absolute right-0 top-[35%] -translate-y-1/2 p-2 sm:p-3 rounded-full hover:bg-gray-50 transition-colors z-10"
>
  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>

          </div>


        <style jsx global>{`
          .custom-bullet {
            background-color: #e5e7eb;
            width: 10px;
            height: 10px;
            border-radius: 9999px;
            display: inline-block;
            margin: 0 6px;
            opacity: 1;
            transition: all 0.3s ease;
          }
          .custom-bullet-active {
            background-color: #2563eb;
            width: 24px;
          }
        `}</style>
      </div>
    </section>
  );
}