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
    <title>Catalog</title>
  </head>
  <body>
    
    <?php include('./php/header.php') ?>

    <section class="section subheader">
      <div class="container">
        <div class="subheader__wrapper">
          <nav class="subheader-menu__container">
            <ul class="subheader-menu__list">
              <li class="subheader-menu__item primary"><a href="./index.php">Главная</a></li>
              <li class="subheader-menu__item secondary">Каталог</li>
            </ul>
          </nav>
          <!-- /.subheader-menu__container -->
          <div class="filter subheader__filter">
            <div class="input-group filter-number filter__input-group">
              <div class="filter__label secondary">Сортировать по:</div>
              <div class="filter-number__icon"><i class="fas fa-angle-down"></i></div>
              <select name="numberName" class="filter-number__select">
                <option value="new" class="filter-number__option">Сначала новые</option>
                <option value="old" class="filter-number__option">Сначала старые</option>
                <option value="cheap" class="filter-number__option">По убыванию цены</option>
                <option value="expensive" class="filter-number__option">По возрастанию цены</option>
                <option value="popular" class="filter-number__option">По популярности</option>
              </select>              
            </div>
            <div class="input-group filter-sort filter__input-group">
              <div class="filter__label secondary">Товаров на стр.:</div>
              <div class="filter-sort__icon"><i class="fas fa-angle-down"></i></div>
              <select name="sortName" class="filter-sort__select">
                <option value="24">24 на странице</option>
                <option value="15">15 на странице</option>
                <option value="10">10 на странице</option>
              </select>
            </div>
          </div>
        </div>
        <!-- /.subheader__wrapper -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.section subheader -->

    

    <?php include('./php/category.php') ?>
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