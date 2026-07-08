import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Tabs from "@/components/people/Tabs";
import PersonCard from "@/components/people/PersonCard";
import SectionTitle from "@/components/ui/SectionTitle";

import { getMembers } from "@/services/groupmembers";

export default function MastersPage() {
  const [mastersStudents, setMastersStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getMembers("masters");

        // category add
        const updatedData = data.map((item) => ({
          ...item,
          category: "masters",
        }));

        setMastersStudents(updatedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <Head>
        <title>&apos;s Students | Water Resources Research Group
        </title>
      </Head>

      <Layout>
        <section className="bg-gradient-to-b from-blue-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-6">

            <Tabs />

            <SectionTitle
              title="Master's Students"
              subtitle="Current M.Tech and M.Sc. students working in our research group."
              className="mb-12"
            />

            {loading ? (
              <div className="text-center py-20">
                <h2 className="text-2xl font-semibold">
                  Loading...
                </h2>
              </div>
            ) : mastersStudents.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {mastersStudents.map((person) => (
                  <PersonCard
                    key={person.id}
                    person={{
                      ...person,
                      category: "masters",
                    }}
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
    </>
  );
}