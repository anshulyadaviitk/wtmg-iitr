export default function Tabs({ activeTab, setActiveTab, tabs }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-slate-100/50 backdrop-blur-md rounded-2xl border border-slate-200/60 max-w-fit mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300
            ${
              activeTab === tab.id
                ? 'bg-white text-blue-600 shadow-md ring-1 ring-slate-200/50 scale-105'
                : 'bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
