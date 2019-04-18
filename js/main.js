jQuery(document).ready(function($){
  console.log(213)
  setTimeout(console.log(findInput(findDom(getHTML(), '客户端：'))), 2000);
  // console.log(doms, findDom(doms, "客户端："));
function getHTML(d = document.getElementsByTagName('body')[0]){
  // console.log(d.innerHTML)
  return d.innerHTML;
};
function findDom(html, text) {
  let reg = new RegExp(`<[a-zA-Z]+("[^"]*"|'[^']*'|[^'">])*>${text}<\/[a-zA-Z]+("[^"]*"|'[^']*'|[^'">])*>`);
  let dom = html.match(reg)[0];
  return $(dom);
}
function findInput(dom) {
  console.log($(dom),$(dom).parent())
  return $(dom).parent().find("input");  
}
});