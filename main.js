const request = new XMLHttpRequest();
const elList = document.querySelector('.list');

request.addEventListener('readystatechange', () => {
  if (request.readyState === 4) {
    const data = JSON.parse(request.responseText);
    data.forEach(({ title, id, completed }) => {
      elList.innerHTML += `
      <div class="list-item">
      <h1 class="title">title : ${title.slice(0, 20)}...</h1>
      <p>id : ${id}</p>
      <p>completed : ${completed}</p>
      </div>
      `
    });
  }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();