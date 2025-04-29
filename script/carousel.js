$(document).ready(function() {
  $('.carousel').slick({
    dots: true,                  // Altta küçük yuvarlaklar
    infinite: true,               // Sonsuz döngü
    speed: 500,                   // Geçiş süresi (ms)
    slidesToShow: 1,              // Aynı anda kaç resim gösterilecek
    slidesToScroll: 1,            // Geçişte kaç resim kayacak
    arrows: true,                 // Sağ-sol oklar olsun
    autoplay: true,               // Kendiliğinden geçsin
    autoplaySpeed: 2000,          // 3 saniyede bir geçsin
    pauseOnHover: true,           // Üzerine gelince duraklasın
    adaptiveHeight: true          // Resme göre yükseklik ayarlasın
  });
});
