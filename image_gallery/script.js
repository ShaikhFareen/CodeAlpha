//Javacript comments
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const filterBtns = document.querySelectorAll(".filters button");

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Close Lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Next Image
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Previous Image
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Filters (Bonus)
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    images.forEach(img => {
      if (filter === "all" || img.dataset.category === filter) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});


