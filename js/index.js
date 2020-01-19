function goTo(id, route=`#${id}`) {
  document.getElementById(id).scrollIntoView({behavior: "smooth"});
  url=document.location.href;
  url=url.split('#')[0]
  window.history.pushState("", "", `${url}${route}`);
}
