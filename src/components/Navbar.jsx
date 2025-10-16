import { Phone, Mail, Clock, Lock, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import Anugrah from "../pages/Navbar/Anugrah";

export default function Navbar() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState({ menu: false, open: {} });
  const [desktop, setDesktop] = useState({ main: null, nested: null });
  const hoverTimeoutRef = useRef(null);
  const clickTimeoutRef = useRef(null);
  const isSafariRef = useRef(false);
  const isMacRef = useRef(false);


  const toggle = (key) =>
    setMobile((p) => ({ ...p, open: { ...p.open, [key]: !p.open[key] } }));

  // Detect Safari and Mac for compatibility fixes
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    isSafariRef.current = /safari/.test(userAgent) && !/chrome/.test(userAgent);
    isMacRef.current = /macintosh|mac os x/.test(userAgent);
  }, []);

  // Safari-compatible hover handling
  const handleMouseEnter = useCallback((itemName) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    
    // Immediate response for Safari
    if (isSafariRef.current) {
      setDesktop((p) => ({ ...p, nested: itemName }));
    } else {
      // Delayed response for other browsers
      setTimeout(() => {
        setDesktop((p) => ({ ...p, nested: itemName }));
      }, 10);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Longer delay for Safari to prevent flickering
    const delay = isSafariRef.current ? 300 : 150;
    hoverTimeoutRef.current = setTimeout(() => {
      setDesktop((p) => ({ ...p, nested: null }));
    }, delay);
  }, []);

  // Safari-compatible click handling
  const handleItemClick = useCallback(async (item) => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    
    // Prevent double-clicks on Safari
    if (isSafariRef.current) {
      clickTimeoutRef.current = setTimeout(() => {
        clickTimeoutRef.current = null;
      }, 500);
    }
    
    if (item.type === "download") {
      try {
        const response = await fetch(item.href);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = item.name.replace(/\s+/g, "_") + ".pdf";
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error("Download failed:", error);
        window.open(item.href, "_blank");
      }
    } else if (item.href.startsWith("http")) {
      window.open(item.href, "_blank");
    } else {
      navigate(item.href);
    }
    
    // Close dropdown after click
    setDesktop({ main: null, nested: null });
    // Close mobile menu after click
    setMobile({ menu: false, open: {} });
  }, [navigate]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const menuData = {
    projects: [
      {
        name: "Anugrah homes",
        href: "/projects/anugrahhomes",
        sub: [
          { name: "Visit Website", href: "https://anugrahhomes.com/" },
          { name: "Key Plan ", href: "/projects/anugrahhomes/keyplan" },
          { name: "Layout ", href: "/projects/anugrahhomes/layout" },
          { name: "Price List", href: "/projects/anugrahhomes/pricelist" },
          { name: "Download Brochure ", href: "https://drive.google.com/file/d/15psZuZVoH9PxFbfl7k1_J_vkET6h5AAs/preview", type: "download" },


          // { name: "Development Updates", href: "/development" },
        ],
      },
      {
        name: "Skyline Aero homes",
        href: "/projects/skyline-aero-homes",
        sub: [
          { name: "Visit Website", href: "https://skylineaerohomes.com/" },
          { name: "Key Plan ", href: "/projects/skyline/keyplan" },
          { name: "Layout ", href: "/projects/skyline/layout" },
          { name: "Price List", href: "/projects/skyline/pricelist" },
          { name: "Download Brochure ", href: "https://ik.imagekit.io/16pq4do9s/SK+Brochure+(1)-compressed.pdf?updatedAt=1759728617770", type: "download" },
          // { name: "Development Updates", href: "/development-sky" },
        ],
      },
      {
        name: "Brij Vrinda",
        href: "/projects/brij-vrinda",
        sub: [
          { name: "Visit Website", href: "https://brijvrindafarms.com/" },
          { name: "Key Plan ", href: "/projects/brij_vrinda/KeyPlan" },
          { name: "Layout ", href: "/projects/brij_vrinda/layout" },
          { name: "Price List", href: "/projects/brij_vrinda/pricelist" },
          { name: "Download Brochure ", href: "https://ik.imagekit.io/16pq4do9s/BV-N-links%20(1).pdf?updatedAt=1759729669991", type: "download" },
          // { name: "Development Updates", href: "/development" },
        ],
      },
      {
        name: "The Club Farm",
        href: "/projects/the-club-farm",
        sub: [
          { name: "Visit Website", href: "/comming-soon-CF" },
          { name: "Key Plan", href: "/projects/the-club-farm/keyplan" },
          { name: "Layout", href: "/projects/the-club-farm/layout" },
          { name: "Price List", href: "/projects/the-club-farm/pricelist" },
          { name: "Download Brochure ", href: "https://ik.imagekit.io/16pq4do9s/A4-TCF.pdf?updatedAt=1759729427107", type: "download" },
          // { name: "Development Updates", href: "/development" },
        ],
      },
      {
        name: "Upcoming Projects",
        href: "#",
        sub: [

          { name: "Leafshade", href: "/projects/upcoming-projects/leafshade" },
          // { name: "Amrit Garh", href: "/amrit-grah" },
          // { name: "Development Updates", href: "/development" },
        ],
      },
    ],
    developments: [
      { name: "Anugrah homes", href: "/developments/anugrahhomes" },
      { name: "Skyline Aero homes", href: "/developments/skyline-aero-homes" },
      { name: "Brij Vrinda", href: "/developments/brij_vrinda" },
      { name: "The Club Farm", href: "/developments/the_club_farm" },
      // { name: "Personal Rapid Transit - pod Taxi", href: "/personal-rapid-transit" },
    ],
    updates: [
      { name: "Blogs", href: "/updates/blogs" },
      { name: "Noida International Airport", href: "/updates/noida-international-airport" },
      { name: "International Film City", href: "/updates/international-film-city" },
      { name: "Medical Device Park", href: "/updates/medical-device-Park" },
      { name: "Logistics Park", href: "/updates/logistics-park" },
      { name: "Personal Rapid Transit - pod Taxi", href: "/updates/personal-rapid-transit" },


    ],
  };

  const navConfig = [
    { label: "Home", type: "link", url: "/" },
    { label: "About Us", type: "link", url: "/about-us" },
    { label: "Projects", type: "dropdown", key: "projects", width: "w-64" },
    { label: "Updates", type: "dropdown", key: "updates", width: "w-64" },
    { label: "Developments", type: "dropdown", key: "developments", width: "w-56" },
    { label: "Contact Us", type: "link", url: "/contact-us" },
  ];

  const Dropdown = ({ items, active, width }) => (
    <div
      className={`absolute top-full left-0 ${width} bg-white shadow-lg border-t-3 border-[#20ae9b] transition-all duration-300 z-50 safari-dropdown ${active
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-2"
        }`}
    >
      <div className="py-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative safari-dropdown-item"
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => {
              // Handle touch events for mobile Safari
              if (isSafariRef.current) {
                handleMouseEnter(item.name);
              }
            }}
          >
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Allow navigation to main item even if it has submenu
                handleItemClick(item);
              }}
              onTouchEnd={(e) => {
                // Handle touch events for mobile Safari
                if (isSafariRef.current) {
                  e.preventDefault();
                  handleItemClick(item);
                }
              }}
              className={`navbar-dropdown dropdown-item flex items-center justify-between px-6 py-3 transition-colors duration-200 cursor-pointer safari-clickable ${desktop.nested === item.name
                  ? " text-white"
                  : item.sub 
                    ? "text-gray-700"
                    : "text-gray-700 hover:bg-[#20ae9b] hover:text-white"
                }`}
            >
              <span>{item.name}</span>
              {item.sub && <ChevronRight className="w-4 h-4" />}
            </div>
            {item.sub && (
              <div
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
                onTouchStart={() => {
                  if (isSafariRef.current) {
                    handleMouseEnter(item.name);
                  }
                }}
                className={`absolute left-full top-0 w-56 bg-white shadow-lg border-l-3 border-[#20ae9b] transition-all duration-300 safari-submenu ${desktop.nested === item.name
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
                  }`}
              >
                <div className="py-2">
                  {item.sub.map((s, j) => (
                    <div
                      key={j}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleItemClick(s);
                      }}
                      onTouchEnd={(e) => {
                        if (isSafariRef.current) {
                          e.preventDefault();
                          handleItemClick(s);
                        }
                      }}
                      className="navbar-dropdown dropdown-item block cursor-pointer px-6 py-3 text-gray-700 hover:bg-[#20ae9b] hover:text-white transition-colors duration-200 safari-clickable"
                    >
                      {s.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const MobileMenu = ({ title, items, stateKey }) => (
    <div className="py-1">
      <button
        onClick={() => toggle(stateKey)}
        className="w-full flex items-center justify-between text-white font-bold py-3 px-3 rounded hover:bg-[#1a9a88] transition-colors duration-200"
      >

        <span>{title}

        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${mobile.open[stateKey] ? "rotate-180" : ""
            }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${mobile.open[stateKey]
          ? "max-h-[500px] opacity-100"
          : "max-h-0 opacity-0"
          }`}
      >
        <div className="ml-4 space-y-1 mt-2">
          {items.map((item, i) => (
            <div key={i}>
              {item.sub ? (
                <div className="py-1">

                  <button
                    onClick={() => toggle(item.name)}
                    className="w-full flex items-center justify-between text-white hover:bg-[#1a9a88] transition-colors duration-200 py-2 px-3 rounded text-sm"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${mobile.open[item.name] ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${mobile.open[item.name]
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="ml-4 space-y-1 mt-1">
                      {item.sub.map((s, j) => (
                        <div
                          key={j}
                          onClick={() => handleItemClick(s)}
                          className="block text-white hover:bg-[#1a9a88] transition-colors duration-200 py-2 px-3 rounded text-xs cursor-pointer"
                        >
                          {s.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => handleItemClick(item)}
                  className="block text-white hover:bg-[#272b24] transition-colors duration-200 py-2 px-3 rounded text-sm cursor-pointer"
                >
                  {item.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header className="relative w-full">
      <nav className="bg-white relative">
        <div className="flex items-stretch min-h-[90px]">
          {/* Logo */}
          <Link to="/">
            <div className="flex justify-center h-full items-center px-6 lg:px-18">
              <span className="text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">
                <img
                  src="/Maxpine_logo_2.png"
                  className="md:max-w-24 max-w-18"
                  alt="Maxpine logo"
                />
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1">
            <div className="bg-[#20ae9b] flex items-stretch justify-center flex-1 px-8">
              <div className="flex items-stretch space-x-4 text-white font-medium">
                {navConfig.map((item, i) =>
                  item.type === "link" ? (
                    <Link
                      key={i}
                      to={item.url}
                      className="flex items-center hover:bg-[#20ae9b] px-4 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div
                      key={i}
                      className="relative group flex items-stretch safari-nav-item"
                      onMouseEnter={() =>
                        setDesktop({ main: item.key, nested: null })
                      }
                      onMouseLeave={() => setDesktop({ main: null, nested: null })}
                      onTouchStart={() => {
                        if (isSafariRef.current) {
                          setDesktop({ main: item.key, nested: null });
                        }
                      }}
                    >
                      <div className="flex items-center gap-1 hover:bg-[#20ae9b] px-4 transition-colors duration-200 cursor-pointer safari-clickable">
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                      </div>
                      <Dropdown
                        items={menuData[item.key]}
                        active={desktop.main === item.key}
                        width={item.width}
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Desktop Site Visit Button */}
            <div className="bg-white flex items-center px-10 text-black font-bold cursor-pointer hover:bg-white transition-colors duration-200 text-xl">
              <Link to="/book-site-visit">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                 Book a Site Visit
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center px-4 ml-auto">
            <button
              onClick={() => setMobile((p) => ({ ...p, menu: !p.menu }))}
              className="text-[#20ae9b] hover:text-[#20ae9b] transition-colors duration-200"
            >
              {mobile.menu ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-[#20ae9b] transition-all duration-300 ${mobile.menu ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="px-4 py-6 space-y-2">
            {navConfig
              .filter((item) => item.type === "link" || item.type === "dropdown")
              .map((item, i) =>
                item.type === "link" ? (
                  <a
                    key={i}
                    href={item.url}
                    className="block text-white hover:bg-[#1a9a88] transition-colors duration-200 font-medium py-3 px-3 rounded"
                  >
                    {item.label}
                  </a>
                ) : (
                  <MobileMenu
                    key={i}
                    title={item.label}
                    items={menuData[item.key]}
                    stateKey={item.key}
                  />
                )
              )}

            {/* Mobile Site Visit */}
            <Link to="/site-visit">
              <div className="bg-[#272b24] px-4 py-3 flex items-center justify-center gap-2 text-white font-semibold cursor-pointer hover:bg-black transition-colors duration-200 rounded mt-4">
                <Lock className="w-4 h-4" />

                Site Visit
              </div>
            </Link>
          </div>
        </div>
      </nav>
      
      <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Safari and Cross-Browser Compatibility */
        .safari-dropdown {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          will-change: opacity, transform;
        }
        
        .safari-dropdown-item {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        .safari-clickable {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          cursor: pointer;
          position: relative;
        }
        
        .safari-clickable:active {
          -webkit-transform: scale(0.98);
          transform: scale(0.98);
        }
        
        .safari-submenu {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .safari-nav-item {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* MacBook trackpad compatibility improvements */
        .navbar-dropdown {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        .navbar-dropdown:hover {
          cursor: pointer;
        }
        
        /* Prevent hover issues on touch devices */
        @media (hover: none) {
          .navbar-dropdown:hover {
            background-color: inherit;
          }
          
          .safari-clickable:hover {
            background-color: inherit;
          }
        }
        
        /* Safari-specific hover fixes */
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          .safari-dropdown-item:hover {
            background-color: #20ae9b !important;
            color: white !important;
          }
          
          // .safari-clickable:hover {
          //   background-color: #20ae9b !important;
          // }
        }
        
        /* Better focus states for accessibility */
        .navbar-dropdown:focus {
          outline: 2px solid #20ae9b;
          outline-offset: 2px;
        }
        
        .safari-clickable:focus {
          outline: 2px solid #20ae9b;
          outline-offset: 2px;
        }
        
        /* Smooth transitions for better UX */
        .dropdown-item {
          transition: all 0.2s ease-in-out;
          -webkit-transition: all 0.2s ease-in-out;
        }
        
        .dropdown-item:hover {
          transform: translateX(2px);
          -webkit-transform: translateX(2px);
        }
        
        /* Safari-specific animation fixes */
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          .safari-dropdown {
            transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
            -webkit-transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
          }
          
          .safari-submenu {
            transition: opacity 0.3s ease, visibility 0.3s ease;
            -webkit-transition: opacity 0.3s ease, visibility 0.3s ease;
          }
        }
        
        /* Mobile Safari fixes */
        @media screen and (max-width: 768px) {
          .safari-clickable {
            -webkit-tap-highlight-color: rgba(32, 174, 155, 0.3);
          }
          
          .safari-dropdown-item {
            min-height: 44px;
            display: flex;
            align-items: center;
          }
        }
        
        /* High DPI display fixes */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .safari-dropdown {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }
      `}</style>
    </header>
  );
}
