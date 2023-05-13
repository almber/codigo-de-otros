const url = 'https://api.github.com';
const usersEndpoint = `${url}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');
// retire el await y puse `` en el lugar de las ""
function displayUser(username) {
  $n.textContent = 'cargando...';
    fetch(`${usersEndpoint}/${username}`);
  console.log();
  $n.textContent = `${$n.data}`; // puse las const en lugar de la clase
  $b.textContent = `${$b.data}`;
  $l.textContent = `${$l.data}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);