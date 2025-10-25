import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Share2, Printer, Phone, Mail, MapPin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import brijLogo from "../assets/Brij-Vrindra.png"
import img1 from "../assets/BrijVrinda/1.jpg"
import img2 from "../assets/BrijVrinda/1 (2).jpg"
import img3 from "../assets/BrijVrinda/1 (3).jpg"
import img4 from "../assets/BrijVrinda/1 (4).jpg"
import img5 from "../assets/BrijVrinda/1 (5).jpg"
import img6 from "../assets/BrijVrinda/1 (6).jpg"
import img7 from "../assets/BrijVrinda/1 (7).jpg"

export default function BrijVrinda() {
    const [mainImage, setMainImage] = useState(0);
    const brijBrochure = "https://ik.imagekit.io/16pq4do9s/BV-N-links%20(1).pdf?updatedAt=1759729669991";

    const images = [
        img1, img2, img3, img4, img5, img6, img7
    ];

    return (
        <div className="min-h-screen bg-white">
            <header className="border-b">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">BRIJ VRINDA</h1>
                    </div>
                    <div className="text-left sm:text-right">
                        <p className="text-xs sm:text-sm text-gray-600">Speaking Time : 24x7</p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                                <img
                                    src={images[mainImage]}
                                    alt="Property"
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={() => setMainImage(mainImage > 0 ? mainImage - 1 : images.length - 1)}
                                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                                >
                                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                                <button
                                    onClick={() => setMainImage((mainImage + 1) % images.length)}
                                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                                >
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                                <div className="absolute top-4 right-4 bg-[#15b0c5] text-white px-3 py-1 rounded text-xs sm:text-sm">
                                    Featured
                                </div>
                            </div>

                            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setMainImage(idx)}
                                        className={`aspect-video rounded overflow-hidden ${mainImage === idx ? 'ring-2 ring-blue-500' : ''}`}
                                    >
                                        <img src={img} alt="images" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-2">OVERVIEW</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-600">Property Type</p>
                                    <p className="font-semibold">Brij Vrinda Farmland</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Land Area</p>
                                    <p className="font-semibold">250+ Acre</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">DESCRIPTION</h2>

                            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                                <p className="text-base font-medium">Premium Farmland in Vrindavan with White Sandalwood Trees – Brij Vrinda by Maxpine Group</p>

                                <p>Tucked amidst 200+ Acres of flourishing White Sandalwood Farming Land-Parcels and rooted in the sacred Braj Bhumi of Vrindavan, Brij Vrinda is more than just land – it's your legacy in the making. Experience the rare charm of Bamboo Mud Farmhouses, a 25-Acre 5 Star Exclusive Resort, 5-Acre Sanskar School, 5-Acre Wellness Centre and timeless spiritual energy, all in one sanctuary with lush greenery all around.</p>

                                <div>
                                    <h3 className="font-semibold text-base mb-2">Why Choose Brij Vrinda?</h3>

                                    <div className="mb-3">
                                        <h4 className="font-semibold mb-1">1. Sacred Location</h4>
                                        <p>Located in the sacred Braj Bhumi of Vrindavan, Brij Vrinda offers a unique opportunity to own farmland in one of India's most spiritually significant locations. The project combines spiritual heritage with modern farming practices.</p>
                                    </div>

                                    <div className="mb-3">
                                        <h4 className="font-semibold mb-1">2. White Sandalwood Farming</h4>
                                        <p>The project features 200+ acres of flourishing White Sandalwood farming land-parcels, offering multiple income channels through sandalwood farming and guaranteed ROI from land appreciation.</p>
                                    </div>

                                    <div className="mb-3">
                                        <h4 className="font-semibold mb-1">3. Premium Amenities</h4>
                                        <p className="mb-2">Brij Vrinda offers:</p>
                                        <ul className="list-disc list-inside space-y-1 ml-2">
                                            <li>25-Acre 5 Star Exclusive Resort</li>
                                            <li>5-Acre Sanskar School</li>
                                            <li>5-Acre Wellness Centre</li>
                                            <li>Bamboo Mud Farmhouses</li>
                                            <li>24/7 Security and surveillance</li>
                                            <li>Well connectivity and electrification</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-base mb-2">Investment Benefits</h3>
                                    <p className="mb-2">Investing in Brij Vrinda ensures:</p>
                                    <ul className="list-disc list-inside space-y-1 ml-2">
                                        <li>Instant Registry & Mutation – Complete Legal Ownership</li>
                                        <li>Immediate legal possession with boundary</li>
                                        <li>Multiple Income Channels via Sandalwood Farming</li>
                                        <li>Guaranteed ROI from Land Appreciation</li>
                                        <li>Spiritual and cultural heritage value</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-base mb-2">FAQs</h3>

                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold mb-1">1. Why invest in Brij Vrinda farmland?</h4>
                                            <p>Brij Vrinda offers a unique combination of spiritual heritage, premium amenities, and profitable sandalwood farming opportunities. The sacred location in Vrindavan adds cultural and spiritual value to your investment.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">2. What makes Brij Vrinda unique?</h4>
                                            <p>Brij Vrinda stands out for its sacred location in Vrindavan, White Sandalwood farming opportunities, and premium amenities including a 5-star resort, school, and wellness centre.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">3. What are the income opportunities?</h4>
                                            <p>The project offers multiple income channels through White Sandalwood farming, land appreciation, and potential rental income from resort and commercial facilities.</p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-1">4. How can I book a plot at Brij Vrinda?</h4>
                                            <p>You can book a plot by contacting our sales team or scheduling a site visit through the Contact Us page. Our team will guide you through the process and provide all necessary details.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">DETAILS</h2>
                            <div className="bg-yellow-50 p-4 rounded overflow-x-auto">
                                <table className="w-full text-sm">
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-2 text-gray-600 whitespace-nowrap">Updated on:</td>
                                            <td className="py-2 font-semibold">September 17, 2025 at 12:55 pm</td>
                                            <td className="py-2 text-gray-600 whitespace-nowrap">Price:</td>
                                            <td className="py-2 font-semibold">Contact for Pricing</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">FEATURES</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>24X7 CCTV surveillance</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>25 Acre 5 Star Resort</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>50 Feet Wide Roads</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Electrification</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Sanskar School</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Security</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Well Connectivity</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Wellness Centre</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>White Sandalwood Farmland</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Bamboo Mud Farmhouses</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Sacred Braj Bhumi Location</span>
                                </div>
                                <div className="flex items-center py-1">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Multiple Income Channels</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">ADDRESS</h2>
                            <div className="bg-gray-50 p-4 rounded space-y-2 text-sm">
                                <div className="flex">
                                    <span className="text-gray-600 w-32">Address:</span>
                                    <span className="font-semibold">Vrindavan, Mathura, Uttar Pradesh</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 w-32">State/county:</span>
                                    <span className="font-semibold">Uttar Pradesh</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 w-32">Zip/Postal Code:</span>
                                    <span className="font-semibold">281121</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 w-32">Area:</span>
                                    <span className="font-semibold">Vrindavan</span>
                                </div>
                                <div className="flex">
                                    <span className="text-gray-600 w-32">Country:</span>
                                    <span className="font-semibold">India</span>
                                </div>
                            </div>
                        </div>

                        {/* Location map */}
                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">LOCATION</h2>

                            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative shadow">
                                {/* Google Map Embed */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8!2d77.7!3d27.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39734b5ad060e16d%3A0xd0adf8503a7b53fd!2sVrindavan!5e0!3m2!1sen!2sin!4v1759420301192!5m2!1sen!2sin"
                                    className="w-full h-full border-0"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>

                                {/* Custom Marker Icon */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                    <MapPin className="w-10 h-10 text-red-600 fill-red-600 drop-shadow-lg" />
                                </div>
                            </div>

                            {/* Visit Site Button */}
                            <div className="flex justify-center mt-4">
                                <a
                                    href="https://maps.google.com?q=Vrindavan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#20ae9b] text-white px-16 py-3 rounded-lg text-sm font-medium shadow hover:bg-[#197267] transition"
                                >
                                    Visit Site
                                </a>
                            </div>
                        </div>

                        {/* Download pdf */}
                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">PROPERTY DOCUMENTS</h2>
                            <div className="border rounded-lg p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center mr-3">
                                            <span className="text-red-600 font-bold text-xs">PDF</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">Brij Vrinda</p>
                                            <p className="text-xs text-gray-500">Property Document</p>
                                        </div>
                                    </div>

                                    {/* PDF Download Button */}
                                    <button
                                        onClick={async () => {
                                            try {
                                                const response = await fetch(brijBrochure);
                                                const blob = await response.blob();
                                                const url = window.URL.createObjectURL(blob);
                                                const a = document.createElement("a");
                                                a.href = url;
                                                a.download = "Brij-Vrinda.pdf";
                                                document.body.appendChild(a);
                                                a.click();
                                                a.remove();
                                                window.URL.revokeObjectURL(url);
                                            } catch (error) {
                                                console.error("Download failed:", error);
                                            }
                                        }}
                                        className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
                                    >
                                        <Download className="w-4 h-4 mr-1" />
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">
                                SCHEDULE A TOUR
                            </h2>

                            <div className="border rounded-lg p-6 flex flex-col items-center justify-center text-center bg-gray-50">
                                <p className="text-gray-700 text-sm mb-4">
                                    Plan your site visit with us and explore the farmland in detail.
                                </p>

                                <a
                                    href="/projects/brij_vrinda/book-site-visit"
                                    rel="noopener noreferrer"
                                    className="bg-[#20ae9b] text-white px-16 py-3 rounded-lg text-sm font-medium shadow hover:bg-[#25786d] transition"
                                >
                                    Visit Site
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-6 rounded-lg mb-6 lg:sticky lg:top-6">
                            <div className="flex items-center mb-4">
                                <div className="w-28 h-28 mr-3">
                                    <img src={brijLogo} alt="brijvrinda" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl text-[#333333]">Brij Vrinda</h3>
                                </div>
                            </div>

                            <div className="space-y-3 mb-4">
                                <div className="flex items-center text-sm">
                                    <Phone className="w-4 h-4 mr-2 text-gray-600" />
                                    <span>
                                        <a href="tel:+911204107573" className="hover:text-[#20ae9b] transition-colors">+91-1204107573</a>, 
                                        <a href="tel:+919115253545" className="hover:text-[#20ae9b] transition-colors"> +91-9115253545</a>
                                    </span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <Mail className="w-4 h-4 mr-2 text-gray-600" />
                                    <a href="mailto:info@brijvrindafarms.com" className="hover:text-[#20ae9b] transition-colors">info@brijvrindafarms.com</a>
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div className="mt-8 bg-gradient-to-br from-[#20ae9b] to-[#0c8070] rounded-lg p-6 text-white">
                                <h4 className="text-lg font-bold mb-2">
                                    Interested in Farmland Investment?
                                </h4>
                                <p className="text-sm mb-4 text-blue-50">
                                    Get exclusive details about our farmland in Vrindavan with White Sandalwood trees
                                </p>
                                <Link to={`/projects/brij_vrinda/contact-us`}>
                                    <button className="w-full bg-white text-[#20ae9b] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                                        Contact Us Today
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
