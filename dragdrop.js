const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImages);
dropArea.addEventListener("dragover", preventDefaults);
dropArea.addEventListener("drop", handleDrop);

function uploadImages() {
    const files = inputFile.files;
    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const imgLink = URL.createObjectURL(files[i]);
            createImageView(imgLink);
        }
    }
}

function createImageView(imgLink) {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    imgContainer.style.left = `${Math.random() * 300}px`; // Random position inside the area
    imgContainer.style.top = `${Math.random() * 200}px`; // Random position inside the area
    const imgElement = document.createElement("img");
    imgElement.src = imgLink;
    imgContainer.appendChild(imgElement);
    imageView.appendChild(imgContainer);
}

function preventDefaults(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const imgLink = URL.createObjectURL(files[i]);
            createImageView(imgLink);
        }
    }
}
