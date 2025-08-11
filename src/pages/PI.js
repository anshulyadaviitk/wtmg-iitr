// Dr. Anshul Yadav Profile Page
'use client'; // If using Next.js 13+ with app directory

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { pi } from '@/content/groupmembers';
import { awards } from '@/content/awards';
import AwardsSection1 from '@/components/sections/AwardsSection1';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  BuildingOfficeIcon, 
  AcademicCapIcon, 
  BookOpenIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

export default function DrAnshulYadav() {
  return (

    <Layout>
          <Head>
            <title>Principal Investigator | WTMG Research Group</title>
          </Head>

  <div className="px-0 py-6 max-w-7xl mx-auto space-y-10">

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Image
          src="/images/groupmembers/PI/anshul-yadav.jpeg"
          alt="Dr. Anshul Yadav"
          width={300}
          height={300}
          className="rounded-2xl shadow-lg"
        />
      <div>
  <h1 className="text-3xl font-bold">Dr. Anshul Yadav</h1>
  <p className="text-lg">Assistant Professor</p>
  <p>Department of Water Resources Development and Management,<br/>Indian Institute of Technology Roorkee</p>

  {/* Email & Phone with Icons */}
  <div className="mt-2 space-y-1 text-sm text-gray-700">
 
  <p className="flex items-center gap-2 text-gray-700">
    <EnvelopeIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
    <span>anshul.yadav@wr.iitr.ac.in</span>
  </p>
  <p className="flex items-start gap-2 text-gray-700">
    <PhoneIcon className="h-5 w-5 text-blue-600 mt-[2px] flex-shrink-0" />
    <span>
      +91-94735 83417 (Mobile)<br />
      +91-1332-285617 (Office)
    </span>
  </p>
   <p className="flex items-start gap-2 text-gray-700">
    <BuildingOfficeIcon className="h-6 w-6 text-blue-600 mt-[2px] flex-shrink-0" />
    <span>
      First floor, Department of Water Resources Development and Management, <br />
      Indian Institute of Technology Roorkee
    </span>
  </p>
</div>


  {/* Social Links with Icons */}
  <div className="flex gap-6 mt-4 items-center">
  
  <Link href="https://www.researchgate.net/profile/Anshul-Yadav-14" target="_blank">
    <img
      src="/images/logos/research.png"
      alt="ResearchGate"
      className="h-10 w-10 object-contain rounded-xl shadow-sm border border-gray-200"
    />
  </Link>

  <Link href="https://www.linkedin.com/in/anshul-yadav-2b29ab305/" target="_blank">
    <img
      src="/images/logos/LinkedIn_logo.png"
      alt="LinkedIn"
      className="h-10 w-10 object-contain rounded-xl shadow-sm border border-gray-200"
    />
  </Link>
  <Link href="https://scholar.google.com/citations?user=ZIGtPEIAAAAJ&hl=en" target="_blank">
    <img
      src="/images/logos/scholars.png"
      alt="Google Scholar"
      className="h-10 w-10 object-contain rounded-xl shadow-sm border border-gray-200"
    />
  </Link>
</div>

</div>

      </div>

      <section>
        <h2 className="text-2xl font-semibold">Biography</h2>
        <p>Dr. Anshul Yadav is an Assistant Professor in the Department of Water Resources Development & Management at Indian Institute of Technology Roorkee and the founding Principal Investigator of the Water Treatment & Monitoring Group (WTMG). His research unites advanced separation science with smart sensing, spanning membrane distillation, electrodialysis, adsorption, and the design of polymeric, composite, and MOF/ZIF-based membranes. By coupling these materials with IoT-enabled water-quality sensor networks, he pursues real-time, data-driven solutions for drinking-water security and industrial wastewater reuse. His work has led to multiple patents, peer-reviewed publications, and competitive funding from national agencies. Beyond the lab, Dr. Yadav integrates research, teaching, and outreach.</p>
      </section>

      <section>
  <h2 className="text-2xl font-bold mb-6">EDUCATION</h2>

  {/* Ph.D. - ACSIR */}
  <div className="flex gap-6 mb-6">
    <img
      src="/images/logos/acsir.jpeg"
      alt="CSIR"
      className="w-20 h-20 object-contain mt-1"
    />
    <div>
      <p className="font-semibold">
        Ph.D. (Engineering Sciences), 2022
      </p>
      <p className="italic">Academy of Scientific and Innovative Research (AcSIR), India</p>
      <p className="mt-1">
        Thesis title: Membrane distillation process for high saline and wastewater treatment
      </p>
      <p>
        Advisor: Dr. Pawan Kumar Labhasetwar, Dr. Vinod Kumar Shahi
      </p>
    </div>
  </div>

  {/* M.Tech - IIT Kanpur */}
  <div className="flex gap-6 mb-6">
    <img
      src="/images/logos/iitkanpur_logo.png"
      alt="IIT Kanpur"
      className="w-20 h-20 object-contain mt-1"
    />
    <div>
      <p className="font-semibold">
        M.Tech. (Mechanical Engineering), 2017
      </p>
      <p className="italic">Indian Institute of Technology Kanpur, India</p>
      <p className="mt-1">
        Thesis title: Thermal Field, Weld Bead Geometry and Characteristics in Submerged Arc Welded Plate
      </p>
      <p>
        Advisor: Dr. Arvind Kumar
      </p>
    </div>
  </div>
  {/*B.Tech*/}
  <div className="flex gap-6 mb-6">
  <img
    src="/images/logos/iitkanpur_logo.png"
    alt="IIT Kanpur"
    className="w-20 h-20 object-contain mt-1"
  />
  <div>
    <p className="font-semibold">
      B.Tech. (Major: Mechanical Engineering; Minor: Electrical Engineering), 2017
    </p>
    <p className="italic">Indian Institute of Technology Kanpur, India</p>
  </div>
</div>

</section>


{/*Professional Experience */}
   <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-900 mb-1 text-center">
      Professional Experience
      <span className="block w-16 h-1 bg-blue-600 mx-auto mt-4"></span>
    </h2>
    
    <ol className="relative border-l-2 border-blue-100">
      {[
        {
          position: "Assistant Professor",
          institute: "Indian Institute of Technology Roorkee",
          logo: "images/logos/iitr-logo-white.png",
          from: "Sep 2024",
          to: "Present",
          description: "Teaching and research in [your specialization] department."
        },
        {
          position: "Assistant Professor",
          institute: "Academy of Scientific and Innovative Research",
          logo: "images/logos/acsir.jpeg",
          from: "Jan 2023",
          to: "Sep 2024",
          description: "Conducted research and mentored graduate students in [your field]."
        },
        {
          position: "Scientist",
          institute: "Central Salt and Marine Chemicals Research Institute",
          logo: "images/logos/csir.png",
          from: "Apr 2019",
          to: "Sep 2024",
          description: "Led research projects focused on [specific research areas]."
        },
        {
          position: "Assistant Professor",
          institute: "Kamla Nehru Institute of Technology, Sultanpur",
          logo: "images/logos/knit.jpg",
          from: "Dec 2017",
          to: "Feb 2019",
          description: "Taught undergraduate courses in [subjects] and supervised student projects."
        },
        {
          position: "Project Associate",
          institute: "Indian Institute of Technology Kanpur",
          logo: "images/logos/iitkanpur.jpg",
          from: "Jun 2017",
          to: "Sep 2017",
          description: "Worked on [specific project name] under the guidance of [advisor name]."
        },
        {
          position: "Teaching Assistant",
          institute: "Indian Institute of Technology Kanpur",
          logo: "images/logos/iitkanpur.jpg",
          from: "Jul 2016",
          to: "Apr 2017",
          description: "Assisted in teaching [course names] and grading assignments."
        }
      ].map((exp, index) => (
        <li className="mb-0.5 ml-1 relative group" key={index}>
          <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-4 ring-white transform group-hover:scale-110 transition-transform duration-200">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </span>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex-shrink-0">
              <img
                src={exp.logo}
                alt={`${exp.institute} logo`}
                className="w-20 h-20 sm:w-20 sm:h-20 object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
              <p className="text-lg font-medium text-gray-700">{exp.institute}</p>
              <p className="text-sm text-gray-500 mt-1">{exp.description}</p>
              <span className="absolute top-4 right-4 text-sm font-medium text-gray-600">
  {exp.from} – {exp.to}
</span>

            </div>
          </div>
        </li>
      ))}
    </ol>
  </div>
</section>
{/*Project Section */}
<section id="research-projects" className="py-12 md:py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Heading */}
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Current Research Projects
      </h2>
      <div className="mt-3 h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
    </div>

    {/* Project Cards */}
    <div className="space-y-5">
      {pi.projects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          <div className="p-5 sm:p-6 flex gap-4 items-start">
            
            {/* Logo on Left */}
            <div className="flex-shrink-0">
              <img
                src={project.images}
                alt={project.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
  <div className="flex justify-between items-start mb-1">
    <h3 className="text-base font-semibold text-gray-900 leading-snug">
      {project.title}
    </h3>

    {/* Show "Ongoing" or "Completed" based on duration */}
    {(() => {
      const currentYear = new Date().getFullYear();
      let endYear = null;

      // Match formats like "2022–2025", "2023-24", "2021 to 2026"
      const match = project.duration.match(/(\d{4})\D+(\d{2,4})/);
      if (match) {
        const parsedEnd =
          match[2].length === 2
            ? parseInt(match[1].slice(0, 2) + match[2], 10) // Convert "24" → "2024"
            : parseInt(match[2], 10);
        endYear = parsedEnd;
      }

      if (endYear) {
        if (endYear >= currentYear) {
          return (
            <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full ml-3">
              Ongoing
            </span>
          );
        } else {
          return (
            <span className="text-xs font-medium bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full ml-3">
              Completed
            </span>
          );
        }
      }
      return null;
    })()}
  </div>

  {/* Metadata */}
  <p className="text-xs text-gray-500">
    <span className="font-medium">Sponsoring Agency:</span> {project.sponsor}
  </p>
  <p className="text-xs text-gray-500">
    <span className="font-medium">Role:</span> {project.role}
  </p>
  <p className="text-xs text-gray-500">
    <span className="font-medium">Budget:</span> {project.funding}
  </p>
  <p className="text-xs text-gray-500">
    <span className="font-medium">Duration:</span> {project.duration}
  </p>

  {/* Description */}
  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
    {project.description}
  </p>

  {/* View Details Link */}
  <a
    href="#"
    className="text-sm text-blue-600 hover:text-blue-800 font-medium ml-auto block"
  >
    View details →
  </a>
</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      
          <section className="py-12">
  <AwardsSection1 awards={awards} />
</section>


        {/*Member ship section*/}
     <section className="my-10">
  <h2 className="text-2xl font-semibold mb-6">Memberships</h2>
  <div className="space-y-4">
    <div className="p-4 border rounded-2xl shadow-sm bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">Institution of Engineers, India</h3>
          <p className="text-sm">Associate Member</p>
        </div>
        <p className="text-sm text-gray-600 whitespace-nowrap">15 Dec 2017 – Present</p>
      </div>
    </div>

    <div className="p-4 border rounded-2xl shadow-sm bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">Indian Institute of Chemical Engineers, India</h3>
          <p className="text-sm">Life Associate Member</p>
        </div>
        <p className="text-sm text-gray-600 whitespace-nowrap">01 Dec 2023 – Present</p>
      </div>
    </div>

    <div className="p-4 border rounded-2xl shadow-sm bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">Indian Water Resources Society, India</h3>
          <p className="text-sm">Life Member</p>
        </div>
        <p className="text-sm text-gray-600 whitespace-nowrap">14 Nov 2024 – Present</p>
      </div>
    </div>

    <div className="p-4 border rounded-2xl shadow-sm bg-white">
      <div>
        <h3 className="text-lg font-medium">Institute of Research Engineers and Doctors (IRED)</h3>
        <p className="text-sm">Associate Member</p>
      </div>
    </div>

    <div className="p-4 border rounded-2xl shadow-sm bg-white">
      <div>
        <h3 className="text-lg font-medium">International Sol-Gel Society (ISGS)</h3>
        <p className="text-sm">Member</p>
      </div>
    </div>

    <div className="p-4 border rounded-2xl shadow-sm bg-white">
      <div>
        <h3 className="text-lg font-medium">Indian Science Congress Association (ISCA)</h3>
        <p className="text-sm">Life Member</p>
      </div>
    </div>

    <div className="p-4 border rounded-2xl shadow-sm bg-white">
      <div>
        <h3 className="text-lg font-medium">International Association of Engineers (IAENG)</h3>
        <p className="text-sm">Member</p>
      </div>
    </div>

    <div className="p-4 border rounded-2xl shadow-sm bg-white">
      <div>
        <h3 className="text-lg font-medium">Institute of Exploring Advances in Engineering (IEAE)</h3>
        <p className="text-sm">Member</p>
      </div>
    </div>
  </div>
</section>

    </div>
    </Layout>
  );
}
