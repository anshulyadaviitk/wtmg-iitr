import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { pi } from '@/content/groupmembers';
import { researchAreas } from '@/content/researchAreas';
import { awards } from '@/content/awards';
import ResearchAreaCard from '@/components/research/ResearchAreaCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
// Import at the top
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { notices } from '@/content/notice_updatedata';
import { upcomingevents } from '@/content/notice_updatedata';
import ResearchSection from '@/components/sections/ResearchSection';
import AwardsSection1 from '@/components/sections/AwardsSection1';
import { InvitedTalksSection } from '@/components/sections/talksection';
// Replace your current Swiper imports with:
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  BuildingOfficeIcon, 
  AcademicCapIcon, 
  BookOpenIcon,
  CheckCircleIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const featuredAwards = awards.faculty.slice(0, 2);
  const featuredResearch = researchAreas.slice(0, 3);

  return (
    <Layout>
      <Head>
        <title>Home | Water Treatment & Management Group</title>
      </Head>

{/* Modern Professional Hero Section */}
{/* Modern Hero Section */}
<section className="relative bg-slate-50 py-32 px-4 text-slate-800 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
    <div className="absolute top-[10%] -right-[10%] w-[40vw] h-[40vw] bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Text Content */}
    <div className="text-center mb-20">
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
          Water Resources Development 
        </span>
        <br className="hidden md:block" />
        <span className="text-slate-800">
          & Management
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
        Pioneering sustainable water solutions through cutting-edge research and innovation at the Indian Institute of Technology Roorkee.
      </p>
    </div>

    {/* Logo and Images Section */}
    <div className="flex flex-col items-center justify-center relative">
      {/* Top Logo with decorative line */}
      <div className="relative mb-16 w-full flex justify-center items-center">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent z-0" />
        <div className="relative z-10 w-32 aspect-square rounded-full bg-white/80 backdrop-blur-md border-2 border-white shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src="/images/iitr_logo.png"
            alt="IIT Roorkee Logo"
            className="w-28 aspect-square object-contain rounded-full"
          />
        </div>


        
      </div>

      {/* Side-by-side buildings with modern layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 w-full">
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-white/30 transition-all duration-700 hover:shadow-2xl hover:border-blue-300/50">
          <img
            src="/images/iitr_building.jpg"
            alt="IIT Roorkee Campus"
            className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
            <h3 className="text-white text-2xl font-semibold">IIT Roorkee Campus</h3>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl border-4 border-white/30 transition-all duration-700 hover:shadow-2xl hover:border-cyan-300/50">
          <img
            src="/images/logos/wrdm_building.jpg"
            alt="WRDM Department"
            className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
            <h3 className="text-white text-2xl font-semibold">WRDM Department</h3>
          </div>
        </div>
      </div>

      {/* Bottom Logo with decorative line */}
      <div className="relative mt-16 w-full flex justify-center items-center">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent z-0" />
        <div className="relative z-10 w-32 aspect-square rounded-full bg-white/80 backdrop-blur-md border-2 border-white shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src="/images/wrdm_logo_white.png"
            alt="WRDM Logo"
            className="w-28 aspect-square object-contain rounded-full"
          />
        </div>
      </div>
    </div>

    {/* Call to Action Buttons */}
    <div className="flex flex-wrap justify-center gap-6 mt-20">
      <a
        href="https://iitr.ac.in/Departments/Water%20Resources%20Development%20and%20Management%20Department/Home.html"
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
      >
        Explore Programs
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>

      <Link
        href="/research"
        className="px-10 py-4 bg-white text-blue-800 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 border border-blue-200"
      >
        Research
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  </div>
</section>



      {/* PI Introduction */}
<section className="py-20 bg-white relative">
  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col md:flex-row items-start gap-12 max-w-6xl mx-auto">
      {/* Photo Section */}
      <div className="md:w-1/3">
        <div className="relative w-full aspect-[4/5] mx-auto overflow-hidden rounded-2xl shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-[1.02]">
          <Image
            src={pi.photo}
            alt={pi.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Contact Information */}
        <div className="mt-8 bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4 text-lg">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="p-2 bg-blue-50 rounded-lg mr-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-600" />
              </div>
              <a href={`mailto:${pi.contact.email}`} className="text-slate-600 hover:text-blue-600 mt-1 font-medium transition-colors">
                {pi.contact.email}
              </a>
            </li>
            <li className="flex items-start">
              <div className="p-2 bg-blue-50 rounded-lg mr-3">
                <PhoneIcon className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-slate-600 whitespace-pre-line mt-1 font-medium">{pi.contact.phone}</span>
            </li>
            <li className="flex items-start">
              <div className="p-2 bg-blue-50 rounded-lg mr-3">
                <BuildingOfficeIcon className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-slate-600 whitespace-pre-line mt-1 font-medium">{pi.contact.office}</span>
            </li>
          </ul>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-6 items-center border-t border-slate-100 pt-6">
            <Link href="https://www.researchgate.net/profile/Anshul-Yadav-14" target="_blank" className="hover:scale-110 transition-transform">
              <img src="/images/logos/research.png" alt="ResearchGate" className="h-10 w-10 object-contain" />
            </Link>
            <Link href="https://www.linkedin.com/in/anshul-yadav-2b29ab305/" target="_blank" className="hover:scale-110 transition-transform">
              <img src="/images/logos/LinkedIn_logo.png" alt="LinkedIn" className="h-10 w-10 object-contain" />
            </Link>
            <Link href="https://scholar.google.com/citations?user=ZIGtPEIAAAAJ&hl=en" target="_blank" className="hover:scale-110 transition-transform">
              <img src="/images/logos/scholars.png" alt="Google Scholar" className="h-10 w-10 object-contain" />
            </Link>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="md:w-2/3 space-y-8">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
            {pi.name}
          </h2>
          <p className="text-2xl text-blue-600 font-medium mb-2">{pi.position}</p>
          <p className="text-lg text-slate-500 font-medium">{pi.department}</p>
        </div>

        {/* Research Interests */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
            Research Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {pi.researchInterests.map((interest, index) => (
              <span key={index} className="bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors px-4 py-2 rounded-xl text-sm font-semibold">
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-1 bg-green-500 rounded-full"></span>
            Education
          </h3>
          <ul className="space-y-3">
            {pi.education.map((degree, index) => (
              <li key={index} className="flex items-start bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                <span className="text-slate-700 font-medium">{degree}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bio */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
            About
          </h3>
          <p className="text-slate-600 leading-relaxed text-lg font-light bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
            {pi.bio}
          </p>
        </div>

        <Button href="/PI" className="mt-8 px-8 py-4 bg-slate-900 text-white hover:bg-blue-600 rounded-xl transition-colors font-semibold" variant="outline">
          View Full Profile →
        </Button>
      </div>
    </div>
  </div>
</section>

   {/* Research Areas */}
<section id="research" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">

    <ResearchSection researchAreas={researchAreas} />

    <div className="text-center mt-10">
    
    </div>
  </div>
</section>


   {/*Awards section*/} 
<AwardsSection1 awards={awards} showEditorial={false} />


      {/* Notice Board */}
<section className="py-24 bg-slate-50 relative overflow-hidden">
  {/* Abstract BG */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-200/30 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
  
  <div className="container mx-auto px-6 max-w-6xl relative z-10">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-slate-900 tracking-tight">
      News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Events</span>
    </h2>

    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
 {/* Notice  */}
<div className="group flex-1 bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200/60 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 relative overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
  <div className="flex items-center gap-4 mb-8">
    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500 shadow-sm border border-blue-100">
      <BookOpenIcon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
      Notice Board
    </h3>
  </div>

  <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-slate-200">
    {[...notices]
      .sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return new Date(b.date) - new Date(a.date);
      })
      .map((notice) => (
        <li
          key={notice.id}
          className="group/item bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <div>
              <a
                href={notice.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-semibold text-slate-800 group-hover/item:text-blue-700 transition-colors"
              >
                {notice.title}
              </a>
              {notice.isNew && (
                <span className="ml-3 inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-600 rounded-full ring-1 ring-red-600/20 shadow-sm animate-pulse">
                  New
                </span>
              )}
            </div>
            <time
              dateTime={notice.date}
              className="text-xs font-bold text-slate-400 min-w-fit px-3 py-1.5 bg-white rounded-lg shadow-sm border border-slate-100 uppercase tracking-wider"
              title={new Date(notice.date).toLocaleString()}
            >
              {new Date(notice.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </div>
        </li>
      ))}
  </ul>

  <div className="mt-8 pt-6 border-t border-slate-100 text-center">
    <Link href="/notice" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group/link">
      View All Notices
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover/link:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </Link>
  </div>
</div>


      {/* Upcoming Events (Right) */}
<div className="group flex-1 bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200/60 hover:shadow-2xl hover:border-cyan-200 transition-all duration-500 relative overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
  <div className="flex items-center gap-4 mb-8">
    <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-600 transition-colors duration-500 shadow-sm border border-cyan-100">
      <CalendarIcon className="w-7 h-7 text-cyan-600 group-hover:text-white transition-colors duration-500" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
      Upcoming Events
    </h3>
  </div>

  {/* Scrollable area */}
  <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-slate-200">
    {[...upcomingevents]
      .sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return new Date(b.date) - new Date(a.date);
      })
      .map((event) => (
        <li
          key={event.id}
          className="group/item bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:bg-cyan-50/50 hover:border-cyan-200 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <div>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-semibold text-slate-800 group-hover/item:text-cyan-700 transition-colors"
              >
                {event.title}
              </a>
              {event.isNew && (
                <span className="ml-3 inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-cyan-50 text-cyan-600 rounded-full ring-1 ring-cyan-600/20 shadow-sm animate-pulse">
                  New
                </span>
              )}
            </div>
            <time
              dateTime={event.date}
              className="text-xs font-bold text-slate-400 min-w-fit px-3 py-1.5 bg-white rounded-lg shadow-sm border border-slate-100 uppercase tracking-wider"
              title={new Date(event.date).toLocaleString()}
            >
              {new Date(event.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </div>
        </li>
      ))}
  </ul>

  <div className="mt-8 pt-6 border-t border-slate-100 text-center">
    <Link href="/events" className="inline-flex items-center text-cyan-600 font-bold hover:text-cyan-700 transition-colors group/link">
      View All Events
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover/link:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </Link>
  </div>
</div>




    </div>
  </div>
</section>


    </Layout>
  );
}