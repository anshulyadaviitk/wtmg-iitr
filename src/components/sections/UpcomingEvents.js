"use client";

import { CalendarDays, X } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

export default function UpcomingEvents({ events }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allUpcomingEvents = [...events]
    .filter((event) => event.start >= new Date())
    .sort((a, b) => a.start - b.start);

  const previewEvents = allUpcomingEvents.slice(0, 3);

  return (
    <>
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-900">
            Upcoming Events
          </h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-blue-600 font-semibold hover:text-blue-800 transition"
          >
            View More →
          </button>
        </div>

        {previewEvents.length === 0 && (
          <div className="text-center py-10 text-slate-500">
            No Upcoming Events
          </div>
        )}

        <div className="space-y-4">
          {previewEvents.map((event) => (
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg max-h-[80vh] flex flex-col shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">
                All Upcoming Events
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {allUpcomingEvents.length === 0 && (
                <div className="text-center py-10 text-slate-500">
                  No Upcoming Events
                </div>
              )}
              {allUpcomingEvents.map((event) => (
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
        </div>
      )}
    </>
  );
}