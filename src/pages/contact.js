import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Water Resources Research Group</title>
        <meta
          name="description"
          content="Contact Water Resources Research Group, IIT Roorkee."
        />
      </Head>

      <Layout>

        {/* ================= HERO SECTION ================= */}

        <section className="relative overflow-hidden bg-white">

          {/* Background Image */}

          <div className="absolute inset-0">

            <img
              src="/images/contact-water.png"
              alt="Water Resources Research"
              className="absolute right-0 top-0 h-full w-full lg:w-1/2 object-cover"
            />

            {/* Fade Effect */}

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:w-3/4"></div>

          </div>

          <div className="relative container mx-auto px-6 lg:px-8">

            <div className="min-h-[620px] flex items-center">

              <div className="max-w-2xl py-24">

              

                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">

                  Let&apos;s Build the Future of

                  <span className="block text-cyan-700 mt-2">
                    Water Research
                  </span>

                </h1>

                <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">

                  We welcome collaborations, research discussions,
                  student inquiries, academic partnerships, and
                  laboratory visits.

                  Feel free to reach out to our team and we&apos;ll
                  respond as soon as possible.

                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  <a
                    href="mailto:anshul.yadav@wr.iitr.ac.in"
                    className="inline-flex items-center gap-2 bg-cyan-700 hover:bg-cyan-800 transition text-white px-7 py-4 rounded-xl font-semibold shadow-lg"
                  >
                    <Mail size={20} />
                    Email Us
                  </a>

                  <Link
                    href="#contact-details"
                    className="inline-flex items-center gap-2 border border-gray-300 hover:border-cyan-700 hover:text-cyan-700 transition px-7 py-4 rounded-xl font-semibold"
                  >
                    Contact Details

                    <ArrowRight size={18} />

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= CONTACT SECTION START ================= */}

        <section
          id="contact-details"
          className="py-24 bg-slate-50"
        >

          <div className="container mx-auto px-6 lg:px-8">

            {/* ERROR FIXED HERE: Removed early closing tag from the grid div */}
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              
              {/* ================= LEFT SIDE : CONTACT DETAILS ================= */}

              <div>

                <span className="text-cyan-700 font-semibold tracking-wider uppercase">
                  Contact Information
                </span>

                <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-10">
                  We&apos;d love to hear from you
                </h2>

                {/* Email */}

                <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 mb-6">

                  <div className="flex items-start gap-5">

                    <div className="h-14 w-14 rounded-xl bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-700 transition">

                      <Mail className="w-7 h-7 text-cyan-700 group-hover:text-white transition" />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold text-gray-900">
                        Email
                      </h3>

                      <p className="text-gray-600 mt-2">
                        For collaborations, research opportunities,
                        project discussions and student inquiries.
                      </p>

                      <a
                        href="mailto:anshul.yadav@wr.iitr.ac.in"
                        className="inline-block mt-4 text-cyan-700 font-semibold hover:underline break-all"
                      >
                        anshul.yadav@wr.iitr.ac.in
                      </a>

                    </div>

                  </div>

                </div>

                {/* Phone */}

                <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 mb-6">

                  <div className="flex items-start gap-5">

                    <div className="h-14 w-14 rounded-xl bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-700 transition">

                      <Phone className="w-7 h-7 text-cyan-700 group-hover:text-white transition" />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold text-gray-900">
                        Phone
                      </h3>

                      <p className="text-gray-600 mt-2">
                        Mobile
                      </p>

                      <a
                        href="tel:+919473583417"
                        className="block mt-1 text-cyan-700 font-semibold"
                      >
                        +91 9473583417
                      </a>

                      <p className="text-gray-600 mt-5">
                        Office
                      </p>

                      <a
                        href="tel:+911332285617"
                        className="block mt-1 text-cyan-700 font-semibold"
                      >
                        +91 1332 285617
                      </a>

                    </div>

                  </div>

                </div>

                {/* Office */}

                <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6">

                  <div className="flex items-start gap-5">

                    <div className="h-14 w-14 rounded-xl bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-700 transition">

                      <MapPin className="w-7 h-7 text-cyan-700 group-hover:text-white transition" />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold text-gray-900">
                        Office Address
                      </h3>

                      <p className="text-gray-600 mt-3 leading-8">

                        First Floor<br />

                        Department of Water Resources Development &
                        Management<br />

                        Indian Institute of Technology Roorkee<br />

                        Uttarakhand - 247667<br />

                        India

                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* ================= RIGHT SIDE : GOOGLE MAP ================= */}

              <div className="sticky top-28">

                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">

                  <div className="p-6 border-b border-gray-100">

                    <h3 className="text-2xl font-bold text-gray-900">
                      Visit Our Office
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Find us on the IIT Roorkee campus using Google Maps.
                    </p>

                  </div>

                  <div className="h-[450px]">

                    <iframe
                      title="IIT Roorkee Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344.3743663564924!2d77.89808!3d29.863372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUxJzQ5LjAiTiA3N8KwNTMnNTMuOCJF!5e0!3m2!1sen!2sin!4v1629874599480!5m2!1sen!2sin"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full border-0"
                    />

                  </div>

                  <div className="p-6">

                    <a
                      href="https://maps.google.com/?q=Department+of+Water+Resources+Development+and+Management+IIT+Roorkee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-cyan-700 hover:text-cyan-900 transition"
                    >
                      Go to Google Maps

                      <ArrowRight size={18} />

                    </a>

                  </div>

                </div>

              </div>

            </div> {/* Correctly closing grid wrapper here */}
          </div>
        </section>

      </Layout>
    </>
  );
}