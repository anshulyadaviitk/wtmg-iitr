// pages/notices.js
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { notices } from '@/content/notice_updatedata';

export default function NoticesPage() {
  // Sort notices: New ones first, then by latest date
  const sortedNotices = [...notices].sort((a, b) => {
    if (a.isNew === b.isNew) {
      return new Date(b.date) - new Date(a.date); // newer date first
    }
    return b.isNew - a.isNew; // true (1) comes before false (0)
  });

  return (
    <Layout>
      <Head>
        <title>Notices | Water Treatment & Management Group</title>
      </Head>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
            All Notices
          </h1>
          <div className="space-y-6 max-w-3xl mx-auto overflow-y-auto max-h-[70vh] pr-2">
            {sortedNotices.map((notice) => (
              <div
                key={notice.id}
                className="relative p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  {notice.title}
                  {notice.isNew && (
                    <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                      New
                    </span>
                  )}
                </h2>
                <p className="text-sm text-gray-500 mt-1" suppressHydrationWarning>
                  Published on: {new Date(notice.date).toLocaleDateString()}
                </p>
                <a
                  href={notice.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-3 inline-block text-sm"
                >
                  View Notice
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
