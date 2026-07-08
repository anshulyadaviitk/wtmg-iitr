import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Tabs from "@/components/people/Tabs";
import PersonCard from "@/components/people/PersonCard";
import SectionTitle from "@/components/ui/SectionTitle";

import { mastersStudents } from "@/content/groupmembers";

export default function MastersPage() {
  return (
    <Layout>
      <Head>
        <title>Master&apos;s Students | Water Resources Research Group</title>
      </Head>

      <section className="bg-gradient-to-b from-blue-50 to-white py-12">

        <div className="max-w-7xl mx-auto px-6">

          <Tabs />

          <SectionTitle
            title="Master's Students"
            subtitle="Current M.Tech and M.Sc. students working in our research group."
            className="mb-12"
          />

          {mastersStudents.length > 0 ? (

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {mastersStudents.map((person) => (
                <PersonCard
                  key={person.id}
                  person={person}
                />
              ))}

            </div>

          ) : (

            <div className="bg-white rounded-3xl shadow-md py-20 text-center">

              <h2 className="text-2xl font-semibold text-gray-700">
                No Master&apos;s Students
              </h2>

              <p className="text-gray-500 mt-3">
                Student information will appear here.
              </p>

            </div>

          )}

        </div>

      </section>

    </Layout>
  );
}