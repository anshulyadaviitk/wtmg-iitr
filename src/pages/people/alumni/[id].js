import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { past } from "@/content/pastmembers";

export default function AlumniProfile() {
  const router = useRouter();
  const { id } = router.query;

  // Merge all alumni arrays
  const allMembers = [
    ...past.phd,
    ...past.masters,
    ...past.project,
    ...past.interns,
  ];

  const member = allMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <Layout>
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold">
            Alumni Not Found
          </h1>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{member.name} | Alumni</title>
      </Head>

      <Layout>

        <div className="container mx-auto max-w-6xl py-12 px-4">

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

            <div className="grid md:grid-cols-3 gap-10 p-10">

              {/* Image */}

              <div className="flex justify-center">

                <div className="relative w-72 h-72 rounded-3xl overflow-hidden bg-gray-100">

                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      No Image
                    </div>
                  )}

                </div>

              </div>

              {/* Details */}

              <div className="md:col-span-2">

                <h1 className="text-4xl font-bold">
                  {member.name}
                </h1>

                <p className="text-blue-600 text-xl mt-2">
                  {member.degree || member.type}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-10">

                  {member.duration && (
                    <div>
                      <h3 className="font-semibold text-gray-500">
                        Duration
                      </h3>

                      <p>{member.duration}</p>
                    </div>
                  )}

                  {member.currentStatus && (
                    <div>
                      <h3 className="font-semibold text-gray-500">
                        Current Position
                      </h3>

                      <p>{member.currentStatus}</p>
                    </div>
                  )}

                  {member.previousDegree && (
                    <div>
                      <h3 className="font-semibold text-gray-500">
                        Education
                      </h3>

                      <p>{member.previousDegree}</p>
                    </div>
                  )}

                  {member.College && (
                    <div>
                      <h3 className="font-semibold text-gray-500">
                        College
                      </h3>

                      <p>{member.College}</p>
                    </div>
                  )}

                  {member.nationality && (
                    <div>
                      <h3 className="font-semibold text-gray-500">
                        Nationality
                      </h3>

                      <p>{member.nationality}</p>
                    </div>
                  )}

                  {member.email && (
                    <div>
                      <h3 className="font-semibold text-gray-500">
                        Email
                      </h3>

                      <p>{member.email}</p>
                    </div>
                  )}

                </div>

                {member.topic && (
                  <div className="mt-10">

                    <h3 className="font-semibold text-gray-500 mb-2">

                      {member.type === "intern"
                        ? "Project"
                        : "Research"}

                    </h3>

                    <p className="leading-8">
                      {member.topic}
                    </p>

                  </div>
                )}

                {member.coSupervisor && (
                  <div className="mt-8">

                    <h3 className="font-semibold text-gray-500">
                      Co-Supervisor
                    </h3>

                    <p>{member.coSupervisor}</p>

                  </div>
                )}

                {member.awards?.length > 0 && (
                  <div className="mt-8">

                    <h3 className="font-semibold text-gray-500 mb-3">
                      Awards
                    </h3>

                    <ul className="list-disc pl-5 space-y-2">

                      {member.awards.map((award, i) => (
                        <li key={i}>{award}</li>
                      ))}

                    </ul>

                  </div>
                )}

                {member.peerReviewedPublications?.length > 0 && (
                  <div className="mt-8">

                    <h3 className="font-semibold text-gray-500 mb-3">
                      Publications
                    </h3>

                    <ul className="list-disc pl-5 space-y-2">

                      {member.peerReviewedPublications.map((pub, i) => (
                        <li key={i}>{pub}</li>
                      ))}

                    </ul>

                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </Layout>
    </>
  );
}