// Dynamic image loader for PropertyGallery
export const loadImage = (imagePath) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(imagePath);
    img.onerror = reject;
    img.src = imagePath;
  });
};

// Image paths organized by category
export const imagePaths = {
  maxpine: [
    "/src/assets/green-3.jpg",
    "/src/assets/green-4.jpg", 
    "/src/assets/green-5.jpg",
    "/src/assets/green-6.jpeg",
    "/src/assets/green-7.png",
    "/src/assets/green-8.jpg",
    "/src/assets/green-9.jpeg",
    "/src/assets/green-11.jpg",
    "/src/assets/green-4 (4).jpeg",
    "/src/assets/gorund-5.jpeg",
    "/src/assets/Group-1.jpg",
    "/src/assets/people-1.jpg",
    "/src/assets/maxpine-Offici.avif",
    "/src/assets/ClubFarm.png",
    "/src/assets/LeafShade.png",
    "/src/assets/Brij-Vrindra.png",
    "/src/assets/Anugrah-Homes-logo.png"
  ],
  anugrahHome: [
    // All home imgs folder
    "/src/assets/All home imgs/airport1.png",
    "/src/assets/All home imgs/airport2.jpg",
    "/src/assets/All home imgs/airportconnectivity-2048x1321-1.jpg",
    "/src/assets/All home imgs/Anugrah-Homes-logo.png",
    "/src/assets/All home imgs/brijVrinda.jpg",
    "/src/assets/All home imgs/filmcity-01 (1).jpg",
    "/src/assets/All home imgs/filmcity-01 (1).png",
    "/src/assets/All home imgs/filmcity-01 (2).png",
    "/src/assets/All home imgs/filmcity-01 (3).png",
    "/src/assets/All home imgs/Final-Key-Plan.png",
    "/src/assets/All home imgs/Gate-1170x785.png",
    "/src/assets/All home imgs/Green-and-White-Modern-Land-Plot-Sale-Promotion-Instagram-Post-1080-x-650-px-2.jpg",
    "/src/assets/All home imgs/logisticpark.png",
    "/src/assets/All home imgs/logo-2.png",
    "/src/assets/All home imgs/new-update-1.jpeg",
    "/src/assets/All home imgs/people-1.jpg",
    "/src/assets/All home imgs/present-Project-img-1 (1).png",
    "/src/assets/All home imgs/present-Project-img-1 (1).webp",
    "/src/assets/All home imgs/present-Project-img-1 (2).png",
    "/src/assets/All home imgs/present-Project-img-2.jpg",
    "/src/assets/All home imgs/ProjectDevelopmentImages1.jpg",
    "/src/assets/All home imgs/ProjectDevelopmentImages2.jpg",
    "/src/assets/All home imgs/ProjectDevelopmentImages4.jpg",
    "/src/assets/All home imgs/Screenshot-2024-11-22-112948.png",
    "/src/assets/All home imgs/upadate-34.jpeg",
    "/src/assets/All home imgs/update--14.jpeg",
    "/src/assets/All home imgs/update-01.jpeg",
    "/src/assets/All home imgs/update-012.jpeg",
    "/src/assets/All home imgs/update-013.jpeg",
    "/src/assets/All home imgs/update-02.jpeg",
    "/src/assets/All home imgs/update-03.jpeg",
    "/src/assets/All home imgs/update-04.jpeg",
    "/src/assets/All home imgs/update-05.jpeg",
    "/src/assets/All home imgs/update-06.jpeg",
    "/src/assets/All home imgs/update-07.jpeg",
    "/src/assets/All home imgs/update-08.jpeg",
    "/src/assets/All home imgs/update-11.jpeg",
    "/src/assets/All home imgs/update-15.jpeg",
    "/src/assets/All home imgs/update-16.jpeg",
    "/src/assets/All home imgs/update-17.jpeg",
    "/src/assets/All home imgs/update-18.jpeg",
    "/src/assets/All home imgs/update-19.jpeg",
    "/src/assets/All home imgs/update-20.jpeg",
    "/src/assets/All home imgs/update-22.jpeg",
    "/src/assets/All home imgs/update-23.jpeg",
    "/src/assets/All home imgs/update-24.jpeg",
    "/src/assets/All home imgs/update-25.jpeg",
    "/src/assets/All home imgs/update-28.jpeg",
    "/src/assets/All home imgs/update-30.jpeg",
    "/src/assets/All home imgs/update-31.jpeg",
    "/src/assets/All home imgs/update-32.jpeg",
    "/src/assets/All home imgs/update-33.jpeg",
    "/src/assets/All home imgs/update-35.jpeg",
    "/src/assets/All home imgs/update-36.jpeg",
    "/src/assets/All home imgs/update-37.jpeg",
    "/src/assets/All home imgs/update-38.jpeg",
    "/src/assets/All home imgs/update-39.jpeg",
    "/src/assets/All home imgs/update-40.jpeg",
    "/src/assets/All home imgs/video-placeholder.jpg"
  ],
  skyLine: [
    "/src/assets/skyline/2.jpeg",
    "/src/assets/skyline/2.png",
    "/src/assets/skyline/5.jpeg",
    "/src/assets/skyline/6.jpeg",
    "/src/assets/skyline/7.jpeg",
    "/src/assets/skyline/8.jpeg",
    "/src/assets/skyline/9.jpeg",
    "/src/assets/skyline/Location Map_page-0001.jpg",
    "/src/assets/skyline/SH Price List.png",
    "/src/assets/skyline/Skyline Township Layout Plan-Model_page-0001 (1).jpg",
    "/src/assets/skyline/Skyline Township Layout.jpg",
    "/src/assets/skyline/skylogo.jpeg",
    "/src/assets/skyline/WhatsApp Image 2025-10-03 at 11.55.55 AM (1).jpeg",
    "/src/assets/skyline/WhatsApp Image 2025-10-03 at 11.55.55 AM.jpeg"
  ],
  brijVrinda: [
    "/src/assets/BrijVrinda/1 (2).jpg",
    "/src/assets/BrijVrinda/1 (3).jpg",
    "/src/assets/BrijVrinda/1 (4).jpg",
    "/src/assets/BrijVrinda/1 (5).jpg",
    "/src/assets/BrijVrinda/1 (6).jpg",
    "/src/assets/BrijVrinda/1 (7).jpg",
    "/src/assets/BrijVrinda/1 (8).jpg",
    "/src/assets/BrijVrinda/1 (9).jpg",
    "/src/assets/BrijVrinda/1.jpg",
    "/src/assets/BrijVrinda/2.jpeg",
    "/src/assets/BrijVrinda/3.jpeg",
    "/src/assets/BrijVrinda/4.jpeg",
    "/src/assets/BrijVrinda/5.jpeg",
    "/src/assets/BrijVrinda/6.jpeg",
    "/src/assets/BrijVrinda/7.jpeg",
    "/src/assets/BrijVrinda/8.jpeg",
    "/src/assets/BrijVrinda/9.jpeg",
    "/src/assets/BrijVrinda/10.jpeg",
    "/src/assets/BrijVrinda/11.jpeg",
    "/src/assets/BrijVrinda/12.jpeg",
    "/src/assets/BrijVrinda/13.jpeg",
    "/src/assets/BrijVrinda/14.jpeg",
    "/src/assets/BrijVrinda/15.jpeg",
    "/src/assets/BrijVrinda/16.jpeg",
    "/src/assets/BrijVrinda/17.jpeg",
    "/src/assets/BrijVrinda/18.jpeg",
    "/src/assets/BrijVrinda/19.jpeg",
    "/src/assets/BrijVrinda/21.jpeg",
    "/src/assets/BrijVrinda/22.jpeg",
    "/src/assets/BrijVrinda/23.jpeg",
    "/src/assets/BrijVrinda/24.jpeg",
    "/src/assets/BrijVrinda/25.jpeg",
    "/src/assets/BrijVrinda/26.jpeg",
    "/src/assets/BrijVrinda/27.jpeg",
    "/src/assets/BrijVrinda/28.jpeg",
    "/src/assets/BrijVrinda/29.jpeg",
    "/src/assets/BrijVrinda/30.jpeg",
    "/src/assets/BrijVrinda/31.jpeg",
    "/src/assets/BrijVrinda/Brij-Vrindra-removebg-preview.png",
    "/src/assets/BrijVrinda/Brij-Vrindra-removebg-preview2.png",
    "/src/assets/BrijVrinda/Price.jpeg"
  ],
  theClubFarm: [
    "/src/assets/ClubForm/1.png",
    "/src/assets/ClubForm/2.jpeg",
    "/src/assets/ClubForm/3.jpg",
    "/src/assets/ClubForm/4.jpg",
    "/src/assets/ClubForm/5.jpg",
    "/src/assets/ClubForm/6.jpg",
    "/src/assets/ClubForm/32.jpeg",
    "/src/assets/ClubForm/33.jpeg",
    "/src/assets/ClubForm/34.jpeg",
    "/src/assets/ClubForm/35.jpeg",
    "/src/assets/ClubForm/36.jpeg",
    "/src/assets/ClubForm/37.jpeg",
    "/src/assets/ClubForm/38.jpeg",
    "/src/assets/ClubForm/39.jpeg",
    "/src/assets/ClubForm/40.jpeg",
    "/src/assets/ClubForm/41.jpeg",
    "/src/assets/ClubForm/42.jpeg",
    "/src/assets/ClubForm/43.jpeg",
    "/src/assets/ClubForm/44.jpeg",
    "/src/assets/ClubForm/banner-CF.png",
    "/src/assets/ClubForm/Brijghat PLAN 04-08-2025-Model-1 (1)_page-0001.jpg",
    "/src/assets/ClubForm/Club-logo.png",
    "/src/assets/ClubForm/ClubFarm.png",
    "/src/assets/ClubForm/Price-TCF.png"
  ]
};

// Video paths
export const videoPaths = {
  maxpine: [
    "/src/assets/video.mp4"
  ],
  anugrahHome: [
    "/src/assets/All home imgs/video-2.mp4"
  ],
  skyLine: [
    "/src/assets/skyline/1.mp4",
    "/src/assets/skyline/2.mp4", 
    "/src/assets/skyline/3.mp4"
  ],
  brijVrinda: [
    "/src/assets/BrijVrinda/brij-vid.mp4"
  ],
  theClubFarm: [
    "/src/assets/ClubForm/club-vid.mp4",
    "/src/assets/ClubForm/club-vid-2.mp4"
  ]
};
