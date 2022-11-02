const favorite = document.querySelector(".heartLi");
const heart = document.querySelector(".heart");

favorite.addEventListener("mouseover", (event) => {
  heart.style.visibility = "visible";
});

favorite.addEventListener("mouseout", (event) => {
  heart.style.visibility = "hidden";
});

/* Question 

favorite.addEventListener("mouseover", (event) => {
  heart.style.display = "block";
});

favorite.addEventListener("mouseout", (event) => {
  heart.style.display = "none";
});

css 부분에도 .heart 클래스를 display를 none으로 바꾼 후
보면 왜 그렇게 깜빡이는 걸까요? 

원래 차지하던 부분이 막혀서 못가게 되서 그런건가?

display: none은 렌더 트리에서 없어짐
visibility: hidden은 렌더 트리에 남아있고, 사용자 눈에만 안보이게 됨
*/
