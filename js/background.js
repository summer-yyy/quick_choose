$(document).ready(function () {
  console.log(localStorage.pwd)
  var pop = chrome.extension.getViews({type:'popup'});
  console.log(pop)
  // if (localStorage.pwd) {
  //   console.log(pop.isLogin(localStorage.pwd));
  // }
})