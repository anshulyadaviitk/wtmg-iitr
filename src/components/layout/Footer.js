// src/components/layout/Footer.js
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Department Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-3">
                <Image
                  src="/images/logos/wrdm_logo_white.png"
                  alt="IIT Roorkee Logo"
                  fill
                  className="w-full h-full object-contain bg-white/10 backdrop-blur-sm rounded-full"
                />
              </div>
              <div>
                <h6 className="text-xl font-bold !text-white">Department of Water Resources<br />Development & Management</h6>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Indian Institute of Technology Roorkee<br />
              Roorkee, Uttarakhand 247667<br />
              India
            </p>
            <p className="text-gray-300" suppressHydrationWarning>
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold !text-white mb-4 border-b pb-2 border-gray-600">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/research" className="text-gray-300 hover:text-white">Research Areas</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link href="https://www.iitr.ac.in" target="_blank" className="text-gray-300 hover:text-white">IIT Roorkee</Link></li>
              <li><a href="https://iitr.ac.in/Departments/Water%20Resources%20Development%20and%20Management%20Department/Home.html" target="_blank" className="text-gray-300 hover:text-white">WRDM Website</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold !text-white mb-4 border-b pb-2 border-gray-600">Contact</h4>
            <address className="not-italic">
              <p className="text-gray-300 mb-2">
                <strong>Dr. Anshul Yadav</strong><br />
                Assistant Professor
              </p>
              <p className="text-gray-300 mb-2">
                ✉ anshul.yadav@wr.iitr.ac.in
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="https://scholar.google.com/citations?user=gD5XxtYAAAAJ&hl=en" aria-label="Google Scholar">
                  <svg className="w-6 h-6 fill-current text-gray-300 hover:text-white" viewBox="0 0 24 24">
                    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.6 3.5L12 6l7.4 7L24 9.5z"/>
                  </svg>
                </a>
                <a href="https://www.researchgate.net/profile/Anshul-Yadav-14" aria-label="ResearchGate">
                  <svg className="w-6 h-6 fill-current text-gray-300 hover:text-white" viewBox="0 0 24 24">
                    <path d="M5.5 3.5v17l6.5-3.5 6.5 3.5v-17L12 0zM12 9.2l3.5 2.1-3.5 2.1-3.5-2.1z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/anshul-yadav-2b29ab305/" aria-label="LinkedIn">
                  <svg className="w-6 h-6 fill-current text-gray-300 hover:text-white" viewBox="0 0 24 24">
                    <path d="M20.4 3H3.6A1.6 1.6 0 0 0 2 4.6v15.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V4.6A1.6 1.6 0 0 0 20.4 3zM8 18H5V10h3zm-1.5-9.3A1.8 1.8 0 0 1 4.7 7a1.8 1.8 0 0 1 1.8-1.8 1.8 1.8 0 0 1 0 3.6zM19 18h-3v-4.2c0-1-.4-1.8-1.5-1.8a1.7 1.7 0 0 0-1.5 1.1V18h-3V10h3v1.2a3 3 0 0 1 2.7-1.5c2 0 3.3 1.3 3.3 4z"/>
                  </svg>
                </a>
              </div>
            </address>
          </div>
        </div>

     {/* Bottom Section */}
<div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
  <p>
    © Copyright Protected by Dr. Anshul Yadav | Visitor Count:{" "}
    <a href="https://www.hitwebcounter.com" target="_blank" rel="noopener noreferrer">
      <img
        src="https://hitwebcounter.com/counter/counter.php?page=20941231&style=0008&nbdigits=5&type=page&initCount=0"
        title="Counter Widget"
        alt="Visit counter For Websites"
        style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '5px' }}
      />
    </a>
  </p>
</div>

      </div>
    </footer>
  );
}
