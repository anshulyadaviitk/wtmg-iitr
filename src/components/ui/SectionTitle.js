export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`${alignment[align]} ${className}`}>
      <h2 className="text-4xl font-bold text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}