import Link from 'next/link';
import { DocumentTextIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function PublicationCard({ publication }) {
  const {
    title,
    authors = [],
    journal,
    image,
    conference,
    year,
    volume,
    pages,
    impact_factor,
    citescore,
    quartile,
    publisher,
    location,
    doi,
    pdf,
    abstract,
    link,
    isbn
  } = publication;

  return (
    <div className="group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 mb-8 overflow-hidden z-10">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-bl-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Side: Visual / Year */}
        <div className="w-full md:w-48 shrink-0 flex flex-col items-start">
          {year && (
            <div className="bg-white border-2 border-slate-200 text-slate-800 text-2xl font-bold px-5 py-3 rounded-xl mb-6 shadow-sm w-full text-center md:text-left md:w-auto">
              {year}
            </div>
          )}
          {image && (
            <div className="w-full aspect-[3/4] relative rounded-xl overflow-hidden shadow-inner border border-slate-100 bg-slate-50">
               <img src={image} alt={title} className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
            </div>
          )}
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 flex flex-col">
          
          {/* Tags / Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {(journal || conference) && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 ring-1 ring-blue-200 shadow-sm">
                {journal || conference}
              </span>
            )}
            {impact_factor && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200 shadow-sm">
                IF: {impact_factor} {quartile ? `(${quartile})` : ''}
              </span>
            )}
            {citescore && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 ring-1 ring-purple-200 shadow-sm">
                CiteScore: {citescore}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-slate-800 leading-tight mb-4 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Authors */}
          {Array.isArray(authors) && authors.length > 0 && (
            <div className="text-slate-600 font-medium mb-6 leading-relaxed text-[15px]">
              {authors.map((author, index) => {
                const normalized = typeof author === 'string' ? author.replace(/\s/g, '') : '';
                const isTarget = normalized === 'A.Yadav';
                return (
                  <span key={index}>
                    <span className={isTarget ? 'text-blue-700 font-extrabold bg-blue-50 px-1.5 py-0.5 rounded-md border border-blue-100' : ''}>
                      {author}
                    </span>
                    {index < authors.length - 1 && ', '}
                  </span>
                );
              })}
            </div>
          )}

          {/* Meta Information Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 py-5 border-y border-slate-100">
            {volume && (
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Volume</div>
                <div className="text-sm font-semibold text-slate-700">{volume}</div>
              </div>
            )}
            {pages && (
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Pages</div>
                <div className="text-sm font-semibold text-slate-700">{pages}</div>
              </div>
            )}
            {publisher && (
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Publisher</div>
                <div className="text-sm font-semibold text-slate-700">{publisher}</div>
              </div>
            )}
            {doi && (
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">DOI</div>
                <div className="text-sm font-semibold text-blue-600 truncate max-w-[120px]" title={doi}>{doi}</div>
              </div>
            )}
          </div>

          {/* Abstract */}
          {abstract && (
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-8 bg-slate-50/50 p-5 rounded-xl border border-slate-100">
              {abstract}
            </p>
          )}

          {/* Actions */}
          <div className="mt-auto flex flex-wrap gap-4">
            {pdf && (
              <Link href={pdf} target="_blank" className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-blue-600 transition-colors gap-2 shadow-sm">
                <DocumentTextIcon className="w-5 h-5" />
                Download PDF
              </Link>
            )}
            {link && (
              <Link href={link} target="_blank" className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-600 hover:text-blue-600 transition-colors gap-2 shadow-sm">
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                Publisher Website
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
