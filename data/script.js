const gridToggles = document.querySelectorAll('.grid-list-toggle');

const extralargeBtn = document.querySelector('.grid-list-toggle-extralarge');
const largeBtn = document.querySelector('.grid-list-toggle-large');
const mediumBtn = document.querySelector('.grid-list-toggle-medium');
const smallBtn = document.querySelector('.grid-list-toggle-small');
const gallery = document.querySelector('.gallery');

extralargeBtn.addEventListener("click", toggleextralarge);
largeBtn.addEventListener("click", togglelarge);
mediumBtn.addEventListener("click", togglemedium);
smallBtn.addEventListener("click", togglesmall);

function toggleextralarge() {
  gallery.classList.remove('gallery-large', 'gallery-medium', 'gallery-small');
  gallery.classList.add('gallery-extralarge');
}

function togglelarge() {
  gallery.classList.remove('gallery-extralarge', 'gallery-medium', 'gallery-small');
  gallery.classList.add('gallery-large');
}

function togglemedium() {
  gallery.classList.remove('gallery-extralarge', 'gallery-large', 'gallery-small');
  gallery.classList.add('gallery-medium');
}

function togglesmall() {
  gallery.classList.remove('gallery-extralarge', 'gallery-large', 'gallery-medium');
  gallery.classList.add('gallery-small');
}

// grid sizes 
// const gridSizes = {
//   'extra': '40vw',
//   'large': '30vw',
//   'medium': '20vw',
//   'small': '12vw'
// };

// gridToggles.forEach((button, index) => {
//   button.addEventListener('click', function(e) {
//     let gridClass = '';

    
    
//     if (parent.classList.contains('large-grid')) {
//       gridClass = 'gallery-large';
//     } else if (parent.classList.contains('medium-grid')) {
//       gridClass = 'gallery-medium';
//     } else if (parent.classList.contains('small-grid')) {
//       gridClass = 'gallery-small';
//     }
    
//     gallery.classList.remove('gallery-large', 'gallery-medium', 'gallery-small');
    
//     if (gridClass) {
//       gallery.classList.add(gridClass);
//     }
    
//     const details = document.querySelector('.grid-view-header details');
//     if (details) {
//       details.open = false;
//     }
//   });
// });

// const captureBtn = document.querySelector('.capture');
// const timeDisplay = document.querySelector('.capture-menu h2');

// let recording = false;
// let seconds = 0;
// let timer = null;

// if (captureBtn) {
//   captureBtn.addEventListener('click', function() {
//     recording = !recording;
    
//     if (recording) {
//       this.style.opacity = '0.6';
      
//       timer = setInterval(() => {
//         seconds++;
//         const hours = Math.floor(seconds / 3600);
//         const minutes = Math.floor((seconds % 3600) / 60);
//         const secs = seconds % 60;
        
//         timeDisplay.textContent = 
//           String(hours).padStart(2, '0') + ' : ' + 
//           String(minutes).padStart(2, '0') + ' : ' + 
//           String(secs).padStart(2, '0');
//       }, 1000);
//     } else {
//       this.style.opacity = '1';
//       clearInterval(timer);
//     }
//   });
// }
