import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  // Track if component is mounted to avoid SSR hydration issues
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    // Set initial scroll state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close all menus
  const closeAllMenus = useCallback(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  // Handle dropdown with delay to prevent accidental closes
  const handleMouseEnter = useCallback((menuName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(menuName);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => {
      const newState = !prev;
      if (newState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return newState;
    });
  }, []);

  // Clean up body overflow style on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Navigation data
  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Group Members',
     path: '#',
      submenu: [
        { name: 'PI', path: '/PI' },
        { name: 'PostDoc', path: '/people/postdoc' },
        { name: 'PhD Scholars', path: '/people/phd' },
        { name: 'Masters Students', path: '/people/masters' },
        { name: 'Project Students', path: '/people/project_student' },
        { name: 'Interns', path: '/people/interns' },
      ]
    },
    { name: 'Past Members', path: '/people/alumni' },
    {
      name: 'Research',
      path: '#',
      submenu: [
        { name: 'Research Papers', path: '/research?tab=papers' },
        { name: 'Books', path: '/research?tab=books' },
        { name: 'Patents', path: '/research?tab=patents' },
        { name: 'Invited Talks', path: '/research?tab=talks' },
      ]
    },
    {
      name: 'Events',
      path: '/events',
    },
    { name: 'Awards', path: '/awards' },
    {
      name: 'Our Lab',
      path: '#',
      submenu: [
        { name: 'About Lab', path: '/lab' },
        { name: 'Instruments & Facilities ', path: '/lab/instruments' },
      { name: 'Openings ', path: '/lab/opening' },
      ]
    },
    { name: 'Teaching', path: '/teaching' },
    {name: 'More',
    path: '#',
    submenu: [
    { name: 'Collaborations', path: '/collaborations'},
    { name: 'News & Updates', path: '/updates'},
    { name: 'Gallery(optional)', path: '/gallery'},
    { name: 'Contact Us', path: '/contact' }
    ]
}];

  // Check if current route matches a link (including submenu items)
const isActiveLink = (path, submenu = []) => {
  // Check if current path matches directly
  if (path.includes('?')) {
    const [basePath, query] = path.split('?');
    if (router.pathname === basePath && router.asPath.includes(query)) {
      return true;
    }
  } else if (router.pathname === path) {
    return true;
  }

  // Check if any submenu item matches current route
  return submenu?.some(sublink => {
    if (sublink.path.includes('?')) {
      const [basePath, query] = sublink.path.split('?');
      return router.pathname === basePath && router.asPath.includes(query);
    }
    return router.pathname === sublink.path;
  });
};
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-3'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md"
            onClick={closeAllMenus}
            aria-label="Go to homepage"
          >
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
              {isMounted && (
                <Image
  src="/images/logos/wrdm_logo.png"
  alt="WRDM Logo"
  width={200}
  height={200}
  className="object-cover"
  priority
/>

              )}
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">WTM Research Group</span>
              <span className="block text-xs text-gray-500 group-hover:text-blue-500 transition-colors duration-300">Indian Institute of Technology Roorkee</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex space-x-1 items-center" 
            aria-label="Desktop navigation"
          >
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
       <Link
  href={link.path}
  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md flex items-center space-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
    isActiveLink(link.path, link.submenu)
      ? 'text-blue-600'
      : 'text-gray-700 hover:text-blue-600'
  }`}
  aria-haspopup={link.submenu ? 'true' : undefined}
  aria-expanded={link.submenu && openDropdown === link.name ? 'true' : 'false'}
>
  <span className="relative inline-flex items-center gap-1">
    <span className="relative">
      {link.name}
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 ${
        isActiveLink(link.path, link.submenu)
          ? 'scale-x-100' 
          : 'scale-x-0 group-hover:scale-x-100'
      }`} style={{ transformOrigin: 'center' }}></span>
    </span>
    {link.submenu && (
      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
        openDropdown === link.name ? 'rotate-0' : ''
      } ${
        isActiveLink(link.path, link.submenu) ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-600'
      }`} />
    )}
  </span>
</Link>
                
                {link.submenu && (
                  <div 
                    className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-1 w-56 bg-white rounded-lg shadow-xl z-50 transition-all duration-300 origin-top ${
                      openDropdown === link.name 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-1 border border-gray-100 rounded-lg">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.path}
                          href={sublink.path}
                          className={`block px-4 py-2 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:bg-blue-50 ${
                            isActiveLink(sublink.path)
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                          }`}
                          onClick={closeAllMenus}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={toggleButtonRef}
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6 transform transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 transform transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          ref={mobileMenuRef}
          id="mobile-menu"
          className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-[80vh] py-3 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col space-y-1 pt-2">
            {navLinks.map((link) => (
              <div key={link.name} className="w-full">
                <Link
  href={link.path}
  onClick={closeAllMenus}
  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
    isActiveLink(link.path, link.submenu)
      ? 'bg-blue-50 text-blue-600'
      : 'text-gray-700 hover:bg-gray-100'
  }`}
>
  {link.name}
</Link>
                {link.submenu && (
                  <div className="pl-6 mt-1 space-y-1">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.path}
                        href={sublink.path}
                        onClick={closeAllMenus}
                        className={`block px-4 py-2 rounded-md text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                          isActiveLink(sublink.path)
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
