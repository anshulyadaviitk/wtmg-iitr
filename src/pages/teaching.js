"use client";

import React from "react";
import Layout from '@/components/layout/Layout';
import { motion } from "framer-motion";
import { BookOpen, Calendar, Download, FileText, CheckCircle2, Clock, ChevronRight } from "lucide-react";
import TeachingSchedule from "@/components/sections/TeachingSchedule";

const courses = [
  {
    title: "Water and Wastewater Engineering",
    duration: "Spring 2025",
    status: "auto",
    description: "Advanced course covering design, modeling, and optimization of wastewater treatment systems.",
    resources: [
      { name: "Course Syllabus", link: "/resources/wastewater-syllabus.pdf" },
      { name: "Lecture Slides", link: "/resources/wastewater-slides.zip" },
    ],
  },
  {
    title: "Wastewater and Fecal Sludge Management",
    duration: "Spring 2025",
    status: "auto",
    description: "Covers the fundamental and applied aspects of fluid flow in environmental systems.",
    resources: [
      { name: "Syllabus", link: "/resources/fluid-mechanics-syllabus.pdf" },
      { name: "Lecture Slides", link: "/resources/wastewater-slides.zip" },
    ],
  },
  {
    title: "Wastewater Engineering",
    duration: "Autumn 2025",
    status: "auto",
    description: "Advanced course covering design, modeling, and optimization of wastewater treatment systems.",
    resources: [
      { name: "Course Syllabus", link: "/resources/wastewater-syllabus.pdf" },
      { name: "Lecture Slides", link: "/resources/wastewater-slides.zip" },
    ],
  },
  {
    title: "Circular Water Economy",
    duration: "Autumn 2025",
    status: "auto",
    description: "Covers the fundamental and applied aspects of fluid flow in environmental systems.",
    resources: [
      { name: "Syllabus", link: "/resources/fluid-mechanics-syllabus.pdf" },
      { name: "Lecture Slides", link: "/resources/wastewater-slides.zip" },
    ],
  },
  {
    title: "Wastewater and Fecal Sludge Management",
    duration: "2026",
    status: "auto",
    description: "A seminar series focusing on the latest developments in water treatment technologies.",
    resources: [],
  },
  {
    title: "Application of Computational Fluid Dynamics for Water and Wastewater Treatment",
    duration: "2026",
    status: "auto",
    description: "A seminar series focusing on the latest developments in water treatment technologies.",
    resources: [],
  },
];

const getStatusBadge = (duration) => {
  const currentYear = new Date().getFullYear();
  let endYear = null;

  const match = duration.match(/(\d{4})\D+(\d{2,4})/);
  if (match) {
    const parsedEnd =
      match[2].length === 2
        ? parseInt(match[1].slice(0, 2) + match[2], 10)
        : parseInt(match[2], 10);
    endYear = parsedEnd;
  } else if (/^\d{4}$/.test(duration)) {
    endYear = parseInt(duration, 10);
  }

  if (endYear >= currentYear) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
        <Clock className="w-3.5 h-3.5" />
        Ongoing
      </span>
    );
  } else {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-700 ring-1 ring-inset ring-slate-600/20">
        <CheckCircle2 className="w-3.5 h-3.5" />
        Completed
      </span>
    );
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function TeachingPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-50/50 py-16 sm:py-24 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-3xl mix-blend-multiply filter animate-blob" />
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full blur-3xl mix-blend-multiply filter animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
              Teaching <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">&</span> Mentorship
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
              Explore the courses I teach, aimed at equipping the next generation of engineers with knowledge in water and wastewater management.
            </p>
          </motion.div>

          <TeachingSchedule />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex justify-between items-start">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700">
                        <Calendar className="w-3.5 h-3.5" />
                        {course.duration}
                      </div>
                      {course.status === "auto" && getStatusBadge(course.duration)}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {course.title}
                    </h2>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {course.description}
                  </p>

                  {course.resources && course.resources.length > 0 && (
                    <div className="mt-auto pt-5 border-t border-slate-100/80">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5" />
                        Materials
                      </h3>
                      <ul className="space-y-2">
                        {course.resources.map((res, i) => (
                          <li key={i}>
                            <a
                              href={res.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link flex items-center gap-3 p-2 -ml-2 rounded-lg hover:bg-slate-50 transition-colors"
                            >
                              <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover/link:bg-blue-600 group-hover/link:text-white transition-colors shadow-sm">
                                {res.name.toLowerCase().includes('syllabus') ? (
                                  <FileText className="w-4 h-4" />
                                ) : (
                                  <Download className="w-4 h-4" />
                                )}
                              </div>
                              <span className="text-sm font-medium text-slate-700 group-hover/link:text-blue-700 transition-colors">
                                {res.name}
                              </span>
                              <ChevronRight className="w-4 h-4 ml-auto text-slate-400 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
