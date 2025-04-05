# Auto detect text files and perform LF normalization
* text=auto
// Select all images from the gallery
const images = document.querySelectorAll('.gallery-item');

// Create a modal element
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

// Create an image element to display inside the modal
const modalImage = document.createElement('img');
modal.appendChild(modalImage);

// Add event listeners to each image for the lightbox effect
images.forEach(image => {
    image.addEventListener('click', () => {
        // When an image is clicked, show it inside the modal
        modal.style.display = 'block';
        modalImage.src = image.src;
        modalImage.alt = image.alt;
    });
});

// Close the modal when clicking outside the image
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
-