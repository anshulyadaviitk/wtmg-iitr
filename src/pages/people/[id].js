import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import {/* pi, */postdoc,phdScholars, mastersStudents,project_student, interns } from '@/content/groupmembers';
import Layout from '@/components/layout/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const allPeople = [
  /*pi,*/
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
        <div className="text-center py-20">Loading...</div>
      </Layout>
    );
  }

  if (!id) return null;

  const person = allPeople.find((p) => p.id === id);

  if (!person) {
    return (
      <Layout>
        <div className="text-center py-20 text-xl">Person not found</div>
      </Layout>
    );
  }

  // Safe access to potentially undefined properties
  const researchInterests = person.researchInterests || [];
  const education = person.education || [];
  const projects = person.projects || [];
  const contact = person.contact || {};
  const social = person.social || {};

  return (
    <Layout>
      <Head>
        <title>{person.name} | Water Resources Research Group</title>
        <meta name="description" content={`Profile of ${person.name}, ${person.position}`} />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
        {person.photo && (
  <div className="relative w-48 h-48 flex-shrink-0">
    <Image
      src={person.photo}
      alt={person.name}
      fill
      className="object-contain md:object-contain object-top"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority
    />
  </div>
)}

          
          <div>
            <h1 className="text-3xl font-bold mb-2">{person.name}</h1>
            <p className="text-blue-600 text-xl font-semibold mb-4">{person.position}</p>
            
            {person.department && (
              <p className="text-gray-700 mb-4 whitespace-pre-line">
                <strong></strong> {person.department}
              </p>
            )}
          </div>
        </div>

        {/* Research Interests */}
    {researchInterests.length > 0 && (
  <div className="mb-6 text-left">
    <h2 className="text-xl font-semibold mb-2">Research Interests</h2>
    <div className="flex flex-wrap gap-2 justify-start">
      {researchInterests.map((interest, idx) => (
        <span
          key={idx}
          className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm"
        >
          {interest}
        </span>
      ))}
    </div>
  </div>
)}


        {/* Education */}
        {education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <ul className="space-y-2">
              {education.map((edu, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Contact info */}
        {(contact.email || contact.phone || contact.office || contact.website) && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <ul className="space-y-2">
              {contact.email && (
                <li className="flex items-center">
                  <span className="text-gray-500 w-24">Email:</span>
                  <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.phone && (
                <li className="flex items-center">
                  <span className="text-gray-500 w-24">Phone:</span>
                  <span>{contact.phone}</span>
                </li>
              )}
              {contact.office && (
                <li className="flex items-center">
                  <span className="text-gray-500 w-24">Office:</span>
                  <span>{contact.office}</span>
                </li>
              )}
              {contact.website && (
                <li className="flex items-center">
                  <span className="text-gray-500 w-24">Website:</span>
                  <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {contact.website}
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Bio */}
        {person.bio && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Bio</h2>
            <p className="text-gray-700">{person.bio}</p>
          </div>
        )}

        {/* Social links */}
        {(social.googleScholar || social.researchGate || social.linkedIn) && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Social Profiles</h2>
            <div className="flex gap-4">
              {social.googleScholar && (
                <a
                  href={social.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <span className="mr-1">Google Scholar</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {social.researchGate && (
                <a
                  href={social.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <span className="mr-1">ResearchGate</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {social.linkedIn && (
                <a
                  href={social.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <span className="mr-1">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg">{proj.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    {proj.funding && (
                      <p><strong>Funding:</strong> {proj.funding}</p>
                    )}
                    {proj.duration && (
                      <p><strong>Duration:</strong> {proj.duration}</p>
                    )}
                  </div>
                  {proj.description && (
                    <p className="mt-2 text-gray-700">{proj.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional fields */}
        {(person.topic || person.previousDegree || person.nationality || person.duration || person.email || person.currentStatus || person.thesisLink) && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
            <div className="space-y-4">
              {person.previousDegree && (
                <div>
                  <h3 className="font-medium text-gray-500">Previous Degree</h3>
                  <p className="whitespace-pre-line">{person.previousDegree}</p>
                </div>
              )}
               {person.previousDegree && (
                <div>
                  <h3 className="font-medium text-gray-500">Nationality</h3>
                  <p className="whitespace-pre-line">{person.nationality}</p>
                </div>
              )}
        <div className="w-full flex justify-start items-start text-left">
  {person.topic && (
    <div>
      <h3 className="font-medium text-gray-500">Research Topic</h3>
      <p>{person.topic}</p>
    </div>
  )}
   {person.funding && (
    <div>
      <h3 className="font-medium text-gray-500">Funding</h3>
      <p>{person.funding}</p>
    </div>
  )}
</div>
<div className="w-full flex justify-start items-start text-left">
  {person.researchArea && (
    <div>
      <h3 className="font-medium text-gray-500">Research Area</h3>
      <p>{person.researchArea}</p>
    </div>
  )}
</div>

              {person.duration && (
                <div>
                  <h3 className="font-medium text-gray-500">Duration</h3>
                  <p>{person.duration}</p>
                </div>
              )}
              {person.progress && (
                <div>
                  <h3 className="font-medium text-gray-500">Progress</h3>
                  <p>{person.progress}</p>
                </div>
              )}
              {person.email && (
                <div>
                  <h3 className="font-medium text-gray-500">Email</h3>
                  <a href={`mailto:${person.email}`} className="text-blue-600 hover:underline">
                    {person.email}
                  </a>
                </div>
              )}
              {person.currentStatus && (
                <div>
                  <h3 className="font-medium text-gray-500">Current Status</h3>
                  <p>{person.currentStatus}</p>
                </div>
              )}
              {person.thesisLink && (
                <div>
                  <h3 className="font-medium text-gray-500">Thesis</h3>
                  <a
                    href={person.thesisLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Download PDF
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
       {/* Only show for PhD and MTech students */}
{(person.type?.includes('PhD') || person.type?.includes('MTech')) && (
  <div className="mt-8 pt-6 border-t border-gray-300 space-y-6">

 

    {/* Publications */}
    {person.peerReviewedPublications?.length > 0 && (
      <div>
        <h2 className="text-xl font-semibold mb-2">Peer Reviewed Publications</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {person.peerReviewedPublications.map((pub, idx) => (
            <li key={idx}>{pub}</li>
          ))}
        </ul>
      </div>
    )}

    {/* Patents */}
    {person.patents?.length > 0 && (
      <div>
        <h2 className="text-xl font-semibold mb-2">Patents</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {person.patents.map((pat, idx) => (
            <li key={idx}>{pat}</li>
          ))}
        </ul>
      </div>
    )}

    {/* Conferences */}
    {person.conferences?.length > 0 && (
      <div>
        <h2 className="text-xl font-semibold mb-2">Conferences Attended</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {person.conferences.map((conf, idx) => (
            <li key={idx}>{conf}</li>
          ))}
        </ul>
      </div>
    )}

    {/* Awards */}
    {person.awards?.length > 0 && (
      <div>
        <h2 className="text-xl font-semibold mb-2">Awards</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {person.awards.map((award, idx) => (
            <li key={idx}>{award}</li>
          ))}
        </ul>
      </div>
    )}
       {/* Event Highlights Carousel */}
    {person.images?.length > 0 && (
      <div className="w-full max-w-4xl mx-auto mt-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          {person.images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Event ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )}

  </div>
)}
    </div>
  </Layout>
)};
