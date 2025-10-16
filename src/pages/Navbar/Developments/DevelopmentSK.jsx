import { useState } from "react";
import { Home, ChevronDown, Calendar, Camera, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../../../assets/skyline/8.jpeg"
import img2 from "../../../assets/skyline/6.jpeg"
import img3 from "../../../assets/skyline/WhatsApp Image 2025-10-03 at 11.55.55 AM (1).jpeg"
import img4 from "../../../assets/skyline/WhatsApp Image 2025-10-03 at 11.55.55 AM.jpeg"
import img5 from "../../../assets/skyline/7.jpeg"
// import vid1 from "https://ik.imagekit.io/16pq4do9s/assets/skyline/1.mp4?updatedAt=1759830429078"

export default function DevelopmentSK() {
  const [openSection, setOpenSection] = useState(null);
  const [popupMedia, setPopupMedia] = useState(null); // 🔹 Store clicked image/video
const vid1 = "https://ik.imagekit.io/16pq4do9s/assets/skyline/1.mp4?updatedAt=1759830429078"
  const updates = [
    {
      id: 1,
      title: "Project Development Images - (June 2025)",
      date: "June 2025",
      images: [img1],
      description: "Latest construction progress showcasing structural completion and finishing work."
    },
    {
      id: 2,
      title: "Project Development Images - (Apr-2025)",
      date: "April 2025",
      images: [img2],
      description: "Mid-phase development showing interior work and facade completion."
    },
    {
      id: 3,
      title: "Project Development Images - (Mar-2025)",
      date: "March 2025",
      images: [img3, img4],
      description: "Foundation and structural framework completion milestones."
    },
    {
      id: 4,
      title: "Project Development Images - (Jan-2025)",
      date: "January 2025",
      images: [img5],
      description: "Early construction phase with foundation laying and ground work."
    },
    {
      id: 5,
      title: "Project Development Video",
      date: "Feb 2025",
      video: vid1, // 🔹 Example video
      description: "Site development progress in motion."
    }
  ];

  const recentPosts = [
    { title: "Construction in Full Swing: Crafting a Modern Community", link: "/developments/skyline/media" },
    { title: "The Future of Investment Begins Here", link: "/developments/skyline/media" },
    { title: "Green Living, Elevated Lifestyle", link: "/developments/skyline/media" },
    { title: "From community gatherings to milestone achievements, Skyline Aero Homes", link: "/developments/skyline/media" },
    { title: "A Festive Affair: Diwali at Skyline Aero Homes", link: "/developments/skyline/media" }
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Popup Modal */}
      {popupMedia && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-5xl w-full p-4">
            {/* Close Button */}
            <button
              onClick={() => setPopupMedia(null)}
              className="absolute top-4 -right-4 text-white text-3xl hover:text-gray-300"
            >
              <X size={30} />
            </button>

            {/* Show Image or Video */}
            {popupMedia.type === "image" ? (
              <img
                src={popupMedia.src}
                alt="Popup"
                loading="lazy"
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={popupMedia.src}
                controls
                autoPlay
                className="w-full max-h-[90vh] rounded-lg"
              />
            )}
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-24 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Home className="w-4 h-4 mr-2" />
            <a href="/" className="hover:text-[#20ae9b] transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="hover:text-[#20ae9b] transition-colors">Developments</span>
            <span className="mx-2">/</span>
             <a href="#" className="text-gray-900 font-medium">SkyLine Aero Homes</a>
            
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-[#20ae9b] to-[#0e8777] text-white py-16">
        <div className="container mx-auto px-4 lg:px-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SkyLine Aero Homes</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Track our project progress with regular photo updates showcasing construction milestones and developments.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Updates Section */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {updates.map((update) => (
                <div
                  key={update.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleSection(update.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-[#20ae9b]/10 p-3 rounded-lg">
                        <Camera className="w-6 h-6 text-[#20ae9b]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{update.title}</h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{update.date}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-[#20ae9b] transition-transform duration-300 ${
                        openSection === update.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      openSection === update.id
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="px-6 pb-6 border-t">
                      <p className="text-gray-600 mb-6 mt-4">{update.description}</p>

                      {/* Image Grid */}
                      {update.images && (
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                          {update.images.map((img, idx) => (
                            <div
                              key={idx}
                              className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
                              onClick={() => setPopupMedia({ type: "image", src: img })}
                            >
                              <img
                                src={img}
                                alt={`${update.title} - Image ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Video */}
                      {update.video && (
                        <div
                          className="mt-4 rounded-lg overflow-hidden cursor-pointer"
                          onClick={() => setPopupMedia({ type: "video", src: update.video })}
                        >
                          <video
                            src={update.video}
                            className="w-full aspect-video rounded-lg"
                            muted
                          />
                          <p className="text-center text-sm text-gray-500 mt-2">Click to Play Video</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 pb-10">
            <div className="bg-white rounded-lg shadow-md p-6 top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#20ae9b]">
                Recent Posts
              </h2>
              <div className="space-y-4">
                {recentPosts.map((post, idx) => (
                  <a
                    key={idx}
                    href={post.link}
                    className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 text-[#20ae9b] flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                    <p className="text-sm text-gray-700 group-hover:text-[#186f63] transition-colors leading-relaxed">
                      {post.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#0d8a79] rounded-lg p-6 text-white">
              <h4 className="text-lg font-bold mb-2">Connect with SkyLine Aero Home</h4>
              <p className="text-sm mb-4 text-blue-50">
                Get exclusive property details, latest news
              </p>
              <Link to="/developments/skyline/contact">
                <button className="w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                  Contact Us Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
