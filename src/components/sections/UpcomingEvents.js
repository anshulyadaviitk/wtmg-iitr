"use client";

import { CalendarDays } from "lucide-react";
import { format } from "date-fns";

export default function UpcomingEvents({ events }) {

  const upcomingEvents = [...events]
    .filter((event) => event.start >= new Date())
    .sort((a, b) => a.start - b.start)
    .slice(0, 3);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

      <div className="flex items-center justify-between mb-6">

        <h3 className="text-xl font-bold text-slate-900">

          Upcoming Events

        </h3>

        <button
          className="text-blue-600 font-semibold hover:text-blue-800 transition"
        >
          View More →
        </button>

      </div>

      {upcomingEvents.length === 0 && (

        <div className="text-center py-10 text-slate-500">

          No Upcoming Events

        </div>

      )}

      <div className="space-y-4">

        {upcomingEvents.map((event) => (

          <div
            key={event.id}
            className="flex items-center gap-4 p-4 rounded-2xl border hover:bg-slate-50 transition"
          >

            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

              <CalendarDays className="w-5 h-5 text-blue-600"/>

            </div>

            <div className="flex-1">

              <h4 className="font-semibold text-slate-900">

                {event.title}

              </h4>

              <p className="text-sm text-slate-500">

                {format(event.start,"dd MMM yyyy")}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );

}