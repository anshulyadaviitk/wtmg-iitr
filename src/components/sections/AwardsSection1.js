'use client';

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AwardsSection1() {
  const [faculty, setFaculty] = useState([]);
  const [guestEditors, setGuestEditors] = useState([]);
  const [loading, setLoading] = useState(true);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fRes, gRes] = await Promise.all([
          fetch("https://opensheet.elk.sh/1AuCpQjHD_MQwovqAbfwfHbBwTyrhXfV0B0qqJfAubhk/Awards"),
          fetch("https://opensheet.elk.sh/1AuCpQjHD_MQwovqAbfwfHbBwTyrhXfV0B0qqJfAubhk/EditorialRoles"),
        ]);

        const fData = await fRes.json();
        const gData = await gRes.json();

        // AWARDS FORMAT
        const formattedAwards = fData.map((item) => ({
          ...item,
          year: Number(item.year),
          image: item.image
            ? item.image.split(",").map((i) => i.trim())
            : [],
        }));

        // EDITORIAL FORMAT (FIX title/tittle/Title issue)
        const formattedEditors = gData.map((item) => ({
          ...item,
          title: item.title || item.tittle || item.Title || "Untitled Role",
        }));

        setFaculty(formattedAwards);
        setGuestEditors(formattedEditors);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center bg-white text-gray-500">
        Loading Awards...
      </div>
    );
  }

  // SAFE IMAGE HELPER
  const getImage = (img) => {
    if (!img) return null;
    if (img.startsWith("http")) return img;
    return `/images/awards/${img}`;
  };

  const heroImage = "/images/awards/hero.jpeg";

  return (
    <section className="w-full bg-white min-h-screen text-gray-900">

      {/* ================= HERO ================= */}
      <div className="bg-white">

        <div className="grid md:grid-cols-2 items-center gap-10 px-6 md:px-16 py-20">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Awards & Recognitions
            </h2>

            <p className="mt-4 text-gray-600 max-w-lg">
              Celebrating a legacy of academic excellence, cutting-edge research, and visionary editorial leadership. At WTMG, IIT Roorkee, our faculty, researchers, and scholars are consistently recognized globally for their transformative contributions to water technology, sustainable management, and environmental stewardship. This section honors the prestigious accolades, fellowships, and global distinctions that reflect our unwavering commitment to solving real-world water challenges and shaping the future of global water sustainability.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-md bg-white">

            <Image
              src={heroImage}
              alt="Awards Hero"
              fill
              className="object-cover"
              priority
            />

          </div>

        </div>
      </div>

      {/* ================= AWARDS ================= */}
      <div className="px-6 md:px-16 mt-10 relative bg-white">

        <h3 className="text-2xl font-bold mb-6">
          Recent Awards
        </h3>

        {faculty.length === 0 ? (
          <p className="text-gray-500">No awards found.</p>
        ) : (
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >

            {faculty.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                >

                  {/* IMAGE */}
                  <div className="relative h-[260px] bg-white">
                    <Image
                      src={getImage(item.image?.[0]) || "/images/awards/no-image.jpg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {item.organization}
                    </p>

                    <p className="text-xs text-gray-400">
                      {item.year}
                    </p>

                    <p className="text-sm mt-3 text-gray-600 line-clamp-3">
                      {item.description}
                    </p>

                    {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        className="inline-block mt-4 text-blue-600 text-sm"
                      >
                        View →
                      </Link>
                    )}
                  </div>

                </motion.div>
              </SwiperSlide>
            ))}

          </Swiper>
        )}

        {/* NAV BUTTONS */}
        <button
          ref={prevRef}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-sm p-2 rounded-full"
        >
          ◀
        </button>

        <button
          ref={nextRef}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-sm p-2 rounded-full"
        >
          ▶
        </button>

      </div>

      {/* ================= EDITORIAL ================= */}
      <div className="px-6 md:px-16 mt-20 mb-16 bg-white">

        <h3 className="text-2xl font-bold mb-6">
          Editorial Roles
        </h3>

        {guestEditors.length === 0 ? (
          <p className="text-gray-500">No editorial roles available.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">

            {guestEditors.map((g, i) => (
              <div
                key={i}
                className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm"
              >

                <h4 className="font-semibold">
                  {g.title}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  {g.journal}
                </p>

                {g.link && (
                  <Link
                    href={g.link.replace(/\[|\]/g, "")}
                    target="_blank"
                    className="text-blue-600 text-sm mt-2 inline-block"
                  >
                    View →
                  </Link>
                )}

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}