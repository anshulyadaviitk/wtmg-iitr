import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { publications } from '@/content/research';
import PublicationCard from '@/components/research/PublicationCard';
import SectionTitle from '@/components/ui/SectionTitle';
import Tabs from '@/components/research/tabs';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { InvitedTalksSection } from '@/components/sections/talksection';

export default function Research() {
  const router = useRouter();
  const { tab } = router.query;

  const [activeTab, setActiveTab] = useState('papers');
  const [isClient, setIsClient] = useState(false);

  // =========================
  // BOOKS STATE
  // =========================
  const [books, setBooks] = useState([]);
  const [booksLoading, setBooksLoading] = useState(false);
  const [booksError, setBooksError] = useState('');

  // =========================
  // PATENTS STATE
  // =========================
  const [patents, setPatents] = useState([]);
  const [patentsLoading, setPatentsLoading] = useState(false);
  const [patentsError, setPatentsError] = useState('');

  // =========================
  // CLIENT
  // =========================
  useEffect(() => {
    setIsClient(true);
  }, []);

  // =========================
  // TAB FROM URL
  // =========================
  useEffect(() => {
    if (
      tab &&
      ['papers', 'books', 'patents', 'talks'].includes(tab)
    ) {
      setActiveTab(tab);
    }
  }, [tab]);

  // =========================
  // FETCH BOOKS FROM GOOGLE SHEET
  // =========================
  useEffect(() => {
    const fetchBooks = async () => {
      setBooksLoading(true);
      setBooksError('');

      try {
        const response = await fetch(
          'https://opensheet.elk.sh/1AuCpQjHD_MQwovqAbfwfHbBwTyrhXfV0B0qqJfAubhk/Books'
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error('Invalid books data');
        }

        const formattedBooks = data
          .filter(
            (book) =>
              book['Book ID'] ||
              book['Title']
          )
          .map((book) => ({
            id: book['Book ID'] || '',
            title: book['Title'] || '',

            authors: book['Authors']
              ? String(book['Authors'])
                  .split(',')
                  .map((author) => author.trim())
                  .filter(Boolean)
              : [],

            publisher: book['Publisher'] || '',
            year: book['Year'] || '',
            featured: book['Featured'] || '',
            isbn: book['ISBN'] || '',
            eisbn: book['eISBN'] || '',
            doi: book['DOI'] || '',
            link: book['Link'] || '',
            imagePath: book['Image Path']?.trim() || '',
          }));

        // =========================
        // LATEST BOOK FIRST
        // =========================
        formattedBooks.sort((a, b) => {
          const yearA = parseInt(a.year, 10) || 0;
          const yearB = parseInt(b.year, 10) || 0;

          return yearB - yearA;
        });

        setBooks(formattedBooks);
      } catch (error) {
        console.error('Books fetch error:', error);
        setBooksError(
          'Unable to load books. Please try again.'
        );
      } finally {
        setBooksLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // =========================
  // FETCH PATENTS FROM GOOGLE SHEET
  // =========================
  useEffect(() => {
    const fetchPatents = async () => {
      setPatentsLoading(true);
      setPatentsError('');

      try {
        const response = await fetch(
          'https://opensheet.elk.sh/1AuCpQjHD_MQwovqAbfwfHbBwTyrhXfV0B0qqJfAubhk/patent'
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error('Invalid patent data');
        }

        const formattedPatents = data
          .filter(
            (patent) =>
              patent.id ||
              patent.title
          )
          .map((patent) => ({
            id: patent.id || '',
            title: patent.title || '',

            inventors: patent.inventors
              ? String(patent.inventors)
                  .split(',')
                  .map((inventor) => inventor.trim())
                  .filter(Boolean)
              : [],

            patentNumber: patent.patentNumber || '',
            filingDate: patent.filingDate || '',
            status: patent.status || '',
            link: patent.link || '',
          }));

        // =========================
        // LATEST PATENT FIRST
        // =========================
        formattedPatents.sort((a, b) => {
          const parseDate = (dateString) => {
            if (!dateString) return 0;

            const parts = String(dateString)
              .replace(/[–—]/g, '-')
              .split('-');

            if (parts.length !== 3) return 0;

            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10);
            const year = parseInt(parts[2], 10);

            if (!day || !month || !year) return 0;

            return new Date(
              year,
              month - 1,
              day
            ).getTime();
          };

          return (
            parseDate(b.filingDate) -
            parseDate(a.filingDate)
          );
        });

        setPatents(formattedPatents);
      } catch (error) {
        console.error('Patent fetch error:', error);

        setPatentsError(
          'Unable to load patents. Please try again.'
        );
      } finally {
        setPatentsLoading(false);
      }
    };

    fetchPatents();
  }, []);

  // =========================
  // PREVENT HYDRATION MISMATCH
  // =========================
  if (!isClient) {
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>
          Research | Water Resources Group
        </title>
      </Head>

      <div className="container mx-auto px-4 py-12">

        {/* =========================
            PAGE TITLE
        ========================= */}
        <SectionTitle
          title="Our Research"
          subtitle="Innovative approaches to water resources challenges"
          align="center"
        />

        {/* =========================
            TABS
        ========================= */}
        <Tabs
          activeTab={activeTab}
          setActiveTab={(selectedTab) => {
            setActiveTab(selectedTab);

            router.push(
              `/research?tab=${selectedTab}`,
              undefined,
              { shallow: true }
            );
          }}
          tabs={[
            {
              id: 'papers',
              label: 'Research Papers',
            },
            {
              id: 'books',
              label: 'Books',
            },
            {
              id: 'patents',
              label: 'Patents',
            },
            {
              id: 'talks',
              label: 'Invited Talks',
            },
          ]}
        />

        {/* =====================================================
            RESEARCH PAPERS
        ===================================================== */}
        {activeTab === 'papers' && (
          <div className="mt-8 space-y-6">

            <h3 className="text-2xl font-bold mb-8 text-slate-800">
              Journal Articles
            </h3>

            {publications.journalArticles.map(
              (pub) => (
                <PublicationCard
                  key={pub.id}
                  publication={pub}
                />
              )
            )}

          </div>
        )}

        {/* =====================================================
            BOOKS
        ===================================================== */}
        {activeTab === 'books' && (
          <div className="mt-8 space-y-6">

            <h3 className="text-2xl font-bold mb-8 text-slate-800">
              Books
            </h3>

            {/* =========================
                LOADING
            ========================= */}
            {booksLoading && (
              <div className="flex flex-col items-center justify-center py-24">

                <div className="relative w-16 h-16">

                  <div className="absolute inset-0 rounded-full border-4 border-blue-100" />

                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin" />

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />

                  </div>

                </div>

                <p className="mt-5 text-blue-600 text-lg font-semibold animate-pulse">
                  Loading books...
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Fetching latest books
                </p>

              </div>
            )}

            {/* =========================
                ERROR
            ========================= */}
            {!booksLoading && booksError && (
              <div className="flex flex-col items-center justify-center py-20">

                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">

                  <span className="text-red-600 text-2xl font-bold">
                    !
                  </span>

                </div>

                <p className="mt-4 text-red-600 font-semibold text-center">
                  {booksError}
                </p>

                <button
                  onClick={() => window.location.reload()}
                  className="mt-5 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Try Again
                </button>

              </div>
            )}

            {/* =========================
                EMPTY
            ========================= */}
            {!booksLoading &&
              !booksError &&
              books.length === 0 && (
                <div className="flex items-center justify-center py-20">

                  <p className="text-slate-500 text-lg">
                    No books found.
                  </p>

                </div>
              )}

            {/* =========================
                BOOK LIST
            ========================= */}
            {!booksLoading &&
              !booksError &&
              books.length > 0 && (

                <div className="space-y-6">

                  {books.map((book) => (

                    <div
                      key={
                        book.id ||
                        book.title
                      }
                      className="group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 mb-8 overflow-hidden z-10"
                    >

                      {/* DECORATION */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-bl-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />

                      <div className="flex flex-col md:flex-row gap-8">

                        {/* =========================
                            BOOK IMAGE / YEAR
                        ========================= */}
                        <div className="w-full md:w-48 shrink-0 flex flex-col items-start">

                          {book.year && (
                            <div className="bg-white border-2 border-slate-200 text-slate-800 text-2xl font-bold px-5 py-3 rounded-xl mb-6 shadow-sm w-full text-center md:text-left md:w-auto">
                              {book.year}
                            </div>
                          )}

                          {book.imagePath && (
                                  <div className="w-full aspect-[3/4] relative rounded-xl overflow-hidden shadow-inner border border-slate-100 bg-slate-50">

                                   <img
                                      src={`/images/research/books/${book.imagePath}`}
                                      alt={book.title || 'Book'}
                                      className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />

                                  </div>    
                            )}

                        </div>

                        {/* =========================
                            BOOK INFORMATION
                        ========================= */}
                        <div className="flex-1 flex flex-col">

                          {/* BADGES */}
                          <div className="flex flex-wrap gap-2 mb-5">

                            {book.publisher && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 ring-1 ring-blue-200 shadow-sm">
                                PUB: {book.publisher}
                              </span>
                            )}

                            {book.isbn && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 ring-1 ring-slate-200 shadow-sm">
                                ISBN: {book.isbn}
                              </span>
                            )}

                            {book.eisbn && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 ring-1 ring-slate-200 shadow-sm">
                                EISBN: {book.eisbn}
                              </span>
                            )}

                            {book.doi && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-800 ring-1 ring-cyan-200 shadow-sm">
                                DOI: {book.doi}
                              </span>
                            )}

                            {String(
                              book.featured
                            ).toLowerCase() ===
                              'true' && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 ring-1 ring-amber-200 shadow-sm">
                                Featured
                              </span>
                            )}

                          </div>

                          {/* TITLE */}
                          <h4 className="text-2xl font-bold text-slate-800 leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                            {book.title}
                          </h4>

                          {/* AUTHORS */}
                          {book.authors &&
                            book.authors.length >
                              0 && (

                              <div className="text-slate-600 font-medium mb-6 leading-relaxed text-[15px]">

                                {book.authors.map(
                                  (
                                    author,
                                    index
                                  ) => {

                                    const normalized =
                                      typeof author ===
                                      'string'
                                        ? author.replace(
                                            /\s/g,
                                            ''
                                          )
                                        : '';

                                    const isTarget =
                                      normalized.toLowerCase() ===
                                      'a.yadav';

                                    return (
                                      <span
                                        key={
                                          index
                                        }
                                      >

                                        <span
                                          className={
                                            isTarget
                                              ? 'text-blue-700 font-extrabold bg-blue-50 px-1.5 py-0.5 rounded-md border border-blue-100'
                                              : ''
                                          }
                                        >
                                          {
                                            author
                                          }
                                        </span>

                                        {index <
                                          book
                                            .authors
                                            .length -
                                            1 &&
                                          ', '}

                                      </span>
                                    );
                                  }
                                )}

                              </div>
                            )}

                          {/* VIEW BOOK */}
                          {book.link && (
                            <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap gap-4">

                              <a
                                href={
                                  book.link
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-600 hover:text-blue-600 transition-colors gap-2 shadow-sm"
                              >

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={
                                      2
                                    }
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
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

          </div>
        )}

        {/* =====================================================
            PATENTS
        ===================================================== */}
        {activeTab === 'patents' && (
          <div className="mt-8 space-y-6">

            <h3 className="text-2xl font-bold mb-8 text-slate-800">
              Patents
            </h3>

            {/* PATENT LOADING */}
            {patentsLoading && (
              <div className="flex flex-col items-center justify-center py-24">

                <div className="relative w-16 h-16">

                  <div className="absolute inset-0 rounded-full border-4 border-blue-100" />

                  <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin" />

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />

                  </div>

                </div>

                <p className="mt-5 text-blue-600 text-lg font-semibold animate-pulse">
                  Loading patents...
                </p>

              </div>
            )}

            {/* PATENT ERROR */}
            {!patentsLoading &&
              patentsError && (
                <div className="flex flex-col items-center justify-center py-20">

                  <p className="text-red-600 font-semibold">
                    {patentsError}
                  </p>

                  <button
                    onClick={() =>
                      window.location.reload()
                    }
                    className="mt-5 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                  >
                    Try Again
                  </button>

                </div>
              )}

            {/* PATENTS */}
            {!patentsLoading &&
              !patentsError &&
              patents.length > 0 && (

                <div className="space-y-6">

                  {patents.map(
                    (patent) => (

                      <div
                        key={
                          patent.id ||
                          patent.title
                        }
                        className="group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-cyan-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 mb-8 overflow-hidden z-10"
                      >

                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-bl-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />

                        <div className="flex flex-col md:flex-row gap-8">

                          {/* LEFT */}
                          <div className="w-full md:w-48 shrink-0 flex flex-col items-start">

                            {patent.filingDate && (
                              <div className="bg-slate-900 text-white text-lg font-black tracking-tighter px-5 py-3 rounded-xl mb-4 shadow-md w-full text-center md:text-left md:w-auto">
                                {
                                  patent.filingDate
                                }
                              </div>
                            )}

                            {patent.status && (
                              <div
                                className={`inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest ring-1 shadow-sm w-full md:w-auto justify-center md:justify-start ${
                                  patent.status
                                    .toLowerCase()
                                    .includes(
                                      'granted'
                                    )
                                    ? 'bg-green-100 text-green-800 ring-green-200'
                                    : 'bg-blue-100 text-blue-800 ring-blue-200'
                                }`}
                              >
                                {
                                  patent.status
                                }
                              </div>
                            )}

                          </div>

                          {/* RIGHT */}
                          <div className="flex-1 flex flex-col">

                            <div className="flex flex-wrap gap-2 mb-5">

                              {patent.patentNumber && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 ring-1 ring-slate-200 shadow-sm">
                                  PAT NO:{' '}
                                  {
                                    patent.patentNumber
                                  }
                                </span>
                              )}

                            </div>

                            <h4 className="text-2xl font-bold text-slate-800 leading-tight mb-4 group-hover:text-cyan-600 transition-colors">
                              {
                                patent.title
                              }
                            </h4>

                            {patent.inventors &&
                              patent
                                .inventors
                                .length >
                                0 && (

                                <div className="text-slate-600 font-medium mb-6 leading-relaxed text-[15px]">

                                  {patent.inventors.map(
                                    (
                                      inventor,
                                      index
                                    ) => {

                                      const normalized =
                                        typeof inventor ===
                                        'string'
                                          ? inventor.replace(
                                              /\s/g,
                                              ''
                                            )
                                          : '';

                                      const isTarget =
                                        normalized.toLowerCase() ===
                                        'a.yadav';

                                      return (
                                        <span
                                          key={
                                            index
                                          }
                                        >

                                          <span
                                            className={
                                              isTarget
                                                ? 'text-cyan-700 font-extrabold bg-cyan-50 px-1.5 py-0.5 rounded-md border border-cyan-100'
                                                : ''
                                            }
                                          >
                                            {
                                              inventor
                                            }
                                          </span>

                                          {index <
                                            patent
                                              .inventors
                                              .length -
                                              1 &&
                                            ', '}

                                        </span>
                                      );
                                    }
                                  )}

                                </div>
                              )}

                            {patent.link && (
                              <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap gap-4">

                                <a
                                  href={
                                    patent.link
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-cyan-600 transition-colors gap-2 shadow-sm"
                                >

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={
                                        2
                                      }
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>

                                  Official Record

                                </a>

                              </div>
                            )}

                          </div>

                        </div>

                      </div>

                    )
                  )}

                </div>
              )}

            {!patentsLoading &&
              !patentsError &&
              patents.length === 0 && (
                <div className="flex items-center justify-center py-20">

                  <p className="text-slate-500 text-lg">
                    No patents found.
                  </p>

                </div>
              )}

          </div>
        )}

        {/* =====================================================
            INVITED TALKS
        ===================================================== */}
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