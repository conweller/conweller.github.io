function goTo(id, route=`#${id}`) {
  document.getElementById(id).scrollIntoView({behavior: "smooth"});
  url=document.location.href;
  url=url.split('#')[0]
  window.history.pushState("", "", `${url}${route}`);
}

function showNav() {
  let list_elm = document.getElementById('nav-list');
  if ( list_elm.style.display == 'flex' ) {
    list_elm.style.display = 'none'
  } else {
    list_elm.style.display = 'flex'
  }
}

window.addEventListener('resize', function(_){
  let list_elm = document.getElementById('nav-list');
  let icon_elm = document.getElementById('nav-icon');
  if (window.innerWidth <= 600) {
    list_elm.style.display = 'none'
    icon_elm.style.display = 'flex'
  } else {
    icon_elm.style.display = 'none'
    list_elm.style.display = 'flex'
  }
});
