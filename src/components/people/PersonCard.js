import Image from "next/image";
import Link from "next/link";

export default function PersonCard({ person, className = "" }) {
  return (
    <div
      className={`person-card bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden flex flex-col items-center text-center p-6 ${className}`}
    >
      {/* Profile Image */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gray-100 border-4 border-blue-100 shadow-md mx-auto">
        <Image
          src={person.photo}
          alt={person.name}
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="mt-6 text-2xl font-bold text-gray-900 leading-tight text-center">
        {person.name}
      </h2>

      {/* Role / Funding / College */}
      <p className="mt-3 text-blue-600 font-semibold text-lg min-h-[56px] flex items-center justify-center text-center">
        {person.position === "PhD Scholar"
          ? person.funding
          : person.position === "Intern" ||
            person.position === "SPARK Intern"
          ? person.College
          : person.position}
      </p>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Button */}
      <Link
        href={`/people/${person.id}`}
        className="secondary-btn mt-8 w-full"
      >
        View Profile →
      </Link>
    </div>
  );
}