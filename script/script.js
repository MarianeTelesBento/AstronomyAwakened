//variaveis -> hamburguinho
const obj_menu_botao = document.querySelector('.nav-menu-bar')
const obj_menu_lista = document.querySelector('.nav-menu-lista')

//variaveis -> slides
const slideInterval = setInterval(function() {
  addSlides(1)
}, 5000)
let index = 1
const slides = document.getElementsByClassName('slides')
const dots = document.getElementsByClassName('dot')
const obj_prev_button = document.querySelector('.prev')
const obj_avanca_button = document.querySelector('.btn-slide')
const array_click_dot = document.querySelectorAll('.dot')


//chama funções -> hamburguinho
obj_menu_botao.addEventListener('click', funMenufechar)

//chama funções -> slides
showSlides(index)
obj_prev_button.addEventListener('click', function(){
    addSlides(-1)
    clearInterval(slideInterval)
})
obj_avanca_button.addEventListener('click', function(){
    addSlides(1)
    clearInterval(slideInterval)
})

// Adiciona evento --> clique dots
for (let i = 0; i < array_click_dot.length; i++) {
  array_click_dot[i].addEventListener('click', function(){
    currentSlide(i + 1)
    clearInterval(slideInterval)
  })
}


//define funções -> hamburguinho
function funMenufechar(){
    obj_menu_botao.classList.toggle('ativo')
    obj_menu_lista.classList.toggle('ativo')
}

//chama funções -> slides
function addSlides(n) {
    showSlides(index += n)
}

function currentSlide(n) {
    showSlides(index = n)
}

function showSlides(n) {
  if (n > slides.length) {
    index = 1
  }

  if (n < 1) {
    index = slides.length
  }

  for (let i=0; i<slides.length; i++) {
    slides[i].style.display = 'none'
    dots[i].className = dots[i].className.replace(" active", "")
  }

  slides[index-1].style.display = "flex"
  dots[index-1].className += " active"
}


