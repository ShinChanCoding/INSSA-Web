let addCard = document.getElementById("addImage");
let displayCard = document.getElementById("displayImage");
let loadingCard = document.getElementById("loadingImage");
let resultCard = document.getElementById("resultImage");
let fileInput = document.getElementById("fileInput");
let imageBefore = document.getElementById("display-img");
let startBtn = document.getElementById("startBtn");
let imageAfter = document.querySelector(".image-after");
let imageBeforeSM = document.querySelector(".image-before");
let saveBtn = document.getElementById("saveBtn");

const reader = new FileReader();
const formData = new FormData();
let file = null;
const API_URL = 'https://api.remove.bg/v1.0/removebg';
const API_KEY = "rq7LQ1CUGBYF4U5qR6ztTxpq";

const activeScreen = (screen) => {
    addImage.style.display = "none";
    displayImage.style.display = "none";
    loadingImage.style.display = "none";
    resultImage.style.display = "none";
    screen.style.display = "flex";
};

activeScreen(addImage);

fileInput.addEventListener("input", () => {
    file = fileInput.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        imageBefore.src = reader.result;
        imageBeforeSM.src = reader.result;
    };
    activeScreen(displayImage);
})

startBtn.addEventListener("click", () => {
    formData.append("image_file", file);
    activeScreen(loadingImage);
    fetch(API_URL, {
        method: "POST",
        headers: {
            "X-API-Key": API_KEY,
        },
        body: formData,
    })
        .then((res) => res.blob())
        .then((blob) => {
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                imageAfter.src = reader.result;
            };
            activeScreen(resultImage);
        })
});

saveBtn.addEventListener("click", () => {
    readAsDataURL(blob);
});
