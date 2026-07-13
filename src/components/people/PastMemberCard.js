import Image from "next/image";
import Link from "next/link";

export default function PastMemberCard({ member, className = "" }) {
  return (
    <div
      className={`person-card bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden ${className}`}
    >
      <div className="flex flex-col items-center p-8 h-full">
        {/* Profile Image */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gray-100 border-4 border-blue-100 shadow-md">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="160px"
              className="person-image object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Photo
            </div>
          )}
        </div>

        {/* Name */}
        <h2 className="mt-6 text-2xl font-bold text-gray-900 leading-tight text-center">
          {member.name}
        </h2>

        {/* Duration */}
        <p className="mt-3 text-lg font-semibold text-blue-600 min-h-[56px] flex items-center justify-center text-center">
          {member.duration}
        </p>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* View Profile */}
        <Link
          href={`/people/alumni/${member.id}`}
          className="secondary-btn mt-8 w-full text-center"
        >
          View Profile →
        </Link>
      </div>
    </div>
  );
}