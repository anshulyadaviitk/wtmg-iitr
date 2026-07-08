import React from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  BookOpen, 
  FileText, 
  Video, 
  MonitorPlay, 
  Bell, 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  List, 
  LayoutGrid,
  Edit3
} from 'lucide-react';

const events = [
  { id: 1, title: 'Lecture', time: '10:00 AM', type: 'lecture', date: 28, color: 'bg-purple-100 text-purple-700' },
  { id: 2, title: 'Notes Uploaded', time: '', type: 'notes', date: 1, color: 'bg-emerald-100 text-emerald-700' },
  { id: 3, title: 'Quiz', time: '11:00 AM', type: 'quiz', date: 4, color: 'bg-amber-100 text-amber-700' },
  { id: 4, title: 'Video Lecture', time: '2:00 PM', type: 'video', date: 6, color: 'bg-blue-100 text-blue-700' },
  { id: 5, title: 'Conference', time: 'IIT Delhi', type: 'conference', date: 9, color: 'bg-pink-100 text-pink-700' },
  { id: 6, title: 'Quiz', time: '11:00 AM', type: 'quiz', date: 12, color: 'bg-amber-100 text-amber-700' },
  { id: 7, title: 'Lecture', time: '10:00 AM', type: 'lecture', date: 13, color: 'bg-purple-100 text-purple-700' },
  { id: 8, title: 'Notes Uploaded', time: '', type: 'notes', date: 15, color: 'bg-emerald-100 text-emerald-700' },
  { id: 9, title: 'Video Lecture', time: '2:00 PM', type: 'video', date: 19, color: 'bg-blue-100 text-blue-700' },
  { id: 10, title: 'Lecture', time: '10:00 AM', type: 'lecture', date: 21, color: 'bg-purple-100 text-purple-700' },
  { id: 11, title: 'Notes Uploaded', time: '', type: 'notes', date: 25, color: 'bg-emerald-100 text-emerald-700' },
  { id: 12, title: 'Quiz', time: '11:00 AM', type: 'quiz', date: 27, color: 'bg-amber-100 text-amber-700' },
  { id: 13, title: 'Conference', time: 'Online', type: 'conference', date: 29, color: 'bg-pink-100 text-pink-700' },
];

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const calendarGrid = Array.from({ length: 35 }, (_, i) => {
  const day = i - 1; 
  if (day <= 0) return { date: 26 + day, isCurrentMonth: false };
  if (day > 31) return { date: day - 31, isCurrentMonth: false };
  return { date: day, isCurrentMonth: true };
});

