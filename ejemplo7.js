var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Iniciar máquina') {
    btn.textContent = 'Parar máquina';
    txt.textContent = 'La máquina está funcionando!';
  } else {
    btn.textContent = 'Iniciar máquina';
    txt.textContent = 'La máquina está en alto.';
  }
}
