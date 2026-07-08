import Head from "next/head";
import Layout from "@/components/layout/Layout";
import AwardsSection1 from "@/components/sections/AwardsSection1";

export default function AwardsPage() {
  return (
    <>
      <Head>
        <title>Awards | Recognitions</title>
      </Head>

      <Layout>
        <AwardsSection1 />
      </Layout>
    </>
  );
}