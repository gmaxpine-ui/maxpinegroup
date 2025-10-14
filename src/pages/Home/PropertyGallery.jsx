import { useState, useMemo } from "react";
import OptimizedImage from "../../components/OptimizedImage";
import OptimizedVideo from "../../components/OptimizedVideo";
import { imagePaths, videoPaths } from "../../utils/imageLoader";










export default function PropertyGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [popupItem, setPopupItem] = useState(null);

  const INITIAL_ITEMS = 6;

  const filters = [
    { id: "all", label: "View All" },
    { id: "maxpine", label: "Maxpine" },
    { id: "anugrahHome", label: "AnugrahHome" },
    { id: "skyLine", label: "SkyLine" },
    { id: "brijVrinda", label: "Brij Vrinda" },
    { id: "theClubFarm", label: "The Club Farm" }
  ];

  // Generate gallery items dynamically
  const galleryItems = useMemo(() => {
    const items = [];
    let id = 1;

    // Add images for each category
    Object.entries(imagePaths).forEach(([category, paths]) => {
      paths.forEach((path, index) => {
        items.push({
          id: id++,
          category,
          image: path,
          title: `${category} Image ${index + 1}`,
          type: "image"
        });
      });
    });

    // Add videos for each category
    Object.entries(videoPaths).forEach(([category, paths]) => {
      paths.forEach((path, index) => {
        items.push({
          id: id++,
          category,
          src: path,
          title: `${category} Video ${index + 1}`,
          type: "video"
        });
      });
    });

    return items;
  }, []);

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
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <OptimizedVideo
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
              <OptimizedImage
                src={popupItem.image}
                alt={popupItem.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <OptimizedVideo
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
