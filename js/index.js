function goTo(id, route=`#${id}`) {
  document.getElementById(id).scrollIntoView({behavior: "smooth"});
  url=document.location.href;
  url=url.split('#')[0]
  window.history.pushState("", "", `${url}${route}`);
  // let icon_elm = document.getElementById('nav-icon');
  let list_elm = document.getElementById('nav-list');
  // if ( icon_elm.style.display == 'flex' && list_elm.style.display == 'flex' ) {
    list_elm.style.display = 'none';
  // }
}

function showNav() {
  let list_elm = document.getElementById('nav-list');
  if ( list_elm.style.display == 'flex' ) {
    list_elm.style.display = 'none';
  } else {
    list_elm.style.display = 'flex';
  }
}

window.addEventListener('resize', (_) => {
  let list_elm = document.getElementById('nav-list');
  let icon_elm = document.getElementById('nav-icon');
  if (window.innerWidth <= 600) {
    list_elm.style.display = 'none';
    icon_elm.style.display = 'flex';
  } else {
    icon_elm.style.display = 'none';
    list_elm.style.display = 'flex';
  }
});

document.addEventListener('click', (event) => {
  let nav_elm = document.getElementsByTagName('nav')[0];
  let list_elm = document.getElementById('nav-list');
  if (!nav_elm.contains(event.target)) {
    list_elm.style.display = 'none'
  }
});
