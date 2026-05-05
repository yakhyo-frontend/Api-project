let allData = [];
let visibleCount = 0;
const STEP = 6;

const loadMoreBtn = document.querySelector('#load-more');
const request = new XMLHttpRequest();
const list = document.querySelector('.list');
const loader = document.querySelector('.loader');
request.addEventListener('readystatechange' , () => {
  if (request.readyState === 4 && request.status === 200) {
    allData = JSON.parse(request.responseText);
    loader.style.display = 'none';           
    loadMoreBtn.style.display = 'block';       
    showData();                               
  }
});

function showData() {
  const batch = allData.slice(visibleCount, visibleCount + STEP);

  batch.forEach(element => {
    list.innerHTML += `
    <div class="list-item">
      <h4 class="title">title : ${element.title.slice(0, 20)}...</h4>
      <p>id : ${element.id}</p>
      <p>completed : ${element.completed}</p>
      <button class="btn">Buy</button>
    </div>
    `;
  });

  visibleCount += STEP;

  if (visibleCount >= allData.length) {
    loadMoreBtn.style.display = 'none';
  }
}

loadMoreBtn.addEventListener('click', showData);

request.open('GET' , 'https://jsonplaceholder.typicode.com/todos/');
request.send();