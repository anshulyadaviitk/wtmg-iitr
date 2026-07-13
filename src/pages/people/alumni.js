import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

import PastMemberCard from "@/components/people/PastMemberCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function PastMembersPage() {
  const router = useRouter();

  const [pastMembers, setPastMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.asPath.includes("#")) {
      const id = router.asPath.split("#")[1];
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [router.asPath]);

  useEffect(() => {
    const fetchPastMembers = async () => {
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

        // Put your comprehensive mapping logic INSIDE the fetch loop where `data` is defined
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

          position: item.position || "",
          degree: item.degree || "",
          previousDegree: item.previousDegree || "",
          college: item.college || "",
          nationality: item.nationality || "",
          researchArea: item.researchArea || "",
          topic: item.topic || "",
          duration: item.duration || "",
          currentStatus: item.currentStatus || "",
          email: item.email || "",
          contact: item.contact || "",
          supervisor: item.supervisor || "",
          coSupervisor: item.coSupervisor || "",

          peerReviewedPublications: item.peerReviewedPublications
            ? item.peerReviewedPublications
                .split("|")
                .map((x) => x.trim())
                .filter(Boolean)
            : [],

          patents: item.patents
            ? item.patents
                .split("|")
                .map((x) => x.trim())
                .filter(Boolean)
            : [],

          conferences: item.conferences
            ? item.conferences
                .split("|")
                .map((x) => x.trim())
                .filter(Boolean)
            : [],

          awards: item.awards
            ? item.awards
                .split("|")
                .map((x) => x.trim())
                .filter(Boolean)
            : [],

          links: {
            linkedin: item.linkedin || "",
            researchgate: item.researchgate || "",
            scholar: item.scholar || "",
          },
        }));

        setPastMembers(formattedData);
      } catch (error) {
        console.error("Error fetching past members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPastMembers();
  }, []);

  const phd = useMemo(
    () => pastMembers.filter((m) => m.category === "phd"),
    [pastMembers]
  );

  const masters = useMemo(
    () => pastMembers.filter((m) => m.category === "masters"),
    [pastMembers]
  );

  const project = useMemo(
    () => pastMembers.filter((m) => m.category === "project"),
    [pastMembers]
  );

  const interns = useMemo(
    () => pastMembers.filter((m) => m.category === "interns"),
    [pastMembers]
  );

  const postdoc = useMemo(
    () => pastMembers.filter((m) => m.category === "postdoc"),
    [pastMembers]
  );

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-blue-700">
            Loading Past Members...
          </h2>
        </div>
      </Layout>
    );
  }

  const sections = [
    { id: "phd", title: "PhD Alumni", members: phd },
    { id: "masters", title: "Master's Alumni", members: masters },
    { id: "project", title: "Project Students", members: project },
    { id: "interns", title: "Interns / Dissertation Students", members: interns },
    { id: "postdoc", title: "Postdoctoral Researchers", members: postdoc },
  ];

  return (
    <>
      <Head>
        <title>Past Members | WRDM Research Group</title>
      </Head>

      <Layout>
        <section className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle
              title="Past Members & Alumni"
              subtitle="Former members of our research group."
              className="mb-12"
            />

            {sections.map((section) => (
              <div key={section.id} id={section.id} className="mb-20">
                <SectionTitle title={section.title} className="mb-8" />

                {section.members.length > 0 ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {section.members.map((member) => (
                      <PastMemberCard key={member.id} member={member} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    No members found.
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

// Ensure NOTHING else exists below this line