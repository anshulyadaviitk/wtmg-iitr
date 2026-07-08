import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Tabs from "@/components/people/Tabs";
import PersonCard from "@/components/people/PersonCard";
import SectionTitle from "@/components/ui/SectionTitle";

import { project_student } from "@/content/groupmembers";

export default function ProjectStudentsPage() {
  return (
    <Layout>
      <Head>
        <title>Project Students | Water Resources Research Group</title>
      </Head>

      <section className="bg-gradient-to-b from-blue-50 to-white py-12">

        <div className="max-w-7xl mx-auto px-6">

          <Tabs />

          <SectionTitle
            title="Project Students"
            subtitle="Meet our current project students."
            className="mb-12"
          />

          {project_student.length > 0 ? (

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {project_student.map((person) => (
                <PersonCard
                  key={person.id}
                  person={person}
                />
              ))}

            </div>

          ) : (

            <div className="bg-white rounded-3xl shadow-md py-20 text-center">

              <h2 className="text-2xl font-semibold text-gray-700">
                No Project Students
              </h2>

              <p className="text-gray-500 mt-3">
                Information will appear here.
              </p>

            </div>

          )}

        </div>

      </section>

    </Layout>
  );
}