import Head from "next/head";
import Layout from "@/components/layout/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { past } from "@/content/pastmembers";

import PastMemberCard from "@/components/people/PastMemberCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function PastMembersPage() {
  const router = useRouter();

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

  const sections = [
    {
      id: "phd",
      title: "PhD Alumni",
      members: past.phd,
    },
    {
      id: "masters",
      title: "Master's Alumni",
      members: past.masters,
    },
    {
      id: "project",
      title: "Project Students",
      members: past.project,
    },
    {
      id: "interns",
      title: "Interns / Dissertation Students",
      members: past.interns,
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Past Members | WRDM Research Group</title>
      </Head>

      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            title="Past Members & Alumni"
            subtitle="Former members of our research group."
            className="mb-12"
          />

          {sections.map((section) => (
            <div key={section.id} id={section.id} className="mb-20">

              <SectionTitle
                title={section.title}
                className="mb-8"
              />

              {section.members.length > 0 ? (

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                  {section.members.map((member) => (
                    <PastMemberCard
                      key={member.id}
                      member={member}
                    />
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
  );
}