<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">
    <link rel="stylesheet" href="./css/animate.css">
    <link rel="stylesheet" href="./css/all.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <title>Diploma</title>
  </head>
  <body>
    
    <?php include('./php/header.php') ?>
    <?php include('./php/hero-slider.php') ?>

    <section class="section approved">
      <div class="container">
        <h2 class="approved__title"><span class="approved__title-word">УТВЕРЖДЕННАЯ ФОРМА</span> ДЛЯ ШКОЛ Г.НУРСУЛТАН<i class="fas fa-angle-right approved__title-icon"></i></h2>
        <div class="approved__container product-section">
          <div class="col-30 product-section__card">
            <div class="product-section__image">
              <img src="./img/approved/boy.png" alt="Boy">
            </div>
            <!-- /.product-section__image -->
            <div class="product-section__data">
              <span class="product-section__category">Популярные товары</span>
              <p class="product-section__title">для мальчиков</p>
              <a href="./catalog.php" class="btn product-section__btn">Подробнее<i class="fas fa-angle-right btn__icon"></i></a>
            </div>
            <!-- /.product-section__data -->
          </div>
          <div class="col-30 product-section__card">
            <div class="product-section__image">
              <img src="./img/approved/girl.png" alt="Boy">
            </div>
            <!-- /.product-section__image -->
            <div class="product-section__data">
              <span class="product-section__category">Популярные товары</span>
              <p class="product-section__title">для девочек</p>
              <a href="./catalog.php" class="btn product-section__btn">Подробнее<i class="fas fa-angle-right btn__icon"></i></a>
            </div>
            <!-- /.product-section__data -->
          </div>
          <div class="col-30 product-section__card">
            <div class="product-section__image">
              <img src="./img/approved/backpack.png" alt="Boy">
            </div>
            <!-- /.product-section__image -->
            <div class="product-section__data">
              <span class="product-section__category">Самые популярные</span>
              <p class="product-section__title">аксессуары</p>
              <a href="./catalog.php" class="btn product-section__btn">Подробнее<i class="fas fa-angle-right btn__icon"></i></a>
            </div>
            <!-- /.product-section__data -->
          </div>
        </div>
        <!-- /.approved__container product-section -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.section approved -->
    
    <?php include('./php/footer.php') ?>

        
    <script src="./js/jquery-3.4.1.min.js"></script>
    <script src="https://kit.fontawesome.com/c523f624c7.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
    <script src="./js/wow.min.js"></script>
    <script src="./js/jquery.validate.min.js"></script>
    <script src="./js/jquery.mask.min.js"></script>
    <script src="./js/main.js"></script>
  </body>
</html>