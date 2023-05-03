//  const setThumbnail=(event)=> {
//         const reader = new FileReader();

//         reader.onload = (event)=> {
//           const img = document.createElement("img");
//           img.setAttribute("src", event.target.result);
//           document.querySelector("div.image_container").appendChild(img);
//         };

//         reader.readAsDataURL(event.target.files[0]);
//       }
const setThumbnail = (event) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    const img = document.createElement("img");
    img.setAttribute("src", event.target.result);

    // 이미지가 로드되면
    img.onload = () => {
      // 이미지의 가로, 세로 비율 계산
      const imgWidth = img.width;
      const imgHeight = img.height;
      const aspectRatio = imgWidth / imgHeight;

      // .image_container 요소의 가로, 세로 비율 계산
      const containerWidth = document.querySelector(".image_container").clientWidth;
      const containerHeight = document.querySelector(".image_container").clientHeight;
      const containerAspectRatio = containerWidth / containerHeight;

      // 이미지를 .image_container 요소의 크기에 맞게 조절
      if (aspectRatio > containerAspectRatio) {
        img.style.width = "100%";
        img.style.height = "auto";
      } else {
        img.style.width = "auto";
        img.style.height = "100%";
      }

      // .image_container에 이미지 추가
      document.querySelector(".image_container").innerHTML = "";
      document.querySelector(".image_container").appendChild(img);
    };
  };

  reader.readAsDataURL(event.target.files[0]);
};