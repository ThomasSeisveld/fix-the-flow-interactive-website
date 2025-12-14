const imageEl = document.getElementById('detailImage');
const categoryEl = document.getElementById('detailCategory');
const item = Session.load('detailItem');

if (!item) {
  alert('No image selected');
  window.location.href = '../index.html';
} else {
  imageEl.src = item.image;
  categoryEl.innerText = `Category: ${item.category}`;
}
