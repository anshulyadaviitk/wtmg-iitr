import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { publications, patents, invitedTalks } from '@/content/research';
import PublicationCard from '@/components/research/PublicationCard';
import SectionTitle from '@/components/ui/SectionTitle';
import Tabs from '@/components/research/tabs';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Swipeable } from 'react-swipeable';
import { InvitedTalksSection } from '@/components/sections/talksection';

export default function Research() {
  const router = useRouter();
  const { tab } = router.query;
  const [activeTab, setActiveTab] = useState('papers');
  const [isClient, setIsClient] = useState(false);

  // Per-talk slideshow state
  const [slideIndices, setSlideIndices] = useState({});

  const handlePrev = (talkId, imagesLength) => {
    setSlideIndices((prev) => ({
      ...prev,
      [talkId]:
        prev[talkId] === undefined
          ? imagesLength - 1
          : (prev[talkId] - 1 + imagesLength) % imagesLength,
    }));
  };

  const handleNext = (talkId, imagesLength) => {
    setSlideIndices((prev) => ({
      ...prev,
      [talkId]:
        prev[talkId] === undefined
          ? 1
          : (prev[talkId] + 1) % imagesLength,
    }));
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (tab && ['papers', 'books', 'patents', 'talks'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [tab]);

  if (!isClient) return null; // Prevent hydration mismatch

  return (
    <Layout>
      <Head>
        <title>Research | Water Resources Group</title>
      </Head>

      <div className="container mx-auto px-4 py-12">
        <SectionTitle
          title="Our Research"
          subtitle="Innovative approaches to water resources challenges"
          align="center"
        />

        <Tabs
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            router.push(`/research?tab=${tab}`, undefined, { shallow: true });
          }}
          tabs={[
            { id: 'papers', label: 'Research Papers' },
            { id: 'books', label: 'Books' },
            { id: 'patents', label: 'Patents' },
            { id: 'talks', label: 'Invited Talks' },
          ]}
        />

        {activeTab === 'papers' && (
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-slate-800">Journal Articles</h3>
            {publications.journalArticles.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        )}

        {activeTab === 'books' && (
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-slate-800">Books</h3>
            {publications.books.map((book) => (
              <div
                key={book.id}
                className="group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 mb-8 overflow-hidden z-10"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-bl-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-48 shrink-0 flex flex-col items-start">
                    {book.year && <div className="bg-slate-900 text-white text-3xl font-black tracking-tighter px-5 py-3 rounded-xl mb-6 shadow-md w-full text-center md:text-left md:w-auto">{book.year}</div>}
                    {book.image && (
                      <div className="w-full aspect-[3/4] relative rounded-xl overflow-hidden shadow-inner border border-slate-100 bg-slate-50">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {book.publisher && <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 ring-1 ring-blue-200 shadow-sm">PUB: {book.publisher}</span>}
                      {book.isbn && <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 ring-1 ring-slate-200 shadow-sm">ISBN: {book.isbn}</span>}
                      {book.eisbn && <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 ring-1 ring-slate-200 shadow-sm">EISBN: {book.eisbn}</span>}
                    </div>

                    <h4 className="text-2xl font-bold text-slate-800 leading-tight mb-4 group-hover:text-blue-600 transition-colors">{book.title}</h4>
                    
                    {Array.isArray(book.authors) && book.authors.length > 0 && (
                      <div className="text-slate-600 font-medium mb-6 leading-relaxed text-[15px]">
                        {book.authors.map((author, index) => {
                          const normalized = typeof author === 'string' ? author.replace(/\s/g, '') : '';
                          const isTarget = normalized === 'A.Yadav';
                          return (
                            <span key={index}>
                              <span className={isTarget ? 'text-blue-700 font-extrabold bg-blue-50 px-1.5 py-0.5 rounded-md border border-blue-100' : ''}>
                                {author}
                              </span>
                              {index < book.authors.length - 1 && ', '}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    {book.link && (
                      <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap gap-4">
                        <a
                          href={book.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-600 hover:text-blue-600 transition-colors gap-2 shadow-sm"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Book
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'patents' && (
          <div className="mt-8 space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-slate-800">Patents</h3>
            {patents.map((patent) => (
              <div key={patent.id} className="group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-cyan-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 mb-8 overflow-hidden z-10">
                
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-bl-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-48 shrink-0 flex flex-col items-start">
                    {patent.filingDate && <div className="bg-slate-900 text-white text-lg font-black tracking-tighter px-5 py-3 rounded-xl mb-4 shadow-md w-full text-center md:text-left md:w-auto">{patent.filingDate}</div>}
                    <div className={`inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest ring-1 shadow-sm w-full md:w-auto justify-center md:justify-start ${patent.status.toLowerCase().includes('granted') ? 'bg-green-100 text-green-800 ring-green-200' : 'bg-blue-100 text-blue-800 ring-blue-200'}`}>
                      {patent.status}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {patent.patentNumber && <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 ring-1 ring-slate-200 shadow-sm">PAT NO: {patent.patentNumber}</span>}
                    </div>

                    <h4 className="text-2xl font-bold text-slate-800 leading-tight mb-4 group-hover:text-cyan-600 transition-colors">{patent.title}</h4>
                    
                    {Array.isArray(patent.inventors) && patent.inventors.length > 0 && (
                      <div className="text-slate-600 font-medium mb-6 leading-relaxed text-[15px]">
                        {patent.inventors.map((inventor, index) => {
                          const normalized = typeof inventor === 'string' ? inventor.replace(/\s/g, '') : '';
                          const isTarget = normalized === 'A.Yadav';
                          return (
                            <span key={index}>
                              <span className={isTarget ? 'text-cyan-700 font-extrabold bg-cyan-50 px-1.5 py-0.5 rounded-md border border-cyan-100' : ''}>
                                {inventor}
                              </span>
                              {index < patent.inventors.length - 1 && ', '}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    {patent.link && (
                      <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap gap-4">
                        <a
                          href={patent.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-cyan-600 transition-colors gap-2 shadow-sm"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Official Record
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

       {activeTab === 'talks' && (
  <section className="space-y-8">
    <SectionTitle
      title="Invited Talks"
      subtitle="Explore notable talks and presentations from our speakers"
    />
   <div className="container mx-auto px-4 sm:px-6 py-8 md:py-4 space-y-16">
        <InvitedTalksSection />
      </div>
  </section>
)}

      </div>
    </Layout>
  );
}