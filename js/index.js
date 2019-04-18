$(document).ready(function () {
  var isSuccess = false;
  if(localStorage.pwd) {
    if (isLogin(localStorage.pwd)) {
      success();
    }
  }
  $(".login").click(function () {
    let pwd = $("#pwd").val();
    if (isLogin(pwd)) {
      localStorage.pwd = pwd;
      $(".message").text("登录成功").show();
      success();
    } else {
      $(".message").text("登录失败").show();
    }
  });
  $(".message").click(function () {
    $(this).hide();
  })
  function success() {
    isSuccess = true;
    $(".status1").hide();
    $(".status2").show();
    chrome.tabs.executeScript(null, {file: "./js/main.js"});
  }
}) 
function isLogin (pwd) {
  return pwd == md5("123456");
}