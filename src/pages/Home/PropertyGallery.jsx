import { useState } from "react";
import img1 from "../../assets/green-3.jpg"
import img2 from "../../assets/green-4.jpg"
import img3 from "../../assets/green-5.jpg"
// import img4 from "../../assets/green-6.jpeg"
import img5 from "../../assets/green-7.png"

import anu1 from "../../assets/All home imgs/upadate-34.jpeg"
import anu2 from "../../assets/All home imgs/update--14.jpeg"
import anu3 from "../../assets/All home imgs/update-01.jpeg"
import anu4 from "../../assets/All home imgs/update-02.jpeg"
import anu5 from "../../assets/All home imgs/update-03.jpeg"
import anu6 from "../../assets/All home imgs/update-04.jpeg"
import anu7 from "../../assets/All home imgs/update-05.jpeg"
// import anu8 from "../../assets/All home imgs/update-06.jpeg"
import anu9 from "../../assets/All home imgs/update-07.jpeg"
import anu10 from "../../assets/All home imgs/update-08.jpeg"
import anu11 from "../../assets/All home imgs/update-11.jpeg"

import sky1 from "../../assets/skyline/1.mp4"
import sky2 from "../../assets/skyline/2.mp4"
import sky5 from "../../assets/skyline/3.mp4"
import sky3 from "../../assets/skyline/WhatsApp Image 2025-10-03 at 11.55.55 AM (1).jpeg"
import sky4 from "../../assets/skyline/WhatsApp Image 2025-10-03 at 11.55.55 AM.jpeg"
import sky10 from "../../assets/skyline/5.jpeg"
import sky6 from "../../assets/skyline/6.jpeg"
import sky7 from "../../assets/skyline/7.jpeg"
import sky8 from "../../assets/skyline/8.jpeg"
import sky9 from "../../assets/skyline/9.jpeg"

import brij1 from "../../assets/BrijVrinda/1 (2).jpg"
import brij2 from "../../assets/BrijVrinda/1 (3).jpg"
import brij3 from "../../assets/BrijVrinda/1 (4).jpg"
import brij4 from "../../assets/BrijVrinda/1 (5).jpg"
import brij5 from "../../assets/BrijVrinda/1 (6).jpg"
import brij6 from "../../assets/BrijVrinda/1 (7).jpg"
import brij7 from "../../assets/BrijVrinda/1 (8).jpg"
import brij8 from "../../assets/BrijVrinda/10.jpeg"
import brij9 from "../../assets/BrijVrinda/11.jpeg"
import brij10 from "../../assets/BrijVrinda/12.jpeg"
import brij11 from "../../assets/BrijVrinda/1 (9).jpg"
import brij12 from "../../assets/BrijVrinda/13.jpeg"
import brij13 from "../../assets/BrijVrinda/14.jpeg"
import brij14 from "../../assets/BrijVrinda/15.jpeg"    
import brij15 from "../../assets/BrijVrinda/16.jpeg"
import brij16 from "../../assets/BrijVrinda/17.jpeg"
import brij17 from "../../assets/BrijVrinda/18.jpeg"
import brij18 from "../../assets/BrijVrinda/19.jpeg"
import brij19 from "../../assets/BrijVrinda/1.jpg"
import brij20 from "../../assets/BrijVrinda/2.jpeg"


import club1 from "../../assets/ClubForm/1.png"
import club2 from "../../assets/ClubForm/2.jpeg"
import club3 from "../../assets/ClubForm/3.jpg"
import club4 from "../../assets/ClubForm/4.jpg"
import club5 from "../../assets/ClubForm/6.jpg"
import club6 from "../../assets/ClubForm/32.jpeg"
import club7 from "../../assets/ClubForm/33.jpeg"
import club8 from "../../assets/ClubForm/34.jpeg"
import club9 from "../../assets/ClubForm/35.jpeg"
import club10 from "../../assets/ClubForm/36.jpeg"
import club11 from "../../assets/ClubForm/37.jpeg"
import club12 from "../../assets/ClubForm/38.jpeg"
import club13 from "../../assets/ClubForm/39.jpeg"
import club14 from "../../assets/ClubForm/41.jpeg"    
import club15 from "../../assets/ClubForm/42.jpeg"
import club16 from "../../assets/ClubForm/43.jpeg"
import club17 from "../../assets/ClubForm/44.jpeg"
import club18 from "../../assets/ClubForm/club-vid.mp4"
import club19 from "../../assets/ClubForm/40.jpeg"
// import club20 from "../../assets/ClubForm/1.png"










