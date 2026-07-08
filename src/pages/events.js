import Head from "next/head";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { events } from "@/content/eventcontent";

import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  VideoCameraIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function EventPage() {
  return (
    <Layout>
      <Head>
        <title>Events | WTM Research Group</title>
        <meta
          name="description"
          content="Details of past and upcoming events organized by WTM Research Group"
        />
      </Head>

      <div className="container mx-auto px-4 md:px-6 py-12 space-y-20">

        {/* ========================================================= */}
        {/*                  UPCOMING EVENTS                          */}
        {/* ========================================================= */}

        <section>

          <SectionTitle
            title="Upcoming Events"
            subtitle="Stay informed about our upcoming workshops, seminars and conferences."
          />

          {events.upcoming.length > 0 ? (

            <div className="mt-10 space-y-12">

              {events.upcoming.map((event, idx) => (

                <div
                  key={idx}
                  className="overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >

                  <div className="grid lg:grid-cols-2">

                    {/* ================= IMAGE ================= */}

                    <div className="relative h-[320px] md:h-[450px]">

                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                        priority={idx === 0}
                      />

                      {/* Overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                      {/* Badge */}

                      <div className="absolute top-6 left-6">

                        <span className="rounded-full bg-green-600 text-white px-4 py-2 text-sm font-semibold shadow-lg">

                          Upcoming Event

                        </span>

                      </div>

                    </div>

                    {/* ================= DETAILS ================= */}

                    <div className="flex flex-col justify-center p-8 lg:p-12">

                      <h2 className="text-3xl lg:text-4xl font-bold text-ink leading-tight">

                        {event.title}

                      </h2>

                      {/* INFO CARDS */}

                      <div className="grid sm:grid-cols-2 gap-4 mt-8">

                        <div className="rounded-xl border bg-gray-50 p-4">

                          <div className="flex items-center text-accent-600 font-semibold">

                            <CalendarIcon className="w-5 h-5 mr-2" />

                            Date

                          </div>

                          <p className="mt-2 text-gray-700">

                            {event.date}

                          </p>

                        </div>

                        {event.time && (

                          <div className="rounded-xl border bg-gray-50 p-4">

                            <div className="flex items-center text-accent-600 font-semibold">

                              <ClockIcon className="w-5 h-5 mr-2" />

                              Time

                            </div>

                            <p className="mt-2 text-gray-700">

                              {event.time}

                            </p>

                          </div>

                        )}

                        {event.location && (

                          <div className="rounded-xl border bg-gray-50 p-4 sm:col-span-2">

                            <div className="flex items-center text-accent-600 font-semibold">

                              <MapPinIcon className="w-5 h-5 mr-2" />

                              Venue

                            </div>

                            <p className="mt-2 text-gray-700">

                              {event.location}

                            </p>

                          </div>

                        )}

                      </div>

                      {/* DESCRIPTION */}

                      <div className="mt-8">

                        <h3 className="text-xl font-semibold text-ink mb-3">

                          About Event

                        </h3>

                        <p className="leading-8 text-gray-600">

                          {event.description}

                        </p>

                      </div>

                      {/* BUTTON */}

                      {event.registerLink && (

                        <div className="mt-10">

                          <Link
                            href={event.registerLink}
                            className="inline-flex items-center rounded-xl bg-accent-600 px-8 py-4 text-white font-semibold hover:bg-accent-700 transition-all shadow-lg hover:scale-105"
                          >

                            Register Now →

                          </Link>

                        </div>

                      )}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <div className="mt-10 rounded-2xl bg-gray-50 py-16 text-center">

              <p className="text-gray-500 text-lg">

                No upcoming events available.

              </p>

            </div>

          )}

        </section>

        {/* ========================================================= */}
        {/*      PASTE PART 2 FROM HERE (Past Events Section)         */}
        {/* ========================================================= */}
        {/* ========================================================= */}
{/*                     PAST EVENTS                           */}
{/* ========================================================= */}

<section className="space-y-10">

  <SectionTitle
    title="Past Events"
    subtitle="Explore highlights from our successfully conducted workshops, seminars and conferences."
  />

  <div className="space-y-16">

    {events.past.map((event, idx) => (

      <div
        key={idx}
        className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
      >

        {/* ================= HEADER ================= */}

        <div className="p-8 lg:p-10">

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">

            <div>

              <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">

                ✓ Successfully Conducted

              </div>

              <h2 className="text-3xl font-bold text-ink">

                {event.title}

              </h2>

            </div>

          </div>

          {/* INFO CARDS */}

          <div className="grid md:grid-cols-3 gap-5 mt-8">

            <div className="rounded-xl border p-5 bg-gray-50">

              <div className="flex items-center text-accent-600 font-semibold">

                <CalendarIcon className="w-5 h-5 mr-2"/>

                Date

              </div>

              <p className="mt-2 text-gray-700">

                {event.date}

              </p>

            </div>

            <div className="rounded-xl border p-5 bg-gray-50">

              <div className="flex items-center text-accent-600 font-semibold">

                <MapPinIcon className="w-5 h-5 mr-2"/>

                Venue

              </div>

              <p className="mt-2 text-gray-700">

                {event.location}

              </p>

            </div>

            <div className="rounded-xl border p-5 bg-gray-50">

              <div className="flex items-center text-accent-600 font-semibold">

                <PhotoIcon className="w-5 h-5 mr-2"/>

                Gallery

              </div>

              <p className="mt-2 text-gray-700">

                {event.photos?.length || 0} Photos

              </p>

            </div>

          </div>

        </div>

        {/* ================= PHOTO GALLERY ================= */}

        {event.photos?.length > 0 && (

          <div className="px-8 lg:px-10 pb-10">

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              className="rounded-2xl overflow-hidden shadow-lg"
            >

              {event.photos.map((photo, i) => (

                <SwiperSlide key={i}>

                  <div className="relative h-[300px] md:h-[500px]">

                    <Image
                      src={photo}
                      alt={event.title}
                      fill
                      className="object-cover hover:scale-105 transition duration-500"
                    />

                    <div className="absolute bottom-5 right-5 bg-black/60 text-white px-4 py-2 rounded-full text-sm">

                      {i + 1} / {event.photos.length}

                    </div>

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        )}

        {/* ================= DESCRIPTION ================= */}

        <div className="px-8 lg:px-10 pb-10">

          <div className="bg-gray-50 rounded-2xl p-8">

            <h3 className="text-xl font-bold mb-4 text-ink">

              About This Event

            </h3>

            <p className="text-gray-600 leading-8">

              {event.description}

            </p>

          </div>

        </div>

        {/* ================= VIDEOS ================= */}

        {event.youtubeLinks && (

          <div className="px-8 lg:px-10 pb-10">

            <h3 className="text-2xl font-bold text-ink mb-6">

              Event Recordings

            </h3>

            <div className="grid md:grid-cols-2 gap-5">

              {Object.entries(event.youtubeLinks).map(([session, url]) => (

                <a
                  key={session}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-2xl p-6 hover:shadow-lg transition hover:border-red-500"
                >

                  <div className="flex items-center">

                    <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">

                      <VideoCameraIcon className="w-7 h-7 text-red-600"/>

                    </div>

                    <div className="ml-5">

                      <h4 className="font-semibold text-lg">

                        {session
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, c => c.toUpperCase())}

                      </h4>

                      <p className="text-gray-500 text-sm">

                        Watch Recording

                      </p>

                    </div>

                  </div>

                </a>

              ))}

            </div>

          </div>

        )}

        {/* ================= FOOTER ================= */}

        <div className="border-t bg-gray-50 px-8 lg:px-10 py-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div>

              <div className="text-3xl font-bold text-accent-600">

                {event.photos?.length || 0}

              </div>

              <p className="text-gray-500">

                Photos

              </p>

            </div>

            <div>

              <div className="text-3xl font-bold text-accent-600">

                {event.youtubeLinks
                  ? Object.keys(event.youtubeLinks).length
                  : 0}

              </div>

              <p className="text-gray-500">

                Videos

              </p>

            </div>

            <div>

              <div className="text-3xl font-bold text-accent-600">

                100%

              </div>

              <p className="text-gray-500">

                Success

              </p>

            </div>

            <div>

              <div className="text-3xl font-bold text-accent-600">

                ★★★★★

              </div>

              <p className="text-gray-500">

                Feedback

              </p>

            </div>

          </div>

        </div>

      </div>

    ))}

  </div>

</section>
      </div>
    </Layout>
  );
}