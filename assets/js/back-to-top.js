document.addEventListener("DOMContentLoaded", function() {
  const backToTop = document.getElementById("back-to-top");

  // 滚动时显示/隐藏按钮
  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) { // 滚动超过 200px 显示
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // 点击回到顶部
  backToTop.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // 平滑滚动
    });
  });
});
