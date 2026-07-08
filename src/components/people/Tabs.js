import Link from "next/link";
import { useRouter } from "next/router";

export default function PeopleTabs() {
  const router = useRouter();

  const tabs = [
    { name: "PostDoc", path: "/people/postdoc" },
    { name: "PhD Scholars", path: "/people/phd" },
    { name: "Master Students", path: "/people/masters" },
    { name: "Project Students", path: "/people/project_student" },
    { name: "Interns", path: "/people/interns" },
  ];

  return (
    <div className="w-full mb-10">

      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-3">

        <div className="flex flex-wrap justify-center gap-3">

          {tabs.map((tab) => {

            const active = router.pathname === tab.path;

            return (
              <Link
                key={tab.path}
                href={tab.path}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300
                ${
                  active
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {tab.name}
              </Link>
            );

          })}

        </div>

      </div>

    </div>
  );
}