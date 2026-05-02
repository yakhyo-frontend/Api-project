const request = new XMLHttpRequest();
const elList = document.querySelector('.list');
const elLoading = document.querySelector('.loader');

request.addEventListener('readystatechange', () => {
  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText);
    showData(data);
    elLoading.innerHTML = '';
  };
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();

function showData(data) {
  data.forEach((element) => {
    elList.innerHTML += `
      <div class="list-item">
      <h4 class="title">title : ${element.title.slice(0, 20)}...</h4>
      <p>id : ${element.id}</p>
      <p>completed : ${element.completed}</p>
      <button class="btn">Buy</button>
      </div>
    `
  })
};
