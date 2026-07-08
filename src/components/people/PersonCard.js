import Image from "next/image";
import Link from "next/link";

export default function PersonCard({ person, className = "" }) {

  const getPhotoPath = () => {

    if (!person?.photo) {
      return "/images/default-profile.png";
    }

    // Agar Google Sheet me already full path ya URL diya hai
    if (
      person.photo.startsWith("/") ||
      person.photo.startsWith("http")
    ) {
      return person.photo;
    }

    const folderMap = {
      phd: "phd",
      masters: "mtech",
      postdoc: "postdoc",
      interns: "interns",
      projectstudents: "project",
    };

    const folder =
      folderMap[person.category] || "phd";

    return `/images/groupmembers/${folder}/${person.photo.trim()}`;
  };

  return (

    <div
      className={`person-card bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden flex flex-col items-center text-center p-6 ${className}`}
    >

      {/* Profile Image */}

      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-100 shadow-md">

        <Image
          src={getPhotoPath()}
          alt={person.name}
          fill
          className="object-cover"
        />

      </div>

      {/* Name */}

      <h2 className="mt-6 text-2xl font-bold text-gray-900 leading-tight text-center">
        {person.name}
      </h2>

      {/* Position */}

      <p className="mt-3 text-blue-600 font-semibold text-lg min-h-[56px] flex items-center justify-center text-center">

        {person.position === "PhD Scholar"
          ? person.funding
          : person.position === "Intern" ||
            person.position === "SPARK Intern"
          ? person.College
          : person.position}

      </p>

      <div className="flex-grow"></div>

      <Link
        href={`/people/${person.id}`}
        className="secondary-btn mt-8 w-full"
      >
        View Profile →
      </Link>

    </div>

  );
}