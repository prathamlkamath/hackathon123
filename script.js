const sectionTitle = document.querySelector('.section__title');
const sectionText = document.querySelectorAll('.section__text');

sectionTitle.style.opacity = 0;
sectionText.forEach(text => text.style.opacity = 0);

setTimeout(() => {
  sectionTitle.style.opacity = 1;
  sectionTitle.style.animation = 'fade-in 1s ease-in-out';
}, 1000);

setTimeout(() => {
  sectionText.forEach(text => {
    text.style.opacity = 1;
    text.style.animation = 'fade-in 2s ease-in-out';
  });
}, 1500);
const headerImages = [
    "./pk.jpg",
    "./header2.jpg",
    "./header3.jpg"
  ];
  let currentHeaderImageIndex = 0;
  
  const currentHeaderImage = document.getElementById("currentHeaderImage");
  
  function showPreviousHeaderImage() {
    if (currentHeaderImageIndex > 0) {
      currentHeaderImageIndex--;
      currentHeaderImage.src = headerImages[currentHeaderImageIndex];
    }
  }
  
  function showNextHeaderImage() {
    if (currentHeaderImageIndex < headerImages.length - 1) {
      currentHeaderImageIndex++;
      currentHeaderImage.src = headerImages[currentHeaderImageIndex];
    }
  }
  