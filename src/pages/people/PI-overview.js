import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { pi } from '@/content/groupmembers';
import PersonCard from '@/components/people/PersonCard';
import Tabs from '@/components/people/Tabs';
import SectionTitle from '@/components/ui/SectionTitle';

export default function PIOverviewPage() {
  return (
    <Layout>
      <Head>
        <title>Principal Investigator | WRDM Research Group</title>
      </Head>

      <div className="container mx-auto px-4 py-6">
        <Tabs activeTab="pi" />

        <SectionTitle
          title="Principal Investigator"
          subtitle="Faculty leading the research group"
          className="mb-8"
        />

        <div className="space-y-6">
          <PersonCard person={{ ...pi, type: 'pi' }} />
        </div>
      </div>
    </Layout>
  );
}
