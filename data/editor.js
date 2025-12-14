const image = document.getElementById("image");
const aspectRatioBtns = document.querySelectorAll(".aspect-ratio-btns");

const rotateRightButton = document.getElementById("rotate-right");
const rotateLeftButton = document.getElementById("rotate-left");
const scaleXButton = document.getElementById("scale-X-button");
const scaleYButton = document.getElementById("scale-Y-button");
const usePhotoBtn = document.getElementById("use-photo");

let cropper;
let scaleX = 1;
let scaleY = 1;

const rawImage = sessionStorage.getItem("rawImage");

if (!rawImage) {
  alert("No image found");
  window.location.href = "../index.html";
}

image.src = rawImage;

image.onload = () => {
  cropper = new Cropper(image, {
    viewMode: 1,
    autoCropArea: 1
  });
};

aspectRatioBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "Free") {
      cropper.setAspectRatio(NaN);
    } else {
      const ratio = btn.innerText.split(":");
      cropper.setAspectRatio(ratio[0] / ratio[1]);
    }
  });
});

rotateRightButton.onclick = () => cropper.rotate(90);
rotateLeftButton.onclick = () => cropper.rotate(-90);

scaleXButton.onclick = () => {
  scaleX = scaleX === 1 ? -1 : 1;
  cropper.scaleX(scaleX);
};

scaleYButton.onclick = () => {
  scaleY = scaleY === 1 ? -1 : 1;
  cropper.scaleY(scaleY);
};

usePhotoBtn.onclick = () => {
  const canvas = cropper.getCroppedCanvas({
    imageSmoothingQuality: "high"
  });

  const editedImage = canvas.toDataURL("image/jpeg", 0.9);

  sessionStorage.setItem("editedImage", editedImage);
  window.location.href = "../index.html";
};
