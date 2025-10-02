import React from "react";
import { National, International } from "../content/collaborations";
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

const Section = ({ title, data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
   <section className="mt-16 px-4">
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 border-b-4 border-blue-500 inline-block pb-2">
      {title}
    </h2>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center text-center">
    {data.map((item, index) => (
      <div key={index} className="flex flex-col items-center max-w-[220px]">
        <img
          src={item.logo}
          alt={item.name}
          className="h-32 sm:h-36 md:h-40 object-contain mb-2 transition-transform duration-300 hover:scale-105"
        />
        <p className="text-sm text-gray-700">{item.name}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default function Collaborations() {
  return (
    <Layout>
      <Head>
        <title>Collaborations | WTM Research Group</title>
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div
          className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url('/images/collaborations/coll.jfif')" }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0" />
          <h1 className="z-10 text-4xl md:text-6xl font-extrabold tracking-wide">Collaborations</h1>
        </div>

        {/* Sections */}
        <Section title="National" data={National} />
        <Section title="International" data={International} />
      </div>
    </Layout>
  );
}