export default function PropertyGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [popupItem, setPopupItem] = useState(null); // 🔹 For popup

  const INITIAL_ITEMS = 6;

  const filters = [
    { id: "all", label: "View All" },
    { id: "maxpine", label: "Maxpine" },
    { id: "anugrahHome", label: "AnugrahHome" },
    { id: "skyLine", label: "SkyLine" },
    { id: "brijVrinda", label: "Brij Vrinda" },
    { id: "theClubFarm", label: "The Club Farm" }
  ];

  const galleryItems = [
    { id: 1, category: "anugrahHome", image: img1, title: "Garden View", type: "image" },
    { id: 6, category: "maxpine", image: img2, title: "Garden View", type: "image" },
    { id: 7, category: "maxpine", image: img3, title: "Garden View", type: "image" },
    { id: 8, category: "skyLine", image: sky3, title: "Garden View", type: "image" },
    { id: 9, category: "anugrahHome", image: img5, title: "Garden View", type: "image" },
    { id: 10, category: "maxpine", image: img1, title: "Garden View", type: "image" },
    { id: 11, category: "skyLine", image: sky4, title: "Garden View", type: "image" },
    { id: 12, category: "anugrahHome", image: anu1, title: "Garden View", type: "image" },
    { id: 13, category: "anugrahHome", image: anu2, title: "Garden View", type: "image" },
    { id: 14, category: "anugrahHome", image: anu3, title: "Garden View", type: "image" },
    { id: 15, category: "anugrahHome", image: anu4, title: "Garden View", type: "image" },
    { id: 16, category: "anugrahHome", image: anu5, title: "Garden View", type: "image" },
    { id: 17, category: "anugrahHome", image: anu6, title: "Garden View", type: "image" },
    { id: 18, category: "anugrahHome", image: anu7, title: "Garden View", type: "image" },
    { id: 19, category: "anugrahHome", image: anu9, title: "Garden View", type: "image" },
    { id: 20, category: "anugrahHome", image: anu10, title: "Garden View", type: "image" },
    { id: 21, category: "anugrahHome", image: anu11, title: "Garden View", type: "image" },
    { id: 22, category: "skyLine", image: sky3, title: "Garden View", type: "image" },
    { id: 23, category: "skyLine", src: sky1, title: "Skyline Video", type: "video" },
    { id: 24, category: "skyLine", src: sky2, title: "Skyline Video ", type: "video" },
    { id: 25, category: "skyLine", src: sky5, title: "Skyline Video ", type: "video" },
     { id: 26, category: "skyLine", image: sky6, title: "Garden View", type: "image" },
      { id: 27, category: "skyLine", image: sky7, title: "Garden View", type: "image" },
       { id: 28, category: "skyLine", image: sky8, title: "Garden View", type: "image" },
        { id: 29, category: "skyLine", image: sky9, title: "Garden View", type: "image" },
         { id: 30, category: "skyLine", image: sky10, title: "Garden View", type: "image" },

        //  Brij Vrinda
          { id: 31, category: "brijVrinda", image: brij1, title: "Garden View", type: "image" },
          { id: 32, category: "brijVrinda", image: brij2, title: "Garden View", type: "image" },
          { id: 33, category: "brijVrinda", image: brij3, title: "Garden View", type: "image" },
          { id: 34, category: "brijVrinda", image: brij4, title: "Garden View", type: "image" },
          { id: 35, category: "brijVrinda", image: brij5, title: "Garden View", type: "image" },
          { id: 36, category: "brijVrinda", image: brij6, title: "Garden View", type: "image" },
          { id: 37, category: "brijVrinda", image: brij7, title: "Garden View", type: "image" },
          { id: 38, category: "brijVrinda", image: brij8, title: "Garden View", type: "image" },
          { id: 39, category: "brijVrinda", image: brij9, title: "Garden View", type: "image" },
          { id: 40, category: "brijVrinda", image: brij10, title: "Garden View", type: "image" },
          { id: 41, category: "brijVrinda", image: brij11, title: "Garden View", type: "image" },
          { id: 42, category: "brijVrinda", image: brij12, title: "Garden View", type: "image" },
           { id: 43, category: "brijVrinda", image: brij13, title: "Garden View", type: "image" },
            { id: 44, category: "brijVrinda", image: brij14, title: "Garden View", type: "image" },
             { id: 45, category: "brijVrinda", image: brij15, title: "Garden View", type: "image" },
              { id: 46, category: "brijVrinda", image: brij16, title: "Garden View", type: "image" },
               { id: 47, category: "brijVrinda", image: brij17, title: "Garden View", type: "image" },
                { id: 48, category: "brijVrinda", image: brij18, title: "Garden View", type: "image" },
                 { id: 49, category: "brijVrinda", image: brij19, title: "Garden View", type: "image" },
                { id: 50, category: "brijVrinda", image: brij20, title: "Garden View", type: "image" },


    // The Club Farm

    { id: 51, category: "theClubFarm", image: club1, title: "Garden View", type: "image" },
    { id: 52, category: "theClubFarm", image: club2, title: "Garden View", type: "image" },
    { id: 53, category: "theClubFarm", image: club3, title: "Garden View", type: "image" },
    { id: 54, category: "theClubFarm", image: club4, title: "Garden View", type: "image" },
    { id: 55, category: "theClubFarm", image: club5, title: "Garden View", type: "image" },
    { id: 56, category: "theClubFarm", image: club6, title: "Garden View", type: "image" },
    { id: 57, category: "theClubFarm", image: club7, title: "Garden View", type: "image" },
    { id: 58, category: "theClubFarm", image: club8, title: "Garden View", type: "image" },
    { id: 59, category: "theClubFarm", image: club9, title: "Garden View", type: "image" },
    { id: 60, category: "theClubFarm", image: club10, title: "Garden View", type: "image" },
    { id: 61, category: "theClubFarm", image: club11, title: "Garden View", type: "image" },
    { id: 62, category: "theClubFarm", image: club12, title: "Garden View", type: "image" },
    { id: 63, category: "theClubFarm", image: club13, title: "Garden View", type: "image" },
    { id: 64, category: "theClubFarm", image: club14, title: "Garden View", type: "image" },
    { id: 65, category: "theClubFarm", image: club15, title: "Garden View", type: "image" },
    { id: 66, category: "theClubFarm", image: club16, title: "Garden View", type: "image" },
    { id: 67, category: "theClubFarm", image: club17, title: "Garden View", type: "image" },
    { id: 68, category: "theClubFarm", src: club18, title: "Club Farm Video ", type: "video" },
    { id: 69, category: "theClubFarm", image: club19, title: "Garden View", type: "image" },
    
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, INITIAL_ITEMS);

  const hasMoreItems = filteredItems.length > INITIAL_ITEMS;

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setShowAll(false);
  };

  return (
    <section className="md:px-28 py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-8">
            Maxpine | Anugrah | SkyLine | Brij Vrinda | The Club Farm
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.id
                    ? "bg-[#20ae9b] text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-6">
          {itemsToShow.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setPopupItem(item)} // 🔹 Open popup
              className={`cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${index % 8 === 0 || index % 8 === 3 ? "row-span-2" :
                  index % 8 === 1 || index % 8 === 6 ? "row-span-1" : "row-span-1"
                }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`relative ${index % 8 === 0 || index % 8 === 3 ? "h-80 lg:h-[90vh]" : "h-60 lg:h-72"
                }`}>
                {item.type === "image" ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <span className="text-[#20ae9b] text-sm font-medium uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-4 border-[#20ae9b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show Less Button */}
        {hasMoreItems && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#20ae9b] hover:bg-[#2c6c64] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              {showAll ? "Show Less" : `Load More (${filteredItems.length - INITIAL_ITEMS} more)`}
            </button>
          </div>
        )}
      </div>

      {/* 🔹 Popup Modal */}
      {popupItem && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setPopupItem(null)}
        >
          <div className="relative max-w-5xl w-full px-4">
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full"
              onClick={() => setPopupItem(null)}
            >
              ✕
            </button>
            {popupItem.type === "image" ? (
              <img
                src={popupItem.image}
                alt={popupItem.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={popupItem.src}
                controls
                autoPlay
                className="w-full max-h-[80vh] rounded-lg"
              />
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
