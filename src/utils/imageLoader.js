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
    "/src/assets/green-7.png"
  ],
  anugrahHome: [
    "/src/assets/All home imgs/upadate-34.jpeg",
    "/src/assets/All home imgs/update--14.jpeg",
    "/src/assets/All home imgs/update-01.jpeg",
    "/src/assets/All home imgs/update-02.jpeg",
    "/src/assets/All home imgs/update-03.jpeg",
    "/src/assets/All home imgs/update-04.jpeg",
    "/src/assets/All home imgs/update-05.jpeg",
    "/src/assets/All home imgs/update-07.jpeg",
    "/src/assets/All home imgs/update-08.jpeg",
    "/src/assets/All home imgs/update-11.jpeg"
  ],
  skyLine: [
    "/src/assets/skyline/WhatsApp Image 2025-10-03 at 11.55.55 AM (1).jpeg",
    "/src/assets/skyline/WhatsApp Image 2025-10-03 at 11.55.55 AM.jpeg",
    "/src/assets/skyline/5.jpeg",
    "/src/assets/skyline/6.jpeg",
    "/src/assets/skyline/7.jpeg",
    "/src/assets/skyline/8.jpeg",
    "/src/assets/skyline/9.jpeg"
  ],
  brijVrinda: [
    "/src/assets/BrijVrinda/1 (2).jpg",
    "/src/assets/BrijVrinda/1 (3).jpg",
    "/src/assets/BrijVrinda/1 (4).jpg",
    "/src/assets/BrijVrinda/1 (5).jpg",
    "/src/assets/BrijVrinda/1 (6).jpg",
    "/src/assets/BrijVrinda/1 (7).jpg",
    "/src/assets/BrijVrinda/1 (8).jpg",
    "/src/assets/BrijVrinda/10.jpeg",
    "/src/assets/BrijVrinda/11.jpeg",
    "/src/assets/BrijVrinda/12.jpeg",
    "/src/assets/BrijVrinda/1 (9).jpg",
    "/src/assets/BrijVrinda/13.jpeg",
    "/src/assets/BrijVrinda/14.jpeg",
    "/src/assets/BrijVrinda/15.jpeg",
    "/src/assets/BrijVrinda/16.jpeg",
    "/src/assets/BrijVrinda/17.jpeg",
    "/src/assets/BrijVrinda/18.jpeg",
    "/src/assets/BrijVrinda/19.jpeg",
    "/src/assets/BrijVrinda/1.jpg",
    "/src/assets/BrijVrinda/2.jpeg"
  ],
  theClubFarm: [
    "/src/assets/ClubForm/1.png",
    "/src/assets/ClubForm/2.jpeg",
    "/src/assets/ClubForm/3.jpg",
    "/src/assets/ClubForm/4.jpg",
    "/src/assets/ClubForm/6.jpg",
    "/src/assets/ClubForm/32.jpeg",
    "/src/assets/ClubForm/33.jpeg",
    "/src/assets/ClubForm/34.jpeg",
    "/src/assets/ClubForm/35.jpeg",
    "/src/assets/ClubForm/36.jpeg",
    "/src/assets/ClubForm/37.jpeg",
    "/src/assets/ClubForm/38.jpeg",
    "/src/assets/ClubForm/39.jpeg",
    "/src/assets/ClubForm/41.jpeg",
    "/src/assets/ClubForm/42.jpeg",
    "/src/assets/ClubForm/43.jpeg",
    "/src/assets/ClubForm/44.jpeg",
    "/src/assets/ClubForm/40.jpeg"
  ]
};

// Video paths
export const videoPaths = {
  skyLine: [
    "/src/assets/skyline/1.mp4",
    "/src/assets/skyline/2.mp4", 
    "/src/assets/skyline/3.mp4"
  ],
  theClubFarm: [
    "/src/assets/ClubForm/club-vid.mp4"
  ]
};
