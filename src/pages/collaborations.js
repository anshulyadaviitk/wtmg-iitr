import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";

export default function Collaborations() {
  // ==========================
  // States
  // ==========================
  const [collaborations, setCollaborations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  // ==========================
  // Fetch Google Sheet Data
  // ==========================
  useEffect(() => {
    const fetchCollaborations = async () => {
      try {
        const response = await fetch(
          "https://opensheet.elk.sh/1AuCpQjHD_MQwovqAbfwfHbBwTyrhXfV0B0qqJfAubhk/Collaborations"
        );
        const data = await response.json();
        setCollaborations(data);
      } catch (error) {
        console.error("Error fetching collaborations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollaborations();
  }, []);

  // ==========================
  // Filtered Data
  // ==========================
  const filteredData = useMemo(() => {
    if (filter === "All") {
      return collaborations;
    }
    return collaborations.filter((item) => item.type === filter);
  }, [collaborations, filter]);

  // ==========================
  // Statistics
  // ==========================
  const stats = useMemo(() => {
    return {
      total: collaborations.length,
      academic: collaborations.filter((item) => item.type === "Academic").length,
      industry: collaborations.filter((item) => item.type === "Industry").length,
      research: collaborations.filter((item) => item.type === "Research Organization").length,
      cities: new Set(collaborations.map((item) => item.location)).size,
    };
  }, [collaborations]);

  // ==========================
  // Filter Buttons
  // ==========================
  const filters = [
    "All",
    "Academic",
    "Industry",
    "Research Organization",
  ];

  // ==========================
  // Loading Screen
  // ==========================
  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-700 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-5 text-lg font-medium text-gray-700">
              Loading Collaborations...
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>Collaborations | WTM Research Group</title>
      </Head>

      <Layout>
        {/* Full Page Background Wrapper */}
        <div className="bg-gray-50 min-h-screen">
          
          {/* ================= ABOUT SECTION ================= */}
          <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side */}
              <div>
                <h2 className="text-4xl font-bold text-blue-900 mb-6">
                  Collaborations
                </h2>
                <p className="text-gray-600 leading-8 text-lg">
                  The WRTM Research Group collaborates with leading
                  academic institutions, industries, and research
                  organizations across India and around the world.
                </p>
                <p className="text-gray-600 leading-8 text-lg mt-5">
                  Through these collaborations we promote innovation,
                  interdisciplinary research, knowledge exchange,
                  Artificial Intelligence, Wireless Communication,
                  Machine Learning, IoT and emerging technologies.
                </p>
              </div>

              {/* Right Side */}
              <div>
                <img
                  src="/images/hero.jpeg"
                  alt="WTM Research Group"
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* ================= STATISTICS ================= */}
          <section className="max-w-7xl mx-auto px-6 pb-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Total */}
              <div className="bg-white rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <h2 className="text-4xl font-bold text-blue-700">
                  {stats.total}
                </h2>
                <p className="mt-3 text-gray-600 font-medium">
                  Total Collaborations
                </p>
              </div>

              {/* Academic */}
              <div className="bg-white rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-3xl">🎓</span>
                </div>
                <h2 className="text-4xl font-bold text-green-700">
                  {stats.academic}
                </h2>
                <p className="mt-3 text-gray-600 font-medium">
                  Academic Institutions
                </p>
              </div>

              {/* Industry */}
              <div className="bg-white rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <h2 className="text-4xl font-bold text-yellow-600">
                  {stats.industry}
                </h2>
                <p className="mt-3 text-gray-600 font-medium">
                  Industry Partners
                </p>
              </div>

              {/* Cities */}
              <div className="bg-white rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-3xl">📍</span>
                </div>
                <h2 className="text-4xl font-bold text-red-600">
                  {stats.cities}
                </h2>
                <p className="mt-3 text-gray-600 font-medium">
                  Cities
                </p>
              </div>
            </div>
          </section>

          {/* ================= FILTER SECTION ================= */}
          <section className="max-w-7xl mx-auto px-6 pb-10">
            <div className="flex flex-wrap items-center gap-4">
              {filters.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-5 py-2 rounded-full border transition-all duration-300 font-medium ${
                    filter === type
                      ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </section>

          {/* ================= COLLABORATION CARDS ================= */}
          <section className="max-w-7xl mx-auto px-6 pb-20">
            {filteredData.length === 0 ? (
              <div className="bg-white rounded-xl shadow p-10 text-center">
                <h2 className="text-2xl font-semibold text-gray-700">
                  No Collaborations Found
                </h2>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredData.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center p-6">
                      {/* LEFT */}
                      <div className="flex gap-6">
                        <div className="w-24 h-24 border rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                          <img
                            src={`/images/collaborations/logo_national/${item.logo}`}
                            alt={item.name}
                            className="w-20 h-20 object-contain"
                            onError={(e) => {
                              e.target.src = "/images/default-logo.png";
                            }}
                          />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800">
                            {item.name}
                          </h2>
                          <p className="mt-3 text-gray-600">
                            {item.topic || "Research Collaboration"}
                          </p>
                          <div className="flex gap-3 mt-5">
                            <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                              {item.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="mt-8 lg:mt-0 flex flex-col items-start lg:items-end">
                        <p className="text-gray-600">
                          📍 {item.location}, {item.country}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

        </div> {/* Wrapper Div closes cleanly here */}
      </Layout>
    </>
  );
}
