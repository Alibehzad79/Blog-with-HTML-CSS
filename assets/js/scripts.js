function changeTheme() {
  const sun = document.querySelector("#sun");
  const moon = document.querySelector("#moon");
  const navbar = document.querySelector(".navbar");
  const navbarMenu = document.querySelector("#navbar-menu");
  const menu = document.querySelector("#menu");
  
  const element = document.body
  sun.classList.toggle('activated');
  moon.classList.toggle('activated');
  element.classList.toggle('dark-mode');
  if (element.classList.contains('dark-mode')) {
    navbar.style.backgroundColor = 'rgb(32, 29, 29)';
    navbarMenu.style.backgroundColor = 'rgb(32, 29, 29)';
    menu.style.backgroundColor = 'rgb(32, 29, 29)';
  } else {
    navbar.style.backgroundColor = '#fff';
    navbarMenu.style.backgroundColor = '#fff';
    menu.style.backgroundColor = '#fff';
  }
}

changeTheme();

function toggleMenu() {
  const menu_icon = document.querySelector('#menu-icon');
  const nav = document.querySelector('#navbar-menu');
  nav.classList.toggle('activated');
  menu_icon.classList.toggle('bi-x-lg');
}

function showSearch() {
  const seachIcon = document.querySelector('#searchIcon');
  const form = document.querySelector('#searchForm')
  const close = document.querySelector('#searchCloseIcon')
  seachIcon.classList.toggle('activated')
  form.classList.toggle('activated')
  close.classList.toggle('activated')
}


function activeSearch() {
  const searchInput = document.querySelector('#searchFormInput')
  const getSearchButton = document.querySelector('#getSearchButton')
  searchInput.addEventListener('keyup', event => {
    if (event.target.value != null && event.target.value != '') {
      getSearchButton.style.backgroundColor = 'green';
      getSearchButton.removeAttribute('disabled')
      console.log(event.target.value)
    } else {
      getSearchButton.style.backgroundColor = 'gray';
      getSearchButton.setAttribute('disabled');
    }
  })

}

activeSearch();

function nextSlider() {
  const sliderItems = document.querySelectorAll('.slider-item');
  const sliderNext = document.querySelector('.btn-next');
  const sliderPrev = document.querySelector('.btn-prev');
  
  var counter = 0;
  sliderNext.addEventListener('click', () => {
    var item = sliderItems[counter]
    if (item.classList.contains('active')) {
      item.classList.remove('active')
      counter += 1;
      if (counter >= sliderItems.length) {
        counter = 0;
      }
      item = sliderItems[counter]
      item.classList.add('active')

    }
  }
  )
  sliderPrev.addEventListener('click', () => {
    var item = sliderItems[counter]
    if (item.classList.contains('active')) {
      item.classList.remove('active')
      counter -= 1;
      if (counter < 0) {
        counter = sliderItems.length - 1;
        item = sliderItems[counter]
        item.classList.add('active')
      } else {
        item = sliderItems[counter]
        item.classList.add('active')
      }
    }
  }
  )
}


nextSlider()