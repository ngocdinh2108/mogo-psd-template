/**
 * Sự kiện click vào toggle để hiển thị menu khi màn hình dưới 768px
 * DNDINH 07.08.2021
 */
const headerToggle = document.querySelector(".header-toggle");
const menuToggle = document.querySelector(".header-menu");
const isExpand = "is-expand";
const iconClose = document.querySelector(".header-toggle-close-icon");

headerToggle.addEventListener("click", function(){
    menuToggle.classList.add(isExpand);
})

/**
 * Sự kiện click vào cửa sổ window để đóng menu khi màn hình dưới 768px
 * DNDINH 07.08.2021
 */
window.addEventListener("click", function(e){
    if((!e.target.matches(".header-toggle") && !menuToggle.contains(e.target))){
        menuToggle.classList.remove(isExpand);
    }
})

/**
 * Sự kiện click vào icon close để đóng menu khi màn hình dưới 768px
 * DNDINH 15.08.2021
 */
iconClose.addEventListener("click", function(){
    menuToggle.classList.remove(isExpand);
})

/**
 * Sử dụng thư viện slick slider để làm section quote
 * DNDINH 15.08.2021
 */
$(document).ready(function(){
  $('.quote-container').slick({
    // autoplay:true,
    // arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-angle-left quote-icon' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-angle-right quote-icon' aria-hidden='true'></i></button>"
  });
});

