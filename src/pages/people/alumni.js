import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { past } from '@/content/pastmembers';
import PastMemberCard from '@/components/people/PastMemberCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PastMembersPage() {
  const router = useRouter();

  // Scroll to section if hash exists in URL
  useEffect(() => {
    if (router.asPath.includes('#')) {
      const sectionId = router.asPath.split('#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router.asPath]);

  return (
    <Layout>
      <Head>
        <title>Alumni | WRDM Research Group</title>
        <meta name="description" content="Meet our distinguished alumni and past members of the WRDM Research Group" />
      </Head>

      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        <SectionTitle
          title="Past Members & Alumni"
          subtitle="Former members of our research group who have contributed significantly to our work"
          className="mb-12"
        />

        <div className="space-y-12">
          {/* PhD Alumni Section */}
          <section id="phd" className="scroll-mt-20">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
                PhD Alumni
              </h2>
              <div className="space-y-6">
                {past.phd.map(member => (
                  <PastMemberCard 
                    key={member.id} 
                    member={member} 
                    className="hover:shadow-md transition-shadow duration-300"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Master's Alumni Section */}
          <section id="masters" className="scroll-mt-20">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
                Master&apos;s Alumni
              </h2>
              <div className="space-y-6">
                {past.masters.map(member => (
                  <PastMemberCard 
                    key={member.id} 
                    member={member} 
                    className="hover:shadow-md transition-shadow duration-300"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Project Alumni Section */}
          <section id="project" className="scroll-mt-20">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
                Master&apos;s Alumni
              </h2>
              <div className="space-y-6">
                {past.project.map(member => (
                  <PastMemberCard 
                    key={member.id} 
                    member={member} 
                    className="hover:shadow-md transition-shadow duration-300"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Former Interns Section */}
          <section id="interns" className="scroll-mt-20">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
                Interns/ Dissertation students 
              </h2>
              <div className="space-y-6">
                {past.interns.map(member => (
                  <PastMemberCard 
                    key={member.id} 
                    member={member} 
                    className="hover:shadow-md transition-shadow duration-300"
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
