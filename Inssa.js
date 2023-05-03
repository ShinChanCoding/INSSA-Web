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

const myBar = document.querySelector('.my-Bar');
const progress = document.getElementById('progress');
const buttons = document.querySelectorAll('button');
let progressValue = 0;
let intervalId; // 타이머 ID를 저장할 변수를 생성합니다.

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

progress.addEventListener('click', () => {
    buttons.forEach((button) => {
        button.disabled = true;
        button.style.pointerEvents = "none"; // 버튼의 마우스 이벤트 처리를 무력화합니다.
    });
    setTimeout(() => {
        buttons.forEach((button) => {
            button.disabled = false;
            button.style.pointerEvents = "auto"; // 버튼의 마우스 이벤트 처리를 다시 활성화합니다.
        });
    }, 9000);
    myBar.setAttribute('id', 'play');
    runProgressBar();
});

function runProgressBar() {
    intervalId = setInterval(() => {
        if (progressValue < 100) {
            progressValue++;
            myBar.style.width = `${progressValue}%`;
        } else {
            clearInterval(intervalId);
        }
    }, 30);
}
