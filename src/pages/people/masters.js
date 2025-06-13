import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { mastersStudents } from '@/content/groupmembers';
import PersonCard from '@/components/people/PersonCard';
import Tabs from '@/components/people/Tabs';
import SectionTitle from '@/components/ui/SectionTitle';

export default function MastersPage() {
  return (
    <Layout>
      <Head>
        <title>Master Students | WRDM Research Group</title>
      </Head>

      <div className="container mx-auto px-4 py-6">
        <Tabs activeTab="masters" />
        
        <SectionTitle
          title={"Master's Students"}
          subtitle="Current MTech and MSc researchers"
          className="mb-8"
        />

        <div className="space-y-6">
          {mastersStudents.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>

        {mastersStudents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No current master&apos;s students to display</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
