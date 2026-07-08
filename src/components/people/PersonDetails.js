import Image from 'next/image';

export default function PersonDetails({ person }) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0 p-6">
          <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={person.photo}
              alt={`Photo of ${person.name}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-accent-600 font-semibold">
            {person.position}
          </div>
          <h1 className="text-3xl font-bold text-ink mt-1">{person.name}</h1>
          
          <div className="mt-6 space-y-4">
            <div>
              <h2 className="text-sm font-semibold text-ink/50">EDUCATION</h2>
              <ul className="mt-1 list-disc list-inside">
                {person.education.map((item, index) => (
                  <li key={index} className="text-ink/80">{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-sm font-semibold text-ink/50">RESEARCH INTERESTS</h2>
              <p className="mt-1 text-ink/80">{person.researchInterests}</p>
            </div>
            
            <div>
              <h2 className="text-sm font-semibold text-ink/50">CONTACT</h2>
              <p className="mt-1 text-ink/80">{person.email}</p>
              <p className="text-ink/80">{person.office}</p>
            </div>
          </div>
        </div>
      </div>
      
      {person.bio && (
        <div className="px-8 pb-8">
          <h2 className="text-sm font-semibold text-ink/50">BIOGRAPHY</h2>
          <p className="mt-2 text-ink/80 whitespace-pre-line">{person.bio}</p>
        </div>
      )}
    </div>
  );
}