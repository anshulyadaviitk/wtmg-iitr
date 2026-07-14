"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";

export default function CalendarToolbar(toolbar) {
  const goToday = () => {
    toolbar.onNavigate("TODAY");
  };

  const goPrev = () => {
    toolbar.onNavigate("PREV");
  };

  const goNext = () => {
    toolbar.onNavigate("NEXT");
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-6">

      <div className="flex items-center gap-3">

        <button
          onClick={goToday}
          className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Today
        </button>

        <div className="flex items-center gap-2">

          <button
            onClick={goPrev}
            className="p-2 rounded-xl border hover:bg-slate-100"
          >
            <ChevronLeft size={18}/>
          </button>

          <button
            onClick={goNext}
            className="p-2 rounded-xl border hover:bg-slate-100"
          >
            <ChevronRight size={18}/>
          </button>

        </div>

      </div>

      <h2 className="text-2xl font-bold text-slate-900">

        {format(toolbar.date,"MMMM yyyy")}

      </h2>

      <div className="flex gap-2">

        <button

          onClick={()=>toolbar.onView("month")}

          className={`px-4 py-2 rounded-xl ${
            toolbar.view==="month"
              ? "bg-blue-600 text-white"
              : "border"
          }`}
        >
          Month
        </button>

        <button

          onClick={()=>toolbar.onView("week")}

          className={`px-4 py-2 rounded-xl ${
            toolbar.view==="week"
              ? "bg-blue-600 text-white"
              : "border"
          }`}
        >
          Week
        </button>

        <button

          onClick={()=>toolbar.onView("day")}

          className={`px-4 py-2 rounded-xl ${
            toolbar.view==="day"
              ? "bg-blue-600 text-white"
              : "border"
          }`}
        >
          Day
        </button>

      </div>

    </div>
  );
}