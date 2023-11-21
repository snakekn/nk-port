document.addEventListener('DOMContentLoaded', (event) => {
  // This function will cycle through the images
  const cycleImages = (images, container) => {
    let currentImageIndex = 0;

    // Function to cycle to the next image
    const showNextImage = () => {
      // Hide all images
      images.forEach(img => img.style.display = 'none');
      // Show the current image
      images[currentImageIndex].style.display = 'block';
      // Update the index, cycling back to the start if necessary
      currentImageIndex = (currentImageIndex + 1) % images.length;
    };

    // Immediately show the first image
    showNextImage();

    // Start the interval to cycle images
    const intervalId = setInterval(showNextImage, 2000);

    // Return a function to clear the interval
    return () => clearInterval(intervalId);
  };

  // Attach the hover event listener to each .image-cycle-link
  document.querySelectorAll('.image-cycle-link').forEach(link => {
    let cancelCycle = null; // Function to cancel the cycle when not hovering

    // When mouse enters the link, start cycling images
    link.addEventListener('mouseenter', () => {
      const container = link.querySelector('.image-cycle-preview');
      const images = container.querySelectorAll('img');
      // Start cycling images
      cancelCycle = cycleImages(images, container);
    });

    // When mouse leaves the link, stop cycling images
    link.addEventListener('mouseleave', () => {
      if (cancelCycle) {
        cancelCycle(); // Stop cycling images
      }
      // Also hide all images
      link.querySelectorAll('img').forEach(img => img.style.display = 'none');
    });
  });
});
