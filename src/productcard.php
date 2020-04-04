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
    <title>Product Card</title>
  </head>
  <body>
    
    <?php include('./php/header.php') ?>    
    <section class="section subheader">
      <div class="container">
        <div class="subheader__wrapper">
          <nav class="subheader-menu__container">
            <ul class="subheader-menu__list">
              <li class="subheader-menu__item primary"><a href="./index.php">Главная</a></li>
              <li class="subheader-menu__item primary"><a href="./catalog.php">Каталог</a></li>
              <li class="subheader-menu__item primary"><a href="./catalog.php">Сумки, кошельки</a></li>
              <li class="subheader-menu__item primary"><a href="./catalog.php">Рюкзаки</a></li>
              <li class="subheader-menu__item secondary">Рюкзак PUMA</li>
            </ul>
          </nav>
          <!-- /.subheader-menu__container -->          
        </div>
        <!-- /.subheader__wrapper -->        
      </div>
      <!-- /.container -->
    </section>
    <!-- /.section subheader -->
    <?php include('./php/product.php') ?>
    <?php include('./php/likemore.php') ?>
    <?php include('./php/services.php') ?>
    <?php include('./php/modal.php') ?>
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