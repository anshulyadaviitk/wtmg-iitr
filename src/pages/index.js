import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { pi } from "@/content/groupmembers";
import { researchAreas } from "@/content/researchAreas";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { notices } from "@/content/notice_updatedata";

import {
  EnvelopeIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

import {
  Trophy,
  ArrowRight,
  Megaphone,
} from "lucide-react";

export default function Home() {
  const [featuredAwards, setFeaturedAwards] = useState([]);
  const [loadingAwards, setLoadingAwards] = useState(true);

  const featuredResearch = researchAreas.slice(0, 3);

  const featuredNews = [...notices]
    .sort((a, b) => {
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, 3);

  useEffect(() => {
    async function fetchAwards() {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/1AuCpQjHD_MQwovqAbfwfHbBwTyrhXfV0B0qqJfAubhk/gviz/tq?tqx=out:json&gid=2139933393"
        );

        const text = await response.text();
        const json = JSON.parse(
          text.substring(47).slice(0, -2)
        );

        const rows = json.table.rows.map((row) => ({
          id: row.c[0]?.v || "",
          title: row.c[1]?.v || "",
          organization: row.c[2]?.v || "",
          year: row.c[3]?.v || "",
          description: row.c[4]?.v || "",
          image: row.c[5]?.v || "",
          link: row.c[6]?.v || "",
        }));

        rows.sort((a, b) => Number(b.year) - Number(a.year));
        setFeaturedAwards(rows.slice(0, 3));
      } catch (err) {
        console.error(err);
      } finally {
        {/* Yahan 'finally' ki spelling thik kar di gayi hai */}
        setLoadingAwards(false);
      }
    }

    fetchAwards();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Home | Water Treatment & Management Group</title>
      </Head>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none hidden lg:block" aria-hidden="true">
            <svg width="100%" height="100%">
              {[80, 160, 240, 320, 400, 480].map((y) => (
                <path
                  key={y}
                  d={`M0,${y} C150,${y - 40} 250,${y + 40} 400,${y} C550,${y - 40} 650,${y + 40} 800,${y}`}
                  fill="none"
                  stroke="#1B3A5C"
                  strokeWidth="1"
                />
              ))}
            </svg>
          </div>

          <div>
            <h1 className="font-sans font-semibold text-4xl md:text-5xl leading-[1.12] text-ink mb-5">
              Water Resource <span className="text-accent-600">Development</span> &amp; Management
            </h1>

            <p className="text-lg text-ink/65 max-w-lg mb-8 leading-relaxed">
              Pioneering sustainable water solutions through cutting-edge research
              and innovation at Indian Institute of Technology Roorkee
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-600 text-white font-medium rounded-md hover:bg-accent-700"
              >
                Explore Research
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/lab"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-700 font-medium rounded-md border border-line hover:bg-primary-50"
              >
                Our Lab
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white">
              <img
                src="/images/iitr_building.jpg"
                alt="IIT Roorkee"
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>

            <div className="hidden md:flex absolute -left-6 -top-6 w-20 h-20 rounded-full bg-white shadow-lg border border-line items-center justify-center flex-col">
              <img
                src="/images/iitr_logo.png"
                className="w-9 h-9 object-contain"
                alt="IITR"
              />
              <span className="mt-1 text-[9px]">IITR</span>
            </div>

            <div className="hidden md:flex absolute -left-6 -bottom-6 w-20 h-20 rounded-full bg-white shadow-lg border border-line items-center justify-center flex-col">
              <img
                src="/images/logos/wrdm_logo.png"
                className="w-9 h-9 object-contain"
                alt="WTMG"
              />
              <span className="mt-1 text-[9px]">WTMG</span>
            </div>
          </div>
        </div>

        {/* Info Grid: Research, Awards, News */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Research */}
          <div className="bg-white rounded-xl border border-line shadow-sm p-6">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-lg">Research Areas</h3>
              <Link
                href="/research"
                className="text-accent-600 text-sm flex items-center gap-1"
              >
                View All
                <ArrowRight className="w-4 h-4"/>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {featuredResearch.map((area)=>(
                <div
                  key={area.id}
                  className="aspect-square rounded-lg overflow-hidden"
                >
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <ul className="space-y-2">
              {featuredResearch.map((area)=>(
                <li key={area.id}>
                  <Link
                    href="/research?tab=areas"
                    className="text-sm hover:text-accent-600"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Awards */}
          <div className="bg-white rounded-xl border border-line shadow-sm p-6">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-lg">Awards &amp; Recognitions</h3>
              <Link
                href="/awards"
                className="text-accent-600 text-sm flex items-center gap-1"
              >
                View All
                <ArrowRight className="w-4 h-4"/>
              </Link>
            </div>

            <ul className="space-y-4">
              {loadingAwards ? (
                <p className="text-gray-500 text-sm">Loading Awards...</p>
              ) : (
                featuredAwards.map((award)=>(
                  <li
                    key={award.id}
                    className="flex items-start gap-3 pb-4 border-b last:border-0"
                  >
                    <div className="w-9 h-9 rounded-full bg-signal-50 flex justify-center items-center">
                      <Trophy className="w-4 h-4 text-signal-600"/>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{award.title}</p>
                      <p className="text-xs text-gray-500">{award.organization}</p>
                    </div>
                    <span className="text-xs text-gray-400">{award.year}</span>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* News */}
          <div className="bg-white rounded-xl border border-line shadow-sm p-6">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-lg">News &amp; Updates</h3>
              <Link
                href="/updates"
                className="text-accent-600 text-sm flex items-center gap-1"
              >
                View All
                <ArrowRight className="w-4 h-4"/>
              </Link>
            </div>

            <ul className="space-y-4">
              {featuredNews.map((notice)=>(
                <li
                  key={notice.id}
                  className="flex items-start gap-3 pb-4 border-b last:border-0"
                >
                  <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center">
                    <Megaphone className="w-4 h-4 text-primary-600"/>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{notice.title}</p>
                  </div>
                  <span className="text-xs text-gray-400">
                    {new Date(notice.date).toLocaleDateString(undefined,{
                      month:"short",
                      day:"numeric"
                    })}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PI Introduction Section */}
        <div className="flex flex-col md:flex-row gap-12 bg-white rounded-xl border border-line shadow-sm p-8">
          {/* Left */}
          <div className="md:w-1/3">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-primary-50 mb-6">
              <img
                src={pi.image || "/images/groupmembers/PI/anshul-yadav.jpeg"}
                alt={pi.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-gray-50 rounded-lg border border-line p-4">
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <EnvelopeIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5"/>
                  <a
                    href={`mailto:${pi.contact.email}`}
                    className="text-ink/80 hover:text-accent-600 break-all"
                  >
                    {pi.contact.email}
                  </a>
                </li>
                <li className="flex items-start">
                  <PhoneIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5"/>
                  <span>{pi.contact.phone}</span>
                </li>
                <li className="flex items-start">
                  <BuildingOfficeIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5"/>
                  <span>{pi.contact.office}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-2/3 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">{pi.name}</h2>
              <p className="text-xl text-accent-600 mb-2">{pi.position}</p>
              <p className="text-sm text-gray-500 whitespace-pre-line mb-6">{pi.department}</p>

              <h3 className="text-xl font-semibold mb-3">Research Interests</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {pi.researchInterests.map((interest,index)=>(
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <ul className="space-y-2 mb-6">
                {pi.education.map((degree,index)=>(
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-accent-600 mr-2"/>
                    <span>{degree}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-3">About</h3>
              <p className="leading-relaxed text-gray-700">{pi.bio}</p>
            </div>

            <div className="mt-8">
              <Button href="/PI" variant="outline">
                View Full Profile →
              </Button>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}