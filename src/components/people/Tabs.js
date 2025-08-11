import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PeopleTabs() {
  const router = useRouter();
  
  const tabs = [
  /*  { name: 'Principal Investigator', path: '/people/PI' },*/
  { name: 'PostDoc', path: '/people/postdoc' },
    { name: 'PhD Scholars', path: '/people/phd' },
    { name: 'Master Students', path: '/people/masters' },
    { name: 'Project Students', path: '/people/project_student' }, 
    { name: 'Interns', path: '/people/interns' },
  ];

  return (
    <div className="border-b border-gray-200 mb-8">
      <nav className="flex overflow-x-auto -mb-px">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            href={tab.path}
            className={`whitespace-nowrap px-6 py-3 text-sm font-medium border-b-2 ${
              router.pathname === tab.path
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
