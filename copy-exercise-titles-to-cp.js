var arr = Array.prototype.slice.call(document.getElementsByClassName("title"))
arr.splice(0,4);
var list = "";
arr.forEach(function(title, index, array) {
if (index !== array.length - 1) {
list += title.textContent.replace(/\s+/g, '-').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase() + "\n";
} else {
list += title.textContent.replace(/\s+/g, '-').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase();
}
});
var el = document.createElement('textarea');
el.value = list;
el.setAttribute('readonly', '');
el.style = {position: 'absolute', left: '-9999px'};
document.body.appendChild(el);
el.select();
document.execCommand('copy');
document.body.removeChild(el);
