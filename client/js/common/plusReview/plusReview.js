import {
  attr,
  clearContents,
  deleteStorage,
  getNode,
  getNodes,
  insertFirst,
  insertLast,
  loadStorage,
  saveStorage,
  tiger,
} from './../../../lib/index.js';

/* ------------------------------ 이전 페이지로 넘어가기 ------------------------------ */

const beforePageBtn = getNode('.beforePageBtn');

beforePageBtn.addEventListener('click', () => {
  window.location.href = 'http://localhost:5500/views/themePage.html';
});

/* --------------------------- input 입력 시 label 제거 -------------------------- */
// 제목 입력
const madeTitleInput = getNode('#madeTitle');
const titleLabel = getNode('#titleLabel');

madeTitleInput.addEventListener('focusin', () => {
  titleLabel.style.display = 'none';
}); // focus 받았을 때

madeTitleInput.addEventListener('focusout', () => {
  if (!madeTitleInput.value) {
    titleLabel.style.display = 'block';
  }
}); // focus 빠졌을 때

// 리스트 설명
const madeListInput = getNode('#madeList');
const listLabel = getNode('#listLabel');

madeListInput.addEventListener('focusin', () => {
  listLabel.style.display = 'none';
}); // focus 받았을 때

madeListInput.addEventListener('focusout', () => {
  if (!madeListInput.value) {
    listLabel.style.display = 'block';
  }
}); // focus 빠졌을 때