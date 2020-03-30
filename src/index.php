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
    <header class="header">
      <div class="container">
        <nav class="nav">
          <div class="logo-small nav__logo-small">
            <a href="#"><img src="./img/logo-small.png" alt="Logo"></a>
          </div>
          <ul class="menu nav__menu">
            <li class="menu__item">
              <a href="#" class="menu__text">Соц. сети
                <i class="fas fa-comment-dots menu__image"></i>
              </a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__text">Торгов. сети
                <i class="fas fa-shopping-cart menu__image"></i>
              </a> 
            </li>
            <li class="menu__item">
              <a href="#" class="menu__text">Туристич. сети
                <i class="fas fa-globe menu__image"></i>
              </a>              
            </li>
            <li class="menu__item">
              <a href="#" class="menu__text">Ассоциации
                <i class="far fa-eye menu__image"></i>
              </a>              
            </li>
            <li class="menu__item">
              <a href="#" class="menu__text">Сервисы
                <i class="fas fa-wrench menu__image"></i>
              </a>              
            </li>
            <li class="menu__item">
              <a href="#" class="menu__text">
                <img src="./img/svg/android.svg" alt="Android" class="menu__android">
              </a>              
            </li>
          </ul>
          <div class="access nav__access">
            <a href="#" class="menu__text">Вход на сайт
              <i class="fas fa-lock menu__image"></i>
            </a>
          </div>
        </nav>
        <nav class="subnav">
          <div class="logo subnav__logo">
            <div class="logo__image">
              <a href="#"><img src="./img/logo-big.png" alt="Logo"></a>
            </div>
            <div class="logo-text subnav__logo-text">
              <h2 class="logo-text__name">BMC Sales</h2>
              <span class="logo-text__description">партнерская сеть продаж</s>
            </div>
          </div>
          <!-- /.logo subnav__logo -->
          <ul class="submenu subnav__submenu">
            <li class="submenu__item"><a href="#" class="submenu__text">Объявления</a></li>
            <li class="submenu__item"><a href="#" class="submenu__text">Каталоги <i class="fas fa-angle-down submenu__icon"></i></a></li>
            <li class="submenu__item"><a href="#" class="submenu__text">Участники</a></li>
            <li class="submenu__item"><a href="#" class="submenu__text">Партнеры</a></li>
            <li class="submenu__item"><a href="#" class="submenu__text">О платформе</a></li>
            <li class="submenu__item"><a href="#" class="submenu__text">Новости</a></li>
            <li class="submenu__item"><a href="#" class="submenu__text">
              <i class="fas fa-search submenu__image"></i>
            </a></li>
          </ul>
          <!-- /.submenu subnav__submenu -->
          <div class="counter subnav__counter">
            <div class="counter__like">
              <div class="counter__container">
                <i class="far fa-heart counter__icon orange"></i>
              </div>
              <span class="counter__number orange">2</span>
            </div>
            <!-- /.counter__like -->
            <div class="counter__sale">
              <div class="counter__container">
                <i class="fas fa-shopping-bag counter__icon light"></i>
              </div>
              <span class="counter__number light">0</span>
            </div>
            <!-- /.counter__sale -->
          </div>
          <!-- /.counter subnav__counter -->
        </nav>
      </div>
      <!-- /.container -->
    </header>
    <?php include('./php/test.php') ?>
    
    <script src="./js/jquery-3.4.1.min.js"></script>
    <script src="https://kit.fontawesome.com/c523f624c7.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
    <script src="./js/wow.min.js"></script>
    <script src="./js/jquery.validate.min.js"></script>
    <script src="./js/jquery.mask.min.js"></script>
    <script src="./js/main.js"></script>
  </body>
</html>