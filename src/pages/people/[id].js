import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

import { getMembers } from "@/services/groupmembers";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function PeopleView() {
  const router = useRouter();
  const { id } = router.query;

  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPerson() {
      if (!id) return;

      try {
        const sheets = [
          "postdoc",
          "phd",
          "masters",
          "interns",
          "projectstudents",
        ];

        let allPeople = [];

        for (const sheet of sheets) {
          const data = await getMembers(sheet);

          allPeople = [
            ...allPeople,
            ...data.map((item) => ({
              ...item,
              category: sheet,
              // डेटा लोड करते समय ही फोटो नाम के आगे-पीछे के एक्स्ट्रा स्पेस हटा रहे हैं
              photo: item.photo ? String(item.photo).trim() : "", 
            })),
          ];
        }

        const foundPerson = allPeople.find(
          (person) => String(person.id) === String(id)
        );

        setPerson(foundPerson);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadPerson();
  }, [id]);

  // यह फंक्शन सुनिश्चित करेगा कि पाथ हमेशा "/" से ही शुरू हो
  const getPhotoPath = (person) => {
    if (!person?.photo) {
      return "/images/default-profile.png";
    }

    if (
      person.photo.startsWith("/") ||
      person.photo.startsWith("http")
    ) {
      return person.photo;
    }

    const folder = {
      phd: "phd",
      masters: "mtech",
      postdoc: "postdoc",
      interns: "interns",
      projectstudents: "project",
    };

    const selectedFolder = person.category ? (folder[person.category] || "phd") : "phd";
    
    // यहाँ हमेशा सही रिलेटिव पाथ बनेगा: /images/groupmembers/phd/vivek_kumar.jpeg
    const finalPath = `/images/groupmembers/${selectedFolder}/${person.photo}`;

    return finalPath.startsWith("/") ? finalPath : `/${finalPath}`;
  };

  if (loading) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h2 className="text-2xl font-semibold">Loading...</h2>
        </div>
      </Layout>
    );
  }

  if (!person) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold">Person Not Found</h2>
        </div>
      </Layout>
    );
  }

  const researchInterests = person.researchInterests
    ? person.researchInterests.split(",")
    : [];

  const education = person.education 
    ? person.education.split("|") 
    : [];

  const images = person.images
    ? person.images.split(",").map((img) => img.trim())
    : [];

  return (
    <>
      <Head>
        <title>
          {person.name} | Water Resources Research Group
        </title>
      </Head>

      <Layout>
        <div className="max-w-7xl mx-auto px-6 py-14">
          
          {/* Profile Header */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-10 p-10">
              <div className="flex justify-center">
                <div className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-blue-50 shadow-lg">
                  <Image
                    src={getPhotoPath(person)}
                    alt={person.name}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col justify-center">
                <h1 className="text-5xl font-bold text-gray-900">
                  {person.name}
                </h1>

                <p className="mt-4 text-2xl text-blue-600 font-semibold">
                  {person.position}
                </p>

                {person.department && (
                  <p className="mt-6 text-gray-600 leading-8">
                    {person.department}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Research Interests + Education */}
          <div className="grid lg:grid-cols-2 gap-8 mt-10">
            {researchInterests.length > 0 && (
              <div className="bg-white rounded-3xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Research Interests</h2>
                <div className="flex flex-wrap gap-3">
                  {researchInterests.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-blue-100 text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {education.length > 0 && (
              <div className="bg-white rounded-3xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Education</h2>
                {education.map((edu, index) => (
                  <p key={index} className="mb-3 text-gray-700">
                    • {edu}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Biography */}
          {person.bio && (
            <div className="bg-white rounded-3xl shadow-md p-8 mt-10">
              <h2 className="text-2xl font-bold mb-6">Biography</h2>
              <p className="text-gray-700 leading-8 whitespace-pre-line">
                {person.bio}
              </p>
            </div>
          )}

          {/* Contact Information */}
          {(person.email || person.phone || person.website) && (
            <div className="bg-white rounded-3xl shadow-md p-8 mt-10">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {person.email && (
                  <div>
                    <p className="text-gray-500">Email</p>
                    <a
                      href={`mailto:${person.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {person.email}
                    </a>
                  </div>
                )}

                {person.phone && (
                  <div>
                    <p className="text-gray-500">Phone</p>
                    <p>{person.phone}</p>
                  </div>
                )}

                {person.website && (
                  <div>
                    <p className="text-gray-500">Website</p>
                    <a
                      href={person.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Additional Information */}
          <div className="bg-white rounded-3xl shadow-md p-8 mt-10">
            <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.keys(person).map((key) => {
                if (
                  [
                    "id",
                    "name",
                    "photo",
                    "images",
                    "bio",
                    "researchInterests",
                    "education",
                    "category",
                    "position",
                    "department",
                    "email",
                    "phone",
                    "website",
                  ].includes(key)
                ) {
                  return null;
                }

                return (
                  <div key={key}>
                    <p className="text-sm text-gray-500 capitalize">{key}</p>
                    <p className="font-medium text-gray-800 break-words">
                      {person[key]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gallery */}
          {images.length > 0 && (
            <div className="bg-white rounded-3xl shadow-md p-8 mt-10">
              <h2 className="text-2xl font-bold mb-8">Gallery</h2>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={
                        img.startsWith("/") || img.startsWith("http")
                          ? img
                          : `/images/groupmembers/${person.category}/${img}`
                      }
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-[450px] object-cover rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

        </div>
      </Layout>
    </>
  );
}