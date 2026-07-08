import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Tabs from "@/components/people/Tabs";
import PersonCard from "@/components/people/PersonCard";
import SectionTitle from "@/components/ui/SectionTitle";

import { interns } from "@/content/groupmembers";

export default function InternsPage() {
  return (
    <Layout>
      <Head>
        <title>Research Interns | Water Resources Research Group</title>
      </Head>

      <section className="bg-gradient-to-b from-blue-50 to-white py-12">

        <div className="max-w-7xl mx-auto px-6">

          <Tabs />

          <SectionTitle
            title="Research Interns"
            subtitle="Meet our current research interns working on innovative projects."
            className="mb-12"
          />

          {interns.length > 0 ? (

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {interns.map((person) => (

                <PersonCard
                  key={person.id}
                  person={{
                    ...person,
                    position: person.position || "Research Intern",
                  }}
                />

              ))}

            </div>

          ) : (

            <div className="bg-white rounded-3xl shadow-md py-20 text-center">

              <h2 className="text-2xl font-semibold text-gray-700">
                No Current Interns
              </h2>

              <p className="text-gray-500 mt-3">
                Intern information will appear here.
              </p>

            </div>

          )}

        </div>

      </section>

    </Layout>
  );
}