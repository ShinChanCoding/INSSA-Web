# INSSA-Web

<div align=center>
    <img width="750" src="/banner.png">
    <h2> 어.. 엄마 나 완전 인싸지..!!😢 </h2>


<div align=left>

## 💁🏻 서비스 소개
<br>
<br>    
<strong>INSSA-WEB<strong> 은 배경이 마음에 들지 않은 사진을 업로드 하여 배경을 없애주고 배경 주제를 선택해 합성 해주는 웹 페이지 입니다. 
외로운 당신들을 위해, 인싸가 된 기분을 느낄 수 있도록 단체사진을 만들어 드립니다!
<br>
<br><br>
<h3>구현 화면</h3>
<br>
<img src="https://user-images.githubusercontent.com/108649449/236104863-e28ec4e0-e5bf-48a7-acce-d431da077bb7.gif" width=100% height=100%>

<br>
<br>    

<div align=left>

## 🙌 팀 소개
<br>
<br>    
[이은엽](https://github.com/ShinChanCoding)
<br>
[임예지](https://github.com/yj5768)        
<br>
[정경연](https://github.com/Cloudyee)           
<br>
[정주영](https://github.com/ooutta)        
<br>
<br>

## :computer: used stack
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
<br>
<br>

## ℹ️ 프로세스 정리
<br>
<br> 
:one: 홈페이지 grid 나누고 위치 설정-> 프로그램의 전체적인 틀과 디자인 기획
 <br>
:two: Navigation를 응용해 주제에 맞는 배경 사진 랜덤 선정 기능 구현
    
:three: 사용자가 자신의 PC 이미지를 업로드 할 수 있는 기능 구현

:four: API를 통해 업로드한 사진의 누끼를 자동으로 따주는 기능 구현

:five: 배경이미지와 누끼가 따진 이미지를 합치는 기능 제작

:six: viewport를 통하여 반응형 웹사이트 구현

:seven: 누끼 따는 동안 버튼 비활성화 및 progress bar 진행

:eight: 결과 이미지 확인

<br>
<br>


## 🤔 역할 & 개발 Issue  
<h3>[이은엽]</h3>
<br>
:heavy_check_mark: <strong>역할</strong><br>
- API 값을 가져와서 불러온 이미지의 배경을 제거하고 background-box의 이미지와 합쳐 새로운 이미지를 생성하도록 구현
- 버튼을 클릭하였을 때 결과 이미지가 도출되도록 구현<br>
:heavy_check_mark: <strong>개발 Issue</strong><br>
- 불러오는 이미지와 back-ground이미지, 결과 이미지가 각각 픽셀이 달라 홈페이지의 크기가 조절이 안되어 사진의 크기를 조정하느라 어려움이 있었고 position값을 통한 relative와 absolute를 사용하여 조절하였습니다.
<br>
<br>


<h3>[임예지]</h3>
<br>
:heavy_check_mark: <strong>역할</strong><br>
- category(human/animal/avatar) 버튼 클릭시, 사진이 랜덤으로 background-box에 나타나도록 구현
- 전반적인 CSS 스타일 편집<br><br>
:heavy_check_mark: <strong>개발 Issue</strong><br>
"Error : addEventListener is null" 오류가 계속해서 발생했습니다. 
코드 통합 이후 CSS 스타일 중첩의 문제였고, position을 통한 부모, 자식 변수 수정을 통해 해결할 수 있었습니다.<br>
<br>
<br>

<h3>[정경연]</h3>
<br>
:heavy_check_mark: <strong>역할</strong><br>
- progress bar 제작, 버튼 클릭시 전체 버튼 일정시간 비활성화
- 전반적인 css 스타일 편집<br>
<br>
:heavy_check_mark: <strong>개발 Issue</strong><br>
js를 통한 버튼 연결과 동작 구현, 버튼 위치 설정에 문제를 겪었습니다.
position값을 활용과 함께 eventListener와 함수 수정을 통해 해결할 수 있었습니다.<br>
<br>
<br>

<h3>[정주영]</h3>
<br>
:heavy_check_mark: <strong>역할</strong><br>
이미지 업로드 버튼생성 및  뷰포트를 사용한 반응형 <br>
<br>
:heavy_check_mark: <strong>개발 Issue</strong><br>
완벽한 환경을 구축하는데 어려움을 느꼇습니다 CSS 또한 중요하다 생각했습니다.
<br>
<br>




## :hammer: 협업 tool 소개
<br><br>
<h3>figma </h3>
:동시간에 협업할 수 있어 좋았습니다.
프로젝트 후에 알아보고 협업에 활용할 방안에 대해 더 고민해보고자 합니다.
<br><br>   
<h3>notion</h3>
:아이디어와 이미지 파일을 쉽게 공유하고 정리하였습니다.
<br><br>   
<h3>gitHub</h3>
:코드를 공유하고 실시간으로 협업할 수 있었습니다.
<br><br>
<h3>WinMerge</h3>
:기존 코드에서 수정된 부분을 가시적으로 확인할 수 있었습니다.
<br>
<br>


    
## ❗ 느낀 점
https://github.com/ShinChanCoding/INSSA-Web/wiki