export default function TeachingSchedule() {
  return (
    <div className="w-full bg-white rounded-[2rem] p-4 sm:p-8 shadow-sm border border-slate-200/60 font-sans mt-8 mb-16 relative z-10">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-cyan-50 rounded-[1.5rem] p-8 mb-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between border border-white shadow-inner">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Teaching Schedule</h2>
          <p className="text-slate-600 font-medium">All lectures, quizzes, notes, syllabus, videos and conferences at your fingertips.</p>
        </div>
        
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-30 pointer-events-none">
           <div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
           <div className="absolute right-32 top-10 w-48 h-48 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 hidden lg:flex items-center gap-6 pr-8 mt-6 md:mt-0">
           <div className="w-20 h-20 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center transform -rotate-6 border border-white/50">
             <Clock className="w-10 h-10 text-blue-600" />
           </div>
           <div className="w-24 h-24 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center transform translate-y-4 border border-white/50 z-10">
             <CalendarIcon className="w-12 h-12 text-cyan-600" />
           </div>
           <div className="w-20 h-20 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center transform rotate-6 border border-white/50">
             <BookOpen className="w-10 h-10 text-blue-500" />
           </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Calendar Area */}
        <div className="w-full">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-2xl border border-slate-200/50">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-sm transition-all hover:bg-blue-700">
                <CalendarIcon className="w-4 h-4" />
                Month View
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 text-slate-600 hover:bg-slate-100 rounded-xl text-sm font-semibold transition-colors">
                <List className="w-4 h-4" />
                Week View
              </button>
              <div className="w-px h-6 bg-slate-200 mx-1"></div>
              <button className="flex items-center gap-2 px-5 py-2.5 text-slate-600 hover:bg-slate-100 rounded-xl text-sm font-semibold transition-colors">
                <Grid className="w-4 h-4" />
                Today
              </button>
            </div>
            
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl text-sm font-semibold transition-colors shadow-sm">
              <LayoutGrid className="w-4 h-4 text-slate-400" />
              All Categories
              <ChevronRight className="w-4 h-4 rotate-90 ml-1 text-slate-400" />
            </button>
          </div>

          {/* Month Navigation */}
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">May 2026</h3>
            <div className="flex items-center gap-1">
              <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="border border-slate-200 rounded-[1.5rem] overflow-hidden mb-6 bg-slate-200 shadow-sm">
            <div className="grid grid-cols-7 bg-white/50 backdrop-blur-sm border-b border-slate-200">
              {days.map(day => (
                <div key={day} className="py-4 text-center text-sm font-bold text-slate-500 uppercase tracking-wider">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-[1px]">
              {calendarGrid.map((day, idx) => {
                const dayEvents = events.filter(e => e.date === day.date && day.isCurrentMonth);
                const isToday = day.date === 14 && day.isCurrentMonth;
                return (
                  <div key={idx} className={`min-h-[120px] bg-white p-2.5 flex flex-col gap-1.5 transition-colors hover:bg-slate-50/50 ${!day.isCurrentMonth ? 'opacity-40 bg-slate-50' : ''}`}>
                    <div className="flex justify-start mb-1">
                      <span className={`text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full ${isToday ? 'bg-blue-600 text-white shadow-md' : 'text-slate-700'}`}>
                        {day.date}
                      </span>
                    </div>
                    {dayEvents.map(event => (
                      <div key={event.id} className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex flex-col gap-0.5 ${event.color}`}>
                        <div className="flex items-center gap-1.5">
                          {event.type === 'lecture' && <BookOpen className="w-3.5 h-3.5" />}
                          {event.type === 'quiz' && <Edit3 className="w-3.5 h-3.5" />}
                          {event.type === 'notes' && <FileText className="w-3.5 h-3.5" />}
                          {event.type === 'video' && <Video className="w-3.5 h-3.5" />}
                          {event.type === 'conference' && <MonitorPlay className="w-3.5 h-3.5" />}
                          <span className="truncate">{event.title}</span>
                        </div>
                        {event.time && <span className="opacity-80 ml-5 text-[10px] uppercase tracking-wider">{event.time}</span>}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-600 mb-10 px-4">
             <div className="flex items-center gap-2.5"><div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-sm"></div>Lecture</div>
             <div className="flex items-center gap-2.5"><div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm"></div>Quiz</div>
             <div className="flex items-center gap-2.5"><div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm"></div>Syllabus</div>
             <div className="flex items-center gap-2.5"><div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-sm"></div>Video Lecture</div>
             <div className="flex items-center gap-2.5"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm"></div>Notes</div>
             <div className="flex items-center gap-2.5"><div className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-sm"></div>Conference</div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h4 className="font-extrabold text-slate-900 mb-6 flex items-center gap-2.5 text-lg">
              <LayoutGrid className="w-5 h-5 text-slate-400" />
              Recent Activities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'New lecture uploaded', desc: 'Machine Learning Basics.pdf', time: '2h ago', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50/80', ring: 'ring-purple-100' },
                { title: 'Quiz scheduled', desc: 'Data Structures Quiz', time: '1d ago', icon: Edit3, color: 'text-amber-600', bg: 'bg-amber-50/80', ring: 'ring-amber-100' },
                { title: 'Notes uploaded', desc: 'Optimization Methods.pdf', time: '2d ago', icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-50/80', ring: 'ring-emerald-100' },
                { title: 'Conference added', desc: 'AI & Robotics 2026', time: '3d ago', icon: MonitorPlay, color: 'text-pink-600', bg: 'bg-pink-50/80', ring: 'ring-pink-100' },
              ].map((activity, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mb-4 transition-transform group-hover:-translate-y-1 ring-4 ${activity.ring} ${activity.bg} ${activity.color}`}>
                    <activity.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{activity.title}</h5>
                    <p className="text-xs font-medium text-slate-500 line-clamp-1 mb-2">{activity.desc}</p>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Cards Row */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Events */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm h-full">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-extrabold text-slate-900 text-lg">Upcoming Events</h4>
              <button className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">View All</button>
            </div>
            <div className="space-y-5">
              {[
                { title: 'Lecture: Machine Learning Basics', time: 'Jul 1, 2026 • 10:00 AM', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-100' },
                { title: 'Quiz: Data Structures', time: 'Jul 6, 2026 • 11:00 AM', icon: Edit3, color: 'text-amber-600', bg: 'bg-amber-100' },
                { title: 'Video Lecture: Neural Networks', time: 'Jul 8, 2026 • 2:00 PM', icon: Video, color: 'text-blue-600', bg: 'bg-blue-100' },
                { title: 'Conference: AI & Robotics', time: 'Jul 11, 2026 • IIT Delhi', icon: MonitorPlay, color: 'text-pink-600', bg: 'bg-pink-100' },
                { title: 'Notes: Optimization Methods', time: 'Jul 17, 2026', icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-100' },
              ].map((event, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer p-2 -mx-2 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${event.bg} ${event.color}`}>
                    <event.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h5 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">{event.title}</h5>
                    <p className="text-[11px] font-semibold text-slate-500 mt-1 uppercase tracking-wider">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm h-full">
            <h4 className="font-extrabold text-slate-900 mb-6 text-lg">Quick Access</h4>
            <div className="grid grid-cols-3 gap-y-6 gap-x-2">
              {[
                { name: 'Syllabus', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
                { name: 'Notes', icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { name: 'Lectures', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50' },
                { name: 'Quizzes', icon: Edit3, color: 'text-amber-600', bg: 'bg-amber-50' },
                { name: 'Videos', icon: Video, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { name: 'Conferences', icon: MonitorPlay, color: 'text-pink-600', bg: 'bg-pink-50' },
              ].map((item, i) => (
                <button key={i} className="flex flex-col items-center gap-3 group">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md ${item.bg} ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stay Updated */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 border border-blue-100/50 relative overflow-hidden shadow-sm h-full flex flex-col justify-center">
             <div className="relative z-10">
               <h4 className="font-extrabold text-slate-900 mb-2 text-lg">Stay Updated</h4>
               <p className="text-xs font-medium text-slate-600 mb-5 pr-10 leading-relaxed">Enable notifications to never miss important updates and events.</p>
               <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95">
                 <Bell className="w-4 h-4" />
                 Enable Notifications
               </button>
             </div>
             {/* Bell decoration */}
             <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-200/40 rounded-full flex items-center justify-center pointer-events-none">
               <Bell className="w-16 h-16 text-blue-400/50 transform rotate-12" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
