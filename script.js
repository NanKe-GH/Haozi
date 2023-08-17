// 获取所有菜单按钮和内容部分
const menuButtons = document.querySelectorAll('.menu-button');
const contentSections = document.querySelectorAll('.content');

// 初始化：显示默认内容（content1）并隐藏其他内容
document.getElementById('content1').style.display = 'block';
contentSections.forEach(section => {
    if (section.id !== 'content1') {
        section.style.display = 'none';
    }
});

// 为菜单按钮添加点击事件处理程序
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetContent = button.getAttribute('data-content');
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(targetContent).style.display = 'block';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll("img[data-src]");
  
    function lazyLoad() {
      lazyImages.forEach(function(img) {
        if (img.getBoundingClientRect().top <= window.innerHeight && img.getBoundingClientRect().bottom >= 0 && getComputedStyle(img).display !== "none") {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
      });
  
      lazyImages = Array.prototype.filter.call(lazyImages, function(img) {
        return img.getAttribute("data-src");
      });
    }
  
    lazyLoad();
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.removeAttribute("data-src");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      window.addEventListener("scroll", lazyLoad);
    }
  });
  