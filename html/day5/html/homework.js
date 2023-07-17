const overlay = document.querySelector('.aside-overlay')
const hamburger = document.querySelector('#hamburger')

let isSidebarOpen = false

function sidebarToggle() {
  if (isSidebarOpen) {
    overlay.classList.remove('open')
    isSidebarOpen = false
  } else {
    overlay.classList.add('open')
    isSidebarOpen = true
  }
}

hamburger.onclick = sidebarToggle
overlay.onclick = sidebarToggle