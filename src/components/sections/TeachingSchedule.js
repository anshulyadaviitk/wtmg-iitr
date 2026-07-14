"use client";

import React, { useEffect, useMemo, useState } from "react";

import {
  Calendar,
  dateFnsLocalizer,
  Views,
} from "react-big-calendar";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "@/components/sections/calendar.module.css";

import {
  CalendarDays,
  Bell,
} from "lucide-react";

import CalendarToolbar from "./CalendarToolbar";
import UpcomingEvents from "./UpcomingEvents";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const SHEET_URL =
  "https://opensheet.elk.sh/1AuCpQjHD_MQwovqAbfwfHbBwTyrhXfV0B0qqJfAubhk/schedule";

export default function TeachingSchedule() {

  const [events, setEvents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [view, setView] = useState(Views.MONTH);

  const [date, setDate] = useState(new Date());

  useEffect(() => {

    async function loadEvents() {

      try {

        const res = await fetch(SHEET_URL);

        const data = await res.json();

        const formatted = data.map((item) => {

          const [day, month, year] = item.date.split("-");

          const eventDate = new Date(
            Number(year),
            Number(month) - 1,
            Number(day)
          );

          return {

            id: item.id,

            title: item.event,

            start: eventDate,

            end: eventDate,

            allDay: true,

          };

        });

        setEvents(formatted);

      } catch (err) {

        console.log(err);

      }

      setLoading(false);

    }

    loadEvents();

  }, []);

  const upcomingEvents = useMemo(() => {

    return [...events]

      .filter((e) => e.start >= new Date())

      .sort((a, b) => a.start - b.start);

  }, [events]);

  if (loading) {

    return (

      <div className="w-full rounded-3xl bg-white p-10 text-center">

        Loading Schedule...

      </div>

    );

  }

  return (

<div className="w-full bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8 mt-8 mb-16">

{/* Banner */}

<div className="bg-gradient-to-r from-blue-50 via-slate-50 to-cyan-50 rounded-3xl p-8 mb-8">

<div className="flex justify-between items-center">

<div>

<h2 className="text-3xl font-bold text-slate-900">

Teaching Schedule

</h2>

<p className="text-slate-600 mt-2">

Live schedule 

</p>

</div>

<div className="hidden lg:flex items-center gap-5">

<div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center">

<CalendarDays className="w-8 h-8 text-blue-600"/>

</div>

<div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center">

<Bell className="w-8 h-8 text-cyan-600"/>

</div>

</div>

</div>

</div>

{/* Calendar */}

<div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">

<Calendar

localizer={localizer}

events={events}

date={date}

view={view}

views={["month","week","day"]}

startAccessor="start"

endAccessor="end"

popup

selectable

style={{

height:700,

}}

components={{

toolbar:CalendarToolbar,

}}

onNavigate={(newDate)=>setDate(newDate)}

onView={(newView)=>setView(newView)}

eventPropGetter={()=>({

style:{

background:"#2563eb",

borderRadius:"8px",

border:"none",

color:"#fff",

padding:"4px 8px",

fontWeight:"600",

}

})}

/>

</div>
      {/* Bottom Section */}

      <div className="grid lg:grid-cols-2 gap-8 mt-8">

        {/* Upcoming Events */}

        <UpcomingEvents events={upcomingEvents} />

        {/* Stay Updated */}

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100 flex flex-col justify-center">

          <div className="w-16 h-16 rounded-2xl bg-white shadow flex items-center justify-center mb-6">

            <Bell className="w-8 h-8 text-blue-600" />

          </div>

          <h3 className="text-2xl font-bold text-slate-900">

            Stay Updated

          </h3>

          <p className="text-slate-600 mt-4 leading-7">

            Whenever a new lecture, seminar, workshop or event is added, it
            will instantly appear here.

          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">

              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <span className="text-slate-700">

                Live Schedule

              </span>

            </div>

            <div className="flex items-center gap-3">

              <div className="w-3 h-3 rounded-full bg-blue-500"></div>

              <span className="text-slate-700">

                Auto Calendar Updates

              </span>

            </div>

            <div className="flex items-center gap-3">

              <div className="w-3 h-3 rounded-full bg-indigo-500"></div>

              <span className="text-slate-700">

                Monthly, Weekly & Daily Views

              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}