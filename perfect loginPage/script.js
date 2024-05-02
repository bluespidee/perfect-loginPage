const wallpaper = document.querySelector('.wallpaper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnLogin = document.querySelector('.btnlogin')
const closeIcon = document.querySelector('.icon-close')



registerLink.addEventListener('click', () => {
  wallpaper.classList.add('active')
})
loginLink.addEventListener('click', () => {
  wallpaper.classList.remove('active')
})

btnLogin.addEventListener('click', () => {
  wallpaper.classList.add('active-popup')
})

closeIcon.addEventListener('click', () => {
  wallpaper.classList.remove('active-popup')
})