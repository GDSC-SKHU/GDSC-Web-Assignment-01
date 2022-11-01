let major = document.querySelector('.Magor');
major.addEventListener('click', () => {
  let major_target = document.querySelector('.detail_major');
  major_target.classList.toggle('change_to_flex');
});

let feeling = document.querySelector('.feeling');
feeling.addEventListener('click', () => {
  let feeling_target = document.querySelector('.detail_feeling');
  feeling_target.classList.toggle('change_to_flex');
});

let like = document.querySelector('.Like');
like.addEventListener('click', () => {
  let like_target = document.querySelector('.detail_like');
  like_target.classList.toggle('change_to_flex');
});

let notion = document.querySelector('.notion');
notion.addEventListener('click', () => {
  let notion_target = document.querySelector('.detail_notion');
  notion_target.classList.toggle('change_to_flex');
});

let github = document.querySelector('.github');
github.addEventListener('click', () => {
  let github_target = document.querySelector('.detail_github');
  github_target.classList.toggle('change_to_flex');
});

let insta = document.querySelector('.instagram');
insta.addEventListener('click', () => {
  let insta_target = document.querySelector('.detail_insta');
  insta_target.classList.toggle('change_to_flex');
});
