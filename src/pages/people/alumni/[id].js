import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

export default function AlumniProfile() {
  const router = useRouter();
  const { id } = router.query;

  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchMember = async () => {
      try {
        const response = await fetch(
          "https://opensheet.elk.sh/1AuCpQjHD_MQwovqAbfwfHbBwTyrhXfV0B0qqJfAubhk/pastmembers"
        );

        const data = await response.json();

        const folderMap = {
          phd: "phd",
          masters: "mtech",
          project: "interns",
          interns: "interns",
          postdoc: "postdoc",
        };

        const formattedData = data.map((item) => ({
          id: item.id || "",
          category: item.category || "",
          type: item.type || "",
          name: item.name || "",

          photo: item.image
            ? `/images/groupmembers/${
                folderMap[item.category?.toLowerCase()] || "interns"
              }/${item.image}`
            : "/images/default-profile.png",

          degree: item.degree || "",
          previousDegree: item.previousDegree || "",
          college: item.college || "",
          nationality: item.nationality || "",
          topic: item.topic || "",
          duration: item.duration || "",
          currentStatus: item.currentStatus || "",
          email: item.email || "",
          coSupervisor: item.coSupervisor || "",

          awards: item.awards
            ? item.awards.split("|").map((x) => x.trim()).filter(Boolean)
            : [],

          peerReviewedPublications: item.peerReviewedPublications
            ? item.peerReviewedPublications
                .split("|")
                .map((x) => x.trim())
                .filter(Boolean)
            : [],
        }));

        const found = formattedData.find(
          (m) => String(m.id) === String(id)
        );

        setMember(found || null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      </Layout>
    );
  }

  if (!member) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
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

              <div className="flex justify-center">
                <div className="relative w-72 h-72 rounded-3xl overflow-hidden bg-gray-100">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

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

                  {member.college && (
                    <div>
                      <h3 className="font-semibold text-gray-500">
                        College
                      </h3>
                      <p>{member.college}</p>
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
                  <div className="mt-8">
                    <h3 className="font-semibold text-gray-500 mb-2">
                      Research
                    </h3>
                    <p>{member.topic}</p>
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

                {member.awards.length > 0 && (
                  <div className="mt-8">
                    <h3 className="font-semibold text-gray-500 mb-2">
                      Awards
                    </h3>

                    <ul className="list-disc pl-5">
                      {member.awards.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.peerReviewedPublications.length > 0 && (
                  <div className="mt-8">
                    <h3 className="font-semibold text-gray-500 mb-2">
                      Publications
                    </h3>

                    <ul className="list-disc pl-5">
                      {member.peerReviewedPublications.map((p, i) => (
                        <li key={i}>{p}</li>
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