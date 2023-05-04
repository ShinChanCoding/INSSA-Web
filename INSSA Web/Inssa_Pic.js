/**
 * 버튼을 클릭할 때마다, 이미지를 랜덤으로 출력하는 기능 구현
 *  이미지는 'background-box'에 출력(상자 사이즈에 맞춰서 출력')
 * 
 * 
 * 랜덤 출력 프로세스 흐름 정리
 * 1. 버튼 click event 발생
 * 2. 랜덤으로 목록의 이미지 중 하나를 선택
 * 3. 'background-box'에 출력(상자 사이즈에 맞춰서)
 */


// 사람이미지 랜덤출력 //
///////////////////////

// 먼저 image 들을 담아줄 array 를 생성
const humanImagesArray = ["human_jp1.jpg", "human_jp2.jpg", "human_jp3.jpg", "human_jp4.jpg", "human_jp5.jpg", "human_jp6.jpg", "human_jp7.avif"];
const animalImagesArray = ["animal_jp1.jpg", "animal_jp2.jpg", "animal_jp3.jpg", "animal_jp4.jpg"];
const avatarImagesArray = ["avatar_jp1.jpg", "avatar_jp2.jpg", "avatar_jp3.jpg", "avatar_jp4.jpg"];
const humanRandomButton = document.getElementById("button");
const animalRandomButton = document.getElementById("button1");
const avatarRandomButton = document.getElementById("button2");
const randomImg = document.getElementById("image_bg");
const bgFinalImg = document.getElementById("manipulImg");
// 랜덤으로 이미지를 선택하는 함수

// 이미지의.src 는 " 를 제외한 경로로 작성하게 되므로, 
// 생략한 뒤 리터럴 템플릿으로 파일 이름에 난수 생성 변수를 작성

function changeHumanImageHandler() {
    const randomHuman = humanImagesArray[Math.floor(Math.random() * humanImagesArray.length)];
    randomImg.src = `../img/${randomHuman}`;
    bgFinalImg.src = `../img/${randomHuman}`;
}

// // 버튼 클릭 이벤트 핸들러를 등록 // addEventListener 메서드를 사용하여 버튼 요소를 선택
humanRandomButton.addEventListener("click", changeHumanImageHandler);





// 동물이미지 랜덤출력 //
///////////////////////


// 랜덤으로 이미지를 선택하는 함수

// 이미지의.src 는 " 를 제외한 경로로 작성하게 되므로, 
// 생략한 뒤 리터럴 템플릿으로 파일 이름에 난수 생성 변수를 작성
function changeAnimalImageHandler() {
    const randomAnimal = animalImagesArray[Math.floor(Math.random() * animalImagesArray.length)];
    randomImg.src = `../img/${randomAnimal}`;
    bgFinalImg.src = `../img/${randomAnimal}`;
}

// // 버튼 클릭 이벤트 핸들러를 등록 // addEventListener 메서드를 사용하여 버튼 요소를 선택
animalRandomButton.addEventListener("click", changeAnimalImageHandler);







// 아바타이미지 랜덤출력 //
///////////////////////



// 랜덤으로 이미지를 선택하는 함수

// 이미지의.src 는 " 를 제외한 경로로 작성하게 되므로, 
// 생략한 뒤 리터럴 템플릿으로 파일 이름에 난수 생성 변수를 작성
function changeAvatarImageHandler() {
    const randomAvatar = avatarImagesArray[Math.floor(Math.random() * avatarImagesArray.length)];
    randomImg.src = `../img/${randomAvatar}`;
    bgFinalImg.src = `../img/${randomAvatar}`;
}


// // 버튼 클릭 이벤트 핸들러를 등록 // addEventListener 메서드를 사용하여 버튼 요소를 선택
avatarRandomButton.addEventListener("click", changeAvatarImageHandler);







/**삭제 event */
// photoFrame.addEventListener("click",function(){
//     document.getElementByClass("button4").removeChild(photoFrame);
//   })
