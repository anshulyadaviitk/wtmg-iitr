import Image from 'next/image';
import Link from 'next/link';

export default function PersonCard({ person, className = '' }) {
  // Determine dynamic label based on type
  const getTopicLabel = () => {
    switch (person.type?.toLowerCase()) {
      case 'phd':
      case 'mtech':
        return 'Title of thesis:';
      case 'intern':
        return 'Topic of internship:';
      default:
        return 'Research:';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row items-start gap-6 ${className}`}>
      {/* Image Section */}
   <div className="relative w-full h-60 sm:w-40 sm:h-60 flex-shrink-0 overflow-hidden border border-gray-200 rounded">
  <Image
    src={person.photo}
    alt={`Photo of ${person.name}`}
    fill
    sizes="(max-width: 640px) 100vw, 160px"
    className="object-contain sm:object-cover object-top"
  />
</div>


      {/* Info Section */}
      <div className="flex flex-col text-gray-800">
        <h3 className="text-xl font-semibold">{person.name}</h3>

        {person.position && (
          <p className="text-sm text-gray-600 mt-1">{person.position}</p>
        )}

        {person.topic && (
          <p className="text-sm mt-2">
            <span className="font-medium">{getTopicLabel()}</span> {person.topic}
          </p>
        )}

        {/* Education or College */}
        {person.type === 'intern' && person.College && (
          <p className="text-sm mt-1">
            <span className="font-medium">College:</span> {person.College}
          </p>
        )}
        {person.type !== 'intern' && person.previousDegree && (
         <p className="text-sm mt-1 flex whitespace-pre-line">
  <span className="font-medium min-w-[75px]">Education:</span>
  <span className="flex-1">{person.previousDegree}</span>
</p>

        )}
 {person.nationality && (
          <p className="text-sm mt-1">
            <span className="font-medium">Nationality:</span> {person.nationality}
          </p>
        )}
{person.funding && (
          <p className="text-sm mt-1">
            <span className="font-medium">Funding:</span> {person.funding}
          </p>
        )}
        {person.coSupervisor && (
          <p className="text-sm mt-1">
            <span className="font-medium">Co-Supervisor:</span> {person.coSupervisor}
          </p>
        )}

        {person.duration && (
          <p className="text-xs text-gray-500 mt-2">
            <span className="font-medium">Duration:</span> {person.duration}
          </p>
        )}

        {/* Contact Info */}
        {person.email && (
          <p className="text-sm mt-1">
             <span className="font-medium">Email: <a href={`mailto:${person.email}`} className="text-blue-600 hover:underline">
                    {person.email}
                  </a>
            </span>
          </p>
        )}
        {person.contact?.phone && (
          <p className="text-sm mt-1">
            <span className="font-medium">Phone:</span> {person.contact.phone}
          </p>
        )}
        {person.contact?.office && (
          <p className="text-sm mt-1">
            <span className="font-medium">Office:</span> {person.contact.office}
          </p>
        )}

        {/* Social Links */}
        <div className="flex flex-wrap gap-2 mt-3 text-sm">
          {person.linkedin && (
            <Link href={person.linkedin} target="_blank" className="text-blue-600 hover:underline">
              LinkedIn
            </Link>
          )}
          {person.researchgate && (
            <Link href={person.researchgate} target="_blank" className="text-blue-600 hover:underline">
              ResearchGate
            </Link>
          )}
          {person.googlescholar && (
            <Link href={person.googlescholar} target="_blank" className="text-blue-600 hover:underline">
              Google Scholar
            </Link>
          )}
        </div>

        <Link 
          href={`/people/${person.id}`}
          className="mt-4 inline-block text-sm text-blue-600 hover:underline"
        >
          View Profile →
        </Link>
      </div>
    </div>
  );
}
