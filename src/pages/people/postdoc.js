import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { postdoc } from '@/content/groupmembers';
import PersonCard from '@/components/people/PersonCard';
import Tabs from '@/components/people/Tabs';
import SectionTitle from '@/components/ui/SectionTitle';

export default function PhdPage() {
  return (
    <Layout>
      <Head>
        <title>PostDoc | WRDM Research Group</title>
      </Head>

      <div className="container mx-auto px-4 py-6">
        <Tabs activeTab="phd" />
        
        <SectionTitle
          title="Postdoctoral Researcher"
          subtitle="Current doctoral candidates in our group"
          className="mb-8"
        />

        <div className="space-y-6">
          {postdoc.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>

        {postdoc.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No current Postdoctoral to display</p>
          </div>
        )}
      </div>
    </Layout>
  );
}