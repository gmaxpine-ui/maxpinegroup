import { Phone, Mail, Clock, Lock, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Anugrah from "../pages/Navbar/Anugrah";

export default function Navbar() {
  const [mobile, setMobile] = useState({ menu: false, open: {} });
  const [desktop, setDesktop] = useState({ main: null, nested: null });


  const toggle = (key) =>
    setMobile((p) => ({ ...p, open: { ...p.open, [key]: !p.open[key] } }));

  const menuData = {
    projects: [
      {
        name: "Anugrah homes",
        href: "/projects/anugrahhomes",
        sub: [
          { name: "Visit Website", href: "https://anugrahhomes.com/" },
          { name: "Key Plan ", href: "/projects/anugrahhomes/keypaln" },
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
      { name: "The club Farm", href: "/developments/the_club_farm" },
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
      className={`absolute top-full left-0 ${width} bg-white shadow-lg border-t-3 border-[#20ae9b] transition-all duration-300 z-50 ${active
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-2"
        }`}
    >
      <div className="py-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => {
              if (item.sub) {
                setDesktop((p) => ({ ...p, nested: item.name, hoverCard: null }));
              } else {
                setDesktop((p) => ({ ...p, nested: null, hoverCard: null }));
              }
            }}
            onMouseLeave={(e) => {
              const related = e.relatedTarget;
              // check if user is still inside the nested submenu
              if (!related || !e.currentTarget.contains(related)) {
                setDesktop((p) => ({ ...p, nested: null, hoverCard: null }));
              }
            }}

          >
            <a
              href={item.href}
              className={`flex items-center justify-between px-6 py-3 transition-colors duration-200 ${desktop.nested === item.name
                  ? "bg-[#20ae9b] text-white"
                  : "text-gray-700 hover:bg-[#20ae9b] hover:text-white"
                }`}
            >

              <span>{item.name}</span>
              {item.sub && <ChevronRight className="w-4 h-4" />}
            </a>
            {item.sub && (
              <div
                onMouseEnter={() =>
                  setDesktop((p) => ({ ...p, nested: item.name }))
                }
                onMouseLeave={(e) => {
                  const related = e.relatedTarget;
                  if (!related || !e.currentTarget.contains(related)) {
                    setDesktop((p) => ({ ...p, nested: null }));
                  }
                }}
                className={`absolute left-full top-0 w-56 bg-white shadow-lg border-l-3 border-[#20ae9b] transition-all duration-300 ${desktop.nested === item.name
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
                  }`}
              >

                <div className="py-2">
                  {item.sub.map((s, j) => (
                    <div
                      key={j}
                      onClick={async () => {
                        if (s.type === "download") {
                          try {
                            const response = await fetch(s.href);
                            const blob = await response.blob();
                            const blobUrl = window.URL.createObjectURL(blob);
                            const link = document.createElement("a");
                            link.href = blobUrl;
                            link.download = s.name.replace(/\s+/g, "_") + ".pdf";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            window.URL.revokeObjectURL(blobUrl);
                          } catch (error) {
                            console.error("Download failed:", error);
                            window.open(s.href, "_blank");
                          }
                        } else {
                          window.location.href = s.href;
                        }
                      }}


                      className="block cursor-pointer px-6 py-3 text-gray-700 hover:bg-[#20ae9b] hover:text-white transition-colors duration-200"
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
        className="w-full flex items-center justify-between text-white font-bold py-3 px-3 rounded hover:bg-[#272b24] transition-colors duration-200"
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
                    className="w-full flex items-center justify-between text-white hover:bg-[#272b24] transition-colors duration-200 py-2 px-3 rounded text-sm"
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
                        <a
                          key={j}
                          href={s.href}
                          className="block text-white hover:bg-[#272b24] transition-colors duration-200 py-2 px-3 rounded text-xs"
                        >
                          {s.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block text-white hover:bg-[#272b24] transition-colors duration-200 py-2 px-3 rounded text-sm"
                >
                  {item.name}
                </a>
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
                    <a
                      key={i}
                      href={item.url}
                      className="flex items-center hover:bg-[#27746a] px-4 transition-colors duration-200 "
                    >
                      {item.label}
                    </a>
                  ) : (
                    <div
                      key={i}
                      className="relative group flex items-stretch"
                      onMouseEnter={() =>
                        setDesktop({ main: item.key, nested: null })
                      }
                      onMouseLeave={() => setDesktop({ main: null, nested: null })}
                    >
                      <a
                        href={item.url}
                        className="flex items-center gap-1 hover:bg-[#27746a] px-4 transition-colors duration-200
                        
                        "

                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                      </a>
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
              className="text-[#20ae9b] hover:text-[#195d54] transition-colors duration-200"
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
                    className="block text-white hover:bg-[#272b24] transition-colors duration-200 font-medium py-3 px-3 rounded"
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
    </header>
  );
}
