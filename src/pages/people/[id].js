import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

import {
  postdoc,
  phdScholars,
  mastersStudents,
  project_student,
  interns,
} from "@/content/groupmembers";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const allPeople = [
  ...postdoc,
  ...phdScholars,
  ...mastersStudents,
  ...project_student,
  ...interns,
];

export default function PeopleView() {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return (
      <Layout>
        <div className="py-24 text-center">Loading...</div>
      </Layout>
    );
  }

  if (!id) return null;

  const person = allPeople.find((p) => p.id === id);

  if (!person) {
    return (
      <Layout>
        <div className="py-24 text-center text-2xl">Person not found</div>
      </Layout>
    );
  }

  const researchInterests = person.researchInterests || [];
  const education = person.education || [];
  const projects = person.projects || [];
  const contact = person.contact || {};

  return (
    <Layout>
      <Head>
        <title>{person.name}</title>
      </Head>

      {/* Main Container Wrapper */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* Profile Header */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-10 p-10">
            <div className="flex justify-center">
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-blue-50 shadow-lg">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center">
              <h1 className="text-5xl font-bold text-gray-900">{person.name}</h1>
              <p className="mt-4 text-2xl text-blue-600 font-semibold">
                {person.position}
              </p>
              {person.department && (
                <p className="mt-6 text-gray-600 leading-8">{person.department}</p>
              )}
            </div>
          </div>
        </div>

        {/* ================= Research & Education ================= */}
        {(researchInterests.length > 0 || education.length > 0) && (
          <div className="grid lg:grid-cols-2 gap-8 mt-10">
            {/* Research Interests */}
            {researchInterests.length > 0 && (
              <div className="bg-white rounded-3xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Research Interests</h2>
                <div className="flex flex-wrap gap-3">
                  {researchInterests.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div className="bg-white rounded-3xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Education</h2>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-600 mt-2"></div>
                      <p className="text-gray-700 leading-7">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= Contact ================= */}
        {(contact.email || contact.phone || contact.office || contact.website) && (
          <div className="bg-white rounded-3xl shadow-md p-8 mt-10">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {contact.email && (
                <div>
                  <p className="text-gray-500">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              )}

              {contact.phone && (
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p>{contact.phone}</p>
                </div>
              )}

              {contact.office && (
                <div>
                  <p className="text-gray-500">Office</p>
                  <p>{contact.office}</p>
                </div>
              )}

              {contact.website && (
                <div>
                  <p className="text-gray-500">Website</p>
                  <a
                    href={contact.website}
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

        {/* ================= Bio ================= */}
        {person.bio && (
          <div className="bg-white rounded-3xl shadow-md p-8 mt-10">
            <h2 className="text-2xl font-bold mb-6">Biography</h2>
            <p className="text-gray-700 leading-8 whitespace-pre-line">
              {person.bio}
            </p>
          </div>
        )}

        {/* ================= Additional Information ================= */}
        {(person.topic ||
          person.previousDegree ||
          person.nationality ||
          person.researchArea ||
          person.funding ||
          person.duration ||
          person.progress ||
          person.currentStatus ||
          person.thesisLink) && (
          <div className="bg-white rounded-3xl shadow-md p-8 mt-10">
            <h2 className="text-2xl font-bold mb-8">Additional Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {person.topic && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Research Topic</p>
                  <p className="text-gray-800 font-medium leading-7">
                    {person.topic}
                  </p>
                </div>
              )}

              {person.researchArea && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Research Area</p>
                  <p className="text-gray-800 font-medium">{person.researchArea}</p>
                </div>
              )}

              {person.previousDegree && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Previous Degree</p>
                  <p className="text-gray-800 font-medium">
                    {person.previousDegree}
                  </p>
                </div>
              )}

              {person.nationality && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Nationality</p>
                  <p className="text-gray-800 font-medium">{person.nationality}</p>
                </div>
              )}

              {person.funding && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Funding</p>
                  <p className="text-gray-800 font-medium">{person.funding}</p>
                </div>
              )}

              {person.duration && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Duration</p>
                  <p className="text-gray-800 font-medium">{person.duration}</p>
                </div>
              )}

              {person.progress && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Progress</p>
                  <p className="text-gray-800 font-medium">{person.progress}</p>
                </div>
              )}

              {person.currentStatus && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Current Status</p>
                  <p className="text-gray-800 font-medium">
                    {person.currentStatus}
                  </p>
                </div>
              )}

              {person.email && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a
                    href={`mailto:${person.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {person.email}
                  </a>
                </div>
              )}

              {person.thesisLink && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Thesis</p>
                  <a
                    href={person.thesisLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Download Thesis
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= Projects ================= */}
        {projects.length > 0 && (
          <div className="bg-white rounded-3xl shadow-md p-8 mt-10">
            <h2 className="text-2xl font-bold mb-8">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border rounded-2xl p-6 hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    {project.funding && (
                      <div>
                        <p className="text-gray-500 text-sm">Funding</p>
                        <p>{project.funding}</p>
                      </div>
                    )}
                    {project.duration && (
                      <div>
                        <p className="text-gray-500 text-sm">Duration</p>
                        <p>{project.duration}</p>
                      </div>
                    )}
                  </div>
                  {project.description && (
                    <p className="mt-5 text-gray-700 leading-7">
                      {project.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= Publications / Patents / Conferences / Awards ================= */}
        {(person.type?.includes("PhD") || person.type?.includes("MTech")) && (
          <div className="space-y-10 mt-10">
            {/* Publications */}
            {person.peerReviewedPublications?.length > 0 && (
              <div className="bg-white rounded-3xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Peer Reviewed Publications
                </h2>
                <ul className="space-y-4">
                  {person.peerReviewedPublications.map((pub, index) => (
                    <li
                      key={index}
                      className="border-l-4 border-blue-600 pl-5 text-gray-700 leading-7"
                    >
                      {pub}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Patents */}
            {person.patents?.length > 0 && (
              <div className="bg-white rounded-3xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Patents</h2>
                <ul className="space-y-4">
                  {person.patents.map((patent, index) => (
                    <li
                      key={index}
                      className="border-l-4 border-green-600 pl-5 text-gray-700 leading-7"
                    >
                      {patent}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Conferences */}
            {person.conferences?.length > 0 && (
              <div className="bg-white rounded-3xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Conferences</h2>
                <ul className="space-y-4">
                  {person.conferences.map((conference, index) => (
                    <li
                      key={index}
                      className="border-l-4 border-orange-500 pl-5 text-gray-700 leading-7"
                    >
                      {conference}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Awards */}
            {person.awards?.length > 0 && (
              <div className="bg-white rounded-3xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Awards</h2>
                <ul className="space-y-4">
                  {person.awards.map((award, index) => (
                    <li
                      key={index}
                      className="border-l-4 border-yellow-500 pl-5 text-gray-700 leading-7"
                    >
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* ================= Image Gallery ================= */}
        {person.images?.length > 0 && (
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
              className="rounded-2xl overflow-hidden"
            >
              {person.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
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
  );
}