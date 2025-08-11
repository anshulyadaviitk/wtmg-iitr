import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { project_student } from '@/content/groupmembers';
import PersonCard from '@/components/people/PersonCard';
import Tabs from '@/components/people/Tabs';
import SectionTitle from '@/components/ui/SectionTitle';

export default function PhdPage() {
  return (
    <Layout>
      <Head>
        <title>Project Students | WRDM Research Group</title>
      </Head>

      <div className="container mx-auto px-4 py-6">
        <Tabs activeTab="phd" />
        
        <SectionTitle
          title="Project Students"
          subtitle="Current project candidates in our group"
          className="mb-8"
        />

        <div className="space-y-6">
          {project_student.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>

        {project_student.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No current Project Students to display</p>
          </div>
        )}
      </div>
    </Layout>
  );

}
