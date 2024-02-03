let divResult = document.querySelector(".div-result");
let btnCriptografar = document.getElementById('btn-criptografar');
let btnDescriptografar = document.getElementById('btn-descriptografar');
let btnCopy = document.getElementById('btn-copy');
let image = document.getElementById('image-search');

let valorInput;
let regex = /^[a-z ]+$/;

btnCriptografar.addEventListener("click", function() {
  
  valorInput = document.getElementById('meuInput').value;
  
  if (regex.test(valorInput) && valorInput != '') {
    criptografar();
  } else {
    showToastError();
  }
});

btnDescriptografar.addEventListener("click", function() {
  valorInput = document.getElementById('meuInput').value;
  
  if (regex.test(valorInput) && valorInput != '') {
    descriptografar();
  } else {
    showToastError();
  }
});

function criptografar(){
  valorInput = document.getElementById('meuInput').value;
  let valorCriptografado = valorInput.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
  
  divResult.innerHTML = `<p id="text-result">${valorCriptografado}</p>`;
  btnCopy.style.display = "block";
  image.style.display = "none";
}

function descriptografar(){
  valorInput = document.getElementById('meuInput').value;
  let valorDescriptografado = valorInput.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
  
  divResult.innerHTML = `<p id="text-result">${valorDescriptografado}</p>`;
  btnCopy.style.display = "block";
  image.style.display = "none";
  
}

function copiarTexto() {
  navigator.clipboard.writeText(document.getElementById('text-result').textContent);
}

function showToastError() {
  let toast = document.getElementById("toast-error");
  
  toast.className = "show";
  setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
  
}