import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { interns } from '@/content/people';
import PersonCard from '@/components/people/PersonCard';
import Tabs from '@/components/people/Tabs';
import SectionTitle from '@/components/ui/SectionTitle';

export default function InternsPage() {
  return (
    <Layout>
      <Head>
        <title>Interns | WTM Research Group</title>
      </Head>

      <div className="container mx-auto px-4 py-6">
        <Tabs activeTab="interns" />
        
        <SectionTitle
          title="Research Interns"
          subtitle="Current undergraduate and summer interns"
          className="mb-8"
        />

        <div className="space-y-6">
          {interns.map(person => (
            <PersonCard 
              key={person.id} 
              person={{
                ...person,
                position: `Intern (${person.duration})`,
              }} 
            />
          ))}
        </div>

        {interns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No current interns to display</p>
          </div>
        )}
      </div>
    </Layout>
  );
}