window.onload = function () {
  toc = document.getElementById('markdown-toc');
  console.log(toc);
  panel = document.getElementById('insert-toc');
  panel.appendChild(toc);
}


document.onscroll = funtion () {
  sticky= document.getElementById("custom-toc");
  coords = sticky.getBoundingClientRect();
  if (coords.top < 40) {
    sticky.className= sticky.classname + "affix" 
  }else {
    sticky.classname = sticky.classname.split("affix").join();
  };
} 
