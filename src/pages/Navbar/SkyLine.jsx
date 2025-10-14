import { useState } from "react";
import { 
  MapPin, Home, Ruler, BedDouble, Bath, Car, Calendar, 
  Phone, Mail, User, Star, Send, Heart, Share2, 
  ChevronLeft, ChevronRight, X, ZoomIn, Check
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SkyLine() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isFavorite, setIsFavorite] = useState(false);

  const images = [
    "https://ik.imagekit.io/16pq4do9s/assets/skyline/WhatsApp%20Image%202025-10-03%20at%2011.55.55%20AM.jpeg?updatedAt=1759830269888",
    "https://ik.imagekit.io/16pq4do9s/assets/skyline/8.jpeg?updatedAt=1759830145317",
    "https://ik.imagekit.io/16pq4do9s/assets/skyline/5.jpeg?updatedAt=1759830121094",
    
   
    "https://ik.imagekit.io/16pq4do9s/assets/All%20home%20imgs/update-35.jpeg?updatedAt=1759830387578",
    "https://ik.imagekit.io/16pq4do9s/assets/skyline/7.jpeg?updatedAt=1759830125988",
    "https://ik.imagekit.io/16pq4do9s/assets/skyline/9.jpeg?updatedAt=1759830163309"

    
  ];

  const propertyDetails = {
    title: "Skyline Township",
    price: "₹32.5 Thousand",
    type: "Premium Residential Plots",
    location: "Jattari, Aligarh Palwal Road, Uttar Pradesh 202137",
    size: "NA",
    plotArea: "100-200 sq yards",
   
    features: [
      "Gated Community",
      "24/7 Security",
      "Green Spaces",
      "Modern Infrastructure",
      "Easy EMI Options",
      "Clear Title"
    ]
  };

  const amenities = [
    { name: "Clubhouse", icon: Home },
    { name: "Swimming Pool", icon: Home },
    { name: "Gym", icon: Home },
    { name: "Parks", icon: Home },
    { name: "Kids Play Area", icon: Home },
    { name: "Sports Facility", icon: Home }
  ];

 

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Image Gallery */}
      <div className="relative bg-black pt-1">
        <div className="container mx-auto px-4 lg:px-24">
          <div className="relative h-[30vh] sm:h-[600px] group">
            <img
              src={images[currentImage]}
              alt="Property"
              className="w-full h-full  "
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              {/* <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 rounded-full shadow-lg backdrop-blur-sm transition-all ${
                  isFavorite ? 'bg-red-500 text-white' : 'bg-white/90 hover:bg-white'
                }`}
              >
                <Heart className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} />
              </button>
              <button className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-sm">
                <Share2 className="w-5 h-5" />
              </button> */}
              <button
                onClick={() => setShowGallery(true)}
                className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-sm"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              {currentImage + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 py-4 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  currentImage === idx ? 'border-[#20ae9b]' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-24 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Price */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-lg md:text-3xl font-bold text-gray-900 mb-2">{propertyDetails.title}</h1>
                  <p className="flex items-center text-gray-600 text-sm md:text-lg">
                    <MapPin className="w-5 h-5 mr-2 text-[#20ae9b]" />
                    {propertyDetails.location}
                  </p>
                </div>
                <div className="text-right ">
                  <p className="text-sm text-gray-500">Starting Price</p>
                  <p className="text-lg md:text-3xl font-bold text-[#20ae9b]">{propertyDetails.price}</p>
                  <span className="inline-block text-left bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mt-2">
                    PRE LAUNCH PRICES
                  </span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Ruler className="w-6 h-6 mx-auto mb-2 text-[#20ae9b]" />
                  <p className="text-sm text-gray-500">Plot Size</p>
                  <p className="font-semibold">{propertyDetails.plotArea}</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Home className="w-6 h-6 mx-auto mb-2 text-[#20ae9b]" />
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="font-semibold">Residential</p>
                </div>
                
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-[#20ae9b]" />
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold">Jattari</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex border-b">
                {['overview',   ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-6 py-4 text-sm font-semibold capitalize transition-colors ${
                      activeTab === tab
                        ? 'bg-[#20ae9b] text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div>
                    
                    
                    <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {propertyDetails.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'description' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {propertyDetails.description}
                    </p>
                  </div>
                )}

                {activeTab === 'address' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Address</h3>
                    <p className="text-gray-700 flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-[#20ae9b] mt-1 flex-shrink-0" />
                      <span>{propertyDetails.location}</span>
                    </p>
                    <div className="mt-6 h-64 bg-gray-200 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                        alt="Location Map"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Property Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Starting Price</p>
                        <p className="font-semibold text-lg">{propertyDetails.price}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Property Type</p>
                        <p className="font-semibold text-lg">Residential</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">Plot Size</p>
                        <p className="font-semibold text-lg">{propertyDetails.plotArea}</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500 mb-1">EMI Options</p>
                        <p className="font-semibold text-lg">Available</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-bold mb-6">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#20ae9b] hover:text-white transition-colors group">
                    <amenity.icon className="w-6 h-6 text-[#20ae9b] group-hover:text-white" />
                    <span className="font-medium">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">SkyLine Aero Homes</p>
                  <p className="text-sm text-gray-500">Property </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">SkyLine Aero Homes Tour Form</h3>

            <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#0d8a79] rounded-lg p-6 text-white">
            <h4 className="text-lg font-bold mb-2">Connect with  SkyLine Aero Homes</h4>
            <p className="text-sm mb-4 text-blue-50">
             Get exclusive property details, latest news
            </p>
            <Link to="/projects/skyline/contact-us">
              <button className="w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                Contact Us Today
              </button>
            </Link>
          </div>

              <div className="mt-6 pt-6 border-t space-y-3">
                <a
                  href="tel:+919266559209"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#20ae9b]" />
                  <span className="text-gray-700">+91-9266559209</span>
                </a>
                <a
                  href="mailto:info@skylineaerohomes.com"
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#20ae9b]" />
                  <span className="text-gray-700">info@skylineaerohomes.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
      
      </div>

      {/* Full Screen Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <img
            src={images[currentImage]}
            alt="Gallery"
            className="max-w-[90%] max-h-[90%] object-contain"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}