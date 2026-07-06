import Head from 'next/head';
import Layout from '@/components/layout/Layout';

export default function LabOpenings() {
  return (
    <Layout>
      <Head>
        <title>Openings | Our Lab</title>
      </Head>

      <section className="bg-white py-12">

        {/* ================= HEADER ================= */}
        <div className="max-w-5xl mx-auto px-5">

          <div className="mb-8 border-l-4 border-blue-600 pl-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Internship & Research Openings
            </h1>
            <p className="text-gray-600 mt-1 text-sm md:text-base">
              Opportunities for motivated students in AI, Water Systems, IoT & Sustainable Engineering
            </p>
          </div>

          {/* ================= MAIN CARD ================= */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm">

            <div className="p-6 md:p-8 space-y-6">

              {/* INTRO */}
              <p className="text-gray-700 text-sm md:text-base">
                We welcome passionate students to join our lab as interns or research assistants.
                Selected candidates will work on real-world research problems under faculty supervision.
              </p>

              {/* GRID CONTENT */}
              <div className="grid md:grid-cols-2 gap-4">

                {/* LEFT: TOPICS */}
                <div className="space-y-3">

                  <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Research Topics
                  </h2>

                  {[
                    "Machine Learning for Environmental Monitoring",
                    "Computational Fluid Dynamics",
                    "Battery Management Systems",
                    "IoT-based Smart Sensing Systems",
                    "AI for Structural Health Monitoring"
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-2 text-sm text-gray-700"
                    >
                      <span className="text-blue-600">•</span>
                      <span>{item}</span>
                    </div>
                  ))}

                </div>

                {/* RIGHT: INFO */}
                <div className="space-y-3">

                  <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Application Info
                  </h2>

                  <div className="text-sm text-gray-700 space-y-2">

                    <p>
                      📌 Duration: 2–6 Months (Flexible)
                    </p>

                    <p>
                      📌 Mode: On-site / Hybrid (Based on project)
                    </p>

                    <p>
                      📌 Who can apply: B.Tech / M.Tech / PhD students
                    </p>

                  </div>

                  {/* EMAIL BOX */}
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">

                    <p className="text-sm font-medium text-gray-900 mb-2">
                      Apply via Email
                    </p>

                    <a
                      href="mailto:anshul.yadav@wr.iitr.ac.in"
                      className="text-sm text-blue-700 font-semibold hover:underline"
                    >
                      anshul.yadav@wr.iitr.ac.in
                    </a>

                    <p className="text-xs text-gray-500 mt-2">
                      Attach CV + Area of Interest
                    </p>

                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}