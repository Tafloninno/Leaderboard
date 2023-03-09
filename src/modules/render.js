import getData from './getData.js';

const listUl = document.querySelector('.scores_wrapper');
const render = async () => {
  listUl.innerHTML = '';
  const store = await getData();
  const lists = store.result.map((list) => `
        <li>
          <p>${list.user}: <span>${list.score}</span></p>
        </li>`).join('');
  listUl.insertAdjacentHTML('beforeend', lists);
};
export default render;