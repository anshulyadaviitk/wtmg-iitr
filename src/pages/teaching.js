"use client"; // if using App Router

import React from "react";
import Layout from '@/components/layout/Layout';

const courses = [
  {
    title: "Wastewater Treatment Engineering",
    duration: "2023–2025",
    status: "auto", // auto means status determined by duration
    description: "Advanced course covering design, modeling, and optimization of wastewater treatment systems.",
    resources: [
      { name: "Course Syllabus", link: "/resources/wastewater-syllabus.pdf" },
      { name: "Lecture Slides", link: "/resources/wastewater-slides.zip" },
    ],
  },
  {
    title: "Environmental Fluid Mechanics",
    duration: "2020–2022",
    status: "auto",
    description: "Covers the fundamental and applied aspects of fluid flow in environmental systems.",
    resources: [
      { name: "Syllabus", link: "/resources/fluid-mechanics-syllabus.pdf" },
    ],
  },
  {
    title: "Current Research Seminar",
    duration: "2024–2026",
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
      <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
        Ongoing
      </span>
    );
  } else {
    return (
      <span className="text-xs font-medium bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
        Completed
      </span>
    );
  }
};

export default function TeachingPage() {
  return (
    <Layout>
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Teaching</h1>
      <p className="text-gray-600 mb-8">
        Here is a list of courses I have taught and am currently teaching, along with resources.
      </p>

      <div className="space-y-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-sm border p-5 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold text-gray-900">
                {course.title}
              </h2>
              {course.status === "auto" && getStatusBadge(course.duration)}
            </div>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-medium">Duration:</span> {course.duration}
            </p>
            <p className="text-sm text-gray-600 mb-3">{course.description}</p>

            {course.resources.length > 0 && (
              <div>
                <span className="font-medium text-sm text-gray-700">Resources:</span>
                <ul className="list-disc list-inside text-sm text-blue-600">
                  {course.resources.map((res, i) => (
                    <li key={i}>
                      <a
                        href={res.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {res.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </Layout>);
}
