import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const labImages = [
  { src: '/images/lab/lab1.jpg', alt: 'Advanced water treatment equipment' },
  { src: '/images/lab/lab2.jpg', alt: 'Research team conducting experiments' },
  { src: '/images/lab/lab3.jpg', alt: 'Membrane bioreactor setup' },
];

export default function Lab() {
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const total = labImages.length;

  const prev = () => {
    setAutoSlide(false);
    setCurrent((current - 1 + total) % total);
  };

  const next = () => {
    setAutoSlide(false);
    setCurrent((current + 1) % total);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return;
    const timer = setTimeout(() => next(), 5000);
    return () => clearTimeout(timer);
  }, [current, autoSlide]);

  return (
    <Layout>
      <Head>
        <title>Our Lab | Water Resources Research Group</title>
        <meta name="description" content="Explore our state-of-the-art water research laboratory facilities at IIT Roorkee" />
      </Head>

      {/* Modern Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={labImages[0].src}
          alt={labImages[0].alt}
          fill
          className="object-cover transition-transform duration-[10s] hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-blue-900/60 mix-blend-multiply" />
        
        {/* Abstract blur effects */}
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500/30 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            WRDM Department
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Research <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Laboratory</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            State-of-the-art facilities for advanced water treatment, analysis, and membrane bioreactor research.
          </p>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Lab Facilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our cutting-edge equipment and research spaces
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl shadow-xl overflow-hidden group">
            <Image
              src={labImages[current].src}
              alt={labImages[current].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {labImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setAutoSlide(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${current === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About the Lab */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">About Our Lab</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/lab/lab-overview.jpg"
                alt="Lab overview"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Our laboratory at the WRDM Department, IIT Roorkee, is equipped with advanced
                facilities for water treatment, wastewater analysis, and membrane bioreactor studies.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We focus on cutting-edge research integrating experimentation with computational fluid dynamics,
                supported by state-of-the-art instrumentation and analytical equipment.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our goal is to develop sustainable solutions to real-world water management challenges
                through rigorous scientific investigation and innovation.
              </p>
              <div className="pt-4">
                <Button as={Link} href="/research" variant="primary">
                  Explore Our Research
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lab Sections Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Explore Our Lab</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our specialized research areas and facilities
            </p>
          </div>
          
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
            {/* Instruments */}
            <div className="group bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200/60 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500 shadow-sm border border-blue-100">
                  <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Instruments</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Advanced equipment for water quality analysis, treatment processes, and material characterization.
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-slate-100">
                <Link href="/lab/instruments" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group/link">
                  View Equipment List
                  <ChevronRight className="w-5 h-5 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Research Areas */}
            <div className="group bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200/60 hover:shadow-2xl hover:-translate-y-2 hover:border-cyan-200 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="mb-6">
                <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors duration-500 shadow-sm border border-cyan-100">
                  <svg className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">Research Areas</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Specialized zones for membrane technology, CFD modeling, water treatment processes, and more.
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-slate-100">
                <Link href="/research" className="inline-flex items-center text-cyan-600 font-bold hover:text-cyan-700 transition-colors group/link">
                  Explore Research
                  <ChevronRight className="w-5 h-5 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Safety
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Safety Protocols</h3>
                <p className="text-gray-600">
                  Our lab maintains strict safety standards with proper PPE, emergency equipment, and training.
                </p>
              </div>
              <div className="mt-auto">
                <Button as={Link} href="/lab/safety" variant="outline" className="w-full">
                  Safety Guidelines
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Visit Our Lab</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in the WRDM Department at IIT Roorkee
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349.5364553710346!2d77.89808!3d29.863372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUxJzQ5LjAiTiA3N8KwNTMnNTMuOCJF!5e0!3m2!1sen!2sin!4v1716474800000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lab Location"
                className="border-0"
              ></iframe>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
                <p className="text-gray-700">
                  <strong>Address:</strong> WRDM Department, IIT Roorkee, Roorkee - 247667, Uttarakhand, India
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> lab@wrdm.iitr.ac.in
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +91-1332-285xxx
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Visiting Hours</h3>
                <p className="text-gray-700">
                  Monday to Friday: 9:00 AM - 5:00 PM
                </p>
                <p className="text-gray-700">
                  Saturday: 10:00 AM - 2:00 PM
                </p>
                <p className="text-gray-700">
                  Closed on Sundays and Institute holidays
                </p>
              </div>
              
              <div className="pt-4">
                <Button as={Link} href="/contact" variant="primary">
                  Schedule a Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}