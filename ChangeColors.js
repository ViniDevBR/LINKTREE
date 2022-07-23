const bodyBackGround = document.querySelector('body')
const colors = document.querySelector('input[type=color]')
const menuOpen = document.querySelector('nav')
const themesOpen = document.querySelector('.button-themes')
const hamburguerOpen = document.querySelector('.hamburguer')
const darkTheme = document.querySelector('#dark')
const blueDarkTheme = document.querySelector('#blueDark')
const pinkDarkTheme = document.querySelector('#pinkDark')
const lightTheme = document.querySelector('#light')

hamburguerOpen.addEventListener('click', () =>{
  hamburguerOpen.classList.toggle('active')
  menuOpen.classList.toggle('on')
})

darkTheme.addEventListener('click', () =>{
  bodyBackGround.classList.add('dark')
  bodyBackGround.classList.remove('blueDark', 'pinkDark')
})

blueDarkTheme.addEventListener('click', () =>{
  bodyBackGround.classList.add('blueDark')
  bodyBackGround.classList.remove('dark', 'pinkDark')
})

pinkDarkTheme.addEventListener('click', () =>{
  bodyBackGround.classList.add('pinkDark')
  bodyBackGround.classList.remove('blueDark', 'dark')
})

lightTheme.addEventListener('click', () =>{
  bodyBackGround.classList.remove('dark', 'blueDark', 'pinkDark')
})

themesOpen.addEventListener('click', () =>{
  menuOpen.classList.toggle('on')
})
console.log('Links Vinicius - version 1.0 | Me contrata')








